import { newSpecPage } from '@stencil/core/testing';
import { VForm } from '../v-form';

describe('v-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VForm],
      html: `<v-form></v-form>`,
    });
    expect(page.root).toEqualHtml(`
      <v-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-form>
    `);
  });
});
