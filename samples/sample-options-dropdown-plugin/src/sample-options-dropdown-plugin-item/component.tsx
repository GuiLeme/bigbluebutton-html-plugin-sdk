import * as React from 'react';
import { useEffect } from 'react';

import {
  BbbPluginSdk, OptionsDropdownOption, OptionsDropdownSeparator, PluginApi,
  pluginLogger,
} from 'bigbluebutton-html-plugin-sdk';
import { SampleOptionsDropdownPluginProps } from './types';
import { UserAggregatorQuery } from './user-aggregator-query/component';

function SampleOptionsDropdownPlugin(
  { pluginUuid: uuid }: SampleOptionsDropdownPluginProps,
): React.ReactElement<SampleOptionsDropdownPluginProps> {
  const pluginApi: PluginApi = BbbPluginSdk.getPluginApi(uuid);
  BbbPluginSdk.initialize(uuid);
  const [activateQuery, setActivateQuery] = React.useState(false);

  useEffect(() => {
    pluginApi.setOptionsDropdownItems([
      new OptionsDropdownSeparator(),
      new OptionsDropdownOption({
        label: 'This will log on the console',
        icon: 'copy',
        onClick: () => {
          setActivateQuery(true);
          pluginLogger.info('Log from options dropdown plugin');
        },
      }),
    ]);
  }, []);

  return activateQuery && (
    <UserAggregatorQuery
      pluginApi={pluginApi}
    />
  );
}

export default SampleOptionsDropdownPlugin;
