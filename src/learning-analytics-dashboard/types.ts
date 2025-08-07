// Deprecated Send data function
export interface GenericDataForLearningAnalyticsDashboard {
  cardTitle: string;
  columnTitle: string;
  value: string;
}

export type SendGenericDataForLearningAnalyticsDashboard = (
  data: GenericDataForLearningAnalyticsDashboard) => void;

// Upsert function
export interface LearningAnalyticsDashboardUserData {
  cardTitle: string;
  columnTitle: string;
  value: string;
}

export type UpsertUserDataFunction = (
  data: LearningAnalyticsDashboardUserData,
  targetUserId?: string,
) => void;

// Delete function
export interface LearningAnalyticsDashboardDeleteUserData {
  cardTitle: string;
  columnTitle: string;
}

export type DeleteUserDataFunction = (
  data: LearningAnalyticsDashboardDeleteUserData,
  targetUserId?: string,
) => void;

export type ClearUsersDataFunction = (cardTitle?: string) => void;

// General typing.
export interface LearningAnalyticsDashboardEventDetails {
  pluginName: string;
  data: GenericDataForLearningAnalyticsDashboard
  | LearningAnalyticsDashboardUserData | LearningAnalyticsDashboardDeleteUserData;
  targetUserId?: string;
}

export interface ClearLearningAnalyticsDashboardEventDetails {
  pluginName: string;
  cardTitle?: string;
}

export interface LearningAnalyticsDashboardWrapperObject {
  /**
   * Updates or insert a generic data entry in the learning dashboard for a target user
   * (if target user is not passed, current user will be considered);
   *
   * @param data Data to insert or update
   * @targetUserId string representing the internal userId of the target user (Optional)
   */
  upsertUserData: UpsertUserDataFunction;
  /**
   * Deletes generic data entry for target user (if target user is not passed,
   * current user will be considered).
   *
   * @param data Data to be deleted
   * @targetUserId string representing the internal userId of the target user (Optional)
   */
  deleteUserData: DeleteUserDataFunction;
  /**
   * Clears all Users Data for a specific plugin. (No arguments required)
   */
  clearAllUsersData: ClearUsersDataFunction;
}
