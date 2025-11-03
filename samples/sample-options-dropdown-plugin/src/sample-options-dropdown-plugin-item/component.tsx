import * as React from 'react';
import { useEffect } from 'react';

import {
  BbbPluginSdk, OptionsDropdownOption, OptionsDropdownSeparator, PluginApi,
} from 'bigbluebutton-html-plugin-sdk';
import { SampleOptionsDropdownPluginProps } from './types';
import { UserAggregatorQuery } from './user-aggregator-query/component';
import { pluginLogger } from '..';

interface MutationVariablesType {
  reactionEmoji: string,
}

function SampleOptionsDropdownPlugin(
  { pluginUuid: uuid }: SampleOptionsDropdownPluginProps,
): React.ReactElement<SampleOptionsDropdownPluginProps> {
  const pluginApi: PluginApi = BbbPluginSdk.getPluginApi(uuid);
  BbbPluginSdk.initialize(uuid);
  const [activateQuery, setActivateQuery] = React.useState(false);
  const [trigger] = pluginApi.useCustomMutation<MutationVariablesType>(`
    mutation SetReactionEmoji($reactionEmoji: String!) {
      userSetReactionEmoji(
        reactionEmoji: $reactionEmoji,
      )
    }
  `);

  useEffect(() => {
    pluginApi.setOptionsDropdownItems([]);
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
      new OptionsDropdownOption({
        label: 'This will set your reaction to 👏',
        icon: 'copy',
        onClick: () => {
          pluginLogger.info('Setting reaction to 👏');
          if (trigger) {
            trigger({
              variables: {
                reactionEmoji: '👏',
              },
            });
          }
        },
      }),
    ]);
  }, [trigger]);

  return activateQuery && (
    <UserAggregatorQuery
      pluginApi={pluginApi}
    />
  );
}

export default SampleOptionsDropdownPlugin;
