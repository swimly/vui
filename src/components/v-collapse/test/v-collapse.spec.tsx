import { newSpecPage } from '@stencil/core/testing';
import { VCollapse } from '../v-collapse';

describe('v-collapse', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VCollapse],
      html: `<v-collapse></v-collapse>`,
    });
    expect(page.root).toEqualHtml(`
      <v-collapse>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-collapse>
    `);
  });
});
