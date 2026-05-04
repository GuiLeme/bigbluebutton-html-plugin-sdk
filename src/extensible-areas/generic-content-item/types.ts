import * as ReactDOM from 'react-dom/client';
import { PluginProvidedUiItemDescriptor } from '../base';
import { PluginIconType } from '../common/icon';

export interface GenericContentInterface extends PluginProvidedUiItemDescriptor {
}

export interface GenericContentMainAreaProps {
  id?: string;
  contentFunction: (element: HTMLElement) => ReactDOM.Root;
  dataTest?: string;
}

export interface GenericContentSidekickAreaProps {
  id?: string;
  contentFunction: (element: HTMLElement) => ReactDOM.Root;
  name: string;
  section: string;
  buttonIcon: PluginIconType;
  open: boolean;
  dataTest?: string;
}
