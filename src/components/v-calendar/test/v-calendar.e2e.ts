import { newE2EPage } from '@stencil/core/testing';

describe('v-calendar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-calendar></v-calendar>');

    const element = await page.find('v-calendar');
    expect(element).toHaveClass('hydrated');
  });
});
