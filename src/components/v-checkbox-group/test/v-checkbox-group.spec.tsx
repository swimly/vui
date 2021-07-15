import { newSpecPage } from '@stencil/core/testing';
import { VCheckboxGroup } from '../v-checkbox-group';

describe('v-checkbox-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VCheckboxGroup],
      html: `<v-checkbox-group></v-checkbox-group>`,
    });
    expect(page.root).toEqualHtml(`
      <v-checkbox-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-checkbox-group>
    `);
  });
});
