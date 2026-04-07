import { PluginProvidedUiItemDescriptor } from '../base';
import { PluginIconType } from '../common/icon';

/**
 * Options Dropdown Item - The general options dropdown extensible area item
 *
 * @remarks
 * This dropdown is related to the options menu on the top right corner of the UI
 * (the 3 dots)
 */
export interface OptionsDropdownInterface extends PluginProvidedUiItemDescriptor {
}

export interface OptionsDropdownOptionProps {
  id?: string;
  label: string;
  icon: PluginIconType;
  onClick: () => void;
  dataTest?: string;
}
