import { PluginProvidedUiItemDescriptor } from '../base';

/**
 * Interface for a generic item for the media area.
 */
export interface MediaAreaInterface extends PluginProvidedUiItemDescriptor{
}

export interface MediaAreaOptionProps {
  id?: string;
  label: string;
  icon: string;
  tooltip: string;
  dataTest?: string;
  allowed: boolean;
  onClick: () => void;
}
