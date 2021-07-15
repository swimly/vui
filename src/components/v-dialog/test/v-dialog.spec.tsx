import { newSpecPage } from '@stencil/core/testing';
import { VDialog } from '../v-dialog';

describe('v-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VDialog],
      html: `<v-dialog></v-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <v-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-dialog>
    `);
  });
});
