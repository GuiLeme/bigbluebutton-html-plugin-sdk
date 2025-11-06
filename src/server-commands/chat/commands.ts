import { PUBLIC_CHAT_ID } from './constants';
import { ChatCommandsEnum } from './enum';
import {
  ChatSendMessageCommandArguments,
  ChatSendMessageEventArguments,
  SendChatMessageArguments,
  CreatePrivateChatCommandArguments,
} from './types';

export const chat = (pluginName: string) => ({
  /**
   * Sends chat message to specific chat.
   *
   * @param SendChatMessageArguments the text, custom metadata(optional), optional flag
   *  to tell whether or not the message will be custom, and the chatId;
   *  to be sent in the public chat message.
   * Refer to {@link SendChatMessageArguments} to understand the argument
   *  structure.
   */
  sendChatMessage: (
    chatMessageArguments: SendChatMessageArguments,
  ) => {
    window.dispatchEvent(
      new CustomEvent<
        ChatSendMessageEventArguments
      >(ChatCommandsEnum.SEND_MESSAGE, {
        detail: {
          pluginName,
          ...chatMessageArguments,
          custom: chatMessageArguments?.custom || false,
        },
      }),
    );
  },

  /**
   * Sends chat message to the public chat.
   *
   * @param chatSendMessageCommandArguments the text and custom metadata(optional)
   *  to be sent in the public chat message.
   * Refer to {@link ChatSendMessageCommandArguments} to understand the argument
   *  structure.
   */
  sendPublicChatMessage: (
    chatSendPublicChatMessageCommandArguments: ChatSendMessageCommandArguments,
  ) => {
    window.dispatchEvent(
      new CustomEvent<
        ChatSendMessageEventArguments
      >(ChatCommandsEnum.SEND_MESSAGE, {
        detail: {
          chatId: PUBLIC_CHAT_ID,
          pluginName,
          custom: false,
          ...chatSendPublicChatMessageCommandArguments,
        },
      }),
    );
  },

  /**
   * Sends custom chat message to the public chat. Custom messages are not rendered by
   * the BBB client and are meant to be rendered in a custom manner by the plugin.
   *
   * @param chatSendMessageCommandArguments the text and custom metadata(optional)
   *  to be sent in the public chat message.
   * Refer to {@link ChatSendMessageCommandArguments} to understand the argument
   *  structure.
   */
  sendCustomPublicChatMessage: (
    chatSendCustomPublicChatMessageCommandArguments: ChatSendMessageCommandArguments,
  ) => {
    window.dispatchEvent(
      new CustomEvent<
        ChatSendMessageEventArguments
      >(ChatCommandsEnum.SEND_MESSAGE, {
        detail: {
          chatId: PUBLIC_CHAT_ID,
          pluginName,
          custom: true,
          ...chatSendCustomPublicChatMessageCommandArguments,
        },
      }),
    );
  },

  /**
   * Creates a private chat with a specific user.
   *
   * @param createPrivateChatCommandArguments the userId of the user to create a private chat with.
   * Refer to {@link CreatePrivateChatCommandArguments} to understand the argument
   *  structure.
   */
  createPrivateChat: (
    createPrivateChatCommandArguments: CreatePrivateChatCommandArguments,
  ) => {
    window.dispatchEvent(
      new CustomEvent<
        CreatePrivateChatCommandArguments
      >(ChatCommandsEnum.CREATE_PRIVATE_CHAT, {
        detail: {
          ...createPrivateChatCommandArguments,
        },
      }),
    );
  },
});
