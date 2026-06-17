import { PresentationCommandsEnum } from './enum';
import { UploadPresentationCommandArguments } from './types';

export const presentation = {
  /**
   * Uploads a presentation (if presenter, ignores otherwise): Image, PDF, etc.
   *
   * @param uploadPresentationCommandArguments Content which will be sent to be uploaded
   *  as presentation - Can be base64 or url.
   */
  upload: (uploadPresentationCommandArguments: UploadPresentationCommandArguments) => {
    window.dispatchEvent(
      new CustomEvent<
        UploadPresentationCommandArguments
      >(PresentationCommandsEnum.UPLOAD, {
        detail: uploadPresentationCommandArguments,
      }),
    );
  },
};
