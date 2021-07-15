import { newSpecPage } from '@stencil/core/testing';
import { VRange } from '../v-range';

describe('v-range', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VRange],
      html: `<v-range></v-range>`,
    });
    expect(page.root).toEqualHtml(`
      <v-range>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-range>
    `);
  });
});
