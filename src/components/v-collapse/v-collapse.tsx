import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-collapse',
  styleUrl: 'v-collapse.css',
  shadow: true,
})
export class VCollapse {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
