import { newSpecPage } from '@stencil/core/testing';
import { VRadio } from '../v-radio';

describe('v-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VRadio],
      html: `<v-radio></v-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <v-radio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-radio>
    `);
  });
});
