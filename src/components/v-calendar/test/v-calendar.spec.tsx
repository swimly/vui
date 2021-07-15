import { newSpecPage } from '@stencil/core/testing';
import { VCalendar } from '../v-calendar';

describe('v-calendar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VCalendar],
      html: `<v-calendar></v-calendar>`,
    });
    expect(page.root).toEqualHtml(`
      <v-calendar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-calendar>
    `);
  });
});
