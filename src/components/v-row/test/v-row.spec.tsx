import { newSpecPage } from '@stencil/core/testing';
import { VRow } from '../v-row';

describe('v-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VRow],
      html: `<v-row></v-row>`,
    });
    expect(page.root).toEqualHtml(`
      <v-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-row>
    `);
  });
});
