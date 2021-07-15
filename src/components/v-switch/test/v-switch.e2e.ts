import { newE2EPage } from '@stencil/core/testing';

describe('v-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-switch></v-switch>');

    const element = await page.find('v-switch');
    expect(element).toHaveClass('hydrated');
  });
});
