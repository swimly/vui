import { newE2EPage } from '@stencil/core/testing';

describe('v-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-input></v-input>');

    const element = await page.find('v-input');
    expect(element).toHaveClass('hydrated');
  });
});
