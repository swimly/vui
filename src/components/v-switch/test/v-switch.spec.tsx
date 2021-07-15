import { newSpecPage } from '@stencil/core/testing';
import { VSwitch } from '../v-switch';

describe('v-switch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VSwitch],
      html: `<v-switch></v-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <v-switch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-switch>
    `);
  });
});
