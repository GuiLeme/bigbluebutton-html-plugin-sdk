import { PluginProvidedUiItemDescriptor } from '../base';

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

export type MediaAreaIconType = MediaAreaButtonIconSvg | MediaAreaButtonIconName

export interface MediaAreaOptionProps {
  id?: string;
  label: string;
  icon: MediaAreaIconType;
  tooltip: string;
  dataTest?: string;
  allowed: boolean;
  onClick: () => void;
}
