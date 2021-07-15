import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-mask',
  styleUrl: 'v-mask.css',
  shadow: true,
})
export class VMask {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
