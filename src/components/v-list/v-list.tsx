import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-list',
  styleUrl: 'v-list.css',
  shadow: true,
})
export class VList {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
