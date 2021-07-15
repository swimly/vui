import { newE2EPage } from '@stencil/core/testing';

describe('v-notify', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-notify></v-notify>');

    const element = await page.find('v-notify');
    expect(element).toHaveClass('hydrated');
  });
});
