import { PluginProvidedUiItemDescriptor } from '../base';
import { AppsGalleryType } from './enums';
import { PluginIconType } from '../common/icon';

export interface AppsGalleryInterface extends PluginProvidedUiItemDescriptor {
  type: AppsGalleryType;
}

export interface AppsGalleryItemProps {
  id?: string;
  name: string;
  icon: PluginIconType;
  dataTest?: string;
  onClick: () => void;
}
