import { PluginProvidedUiItemDescriptor } from '../base';
import { PluginIconType } from '../common/icon';

/**
 * Interface for a generic item for the media area.
 */
export interface MediaAreaInterface extends PluginProvidedUiItemDescriptor{
}

export interface MediaAreaButtonIconSvg {
  svgContent: React.SVGProps<SVGSVGElement>;
}

export interface MediaAreaButtonIconName {
  /**
   * Default icon name defined by BBB (see options there).
   */
  iconName: string;
}

export interface MediaAreaOptionProps {
  id?: string;
  label: string;
  icon: PluginIconType;
  tooltip: string;
  dataTest?: string;
  allowed: boolean;
  onClick: () => void;
}
