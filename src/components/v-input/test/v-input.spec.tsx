import { newSpecPage } from '@stencil/core/testing';
import { VInput } from '../v-input';

describe('v-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VInput],
      html: `<v-input></v-input>`,
    });
    expect(page.root).toEqualHtml(`
      <v-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-input>
    `);
  });
});
