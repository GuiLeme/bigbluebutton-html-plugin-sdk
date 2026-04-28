export interface UploadPresentationBase64Content {
  base64: string;
}

export type UploadPresentationContent = UploadPresentationBase64Content;

export interface UploadPresentationCommandArguments {
  content: UploadPresentationBase64Content;
  mimeType: string;
  filename?: string;
}

export interface ServerCommandsPresentationObject {
  upload: (uploadPresentationCommandArguments: UploadPresentationCommandArguments) => void;
}
