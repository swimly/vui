import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-space',
  styleUrl: 'v-space.css',
  shadow: true,
})
export class VSpace {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
