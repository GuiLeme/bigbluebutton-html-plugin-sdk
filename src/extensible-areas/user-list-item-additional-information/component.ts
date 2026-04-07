import { UserListItemAdditionalInformationType } from './enums';
import {
  UserListItemAdditionalInformationInterface, UserListItemIconProps,
  UserListItemLabelProps,
} from './types';
import { PluginIconType } from '../common/icon';

// UserListItemAdditionalInformation Extensible Area

export class UserListItemIcon implements UserListItemAdditionalInformationInterface {
  id: string = '';

  type: UserListItemAdditionalInformationType;

  userId: string;

  icon: PluginIconType;

  dataTest: string;

  /**
   * Returns object to be used in the setter for the User List Item Additional information Item.
   * In this case, a icon.
   *
   * @param icon - icon to be used in the user list item additional information.
   * It goes on the left side of it.
   * @param userId - the userId in which this information will appear when the user
   * list item is clicked.
   * @param dataTest - string attribute to be used for testing
   *
   * @returns Object that will be interpreted by the core of Bigbluebutton (HTML5).
   */
  constructor({
    id, icon = '', userId = '', dataTest = '',
  }: UserListItemIconProps) {
    if (id) {
      this.id = id;
    }
    this.icon = icon;
    this.userId = userId;
    this.dataTest = dataTest;
    this.type = UserListItemAdditionalInformationType.ICON;
  }

  setItemId: (id: string) => void = (id: string) => {
    this.id = `UserListItemIcon_${id}`;
  };
}

export class UserListItemLabel implements UserListItemAdditionalInformationInterface {
  id: string = '';

  type: UserListItemAdditionalInformationType;

  userId: string;

  icon: PluginIconType;

  label: string;

  dataTest: string;

  /**
   * Returns object to be used in the setter for the User List Item Additional information Item.
   * In this case, a label (Information).
   *
   * @param label - text to be displayed in the user list item.
   * @param icon - icon to be used in the user list item additional information.
   * It goes on the left side of it.
   * @param userId - the userId in which this information will appear when the user
   * list item is clicked.
   * @param dataTest - string attribute to be used for testing
   *
   * @returns Object that will be interpreted by the core of Bigbluebutton (HTML5).
   */
  constructor({
    id, icon = '', userId = '', label = '', dataTest = '',
  }: UserListItemLabelProps) {
    if (id) {
      this.id = id;
    }
    this.icon = icon;
    this.label = label;
    this.userId = userId;
    this.dataTest = dataTest;
    this.type = UserListItemAdditionalInformationType.LABEL;
  }

  setItemId: (id: string) => void = (id: string) => {
    this.id = `UserListItemLabel_${id}`;
  };
}
