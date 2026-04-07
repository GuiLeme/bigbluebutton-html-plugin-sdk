import { PluginProvidedUiItemDescriptor } from '../base';
import { PluginIconType } from '../common/icon';

/**
 * User List Item Additional Information - The general user list item additional information item
 *
 * @remarks
 * This area is essentially below the user name of an item of the user list, it is possible
 * to add icons, and labels, for now.
 * Mandatory to have the `userId`
 */
export interface UserListItemAdditionalInformationInterface extends PluginProvidedUiItemDescriptor {
  userId: string;
}
export interface UserListItemIconProps {
  id?: string;
  userId: string;
  icon: PluginIconType;
  dataTest?: string;
}

export interface UserListItemLabelProps {
  id?: string;
  userId: string;
  icon: PluginIconType;
  label: string;
  dataTest?: string;
}
