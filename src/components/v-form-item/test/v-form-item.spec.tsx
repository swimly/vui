import { newSpecPage } from '@stencil/core/testing';
import { VFormItem } from '../v-form-item';

describe('v-form-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VFormItem],
      html: `<v-form-item></v-form-item>`,
    });
    expect(page.root).toEqualHtml(`
      <v-form-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-form-item>
    `);
  });
});
