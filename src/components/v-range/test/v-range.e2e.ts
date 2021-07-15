import { newE2EPage } from '@stencil/core/testing';

describe('v-range', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-range></v-range>');

    const element = await page.find('v-range');
    expect(element).toHaveClass('hydrated');
  });
});
