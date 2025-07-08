import { UiDataPayloads } from '../types';

export type GetUiDataFunction = <
  T extends keyof UiDataPayloads
>(dataName: T) => Promise<UiDataPayloads[T] | undefined>;
