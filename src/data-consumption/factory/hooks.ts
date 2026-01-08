import {
  useRef,
  useMemo,
  useEffect,
  useState,
} from 'react';
import { sortedStringify } from '../utils';
import { GraphqlResponseWrapper } from '../../core';
import { hasErrorChanged } from './utils';
import { DeepPartial } from './types';

// Function overload for array type
export function useProjectedValue<TQueryResult>(
  queryResult: GraphqlResponseWrapper<TQueryResult[]>,
  project?: (q: TQueryResult) => DeepPartial<TQueryResult>,
): GraphqlResponseWrapper<TQueryResult[]> | GraphqlResponseWrapper<DeepPartial<TQueryResult>[]>;
// Function overload for single value type
export function useProjectedValue<TQueryResult>(
  queryResult: GraphqlResponseWrapper<TQueryResult>,
  project?: (q: TQueryResult) => DeepPartial<TQueryResult>,
): GraphqlResponseWrapper<TQueryResult> | GraphqlResponseWrapper<DeepPartial<TQueryResult>>;
// Implementation
export function useProjectedValue<TQueryResult>(
  queryResult: GraphqlResponseWrapper<TQueryResult[] | TQueryResult>,
  project?: (q: TQueryResult) => DeepPartial<TQueryResult>,
): GraphqlResponseWrapper<TQueryResult[] | TQueryResult>
  | GraphqlResponseWrapper<DeepPartial<TQueryResult>[] | DeepPartial<TQueryResult>> {
  if (!project) return queryResult;

  const isArray = Array.isArray(queryResult.data);

  // Store the previous projected data to compare against
  const previousProjectedDataRef = useRef<
    DeepPartial<TQueryResult>[] | DeepPartial<TQueryResult> | undefined
  >(undefined);

  // Compute the new projected value from the data field
  const currentProjectedData = useMemo(() => {
    if (!queryResult.data) return undefined;
    if (isArray) {
      return (queryResult.data as TQueryResult[]).map((item) => project(item));
    }
    return project(queryResult.data as TQueryResult);
  }, [queryResult.data, project, isArray]);

  // Initialize state with the wrapper structure
  const [projectionResult, setProjectionResult] = useState<
    GraphqlResponseWrapper<DeepPartial<TQueryResult>[] | DeepPartial<TQueryResult>>
  >({
    loading: queryResult.loading,
    data: currentProjectedData,
    error: queryResult.error,
  });

  useEffect(() => {
    // Perform deep equality check using sortedStringify
    const currentSerialized = sortedStringify(currentProjectedData);
    const previousSerialized = sortedStringify(previousProjectedDataRef.current);

    // Check if loading or error states changed
    const loadingChanged = queryResult.loading !== projectionResult.loading;
    const errorChanged = hasErrorChanged(projectionResult.error, queryResult.error);

    // Only update if the projected data, loading, or error state has changed
    if (currentSerialized !== previousSerialized || loadingChanged || errorChanged) {
      previousProjectedDataRef.current = currentProjectedData;
      setProjectionResult({
        loading: queryResult.loading,
        data: currentProjectedData,
        error: queryResult.error,
      });
    }
  }, [
    currentProjectedData,
    queryResult.loading,
    queryResult.error,
    projectionResult.loading,
    projectionResult.error,
  ]);

  return projectionResult;
}
