import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-table',
  styleUrl: 'v-table.css',
  shadow: true,
})
export class VTable {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
