import { newE2EPage } from '@stencil/core/testing';

describe('v-swiper-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-swiper-item></v-swiper-item>');

    const element = await page.find('v-swiper-item');
    expect(element).toHaveClass('hydrated');
  });
});
