/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { TestInfo, APIRequestContext } from '@playwright/test';
import { secret, server } from '../parameters';

export type SampleBeforeAllConfig = {
  pluginName: string;
  envVarName: string;
  setPluginUrl: (url: string) => void;
  getPluginUrl?: () => string | undefined;
};

export function checkPluginAvailability(config: SampleBeforeAllConfig) {
  return async ({ request }: { request: APIRequestContext }, testInfo: TestInfo): Promise<void> => {
    // Check if custom URL is already provided via environment variable
    const customUrl = config.getPluginUrl?.();
    if (customUrl) {
      config.setPluginUrl(customUrl);
      return;
    }

    if (!server) {
      const msg = 'No server URL variable provided. Skipping test';
      console.log(msg);
      testInfo.skip(true, msg);
      return;
    }
    if (!secret) {
      const msg = 'No server secret variable provided. Skipping test';
      console.log(msg);
      testInfo.skip(true, msg);
      return;
    }

    const serverDomain = new URL(server).origin;
    const manifestUrlPath = `/plugins/${config.pluginName}/dist/manifest.json`;
    const pluginUrl = `${serverDomain}${manifestUrlPath}`;

    const response = await request.get(pluginUrl);
    if (!response.ok()) {
      const msg = `Failed to fetch plugin manifest for ${testInfo.title} plugin. returned status ${response.status()}`;
      console.error(msg);
      testInfo.skip(
        true,
        msg,
      );
      return;
    }

    try {
      await response.json();
      config.setPluginUrl(pluginUrl);
    } catch (error) {
      const msg = `Invalid JSON response from plugin manifest for ${testInfo.title} plugin`;
      console.error(msg, error);
      testInfo.skip(true, msg);
    }
  };
}
