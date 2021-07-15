import { newSpecPage } from '@stencil/core/testing';
import { VKeyboard } from '../v-keyboard';

describe('v-keyboard', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VKeyboard],
      html: `<v-keyboard></v-keyboard>`,
    });
    expect(page.root).toEqualHtml(`
      <v-keyboard>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-keyboard>
    `);
  });
});
