import { PresentationWhiteboardUiDataNames } from './enums';

export type PresentationWhiteboardUiDataPayloads = {
  [PresentationWhiteboardUiDataNames.CURRENT_PAGE_SNAPSHOT]: {
    base64Png: string;
  };
};
