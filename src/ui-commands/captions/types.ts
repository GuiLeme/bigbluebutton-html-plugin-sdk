import { CaptionsLanguageEnum } from './enums';

export interface SetDisplayAudioCaptionsCommandArguments {
  displayAudioCaptions: CaptionsLanguageEnum;
}

export interface UiCommandsCaptionsObject {
  setDisplayAudioCaptions: (
    setDisplayAudioCaptionsCommandArguments: SetDisplayAudioCaptionsCommandArguments
  ) => void;
}
