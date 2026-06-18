import { PluginProvidedUiItemDescriptor } from '../base';
import { NavBarItemPosition } from './enums';
import { PluginIconType } from '../common/icon';
import { PluginButtonStyleProps } from '../common/button';

export interface NavBarInterface extends PluginProvidedUiItemDescriptor {
  position: NavBarItemPosition;
  hasSeparator: boolean;
}

export interface NavBarButtonProps extends PluginButtonStyleProps {
  id?: string;
  label: string;
  icon: PluginIconType;
  tooltip: string;
  disabled: boolean;
  hasSeparator: boolean;
  position: NavBarItemPosition;
  onClick: () => void;
  dataTest?: string;
}

export interface NavBarInfoProps {
  id?: string;
  label: string;
  hasSeparator: boolean;
  position: NavBarItemPosition;
  dataTest?: string;
}
