import { PluginProvidedUiItemDescriptor } from '../base';
import { PluginButtonStyleProps } from '../common/button';

/**
 * Interface for a generic item for presentation toolbar.
 */
export interface PresentationToolbarInterface extends PluginProvidedUiItemDescriptor {}

export interface PresentationToolbarButtonProps extends PluginButtonStyleProps {
  id?: string;
  label: string;
  tooltip: string;
  dataTest?: string;
  onClick: () => void;
}
