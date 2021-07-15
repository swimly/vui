import { newE2EPage } from '@stencil/core/testing';

describe('v-toast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-toast></v-toast>');

    const element = await page.find('v-toast');
    expect(element).toHaveClass('hydrated');
  });
});
