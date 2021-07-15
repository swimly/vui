import { newE2EPage } from '@stencil/core/testing';

describe('v-space', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-space></v-space>');

    const element = await page.find('v-space');
    expect(element).toHaveClass('hydrated');
  });
});
