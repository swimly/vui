import { newSpecPage } from '@stencil/core/testing';
import { VToast } from '../v-toast';

describe('v-toast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VToast],
      html: `<v-toast></v-toast>`,
    });
    expect(page.root).toEqualHtml(`
      <v-toast>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-toast>
    `);
  });
});
