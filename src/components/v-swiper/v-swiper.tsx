import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-swiper',
  styleUrl: 'v-swiper.css',
  shadow: true,
})
export class VSwiper {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
