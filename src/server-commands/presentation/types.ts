export interface UploadPresentationBase64Content {
  base64: string;
}

export interface UploadPresentationBlobContent {
  blob: Blob;
}

export interface UploadPresentationFileContent {
  file: File;
}

export interface UploadPresentationDataUrlContent {
  dataUrl: string;
}

export type UploadPresentationContent =
  | UploadPresentationBase64Content
  | UploadPresentationBlobContent
  | UploadPresentationFileContent
  | UploadPresentationDataUrlContent;

export interface UploadPresentationCommandArguments {
  content: UploadPresentationContent;
  mimeType: string;
  filename?: string;
}

export interface ServerCommandsPresentationObject {
  upload: (uploadPresentationCommandArguments: UploadPresentationCommandArguments) => void;
}
