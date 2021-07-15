import { newE2EPage } from '@stencil/core/testing';

describe('v-actionsheet', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-actionsheet></v-actionsheet>');

    const element = await page.find('v-actionsheet');
    expect(element).toHaveClass('hydrated');
  });
});
