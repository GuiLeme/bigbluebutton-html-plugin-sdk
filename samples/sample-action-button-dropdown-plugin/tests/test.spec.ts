// eslint-disable-next-line import/no-extraneous-dependencies
import { expect } from '@playwright/test';
import { createSampleTest } from '../../../tests/core/fixtures/sampleFixture';
import { createSampleBeforeAll } from '../../../tests/core/fixtures/sampleBeforeAll';
import { ELEMENT_WAIT_LONGER_TIME } from '../../../tests/core/constants';
import { elements as e } from './elements';

const { test, setPluginUrl, getPluginUrl } = createSampleTest({
  envVarName: 'ACTIONS_BUTTON_DROPDOWN_URL',
  getPluginUrl: () => process.env.ACTION_BUTTON_DROPDOWN_URL,
});

test.describe.parallel('Action button dropdown', () => {
  test.beforeAll(createSampleBeforeAll({
    pluginName: 'sample-action-button-dropdown-plugin',
    envVarName: 'ACTION_BUTTON_DROPDOWN_URL',
    setPluginUrl,
    getPluginUrl,
  }));

  test('should display and log when clicked', async ({ sampleTest }): Promise<void> => {
    await sampleTest.modPage.page.waitForSelector(
      e.whiteboard,
      { timeout: ELEMENT_WAIT_LONGER_TIME },
    );
    await sampleTest.modPage.page.click(e.actions);
    await sampleTest.modPage.hasElement(e.pluginSeparator, 'should display the separator element injected by the plugin');
    await sampleTest.modPage.hasElement(e.pluginButton, 'should display the button element injected by the plugin');
    await sampleTest.modPage.hasText(e.pluginButton, 'Button injected by plugin', 'should display the correct text on the injected button');
    const [consoleMessage] = await Promise.all([
      sampleTest.modPage.waitForPluginLogger(),
      sampleTest.modPage.page.click(e.pluginButton),
    ]);
    expect(
      consoleMessage.text(),
      'should display the expected log from the plugin button correctly',
    ).toContain('Log that the button from sample-action-button-dropdown-plugin has been clicked');
  });
});
