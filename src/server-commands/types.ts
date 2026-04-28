import { ServerCommandsCaptionObject } from './caption/types';
import { ServerCommandsChatObject } from './chat/types';
import { ServerCommandsPresentationObject } from './presentation/types';

export interface ServerCommands {
  caption: ServerCommandsCaptionObject;
  chat: ServerCommandsChatObject;
  presentation: ServerCommandsPresentationObject;
}
