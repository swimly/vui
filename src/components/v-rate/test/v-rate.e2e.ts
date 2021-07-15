import { newE2EPage } from '@stencil/core/testing';

describe('v-rate', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-rate></v-rate>');

    const element = await page.find('v-rate');
    expect(element).toHaveClass('hydrated');
  });
});
