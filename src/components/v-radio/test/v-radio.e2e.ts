import { newE2EPage } from '@stencil/core/testing';

describe('v-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-radio></v-radio>');

    const element = await page.find('v-radio');
    expect(element).toHaveClass('hydrated');
  });
});
