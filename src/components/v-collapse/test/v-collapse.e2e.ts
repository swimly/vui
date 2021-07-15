import { newE2EPage } from '@stencil/core/testing';

describe('v-collapse', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-collapse></v-collapse>');

    const element = await page.find('v-collapse');
    expect(element).toHaveClass('hydrated');
  });
});
