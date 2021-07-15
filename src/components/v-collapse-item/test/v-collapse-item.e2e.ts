import { newE2EPage } from '@stencil/core/testing';

describe('v-collapse-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-collapse-item></v-collapse-item>');

    const element = await page.find('v-collapse-item');
    expect(element).toHaveClass('hydrated');
  });
});
