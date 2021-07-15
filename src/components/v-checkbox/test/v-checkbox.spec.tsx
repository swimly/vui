import { newSpecPage } from '@stencil/core/testing';
import { VCheckbox } from '../v-checkbox';

describe('v-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VCheckbox],
      html: `<v-checkbox></v-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <v-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-checkbox>
    `);
  });
});
