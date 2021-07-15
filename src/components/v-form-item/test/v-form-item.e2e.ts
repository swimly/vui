import { newE2EPage } from '@stencil/core/testing';

describe('v-form-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-form-item></v-form-item>');

    const element = await page.find('v-form-item');
    expect(element).toHaveClass('hydrated');
  });
});
