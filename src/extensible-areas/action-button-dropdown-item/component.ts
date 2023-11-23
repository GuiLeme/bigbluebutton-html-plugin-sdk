import { ActionButtonDropdownItemType } from './enums';
import {
  ActionButtonDropdownItem, ActionButtonDropdownOptionProps,
} from './types';

// ActionButtonDropdownItem Extensible Area

export class ActionButtonDropdownOption implements ActionButtonDropdownItem {
  id: string = '';

  type: ActionButtonDropdownItemType;

  label: string;

  icon: string;

  tooltip: string;

  allowed: boolean;

  onClick: () => void;

  /**
   * Returns the option for the action button dropdown
   *
   * @param label - label to be displayed on the option
   * @param icon - icon to be displayed on the option
   * @param tooltip - tooltip to be displayed when hovering over option
   * @param allowed - boolean indicating whether the option should be displayed
   * @param onClick - function to be called when clicking
   *
   * @returns the option to be displayed in the action button dropdown
   */
  constructor({
    label = '', icon = '', tooltip = '', allowed = true, onClick = () => {},
  }: ActionButtonDropdownOptionProps) {
    this.label = label;
    this.icon = icon;
    this.tooltip = tooltip;
    this.allowed = allowed;
    this.onClick = onClick;
    this.type = ActionButtonDropdownItemType.OPTION;
  }

  setItemId: (id: string) => void = (id: string) => {
    this.id = `ActionButtonDropdownOption_${id}`;
  };
}

export class ActionButtonDropdownSeparator implements ActionButtonDropdownItem {
  id: string = '';

  type: ActionButtonDropdownItemType;

  constructor() {
    this.type = ActionButtonDropdownItemType.SEPARATOR;
  }

  setItemId: (id: string) => void = (id: string) => {
    this.id = `ActionButtonDropdownSeparator_${id}`;
  };
}
