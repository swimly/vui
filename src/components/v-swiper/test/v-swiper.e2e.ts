import { newE2EPage } from '@stencil/core/testing';

describe('v-swiper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-swiper></v-swiper>');

    const element = await page.find('v-swiper');
    expect(element).toHaveClass('hydrated');
  });
});
