import { NotificationTypeUiCommand } from './enums';
import { PluginIconType } from '../../extensible-areas/common/icon';

export interface SendNotificationCommandArgumentsOptions {
  helpLabel?: string,
  helpLink?: string,
  autoClose?: number, // Time, in milliseconds, to auto-close the notification
}

export interface SendNotificationCommandArguments {
  message: string;
  icon: PluginIconType;
  type: NotificationTypeUiCommand;
  options?: SendNotificationCommandArgumentsOptions;
  content?: string;
  small?: boolean;
}

export interface SetEnableDisplayNotificationsArguments {
  isNotificationDisplayEnabled: boolean;
}

export interface UiCommandsNotificationObject {
  send: (information: SendNotificationCommandArguments) => void;
  setEnabledDisplayNotifications: (isNotificationDisplayEnabled: boolean) => void;
}
