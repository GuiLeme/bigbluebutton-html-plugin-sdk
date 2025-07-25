// Deprecated Send data function
export interface GenericDataForLearningAnalyticsDashboard {
  cardTitle: string;
  columnTitle: string;
  value: string;
}

export type SendGenericDataForLearningAnalyticsDashboard = (
  data: GenericDataForLearningAnalyticsDashboard) => void;

// Upsert function
export interface UpsertDataArguments {
  cardTitle: string;
  columnTitle: string;
  value: string;
}

export type UpsertDataFunction = (
  data: UpsertDataArguments,
  targetUserId?: string,
) => void;

// Delete function
export interface DeleteDataArguments {
  cardTitle: string;
  columnTitle: string;
}

export type DeleteDataFunction = (
  data: DeleteDataArguments,
  targetUserId?: string,
) => void;

// General typing.

export interface LearningAnalyticsDashboardEventDetails {
  pluginName: string;
  data: GenericDataForLearningAnalyticsDashboard
  | UpsertDataArguments | DeleteDataArguments;
  targetUserId?: string;
}

export interface LearningAnalyticsDashboardWrapperObject {
  /**
   * Updates or insert a generic data entry in the learning dashboard;
   *
   * @param data Data to insert or update
   */
  upsertData: UpsertDataFunction;
  /**
   * Updates or insert a generic data entry in the learning dashboard;
   *
   * @param data Data to be deleted
   */
  deleteData: DeleteDataFunction;
}
