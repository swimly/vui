import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-range',
  styleUrl: 'v-range.css',
  shadow: true,
})
export class VRange {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
