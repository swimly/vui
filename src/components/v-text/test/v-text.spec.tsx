import { newSpecPage } from '@stencil/core/testing';
import { VText } from '../v-text';

describe('v-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VText],
      html: `<v-text></v-text>`,
    });
    expect(page.root).toEqualHtml(`
      <v-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-text>
    `);
  });
});
