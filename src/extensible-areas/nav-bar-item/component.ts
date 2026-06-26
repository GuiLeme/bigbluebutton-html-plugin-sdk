import { NavBarItemType, NavBarItemPosition } from './enums';
import {
  NavBarInterface, NavBarButtonProps,
  NavBarInfoProps,
} from './types';
import { PluginIconType } from '../common/icon';
import { PluginButtonSize } from '../common/button';

// NavBar Extensible Area

export class NavBarButton implements NavBarInterface {
  id: string = '';

  type: NavBarItemType;

  label: string;

  icon: PluginIconType;

  tooltip: string;

  disabled: boolean;

  color: string;

  circle: boolean;

  hideLabel: boolean;

  size: PluginButtonSize;

  style: React.CSSProperties;

  dataTest: string;

  position: NavBarItemPosition;

  hasSeparator: boolean;

  onClick: () => void;

  /**
   * Returns object to be used in the setter for the Navigation Bar. In this case,
   * a button.
   *
   * @param label - label to be displayed in navigation bar button.
   * @param tooltip - label to be displayed when hovering the navigation bar button.
   * @param icon - icon to be used in the navigation bar button. It goes in the left side of it.
   * @param onClick - function to be called when clicking the button.
   * @param position - position to place the navigation bar button.
   * See {@link NavBarItemPosition}
   * @param hasSeparator - boolean indicating whether the navigation bar button has separator
   * (vertical bar)
   * @param disabled - if true, the navigation bar button will not be clickable
   * @param color - button color variant, defaults to 'primary'
   * @param circle - if true, the navigation bar button will be displayed as a circle,
   * defaults to false
   * @param hideLabel - if true, the navigation bar button label will be visually hidden,
   * defaults to false
   * @param size - button size variant, defaults to 'md'
   * @param style - style of the navigation bar button
   * @param dataTest - string attribute to be used for testing
   *
   * @returns Object that will be interpreted by the core of Bigbluebutton (HTML5).
   */
  constructor({
    id, label = '', icon = '', tooltip = '', disabled = true, dataTest = '', onClick = () => { },
    position = NavBarItemPosition.RIGHT, hasSeparator = true,
    color = 'primary', circle = false, hideLabel = false, size = 'md', style = {},
  }: NavBarButtonProps) {
    if (id) {
      this.id = id;
    }
    this.label = label;
    this.icon = icon;
    this.tooltip = tooltip;
    this.disabled = disabled;
    this.color = color;
    this.circle = circle;
    this.hideLabel = hideLabel;
    this.size = size;
    this.style = style;
    this.dataTest = dataTest;
    this.onClick = onClick;
    this.type = NavBarItemType.BUTTON;
    this.hasSeparator = hasSeparator;
    this.position = position;
  }

  setItemId: (id: string) => void = (id: string) => {
    this.id = `NavBarButton_${id}`;
  };
}

export class NavBarInfo implements NavBarInterface {
  id: string = '';

  type: NavBarItemType;

  label: string;

  dataTest: string;

  hasSeparator: boolean;

  position: NavBarItemPosition;

  /**
   * Returns object to be used in the setter for the Navigation Bar. In this case,
   * an informative label.
   *
   * @param label - label to be displayed in navigation bar information.
   * @param position - position to place the navigation bar information.
   * See {@link NavBarItemPosition}
   * @param hasSeparator - boolean indicating whether the navigation bar information has separator
   * (vertical bar)
   * @param dataTest - string attribute to be used for testing
   *
   * @returns Object that will be interpreted by the core of Bigbluebutton (HTML5).
   */
  constructor({
    id, label = '', position = NavBarItemPosition.RIGHT,
    hasSeparator = true, dataTest = '',
  }: NavBarInfoProps) {
    if (id) {
      this.id = id;
    }
    this.label = label;
    this.dataTest = dataTest;
    this.type = NavBarItemType.INFO;
    this.position = position;
    this.hasSeparator = hasSeparator;
  }

  setItemId: (id: string) => void = (id: string) => {
    this.id = `NavBarInfo_${id}`;
  };
}
