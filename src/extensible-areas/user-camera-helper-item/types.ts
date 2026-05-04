import { PluginProvidedUiItemDescriptor } from '../base';
import { UserCameraHelperItemPosition } from './enums';
import { PluginIconType } from '../common/icon';

export interface UserCameraHelperInterface extends PluginProvidedUiItemDescriptor {
  position: UserCameraHelperItemPosition;
}

export interface UserCameraHelperButtonOnclickCallback {
  userId: string;
  streamId: string;
  browserClickEvent: React.MouseEvent<HTMLElement>;
}

export interface UserCameraHelperCallbackFunctionArguments {
  streamId: string;
  userId: string;
}

export interface UserCameraHelperButtonInterface extends UserCameraHelperInterface {
  label: string;

  icon: PluginIconType;

  tooltip: string;

  disabled: boolean;

  position: UserCameraHelperItemPosition;

  displayFunction?: (args: UserCameraHelperCallbackFunctionArguments) => boolean;

  onClick: (args: UserCameraHelperButtonOnclickCallback) => void;
}

export interface UserCameraHelperButtonProps {
  id?: string;
  label?: string;
  icon: PluginIconType;
  tooltip: string;
  disabled: boolean;
  displayFunction?: (args: UserCameraHelperCallbackFunctionArguments) => boolean;
  position: UserCameraHelperItemPosition;
  onClick: (args: UserCameraHelperButtonOnclickCallback) => void;
  dataTest?: string;
}
