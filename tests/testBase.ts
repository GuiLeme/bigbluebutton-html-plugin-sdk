import { test as base } from '@playwright/test';
import { encodeCustomParams } from './core/helpers';
import { Sample } from './core/sample';

const pluginUrl: string | undefined = process.env.ACTIONS_BAR_URL;

export const test = base.extend<{
  sampleTest: Sample;
}>({
  sampleTest: async ({ browser, context, page }, use) => {
    if (!pluginUrl) throw new Error('Plugin URL is not set from beforeAll.');
    const createParameter = encodeCustomParams(`pluginManifests=${JSON.stringify([{ url: pluginUrl }])}`);
    const sampleTest = new Sample({ browser, context });
    await sampleTest.initModPage(page, { createParameter });
    await use(sampleTest);
  },
});
