import { ScreenshareCommandsEnum } from './enums';

export const screenshare = {
  /**
   * Stops the ongoing screenshare session.
   */
  stop: () => {
    window.dispatchEvent(new Event(ScreenshareCommandsEnum.STOP));
  },
};
