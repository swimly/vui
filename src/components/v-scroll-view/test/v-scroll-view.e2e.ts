import { newE2EPage } from '@stencil/core/testing';

describe('v-scroll-view', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-scroll-view></v-scroll-view>');

    const element = await page.find('v-scroll-view');
    expect(element).toHaveClass('hydrated');
  });
});
