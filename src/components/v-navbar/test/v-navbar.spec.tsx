import { newSpecPage } from '@stencil/core/testing';
import { VNavbar } from '../v-navbar';

describe('v-navbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VNavbar],
      html: `<v-navbar></v-navbar>`,
    });
    expect(page.root).toEqualHtml(`
      <v-navbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-navbar>
    `);
  });
});
