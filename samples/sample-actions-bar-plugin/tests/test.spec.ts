/* eslint-disable import/no-extraneous-dependencies */
import { expect } from '@playwright/test';
import { createSampleTest } from '../../../tests/core/fixtures/sampleFixture';
import { checkPluginAvailability } from '../../../tests/core/fixtures/sampleBeforeAll';
import { elements as e } from './elements';
import { extractObject } from '../../../tests/utils/extractObject';

const { test, setPluginUrl, getPluginUrl } = createSampleTest({
  envVarName: 'ACTIONS_BAR_URL',
  getPluginUrl: () => process.env.ACTIONS_BAR_URL,
});

test.describe.parallel('Action bar', () => {
  test.beforeAll(checkPluginAvailability({
    pluginName: 'sample-actions-bar-plugin',
    envVarName: 'ACTIONS_BAR_URL',
    setPluginUrl,
    getPluginUrl,
  }));

  test('should log expected message when custom SVG button is clicked', async ({ sampleTest }) => {
    await sampleTest.modPage.hasElement(e.actionsBarButtonCustomSvg, 'should display the button with custom SVG');
    const [consoleMessage] = await Promise.all([
      sampleTest.modPage.waitForPluginLogger(),
      sampleTest.modPage.page.click(e.actionsBarButtonCustomSvg),
    ]);
    expect(
      consoleMessage.text(),
      'should display the expected log when the button with custom SVG is clicked',
    ).toContain('The actions bar button from plugin was clicked');
  });

  test('should handle selector button click and log expected values', async ({ sampleTest }) => {
    await sampleTest.modPage.hasElement(e.actionsBarButtonSelector, 'should display the button with selector');
    const inputLocator = sampleTest.modPage.getLocator(e.actionsBarButtonSelector).locator('input');
    await inputLocator.focus();
    await inputLocator.click({ force: true });
    const [consoleMessage] = await Promise.all([
      sampleTest.modPage.waitForPluginLogger(),
      sampleTest.modPage.page.click('li[data-value="1"]'),
    ]);

    expect.soft(
      consoleMessage.text(),
      'should log the expected string when the selector button is clicked',
    ).toContain('The actions bar selector has changed ');
    expect.soft(
      extractObject<{ value?: string }>(consoleMessage.text())?.value,
      'should log the expected value in the object when the selector button is clicked',
    ).toBe(1);
    expect(inputLocator, 'should change to the expected new value').toHaveValue('1');
  });

  test('should verify selector icon has correct class', async ({ sampleTest }) => {
    await sampleTest.modPage.hasElement(e.actionsBarButtonSelectorIcon, 'should display the button with selector icon');
    const iconLocator = sampleTest.modPage.getLocator(e.actionsBarButtonSelectorIcon).locator('i');
    expect(
      iconLocator,
      'should have the bbb-whiteboard class for the icon',
    ).toHaveClass(/icon-bbb-whiteboard/);
  });

  test('should handle toggle group button click and log expected values', async ({ sampleTest }) => {
    await sampleTest.modPage.hasElement(e.actionsBarButtonToggleGroup, 'should display the button with toggle group');
    const toggleGroupItemLocator = sampleTest.modPage.getLocator(e.actionsBarButtonToggleGroup).locator('button[value="1"]');
    const [consoleMessage] = await Promise.all([
      sampleTest.modPage.waitForPluginLogger(),
      toggleGroupItemLocator.click(),
    ]);

    expect.soft(
      consoleMessage.text(),
      'should log the expected string when the toggle group button is clicked',
    ).toContain('The actions bar toggle group has changed');
    expect.soft(
      extractObject<{ value?: string }>(consoleMessage.text())?.value,
      'should log the expected value in the object when the toggle group button is clicked',
    ).toBe(1);
    expect.soft(toggleGroupItemLocator, '').toHaveClass(/Mui-selected/);
    expect(toggleGroupItemLocator, '').toHaveAttribute('aria-pressed', 'true');
  });
});
