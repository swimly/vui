import { newE2EPage } from '@stencil/core/testing';

describe('v-col', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-col></v-col>');

    const element = await page.find('v-col');
    expect(element).toHaveClass('hydrated');
  });
});
