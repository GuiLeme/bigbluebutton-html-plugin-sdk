import { LayoutPresentatioAreaUiDataNames, UiLayouts } from './enums';

export type LayoutPresentationAreaUiDataPayloads = {
  [LayoutPresentatioAreaUiDataNames.CURRENT_ELEMENT]: {
    currentElement?: UiLayouts,
    isOpen: boolean,
  };
};
