import { newE2EPage } from '@stencil/core/testing';

describe('v-title', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-title></v-title>');

    const element = await page.find('v-title');
    expect(element).toHaveClass('hydrated');
  });
});
