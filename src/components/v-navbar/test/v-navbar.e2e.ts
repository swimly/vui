import { newE2EPage } from '@stencil/core/testing';

describe('v-navbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-navbar></v-navbar>');

    const element = await page.find('v-navbar');
    expect(element).toHaveClass('hydrated');
  });
});
