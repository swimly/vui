import { newSpecPage } from '@stencil/core/testing';
import { VTabbar } from '../v-tabbar';

describe('v-tabbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VTabbar],
      html: `<v-tabbar></v-tabbar>`,
    });
    expect(page.root).toEqualHtml(`
      <v-tabbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-tabbar>
    `);
  });
});
