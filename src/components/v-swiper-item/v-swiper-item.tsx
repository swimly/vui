import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-swiper-item',
  styleUrl: 'v-swiper-item.css',
  shadow: true,
})
export class VSwiperItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
