import { ChatFormUiDataPayloads } from './domain/chat/form/types';
import { ExternalVideoVolumeUiDataPayloads } from './domain/external-video/volume/types';
import { IntlLocaleUiDataPayloads } from './domain/intl/locale/types';
import { LayoutPresentationAreaUiDataPayloads } from './domain/layout/presentation-area/types';
import { PresentationWhiteboardUiDataPayloads } from './domain/presentation/presentation-area/types';
import { UserListUiDataPayloads } from './domain/user-list/types';

export type UiDataPayloads = IntlLocaleUiDataPayloads & ChatFormUiDataPayloads
  & PresentationWhiteboardUiDataPayloads & UserListUiDataPayloads
  & ExternalVideoVolumeUiDataPayloads & LayoutPresentationAreaUiDataPayloads
export type UiDataNames = keyof UiDataPayloads;

export interface UiDataHookPayloadWrapper<T> extends Event {
  detail: T;
}
