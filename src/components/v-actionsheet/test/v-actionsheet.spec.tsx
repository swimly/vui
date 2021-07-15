import { newSpecPage } from '@stencil/core/testing';
import { VActionsheet } from '../v-actionsheet';

describe('v-actionsheet', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VActionsheet],
      html: `<v-actionsheet></v-actionsheet>`,
    });
    expect(page.root).toEqualHtml(`
      <v-actionsheet>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-actionsheet>
    `);
  });
});
