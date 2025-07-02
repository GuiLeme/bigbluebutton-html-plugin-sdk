/* eslint-disable @typescript-eslint/no-explicit-any */
export interface MutationVariablesWrapper<T> {
  variables: T;
}
export type TriggerMutationFunction<T> = (args: MutationVariablesWrapper<T>) => void;

export type UseCustomMutationReturnType<T> = [TriggerMutationFunction<T> | null, object | null]

export type UseCustomMutationFunction = <T = any>(
  mutation: string, options?: object
) => UseCustomMutationReturnType<T>;

export interface UseCustomMutationArguments {
  mutation: string;
  options?: object;
}

export interface MutationResultObject {
  called: boolean;
  data?: object;
  error?: object;
  loading: boolean
}

export interface MutationHookResultType<T> {
  triggerFunction: TriggerMutationFunction<T> | null;
  result: MutationResultObject | null;
}

export type SetterFunctionCallbackType<T, K> = (
  previousObject: MutationHookResultType<T>,
  dataFromEvent: K
) => MutationHookResultType<T>;
