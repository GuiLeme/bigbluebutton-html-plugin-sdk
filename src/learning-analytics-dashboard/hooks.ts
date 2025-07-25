import {
  LearningAnalyticsDashboardEventDetails,
  GenericDataForLearningAnalyticsDashboard,
  UpsertDataArguments,
  DeleteDataArguments,
} from './types';
import { LearningAnalyticsDashboardEvents } from './enums';

export const sendGenericDataForLearningAnalyticsDashboard = (
  data: GenericDataForLearningAnalyticsDashboard,
  pluginName: string,
) => {
  window.dispatchEvent(
    new CustomEvent<
      LearningAnalyticsDashboardEventDetails>(LearningAnalyticsDashboardEvents.GENERIC_DATA_SENT, {
        detail: {
          pluginName,
          data,
        },
      }),
  );
};

export const upsertData = (
  data: UpsertDataArguments,
  pluginName: string,
  targetUserId?: string,
) => {
  window.dispatchEvent(
    new CustomEvent<
      LearningAnalyticsDashboardEventDetails>(
        LearningAnalyticsDashboardEvents.UPSERT_DATA_COMMAND_SENT,
        {
          detail: {
            pluginName,
            data,
            targetUserId,
          },
        },
      ),
  );
};

export const deleteData = (
  data: DeleteDataArguments,
  pluginName: string,
  targetUserId?: string,
) => {
  window.dispatchEvent(
    new CustomEvent<
      LearningAnalyticsDashboardEventDetails>(
        LearningAnalyticsDashboardEvents.DELETE_DATA_COMMAND_SENT,
        {
          detail: {
            pluginName,
            data,
            targetUserId,
          },
        },
      ),
  );
};
