import * as React from 'react';
import { useEffect } from 'react';

import {
  ActionsBarButton, ActionsBarItem, ActionsBarPosition, ActionsBarSeparator,
  BbbPluginSdk, GraphqlResponseWrapper, PluginApi, UsersBasicInfoResponseFromGraphqlWrapper 
} from 'bigbluebutton-html-plugin-sdk';
import { SampleActionsBarPluginProps } from './types';

function SampleActionsBarPlugin({
  pluginUuid: uuid,
}: SampleActionsBarPluginProps): React.ReactNode {
  BbbPluginSdk.initialize(uuid);
  const pluginApi: PluginApi = BbbPluginSdk.getPluginApi(uuid);

  useEffect(() => {
    const buttonToUserListItem:
          ActionsBarItem = new ActionsBarButton({
            icon: 'user',
            tooltip: 'This will make an alert dialog',
            onClick: () => {
              alert("The action bar button from plugin was clicked")
            },
            position: ActionsBarPosition.RIGHT,
          });
    const dropdownToUserListItem:
      ActionsBarItem = new ActionsBarSeparator({
          position: ActionsBarPosition.RIGHT,
        });
    
    pluginApi.setActionsBarItems([dropdownToUserListItem, buttonToUserListItem]);
  }, []);

  const users: GraphqlResponseWrapper<UsersBasicInfoResponseFromGraphqlWrapper> = pluginApi.useUsersBasicInfo();

  useEffect(() => {
    console.log("Users Overview: ", users);
  }, [users])
  return null;
}

export default SampleActionsBarPlugin;
