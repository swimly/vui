import { newE2EPage } from '@stencil/core/testing';

describe('v-keyboard', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-keyboard></v-keyboard>');

    const element = await page.find('v-keyboard');
    expect(element).toHaveClass('hydrated');
  });
});
