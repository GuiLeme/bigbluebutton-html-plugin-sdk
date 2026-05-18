import { caption } from './caption/commands';
import { chat } from './chat/commands';
import { presentation } from './presentation/commands';

export const serverCommands = (pluginName: string) => ({
  caption,
  chat: chat(pluginName),
  presentation,
});
