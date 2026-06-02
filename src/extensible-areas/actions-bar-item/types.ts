import { ChangeEvent, MouseEvent } from 'react';
import { PluginProvidedUiItemDescriptor } from '../base';
import { ActionsBarItemType, ActionsBarPosition } from './enums';
import { PluginIconType } from '../common/icon';
import { PluginButtonStyleProps } from '../common/button';

/**
 * Interface for the generic Actions bar item. (`position` is mandatory)
 */
export interface ActionsBarInterface extends PluginProvidedUiItemDescriptor {
  position: ActionsBarPosition;
}

export interface ActionsBarItemProps {
  id?: string;
  position: ActionsBarPosition;
  type: ActionsBarItemType;
  dataTest?: string;
}

export interface ActionsBarButtonProps extends PluginButtonStyleProps {
  id?: string;
  icon: PluginIconType;
  tooltip: string;
  position: ActionsBarPosition;
  dataTest?: string;
  onClick: () => void;
}

export interface ActionsBarSeparatorProps {
  position: ActionsBarPosition;
  icon?: PluginIconType;
  dataTest?: string;
}

export interface SelectOption {
  value: string | number;
  label: string;
  dataTest?: string;
}

export interface ToggleGroupOption extends SelectOption {
  dataTest?: string;
}

export interface ActionsBarSelectorProps {
  id?: string;
  title: string;
  options: SelectOption[];
  defaultOption?: SelectOption;
  onChange: (value: string | number, event: ChangeEvent<HTMLInputElement>) => void;
  position: ActionsBarPosition;
  width?: number;
  dataTest?: string;
}

export interface ActionsBarToggleGroupProps {
  id?: string;
  title: string;
  options: ToggleGroupOption[];
  defaultOption?: ToggleGroupOption;
  exclusive?: boolean;
  onChange: (values: string | number | string[] | number[], event: MouseEvent<HTMLElement>) => void;
  position: ActionsBarPosition;
  dataTest?: string;
}
