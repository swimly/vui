import { newSpecPage } from '@stencil/core/testing';
import { VSwiper } from '../v-swiper';

describe('v-swiper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VSwiper],
      html: `<v-swiper></v-swiper>`,
    });
    expect(page.root).toEqualHtml(`
      <v-swiper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-swiper>
    `);
  });
});
