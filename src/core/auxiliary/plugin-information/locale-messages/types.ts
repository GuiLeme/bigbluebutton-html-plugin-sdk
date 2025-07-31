import { PluginApi } from '../../../api/types';

interface UseLocaleMessagesProps {
  pluginApi: PluginApi;
  fetchConfigs?: RequestInit;
}

interface PluginInformationResult {
  javascriptEntrypointIntegrity: string;
  javascriptEntrypointUrl: string;
  localesBaseUrl: string;
}

interface IntlMessages {
  loading: boolean;
  messages: Record<string, string>;
  currentLocale: string;
}

type UseLocaleMessagesFunction = (fetchConfigs?: RequestInit) => IntlMessages;

export {
  UseLocaleMessagesProps,
  PluginInformationResult,
  IntlMessages,
  UseLocaleMessagesFunction,
};
