import { newSpecPage } from '@stencil/core/testing';
import { VPanel } from '../v-panel';

describe('v-panel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VPanel],
      html: `<v-panel></v-panel>`,
    });
    expect(page.root).toEqualHtml(`
      <v-panel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-panel>
    `);
  });
});
