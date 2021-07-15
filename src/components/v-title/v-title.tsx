import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-title',
  styleUrl: 'v-title.css',
  shadow: true,
})
export class VTitle {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
