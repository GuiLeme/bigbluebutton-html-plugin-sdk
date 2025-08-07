import {
  LearningAnalyticsDashboardEventDetails,
  GenericDataForLearningAnalyticsDashboard,
  LearningAnalyticsDashboardUserData,
  LearningAnalyticsDashboardDeleteUserData,
  ClearLearningAnalyticsDashboardEventDetails,
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

export const upsertUserData = (
  data: LearningAnalyticsDashboardUserData,
  pluginName: string,
  targetUserId?: string,
) => {
  window.dispatchEvent(
    new CustomEvent<
      LearningAnalyticsDashboardEventDetails>(
        LearningAnalyticsDashboardEvents.UPSERT_USER_DATA_COMMAND_SENT,
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

export const deleteUserData = (
  data: LearningAnalyticsDashboardDeleteUserData,
  pluginName: string,
  targetUserId?: string,
) => {
  window.dispatchEvent(
    new CustomEvent<
      LearningAnalyticsDashboardEventDetails>(
        LearningAnalyticsDashboardEvents.DELETE_USER_DATA_COMMAND_SENT,
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

export const clearAllUsersData = (
  pluginName: string,
  cardTitle?: string,
) => {
  window.dispatchEvent(
    new CustomEvent<
      ClearLearningAnalyticsDashboardEventDetails>(
        LearningAnalyticsDashboardEvents.CLEAR_ALL_USERS_DATA_COMMAND_SENT,
        {
          detail: {
            pluginName,
            cardTitle,
          },
        },
      ),
  );
};
