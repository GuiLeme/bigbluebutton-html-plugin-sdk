import { GraphqlResponseWrapper } from '../../../../core';

export interface CustomQueryArguments {
  query?: string;
  variables?: object;
}

export interface CustomQueryHookOptions {
  variables: object;
}

export type UseCustomQueryFunction = <T>(
  query: string,
  variablesObjectWrapper?: CustomQueryHookOptions,
) => GraphqlResponseWrapper<T>;
