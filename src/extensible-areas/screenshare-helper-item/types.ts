import { PluginProvidedUiItemDescriptor } from '../base';
import { ScreenshareHelperItemPosition } from './enums';
import { PluginIconType } from '../common/icon';

export interface ScreenshareHelperInterface extends PluginProvidedUiItemDescriptor {
  position: ScreenshareHelperItemPosition;
}

export interface ScreenshareHelperButtonOnclickCallback {
  browserClickEvent: React.MouseEvent<HTMLElement>;
}

export interface ScreenshareHelperButtonInterface extends ScreenshareHelperInterface {
  label: string;

  icon: PluginIconType;

  tooltip: string;

  disabled: boolean;

  position: ScreenshareHelperItemPosition;

  onClick: (args: ScreenshareHelperButtonOnclickCallback) => void;
}

export interface ScreenshareHelperButtonProps {
  id?: string;
  label?: string;
  icon: PluginIconType;
  tooltip: string;
  disabled: boolean;
  hasSeparator: boolean;
  position: ScreenshareHelperItemPosition;
  onClick: (args: ScreenshareHelperButtonOnclickCallback) => void;
  dataTest?: string;
}
