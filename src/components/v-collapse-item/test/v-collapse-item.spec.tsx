import { newSpecPage } from '@stencil/core/testing';
import { VCollapseItem } from '../v-collapse-item';

describe('v-collapse-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VCollapseItem],
      html: `<v-collapse-item></v-collapse-item>`,
    });
    expect(page.root).toEqualHtml(`
      <v-collapse-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-collapse-item>
    `);
  });
});
