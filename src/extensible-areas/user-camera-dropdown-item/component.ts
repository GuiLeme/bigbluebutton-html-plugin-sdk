import { UserCameraDropdownItemType } from './enums';
import {
  OnclickFunctionCallbackArguments,
  UserCameraDropdownCallbackFunctionsArguments,
  UserCameraDropdownInterface, UserCameraDropdownOptionProps,
  UserCameraDropdownSeparatorProps,
} from './types';

// UserCameraDropdown Extensible Area

export class UserCameraDropdownOption implements UserCameraDropdownInterface {
  id: string = '';

  type: UserCameraDropdownItemType;

  label: string;

  icon: string;

  dataTest: string;

  onClick: (args: OnclickFunctionCallbackArguments) => void;

  displayFunction?: (args: UserCameraDropdownCallbackFunctionsArguments) => boolean;

  /**
   * Returns object to be used in the setter for User Camera Dropdown. In this case
   * an option.
   *
   * @param label - label to be displayed in the option.
   * @param icon - icon to be displayed in the option. Left side of it.
   * @param dataTest - string attribute to be used for testing
   * @param onClick - function to be called when clicking the button
   *
   * @returns Object that will be interpreted by the core of Bigbluebutton (HTML5)
   */
  constructor({
    id, label = '', icon = '', dataTest = '', onClick = () => {},
    displayFunction = () => true,
  }: UserCameraDropdownOptionProps) {
    if (id) {
      this.id = id;
    }
    this.displayFunction = displayFunction;
    this.label = label;
    this.icon = icon;
    this.dataTest = dataTest;
    this.onClick = onClick;
    this.type = UserCameraDropdownItemType.OPTION;
  }

  setItemId: (id: string) => void = (id: string) => {
    this.id = `UserCameraDropdownOption_${id}`;
  };
}

export class UserCameraDropdownSeparator implements UserCameraDropdownInterface {
  id: string = '';

  type: UserCameraDropdownItemType;

  dataTest: string;

  displayFunction?: (args: UserCameraDropdownCallbackFunctionsArguments) => boolean;

  /**
   * Returns object to be used in the setter for User Camera Dropdown. In this case
   * a separator.
   *
   * @param dataTest - string attribute to be used for testing
   *
   * @returns Object that will be interpreted by the core of Bigbluebutton (HTML5)
   */
  constructor({
    displayFunction, dataTest = '',
  }: UserCameraDropdownSeparatorProps = { displayFunction: () => true }) {
    this.displayFunction = displayFunction;
    this.dataTest = dataTest;
    this.type = UserCameraDropdownItemType.SEPARATOR;
  }

  setItemId: (id: string) => void = (id: string) => {
    this.id = `UserCameraDropdownSeparator_${id}`;
  };
}
