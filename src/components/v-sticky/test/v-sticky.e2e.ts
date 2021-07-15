import { newE2EPage } from '@stencil/core/testing';

describe('v-sticky', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-sticky></v-sticky>');

    const element = await page.find('v-sticky');
    expect(element).toHaveClass('hydrated');
  });
});
