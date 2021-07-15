import { newE2EPage } from '@stencil/core/testing';

describe('v-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-text></v-text>');

    const element = await page.find('v-text');
    expect(element).toHaveClass('hydrated');
  });
});
