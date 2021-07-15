import { newSpecPage } from '@stencil/core/testing';
import { VPopup } from '../v-popup';

describe('v-popup', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VPopup],
      html: `<v-popup></v-popup>`,
    });
    expect(page.root).toEqualHtml(`
      <v-popup>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-popup>
    `);
  });
});
