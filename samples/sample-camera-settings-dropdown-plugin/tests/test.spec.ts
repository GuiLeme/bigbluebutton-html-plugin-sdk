/* eslint-disable import/no-extraneous-dependencies */
import { expect } from '@playwright/test';
import { createSampleTest } from '../../../tests/core/fixtures/sampleFixture';
import { checkPluginAvailability } from '../../../tests/core/fixtures/sampleBeforeAll';
import { elements as e } from './elements';
import { ELEMENT_WAIT_LONGER_TIME } from '../../../tests/core/constants';

const { test, setPluginUrl, getPluginUrl } = createSampleTest({
  envVarName: 'CAMERA_SETTINGS_DROPDOWN_URL',
  getPluginUrl: () => process.env.CAMERA_SETTINGS_DROPDOWN_URL,
});

test.describe.parallel('Camera Settings Dropdown', () => {
  test.beforeAll(checkPluginAvailability({
    pluginName: 'sample-camera-settings-dropdown-plugin',
    envVarName: 'CAMERA_SETTINGS_DROPDOWN_URL',
    setPluginUrl,
    getPluginUrl,
  }));

  test('should display the button with icon and log when clicked', async ({ sampleTest }): Promise<void> => {
    await sampleTest.modPage.page.waitForSelector(
      e.whiteboard,
      { timeout: ELEMENT_WAIT_LONGER_TIME },
    );
    await sampleTest.modPage.page.click(e.joinVideoButton);
    await sampleTest.modPage.page.click(e.startSharingWebcam);
    await sampleTest.modPage.hasElement(e.leaveVideo, 'should display the leave video button after joining video');
    await sampleTest.modPage.hasElement('video', 'should display the video element after joining video');
    await sampleTest.modPage.page.click(e.videoDropdownMenu);

    const cameraSettingsButton = sampleTest.modPage.getLocator(
      e.cameraSettingsDropdownButtonPlugin,
    );
    await expect.soft(cameraSettingsButton, 'should display the camera settings dropdown button injected by the plugin').toBeVisible();
    const iconElement = cameraSettingsButton.locator('i');
    await expect.soft(iconElement, 'should contain correct icon class').toHaveClass(/icon-bbb-user/);
    const [consoleMessage] = await Promise.all([
      sampleTest.modPage.waitForPluginLogger(),
      sampleTest.modPage.page.click(e.cameraSettingsDropdownButtonPlugin),
    ]);
    expect(
      consoleMessage.text(),
      'should display the expected log from the plugin button correctly',
    ).toContain('Log from camera settings plugin');
  });
});
