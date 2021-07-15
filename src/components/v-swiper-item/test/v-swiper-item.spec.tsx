import { newSpecPage } from '@stencil/core/testing';
import { VSwiperItem } from '../v-swiper-item';

describe('v-swiper-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VSwiperItem],
      html: `<v-swiper-item></v-swiper-item>`,
    });
    expect(page.root).toEqualHtml(`
      <v-swiper-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-swiper-item>
    `);
  });
});
