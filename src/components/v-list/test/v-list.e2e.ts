import { newE2EPage } from '@stencil/core/testing';

describe('v-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-list></v-list>');

    const element = await page.find('v-list');
    expect(element).toHaveClass('hydrated');
  });
});
