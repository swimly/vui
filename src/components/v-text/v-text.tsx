import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-text',
  styleUrl: 'v-text.css',
  shadow: true,
})
export class VText {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
