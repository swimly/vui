import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-actionsheet',
  styleUrl: 'v-actionsheet.css',
  shadow: true,
})
export class VActionsheet {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
