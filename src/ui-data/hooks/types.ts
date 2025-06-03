import { UiDataPayloads } from '../types';

export type UseUiDataFunction = <
  T extends keyof UiDataPayloads
>(dataName: T, defaultValue: UiDataPayloads[T]) => UiDataPayloads[T];
