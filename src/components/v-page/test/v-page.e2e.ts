import { newE2EPage } from '@stencil/core/testing';

describe('v-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-page></v-page>');

    const element = await page.find('v-page');
    expect(element).toHaveClass('hydrated');
  });
});
