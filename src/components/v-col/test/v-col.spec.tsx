import { newSpecPage } from '@stencil/core/testing';
import { VCol } from '../v-col';

describe('v-col', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VCol],
      html: `<v-col></v-col>`,
    });
    expect(page.root).toEqualHtml(`
      <v-col>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-col>
    `);
  });
});
