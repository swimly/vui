import { newE2EPage } from '@stencil/core/testing';

describe('v-radio-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-radio-group></v-radio-group>');

    const element = await page.find('v-radio-group');
    expect(element).toHaveClass('hydrated');
  });
});
