export interface ChatSendMessageCommandArguments {
  textMessageInMarkdownFormat: string;
  pluginCustomMetadata?: string;
}

export interface ChatSendMessageEventArguments
  extends ChatSendMessageCommandArguments {
  pluginName: string;
  chatId: string;
  custom: boolean;
}

export interface SendChatMessageArguments {
  textMessageInMarkdownFormat: string;
  chatId: string;
  custom?: boolean;
  pluginCustomMetadata?: string;
}

export interface CreatePrivateChatCommandArguments {
  userId: string;
}

export interface ServerCommandsChatObject {
  sendChatMessage: (
    chatMessageArguments: SendChatMessageArguments
  ) => void;
  sendCustomPublicChatMessage: (
    chatSendCustomPublicChatMessageCommandArguments: ChatSendMessageCommandArguments
  ) => void;
  sendPublicChatMessage: (
    chatSendPublicChatMessageCommandArguments: ChatSendMessageCommandArguments
  ) => void;
  createPrivateChat: (
    createPrivateChatCommandArguments: CreatePrivateChatCommandArguments
  ) => void;
}
