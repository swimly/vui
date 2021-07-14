import { newE2EPage } from '@stencil/core/testing';

describe('v-tabbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-tabbar></v-tabbar>');

    const element = await page.find('v-tabbar');
    expect(element).toHaveClass('hydrated');
  });
});
