import { DataConsumptionHooks } from '../../../../data-consumption/enums';
import { createDataConsumptionHook } from '../../../factory/hookCreator';
import { CustomQueryArguments, CustomQueryHookOptions, UseCustomQueryFunction } from './types';

export const useCustomQuery: UseCustomQueryFunction = <T>(
  query: string,
  options?: CustomQueryHookOptions,
) => createDataConsumptionHook<T>(DataConsumptionHooks.CUSTOM_QUERY, {
  query,
  variables: options?.variables,
} as CustomQueryArguments);
