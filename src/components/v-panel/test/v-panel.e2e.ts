import { newE2EPage } from '@stencil/core/testing';

describe('v-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-panel></v-panel>');

    const element = await page.find('v-panel');
    expect(element).toHaveClass('hydrated');
  });
});
