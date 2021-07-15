import { newSpecPage } from '@stencil/core/testing';
import { VNotify } from '../v-notify';

describe('v-notify', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VNotify],
      html: `<v-notify></v-notify>`,
    });
    expect(page.root).toEqualHtml(`
      <v-notify>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-notify>
    `);
  });
});
