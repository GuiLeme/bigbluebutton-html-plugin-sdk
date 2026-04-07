import { PluginProvidedUiItemDescriptor } from '../base';
import { PluginIconType } from '../common/icon';

export interface UserCameraDropdownCallbackFunctionsArguments {
  streamId: string;
  userId: string;
}

export interface OnclickFunctionCallbackArguments
  extends UserCameraDropdownCallbackFunctionsArguments {
  browserClickEvent: React.MouseEvent<HTMLElement>;
}

/**
 * User Camera Dropdown Item - The general user camera dropdown extensible area item
 *
 * @remarks
 * This dropdown is located on the bottom left corner of the user webcam area
 */
export interface UserCameraDropdownInterface extends PluginProvidedUiItemDescriptor {
  displayFunction?: (args: UserCameraDropdownCallbackFunctionsArguments) => boolean;
}

export interface UserCameraDropdownSeparatorProps {
  displayFunction?: (args: UserCameraDropdownCallbackFunctionsArguments) => boolean;
  dataTest?: string;
}

export interface UserCameraDropdownOptionProps {
  id?: string;
  label: string;
  icon: PluginIconType;
  onClick: (args: OnclickFunctionCallbackArguments) => void;
  displayFunction?: (args: UserCameraDropdownCallbackFunctionsArguments) => boolean;
  dataTest?: string;
}
