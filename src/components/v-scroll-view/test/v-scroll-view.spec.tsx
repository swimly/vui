import { newSpecPage } from '@stencil/core/testing';
import { VScrollView } from '../v-scroll-view';

describe('v-scroll-view', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VScrollView],
      html: `<v-scroll-view></v-scroll-view>`,
    });
    expect(page.root).toEqualHtml(`
      <v-scroll-view>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-scroll-view>
    `);
  });
});
