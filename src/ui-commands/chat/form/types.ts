export interface FillChatFormCommandArguments {
  text: string;
}

export interface OpenChatFormCommandArguments {
  chatId: string;
}

export interface UiCommandsChatFormObject {
  open: (openChatCommandArgument?: OpenChatFormCommandArguments) => void;
  fill: (FillChatFormCommandArguments: FillChatFormCommandArguments) => void;
}
