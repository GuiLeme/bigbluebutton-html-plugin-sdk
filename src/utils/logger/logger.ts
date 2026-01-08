import {
  createLogger, INFO, stdSerializers, Logger, StreamOptions,
} from 'browser-bunyan';
import { ConsoleFormattedStream } from '@browser-bunyan/console-formatted-stream';
import { BbbPluginSdk } from '../../core';

const uuid = document.currentScript?.getAttribute('uuid') || 'root';

export const fallbackLogger: Logger = createLogger({
  name: 'PluginLogger',
  streams: [
    {
      level: INFO,
      stream: new ConsoleFormattedStream(),
    },
  ],
  serializers: stdSerializers,
  src: true,
});

function isValidLogger(obj: unknown): obj is Logger {
  return (
    typeof obj === 'object'
    && obj !== null
    && typeof (obj as Logger).info === 'function'
    && typeof (obj as Logger).error === 'function'
  );
}

function getLogger(): Logger {
  try {
    const api = BbbPluginSdk.getPluginApi(uuid);
    const logger = api?.logger;

    if (isValidLogger(logger)) {
      return logger;
    }
    return fallbackLogger;
  } catch (err) {
    return fallbackLogger;
  }
}

type LoggerArgument = string | Error | Record<string, unknown>;

function logWith<T extends keyof Logger>(level: T, ...args: LoggerArgument[]): void {
  const logger = getLogger();
  const method = logger[level] as (...params: LoggerArgument[]) => void;

  try {
    method.call(logger, ...args);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`[pluginLogger.${String(level)}] fallback`, err, ...args);
  }
}

const pluginLogger = {
  error: (...args: LoggerArgument[]) => logWith('error', ...args),
  warn: (...args: LoggerArgument[]) => logWith('warn', ...args),
  info: (...args: LoggerArgument[]) => logWith('info', ...args),
  debug: (...args: LoggerArgument[]) => logWith('debug', ...args),
  trace: (...args: LoggerArgument[]) => logWith('trace', ...args),
  addStream(stream: StreamOptions) {
    const logger = getLogger();
    logger.addStream.call(logger, stream);
  },
} as Logger;

export default pluginLogger;
