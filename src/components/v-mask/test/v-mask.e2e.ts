import { newE2EPage } from '@stencil/core/testing';

describe('v-mask', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-mask></v-mask>');

    const element = await page.find('v-mask');
    expect(element).toHaveClass('hydrated');
  });
});
