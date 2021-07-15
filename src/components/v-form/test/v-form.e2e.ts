import { newE2EPage } from '@stencil/core/testing';

describe('v-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-form></v-form>');

    const element = await page.find('v-form');
    expect(element).toHaveClass('hydrated');
  });
});
