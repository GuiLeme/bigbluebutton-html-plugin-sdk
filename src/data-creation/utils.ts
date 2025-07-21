import * as React from 'react';
import { makeCustomHookIdentifier } from '../data-consumption/utils';
import { GraphqlResponseWrapper, HookEventWrapper, UpdatedEventDetails } from '../core/types';
import { DataCreationHookEnums } from './enums';
import { MutationHookResultType, SetterFunctionCallbackType, UseCustomMutationArguments } from './types';

const validateMutationEventFromClient = <T, K>(
  setMutationResult: React.Dispatch<React.SetStateAction<MutationHookResultType<T>>>,
  setterFunctionCallback: SetterFunctionCallbackType<T, K>,
  hook: DataCreationHookEnums,
  event: HookEventWrapper<GraphqlResponseWrapper<object>>,
  mutation: string,
  options?: object,
) => {
  const {
    hook: hookReceived,
    hookArguments,
    data,
  } = event.detail as UpdatedEventDetails<K>;
  const {
    mutation: mutationReceived,
    options: optionsReceived,
  } = (hookArguments || { mutation: null, options: null }) as UseCustomMutationArguments;
  if (
    hookReceived === hook
    && (makeCustomHookIdentifier(mutationReceived, optionsReceived)
      === makeCustomHookIdentifier(mutation, options))
  ) {
    setMutationResult((prevObject) => setterFunctionCallback(prevObject, data));
  }
};

export default validateMutationEventFromClient;
