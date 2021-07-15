import { newSpecPage } from '@stencil/core/testing';
import { VPopover } from '../v-popover';

describe('v-popover', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VPopover],
      html: `<v-popover></v-popover>`,
    });
    expect(page.root).toEqualHtml(`
      <v-popover>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-popover>
    `);
  });
});
