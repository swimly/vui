import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-scroll-view',
  styleUrl: 'v-scroll-view.css',
  shadow: true,
})
export class VScrollView {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
