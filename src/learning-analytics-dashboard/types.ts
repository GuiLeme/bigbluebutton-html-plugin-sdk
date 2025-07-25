// Deprecated Send data function
export interface GenericDataForLearningAnalyticsDashboard {
  cardTitle: string;
  columnTitle: string;
  value: string;
}

export type SendGenericDataForLearningAnalyticsDashboard = (
  data: GenericDataForLearningAnalyticsDashboard) => void;

// Upsert function
export interface UpsertGenericDataArguments {
  cardTitle: string;
  columnTitle: string;
  value: string;
}

export type UpsertGenericDataFunction = (
  data: UpsertGenericDataArguments,
  targetUserId?: string,
) => void;

// Delete function
export interface DeleteGenericDataArguments {
  cardTitle: string;
  columnTitle: string;
}

export type DeleteGenericDataFunction = (
  data: DeleteGenericDataArguments,
  targetUserId?: string,
) => void;

// General typing.

export interface LearningAnalyticsDashboardEventDetails {
  pluginName: string;
  data: GenericDataForLearningAnalyticsDashboard
  | UpsertGenericDataArguments | DeleteGenericDataArguments;
  targetUserId?: string;
}

export interface LearningAnalyticsDashboardWrapperObject {
  /**
   * Updates or insert a generic data entry in the learning dashboard;
   *
   * @param data Data to insert or update
   */
  upsertGenericData: UpsertGenericDataFunction;
  /**
   * Updates or insert a generic data entry in the learning dashboard;
   *
   * @param data Data to be deleted
   */
  deleteGenericData: DeleteGenericDataFunction;
}
