import { newSpecPage } from '@stencil/core/testing';
import { VDropdown } from '../v-dropdown';

describe('v-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VDropdown],
      html: `<v-dropdown></v-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <v-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-dropdown>
    `);
  });
});
