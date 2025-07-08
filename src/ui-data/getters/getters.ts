import { UiDataPayloads } from '../types';
import { UI_DATA_GETTER_SUBSCRIBED } from './consts';

export async function getUiData<
  T extends keyof UiDataPayloads
>(dataName: T): Promise<UiDataPayloads[T] | undefined> {
  return new Promise<UiDataPayloads[T] | undefined>((resolve) => {
    const dataStoringFunction = (event: Event) => {
      const customEvent = event as CustomEvent<UiDataPayloads[T]>;
      if (customEvent.detail !== undefined) {
        resolve(customEvent.detail);
      } else {
        resolve(undefined);
      }
      window.removeEventListener(dataName, dataStoringFunction);
    };

    // Listen for the response event
    window.addEventListener(dataName, dataStoringFunction);

    // Dispatch a *CustomEvent* to request the data
    const requestEventName = `${UI_DATA_GETTER_SUBSCRIBED}-${dataName}`;
    window.dispatchEvent(new CustomEvent(requestEventName));
  });
}
