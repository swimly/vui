import { newE2EPage } from '@stencil/core/testing';

describe('v-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-dropdown></v-dropdown>');

    const element = await page.find('v-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
