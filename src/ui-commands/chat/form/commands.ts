import { ChatFormCommandsEnum } from './enums';
import {
  FillChatFormCommandArguments,
  OpenChatFormCommandArguments,
} from './types';

export const form = {
  /**
   * Opens the chat panel automatically. If chatId is provided, opens that specific chat.
   *
   * @param openChatCommandArgument Optional chatId to open a specific chat panel.
   * Refer to {@link OpenChatFormCommandArguments} to understand the argument structure.
   */
  open: (openChatCommandArgument?: OpenChatFormCommandArguments) => {
    if (openChatCommandArgument) {
      window.dispatchEvent(
        new CustomEvent<OpenChatFormCommandArguments>(ChatFormCommandsEnum.OPEN, {
          detail: openChatCommandArgument,
        }),
      );
    } else {
      window.dispatchEvent(new Event(ChatFormCommandsEnum.OPEN));
    }
  },

  /**
   * Fills in the chat input when called.
   *
   * @param FillChatFormCommandArguments the text with which the method will fill the chat input.
   * Refer to {@link FillChatFormCommandArguments} to understand the argument structure.
   */
  fill: (fillChatFormCommandArguments: FillChatFormCommandArguments) => {
    window.dispatchEvent(
      new CustomEvent<
        FillChatFormCommandArguments
      >(ChatFormCommandsEnum.FILL, {
        detail: fillChatFormCommandArguments,
      }),
    );
  },
};
