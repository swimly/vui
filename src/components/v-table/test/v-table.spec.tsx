import { newSpecPage } from '@stencil/core/testing';
import { VTable } from '../v-table';

describe('v-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VTable],
      html: `<v-table></v-table>`,
    });
    expect(page.root).toEqualHtml(`
      <v-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-table>
    `);
  });
});
