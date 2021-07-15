import { newSpecPage } from '@stencil/core/testing';
import { VMask } from '../v-mask';

describe('v-mask', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VMask],
      html: `<v-mask></v-mask>`,
    });
    expect(page.root).toEqualHtml(`
      <v-mask>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-mask>
    `);
  });
});
