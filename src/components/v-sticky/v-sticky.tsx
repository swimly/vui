import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-sticky',
  styleUrl: 'v-sticky.css',
  shadow: true,
})
export class VSticky {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
