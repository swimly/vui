import { newSpecPage } from '@stencil/core/testing';
import { VList } from '../v-list';

describe('v-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VList],
      html: `<v-list></v-list>`,
    });
    expect(page.root).toEqualHtml(`
      <v-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-list>
    `);
  });
});
