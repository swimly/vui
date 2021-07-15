import { newE2EPage } from '@stencil/core/testing';

describe('v-checkbox-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-checkbox-group></v-checkbox-group>');

    const element = await page.find('v-checkbox-group');
    expect(element).toHaveClass('hydrated');
  });
});
