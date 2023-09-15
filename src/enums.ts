enum BbbHookEvents {
  Update = 'UPDATE_HOOK',
  Subscribe = 'SUBSCRIBE_TO_HOOK',
  Unsubscribe = 'UNSUBSCRIBE_FROM_HOOK'
}

enum BbbHooks {
  UseCurrentPresentation = 'BbbHooks::UseCurrentPresentation',
  UseLoadedUserList = 'BbbHooks::UseLoadedUserList',
}

export const Internal = {
  BbbHookEvents,
  BbbHooks,
};

// Presentation toolbar items types:
export enum PresentationToolbarItemType {
  BUTTON = 'PRESENTATION_TOOLBAR_BUTTON',
  SPINNER = 'PRESENTATION_TOOLBAR_SPINNER',
  SEPARATOR = 'PRESENTATION_TOOLBAR_SEPARATOR',
}

// Participant dropdown items types:
export enum UserListDropdownItemType {
  OPTION = 'USER_LIST_DROPDOWN_OPTION',
  SEPARATOR = 'USER_LIST_DROPDOWN_SEPARATOR',
}

// Participant dropdown items types:
export enum ActionButtonDropdownItemType {
  OPTION = 'ACTION_BUTTON_DROPDOWN_OPTION',
  SEPARATOR = 'ACTION_BUTTON_DROPDOWN_SEPARATOR',
}
