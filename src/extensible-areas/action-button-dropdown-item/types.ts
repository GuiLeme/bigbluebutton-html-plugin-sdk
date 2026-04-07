import { PluginProvidedUiItemDescriptor } from '../base';
import { PluginIconType } from '../common/icon';

/**
 * Interface for a generic item for the action button dropdown.
 */
export interface ActionButtonDropdownInterface extends PluginProvidedUiItemDescriptor {
}

export interface ActionButtonDropdownOptionProps {
  id?: string;
  label: string;
  icon: PluginIconType;
  tooltip: string;
  dataTest?: string;
  allowed: boolean;
  onClick: () => void;
}
