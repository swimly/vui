import { newE2EPage } from '@stencil/core/testing';

describe('v-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-tab></v-tab>');

    const element = await page.find('v-tab');
    expect(element).toHaveClass('hydrated');
  });
});
