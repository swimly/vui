import { newSpecPage } from '@stencil/core/testing';
import { VTitle } from '../v-title';

describe('v-title', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VTitle],
      html: `<v-title></v-title>`,
    });
    expect(page.root).toEqualHtml(`
      <v-title>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-title>
    `);
  });
});
