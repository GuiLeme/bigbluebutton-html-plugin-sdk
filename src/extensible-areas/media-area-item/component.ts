import { MediaAreaItemType } from './enums';
import {
  MediaAreaInterface, MediaAreaOptionProps,
} from './types';

// MediaArea Extensible Area

export class MediaAreaOption implements MediaAreaInterface {
  id: string = '';

  type: MediaAreaItemType;

  label: string;

  icon: string;

  tooltip: string;

  dataTest: string;

  allowed: boolean;

  onClick: () => void;

  /**
   * Returns the option for the media area
   *
   * @param label - label to be displayed on the option
   * @param icon - icon to be displayed on the option
   * @param tooltip - tooltip to be displayed when hovering over option
   * @param dataTest - string attribute to be used for testing
   * @param allowed - boolean indicating whether the option should be displayed
   * @param onClick - function to be called when clicking
   *
   * @returns the option to be displayed in the media area
   */
  constructor({
    id, label = '', icon = '', tooltip = '', dataTest = '', allowed = true, onClick = () => {},
  }: MediaAreaOptionProps) {
    if (id) {
      this.id = id;
    }
    this.label = label;
    this.icon = icon;
    this.tooltip = tooltip;
    this.dataTest = dataTest;
    this.allowed = allowed;
    this.onClick = onClick;
    this.type = MediaAreaItemType.OPTION;
  }

  setItemId: (id: string) => void = (id: string) => {
    this.id = `MediaAreaOption_${id}`;
  };
}

export class MediaAreaSeparator implements MediaAreaInterface {
  id: string = '';

  dataTest?: string;

  type: MediaAreaItemType;

  /**
   * Returns the separator for the media area
   *
   * @param dataTest - optional string attribute to be used for testing
   *
   * @returns the separator to be displayed in the media area
   */
  constructor({ dataTest = '' }) {
    this.type = MediaAreaItemType.SEPARATOR;
    this.dataTest = dataTest;
  }

  setItemId: (id: string) => void = (id: string) => {
    this.id = `MediaAreaSeparator_${id}`;
  };
}
