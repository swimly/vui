import { newE2EPage } from '@stencil/core/testing';

describe('v-popup', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-popup></v-popup>');

    const element = await page.find('v-popup');
    expect(element).toHaveClass('hydrated');
  });
});
