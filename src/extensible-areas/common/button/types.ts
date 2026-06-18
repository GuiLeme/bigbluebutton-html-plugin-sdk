import * as React from 'react';

/**
 * Available size variants for plugin-provided buttons.
 */
export type PluginButtonSize = 'sm' | 'md' | 'lg' | 'jumbo';

/**
 * Shared style properties for plugin-provided buttons.
 */
export interface PluginButtonStyleProps {
  /** Button color variant. */
  color?: string;

  /** Whether the button should be displayed as a circle. */
  circle?: boolean;

  /** Whether the button label should be visually hidden. */
  hideLabel?: boolean;

  /** Button size variant. Available sizes are 'sm', 'md', 'lg', and 'jumbo'. */
  size?: PluginButtonSize;

  /** Custom style properties for the button. */
  style?: React.CSSProperties;
}
