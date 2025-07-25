import {
  LearningAnalyticsDashboardEventDetails,
  GenericDataForLearningAnalyticsDashboard,
  UpsertGenericDataArguments,
  DeleteGenericDataArguments,
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

export const upsertGenericData = (
  data: UpsertGenericDataArguments,
  pluginName: string,
  targetUserId?: string,
) => {
  window.dispatchEvent(
    new CustomEvent<
      LearningAnalyticsDashboardEventDetails>(
        LearningAnalyticsDashboardEvents.UPSERT_GENERIC_DATA_SENT,
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

export const deleteGenericData = (
  data: DeleteGenericDataArguments,
  pluginName: string,
  targetUserId?: string,
) => {
  window.dispatchEvent(
    new CustomEvent<
      LearningAnalyticsDashboardEventDetails>(
        LearningAnalyticsDashboardEvents.DELETE_GENERIC_DATA_SENT,
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
