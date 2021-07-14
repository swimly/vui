import { newSpecPage } from '@stencil/core/testing';
import { VPage } from '../v-page';

describe('v-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VPage],
      html: `<v-page></v-page>`,
    });
    expect(page.root).toEqualHtml(`
      <v-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-page>
    `);
  });
});
