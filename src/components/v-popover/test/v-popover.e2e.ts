import { newE2EPage } from '@stencil/core/testing';

describe('v-popover', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-popover></v-popover>');

    const element = await page.find('v-popover');
    expect(element).toHaveClass('hydrated');
  });
});
