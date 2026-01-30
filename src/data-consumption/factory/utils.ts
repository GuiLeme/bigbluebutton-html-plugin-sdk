import { ApolloError } from '@apollo/client';
import { sortedStringify } from '../utils';

export const hasErrorChanged = (
  previousResultError?: ApolloError,
  currentResultError?: ApolloError,
) => {
  const currentSerialized = sortedStringify(currentResultError);
  const previousSerialized = sortedStringify(previousResultError);
  return currentSerialized !== previousSerialized;
};
