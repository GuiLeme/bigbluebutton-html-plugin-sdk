import * as React from 'react';

export interface PluginIconName {
  iconName: string;
}

export interface PluginIconSvgContent {
  svgContent: React.SVGProps<SVGSVGElement>;
}

export type PluginIconType = string | PluginIconName | PluginIconSvgContent;
