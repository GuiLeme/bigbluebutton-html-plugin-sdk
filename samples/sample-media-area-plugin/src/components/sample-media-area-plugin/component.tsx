import * as React from 'react';

import {
  BbbPluginSdk,
  PluginApi,
  MediaAreaSeparator,
  MediaAreaOption,
  pluginLogger,
  ChangeEnforcedLayoutTypeEnum,
} from 'bigbluebutton-html-plugin-sdk';

import { SampleMediaAreaPluginProps } from './types';

export interface DataExampleType {
  first_example_field: number;
  second_example_field: string;
}

function SampleMediaAreaPlugin(
  { pluginUuid: uuid }: SampleMediaAreaPluginProps,
): React.ReactElement<SampleMediaAreaPluginProps> {
  BbbPluginSdk.initialize(uuid);
  const pluginApi: PluginApi = BbbPluginSdk.getPluginApi(uuid);
  const { data: currentUser } = pluginApi.useCurrentUser();

  React.useEffect(() => {
    if (currentUser?.presenter) {
      pluginApi.setMediaAreaItems([
        new MediaAreaSeparator({
          dataTest: 'mediaAreaSeparator',
        }),
        new MediaAreaOption({
          label: 'Button injected by plugin',
          icon: { iconName: 'copy' },
          tooltip: 'this is a button injected by plugin',
          allowed: true,
          dataTest: 'mediaAreaOption',
          onClick: () => {
            pluginLogger.info('Log that the button from sample-media-area-plugin has been clicked');
          },
        }),
        new MediaAreaOption({
          label: 'Smart layout',
          icon: { iconName: 'copy' },
          tooltip: 'this is a button injected by plugin',
          allowed: true,
          onClick: () => {
            pluginApi.uiCommands.layout.changeEnforcedLayout(
              ChangeEnforcedLayoutTypeEnum.SMART_LAYOUT,
            );
          },
        }),
        new MediaAreaOption({
          label: 'Media Only',
          icon: { iconName: 'copy' },
          tooltip: 'this is a button injected by plugin',
          allowed: true,
          onClick: () => {
            pluginApi.uiCommands.layout.changeEnforcedLayout(
              ChangeEnforcedLayoutTypeEnum.MEDIA_ONLY,
            );
          },
        }),
        new MediaAreaOption({
          label: 'Participants and chat Only',
          icon: { iconName: 'copy' },
          tooltip: 'this is a button injected by plugin',
          allowed: true,
          onClick: () => {
            pluginApi.uiCommands.layout.changeEnforcedLayout(
              ChangeEnforcedLayoutTypeEnum.PARTICIPANTS_AND_CHAT_ONLY,
            );
          },
        }),
        new MediaAreaOption({
          label: 'Presentation Only',
          icon: { iconName: 'copy' },
          tooltip: 'this is a button injected by plugin',
          allowed: true,
          onClick: () => {
            pluginApi.uiCommands.layout.changeEnforcedLayout(
              ChangeEnforcedLayoutTypeEnum.PRESENTATION_ONLY,
            );
          },
        }),
        new MediaAreaOption({
          label: 'Cameras Only',
          icon: { iconName: 'copy' },
          tooltip: 'this is a button injected by plugin',
          allowed: true,
          onClick: () => {
            pluginApi.uiCommands.layout.changeEnforcedLayout(
              ChangeEnforcedLayoutTypeEnum.CAMERAS_ONLY,
            );
          },
        }),
        new MediaAreaOption({
          label: 'Plugins only',
          icon: { iconName: 'copy' },
          tooltip: 'this is a button injected by plugin',
          allowed: true,
          onClick: () => {
            pluginApi.uiCommands.layout.changeEnforcedLayout(
              ChangeEnforcedLayoutTypeEnum.PLUGINS_ONLY,
            );
            setTimeout(() => {
              pluginApi.uiCommands.layout.changeEnforcedLayout(
                ChangeEnforcedLayoutTypeEnum.SMART_LAYOUT,
              );
            }, 5000);
          },
        }),
        new ActionButtonDropdownOption({
          label: 'Stop screenshare',
          icon: 'desktop',
          tooltip: 'Stop the ongoing screenshare session',
          allowed: true,
          onClick: () => {
            pluginApi.uiCommands.screenshare.stop();
          },
        }),
      ]);
    }
  }, [currentUser]);
  return null;
}

export default SampleMediaAreaPlugin;
