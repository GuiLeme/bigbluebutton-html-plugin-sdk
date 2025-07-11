import * as React from 'react';

import {
  BbbPluginSdk,
  PluginApi,
  MediaAreaSeparator,
  MediaAreaOption,
  pluginLogger,
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
          icon: 'copy',
          tooltip: 'this is a button injected by plugin',
          allowed: true,
          dataTest: 'mediaAreaOption',
          onClick: () => {
            pluginLogger.info('Log that the button from sample-media-area-plugin has been clicked');
          },
        }),
      ]);
    }
  }, [currentUser]);
  return null;
}

export default SampleMediaAreaPlugin;
