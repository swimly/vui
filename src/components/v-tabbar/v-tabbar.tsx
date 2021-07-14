import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-tabbar',
  styleUrl: 'v-tabbar.css',
  shadow: true,
})
export class VTabbar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
