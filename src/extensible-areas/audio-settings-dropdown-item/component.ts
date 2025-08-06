import { AudioSettingsDropdownItemType } from './enums';
import {
  AudioSettingsDropdownInterface, AudioSettingsDropdownOptionProps,
} from './types';

// AudioSettingsDropdown Extensible Area

export class AudioSettingsDropdownOption implements AudioSettingsDropdownInterface {
  id: string = '';

  type: AudioSettingsDropdownItemType;

  label: string;

  icon: string;

  dataTest: string;

  onClick: () => void;

  /**
   * Returns object to be used in the setter for the audio settings dropdown. In this case,
   * an option.
   *
   * @param label - label to be displayed in audio settings dropdown option
   * @param icon - icon to be used in the option for the dropdown. It goes in the left side of it
   * @param dataTest - data-test attribute to be used in the option for testing purposes
   * @param onClick - function to be called when clicking the button
   *
   * @returns Object that will be interpreted by the core of Bigbluebutton (HTML5)
   */
  constructor({
    id, label = '', icon = '', dataTest = '', onClick = () => { },
  }: AudioSettingsDropdownOptionProps) {
    if (id) {
      this.id = id;
    }
    this.label = label;
    this.icon = icon;
    this.dataTest = dataTest;
    this.onClick = onClick;
    this.type = AudioSettingsDropdownItemType.OPTION;
  }

  setItemId: (id: string) => void = (id: string) => {
    this.id = `AudioSettingsDropdownOption_${id}`;
  };
}

export class AudioSettingsDropdownSeparator implements AudioSettingsDropdownInterface {
  id: string = '';

  type: AudioSettingsDropdownItemType;

  dataTest: string = 'audioSettingsDropdownSeparator';

  /**
   * Returns object to be used in the setter for the audio settings dropdown. In this case,
   * a separator.
   *
   * @remarks
   * It will display a horizontal thin black line inside the dropdown.
   *
   * @returns Object that will be interpreted by the core of Bigbluebutton (HTML5)
   */
  constructor({ dataTest = '' } = {}) {
    this.dataTest = dataTest;
    this.type = AudioSettingsDropdownItemType.SEPARATOR;
  }

  setItemId: (id: string) => void = (id: string) => {
    this.id = `AudioSettingsDropdownSeparator_${id}`;
  };
}
