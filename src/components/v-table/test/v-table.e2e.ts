import { newE2EPage } from '@stencil/core/testing';

describe('v-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-table></v-table>');

    const element = await page.find('v-table');
    expect(element).toHaveClass('hydrated');
  });
});
