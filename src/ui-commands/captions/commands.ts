import { CaptionsEnum } from './enums';
import { SetDisplayAudioCaptionsCommandArguments } from './types';

export const captions = {
  /**
   * Sets the automatically generated audio captions to be displayed/or not in the client.
   *
   * @param setDisplayAudioCaptionsCommandArguments: object with a
   * {@link CaptionsLanguageEnum} that tells the language to which the core will set the
   * display of the audio captions. If the value is `CaptionsLanguageEnum.NONE`, it will hide the
   * audio captions.
   * Refer to {@link SetDisplayAudioCaptionsCommandArguments} to understand the argument structure.
   */
  setDisplayAudioCaptions: (
    setDisplayAudioCaptions: SetDisplayAudioCaptionsCommandArguments,
  ) => {
    const {
      displayAudioCaptions,
    } = setDisplayAudioCaptions;
    window.dispatchEvent(
      new CustomEvent<
        SetDisplayAudioCaptionsCommandArguments
      >(CaptionsEnum.SET_DISPLAY_AUDIO_CAPTIONS, {
        detail: {
          displayAudioCaptions,
        },
      }),
    );
  },

};
