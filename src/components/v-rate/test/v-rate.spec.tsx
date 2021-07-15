import { newSpecPage } from '@stencil/core/testing';
import { VRate } from '../v-rate';

describe('v-rate', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VRate],
      html: `<v-rate></v-rate>`,
    });
    expect(page.root).toEqualHtml(`
      <v-rate>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-rate>
    `);
  });
});
