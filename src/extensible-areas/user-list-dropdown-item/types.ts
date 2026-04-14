import { PluginProvidedUiItemDescriptor } from '../base';
import { UserListDropdownSeparatorPosition } from './enums';
import { PluginIconType } from '../common/icon';

/**
 * User List Dropdown Item - The general user list dropdown extensible area item
 *
 * @remarks
 * This dropdown is located on the bottom left corner of the user webcam area.
 * Mandatory to have the `userId`
 */
export interface UserListDropdownInterface extends PluginProvidedUiItemDescriptor {
  userId: string;
}

export interface UserListDropdownOptionProps {
  label: string;
  icon: PluginIconType;
  tooltip: string;
  allowed: boolean;
  userId: string;
  onClick: () => void;
  dataTest?: string;
}

export interface UserListDropdownSeparatorProps {
  userId: string;
  position?: UserListDropdownSeparatorPosition;
  dataTest?: string;
}

export interface UserListDropdownGenericContentInformationProps {
  id?: string;
  contentFunction: (element: HTMLElement) => void;
  allowed: boolean;
  userId: string;
  dataTest?: string;
}

export interface UserListDropdownFixedContentInformationProps {
  id?: string;
  label: string;
  icon?: PluginIconType;
  iconRight?: PluginIconType;
  allowed: boolean;
  userId: string;
  textColor: string;
  dataTest?: string;
}

export interface UserListDropdownTitleActionOnClickArguments {
  browserEvent: React.MouseEvent<HTMLElement>;
}

export interface UserListDropdownTitleActionProps {
  id?: string;
  tooltip: string;
  icon: PluginIconType;
  userId: string;
  onClick: (args: UserListDropdownTitleActionOnClickArguments) => void;
  dataTest?: string;
}
