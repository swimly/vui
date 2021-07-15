import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-rate',
  styleUrl: 'v-rate.css',
  shadow: true,
})
export class VRate {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
