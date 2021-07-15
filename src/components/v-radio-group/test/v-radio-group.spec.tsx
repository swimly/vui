import { newSpecPage } from '@stencil/core/testing';
import { VRadioGroup } from '../v-radio-group';

describe('v-radio-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VRadioGroup],
      html: `<v-radio-group></v-radio-group>`,
    });
    expect(page.root).toEqualHtml(`
      <v-radio-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-radio-group>
    `);
  });
});
