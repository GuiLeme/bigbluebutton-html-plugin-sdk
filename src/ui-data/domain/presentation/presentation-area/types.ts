import { PresentationWhiteboardUiDataNames } from './enums';

export type PresentationWhiteboardUiDataPayloads = {
  [PresentationWhiteboardUiDataNames.CURRENT_WHITEBOARD_PNG_WITH_ANNOTATIONS]: {
    base64Png: string;
  };
};
