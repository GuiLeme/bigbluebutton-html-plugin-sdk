import {
  PresentationToolbarItemType,
  UserListDropdownItemType,
  ActionButtonDropdownItemType,
} from '../index';

type PluginProvidedUiItemType = UserListDropdownItemType |
  PresentationToolbarItemType | ActionButtonDropdownItemType;

export interface PluginProvidedUiItemDescriptor {
  /** Defined by BigBlueButton Plugin Engine. */
  id: string;
  type: PluginProvidedUiItemType;
  // type: UserListDropdownItemType | PresentationToolbarItemType;
  setItemId: (id: string) => void;
}

export interface CustomEventHook<T> {
  data: T;
  hook: string;
}

export interface CustomEventHookWrapper<T> extends Event {
  detail: CustomEventHook<T>;
}

// Extensible Areas

// PresentationToolbarItem Extensible Area

export interface PresentationToolbarItem extends PluginProvidedUiItemDescriptor{}

export interface PresentationToolbarButtonProps {
  label: string;
  tooltip: string;
  onClick: () => void;
}

export class PresentationToolbarButton implements PresentationToolbarItem {
  id: string = '';

  type: PresentationToolbarItemType;

  label: string;

  tooltip: string;

  onClick: () => void;

  constructor({ label = '', tooltip = '', onClick = () => {} }: PresentationToolbarButtonProps) {
    this.label = label;
    this.tooltip = tooltip;
    this.onClick = onClick;
    this.type = PresentationToolbarItemType.BUTTON;
  }

  setItemId: (id: string) => void = (id: string) => {
    this.id = `PresentationToolbarButton_${id}`;
  };
}

export class PresentationToolbarSpinner implements PresentationToolbarItem {
  id: string = '';

  type: PresentationToolbarItemType;

  constructor() {
    this.type = PresentationToolbarItemType.SPINNER;
  }

  setItemId: (id: string) => void = (id: string) => {
    this.id = `PresentationToolbarButton_${id}`;
  };
}

export interface PresentationToolbarSeparatorProps {
  width: number;
}
export class PresentationToolbarSeparator implements PresentationToolbarItem {
  id: string = '';

  type: PresentationToolbarItemType;

  width: number;

  constructor({ width } : PresentationToolbarSeparatorProps) {
    this.width = width;
    this.type = PresentationToolbarItemType.SEPARATOR;
  }

  setItemId: (id: string) => void = (id: string) => {
    this.id = `PresentationToolbarButton_${id}`;
  };
}

// UserListDropdownItem Extensible Area

export interface UserListDropdownItem extends PluginProvidedUiItemDescriptor{
  userId: string;
}
interface UserListDropdownOptionProps {
  label: string;
  icon: string;
  tooltip: string;
  allowed: boolean;
  userId: string;
  onClick: () => void;
}

export class UserListDropdownOption implements UserListDropdownItem {
  id: string = '';

  userId: string;

  type: UserListDropdownItemType;

  label: string;

  icon: string;

  tooltip: string;

  allowed: boolean;

  onClick: () => void;

  constructor({
    label = '', icon = '', tooltip = '', allowed = true, onClick = () => {},
    userId = '',
  }: UserListDropdownOptionProps) {
    this.userId = userId;
    this.label = label;
    this.icon = icon;
    this.tooltip = tooltip;
    this.allowed = allowed;
    this.onClick = onClick;
    this.type = UserListDropdownItemType.OPTION;
  }

  setItemId: (id: string) => void = (id: string) => {
    this.id = `UserListDropdownOption_${id}`;
  };
}

interface UserListDropdownSeparatorProps {
  userId: string;
}

export class UserListDropdownSeparator implements UserListDropdownItem {
  id: string = '';

  userId: string;

  type: UserListDropdownItemType;

  constructor({ userId = '' }: UserListDropdownSeparatorProps) {
    this.userId = userId;
    this.type = UserListDropdownItemType.SEPARATOR;
  }

  setItemId: (id: string) => void = (id: string) => {
    this.id = `UserListDropdownSeparator_${id}`;
  };
}

// ActionButtonDropdownItem Extensible Area

export interface ActionButtonDropdownItem extends PluginProvidedUiItemDescriptor{
}
interface ActionButtonDropdownOptionProps {
  label: string;
  icon: string;
  tooltip: string;
  allowed: boolean;
  onClick: () => void;
}

export class ActionButtonDropdownOption implements ActionButtonDropdownItem {
  id: string = '';

  type: ActionButtonDropdownItemType;

  label: string;

  icon: string;

  tooltip: string;

  allowed: boolean;

  onClick: () => void;

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

// Setter Functions for the API
export type SetPresentationToolbarItems = (presentationToolbarItem:
  PresentationToolbarItem[]) => void;

export type SetUserListDropdownItems = (
  userListDropdownItem: UserListDropdownItem[]
) => void;

export type SetActionButtonDropdownItems = (
  actionButtonDropdownItem: ActionButtonDropdownItem[]
) => void;

export interface PluginApi {
  setPresentationToolbarItems: SetPresentationToolbarItems;
  setUserListDropdownItems: SetUserListDropdownItems;
  setActionButtonDropdownItems: SetActionButtonDropdownItems;
}

export interface PluginBrowserWindow extends Window {
  bbb_plugins: { [key: string]: PluginApi};
}
