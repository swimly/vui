import { newSpecPage } from '@stencil/core/testing';
import { VTab } from '../v-tab';

describe('v-tab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VTab],
      html: `<v-tab></v-tab>`,
    });
    expect(page.root).toEqualHtml(`
      <v-tab>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-tab>
    `);
  });
});
