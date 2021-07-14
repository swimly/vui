import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-icon',
  styleUrl: 'v-icon.css',
  shadow: true,
})
export class VIcon {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
