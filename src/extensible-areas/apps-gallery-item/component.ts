import { AppsGalleryType } from './enums';
import { AppsGalleryInterface, AppsGalleryItemProps } from './types';

export class AppsGalleryEntry implements AppsGalleryInterface {
  id: string = '';

  name: string = '';

  type: AppsGalleryType = AppsGalleryType.ENTRY;

  icon: string = '';

  dataTest: string;

  onClick: () => void;

  /**
   * Returns object to be used in the setter for the Apps Gallery. In this case,
   * an entry.
   *
   * @param name - name to be displayed in the apps gallery entry.
   * @param icon - icon to be displayed in the apps gallery entry.
   * @param dataTest - string attribute to be used for testing
   * @param onClick - function to be called when clicking the entry.
   *
   * @returns Object that will be interpreted by the core of Bigbluebutton (HTML5).
   */
  constructor({
    id,
    name,
    icon,
    dataTest = '',
    onClick,
  }: AppsGalleryItemProps) {
    if (id) {
      this.id = id;
    }
    this.name = name;
    this.icon = icon;
    this.dataTest = dataTest;
    this.onClick = onClick;
  }

  setItemId(id: string): void {
    this.id = id;
  }
}

export default AppsGalleryEntry;
