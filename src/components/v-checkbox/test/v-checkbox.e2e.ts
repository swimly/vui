import { newE2EPage } from '@stencil/core/testing';

describe('v-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-checkbox></v-checkbox>');

    const element = await page.find('v-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
