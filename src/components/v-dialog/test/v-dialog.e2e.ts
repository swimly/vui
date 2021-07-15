import { newE2EPage } from '@stencil/core/testing';

describe('v-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-dialog></v-dialog>');

    const element = await page.find('v-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
