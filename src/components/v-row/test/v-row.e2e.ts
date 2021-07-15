import { newE2EPage } from '@stencil/core/testing';

describe('v-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-row></v-row>');

    const element = await page.find('v-row');
    expect(element).toHaveClass('hydrated');
  });
});
