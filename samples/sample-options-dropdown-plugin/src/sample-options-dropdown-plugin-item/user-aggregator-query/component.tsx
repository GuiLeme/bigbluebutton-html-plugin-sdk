import {
  PluginApi,
  pluginLogger,
} from 'bigbluebutton-html-plugin-sdk';
import { useEffect } from 'react';

interface UserAggregatorQueryProps {
  pluginApi: PluginApi;
}

interface QueryResult {
  user_aggregate: {
    aggregate: {
      count: number;
    }
  }
}

function UserAggregatorQuery(
  props: UserAggregatorQueryProps,
):React.ReactElement<UserAggregatorQueryProps> {
  const { pluginApi } = props;
  const { data, loading } = pluginApi.useCustomQuery<QueryResult>(`
    query UsersCount {
    user_aggregate {
      aggregate {
        count
      }
    }
  }`);
  useEffect(() => {
    pluginLogger.info(`This is the result of the query: ${data}`);
  }, [loading]);
  return null;
}

export { UserAggregatorQuery };
