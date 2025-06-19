import { useEffect, useState } from 'react';
import { sortedStringify } from '../../data-consumption/utils';
import { usePreviousValue } from '../../core/utils/hooks';
import { UiDataPayloads } from '../types';
import { UI_DATA_LISTENER_SUBSCRIBED } from './consts';

export function useUiData<
  T extends keyof UiDataPayloads
>(dataName: T, defaultValue: UiDataPayloads[T]): UiDataPayloads[T] {
  const [data, setData] = useState<UiDataPayloads[T]>(defaultValue);
  const prevData = usePreviousValue(data);

  // Use this state to avoid unnecessary updates into the data content
  const [deduplicatedData, setDeduplicatedData] = useState(defaultValue);

  const dataStoringFunction = ((customEvent: CustomEvent<UiDataPayloads[T]>) => {
    setData(customEvent.detail);
  }) as EventListener;

  useEffect(() => {
    if (sortedStringify(data) !== sortedStringify(prevData)) setDeduplicatedData(data);
  }, [data]);

  useEffect(() => {
    window.addEventListener(dataName, dataStoringFunction);
    window.dispatchEvent(new Event(`${UI_DATA_LISTENER_SUBSCRIBED}-${dataName}`));
    return () => {
      window.removeEventListener(dataName, dataStoringFunction);
    };
  }, []);

  return deduplicatedData;
}
