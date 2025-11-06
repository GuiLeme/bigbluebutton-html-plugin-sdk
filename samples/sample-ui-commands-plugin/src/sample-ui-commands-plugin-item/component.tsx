import * as React from 'react';
import { useEffect, useState } from 'react';

import {
  BbbPluginSdk,
  PluginApi,
  ActionButtonDropdownOption,
  ChatFormUiDataNames,
} from 'bigbluebutton-html-plugin-sdk';
import { PrivateChatSubscriptionResult, SampleUiCommandsPluginProps } from './types';
import { GET_CHATS_SUBSCRIPTION } from './query';

function SampleUiCommandsPlugin(
  { pluginUuid: uuid }: SampleUiCommandsPluginProps,
): React.ReactElement {
  BbbPluginSdk.initialize(uuid);
  const pluginApi: PluginApi = BbbPluginSdk.getPluginApi(uuid);

  const [privateChatId, setPrivateChatId] = useState<string | null>(null);
  const [targetUserId, setTargetUserId] = useState<string | null>(null);

  // Get all users in the meeting
  const { data: usersData } = pluginApi.useUsersBasicInfo?.();

  // Get current user to exclude from random selection
  const { data: currentUser } = pluginApi.useCurrentUser?.();

  // Subscribe to private chats to get chatId after creating
  const { data: privateChatsData } = pluginApi.useCustomSubscription?.<
    PrivateChatSubscriptionResult
  >(GET_CHATS_SUBSCRIPTION);

  // Monitor for the chatId of the private chat we created
  useEffect(() => {
    if (targetUserId && privateChatsData?.chat) {
      const targetChat = privateChatsData.chat.find(
        (chat) => chat.participant.userId === targetUserId,
      );
      if (targetChat && targetChat.chatId !== privateChatId) {
        setPrivateChatId(targetChat.chatId);
      }
    }
  }, [privateChatsData, targetUserId, privateChatId]);

  useEffect(() => {
    if (privateChatId) {
      // Open the private chat panel
      pluginApi.uiCommands?.chat.form.open({
        chatId: privateChatId
      });

      // Fill the private chat form with a hello world message
      setTimeout(() => {
        pluginApi.uiCommands?.chat.form.fill({
          text: 'Hello World! This message was filled by the plugin.',
        });
      }, 500);
    }
  }, [privateChatId]);

  useEffect(() => {
    // Set up the action button dropdown
    pluginApi.setActionButtonDropdownItems([
      new ActionButtonDropdownOption({
        label: 'Create Private Chat & Say Hello',
        icon: 'user',
        tooltip: 'Creates a private chat with a random user and sends Hello World',
        dataTest: 'createPrivateChatButton',
        allowed: true,
        onClick: () => {
          // Get a random user (excluding current user)
          if (usersData?.user && currentUser) {
            const otherUsers = usersData.user.filter(
              (user) => user.userId !== currentUser.userId,
            );

            if (otherUsers.length > 0) {
              const randomUser = otherUsers[
                Math.floor(Math.random() * otherUsers.length)
              ];

              // Store the target user ID to track the chat creation
              setTargetUserId(randomUser.userId);

              // Create private chat with the random user
              pluginApi.serverCommands?.chat.createPrivateChat({
                userId: randomUser.userId,
              });
            }
          }
        },
      }),
    ]);
  }, [usersData, currentUser]);

  return null;
}

export default SampleUiCommandsPlugin;
