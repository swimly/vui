import { newSpecPage } from '@stencil/core/testing';
import { VSpace } from '../v-space';

describe('v-space', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VSpace],
      html: `<v-space></v-space>`,
    });
    expect(page.root).toEqualHtml(`
      <v-space>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-space>
    `);
  });
});
