import { newSpecPage } from '@stencil/core/testing';
import { VSticky } from '../v-sticky';

describe('v-sticky', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VSticky],
      html: `<v-sticky></v-sticky>`,
    });
    expect(page.root).toEqualHtml(`
      <v-sticky>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-sticky>
    `);
  });
});
