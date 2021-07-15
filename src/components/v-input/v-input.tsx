import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-input',
  styleUrl: 'v-input.css',
  shadow: true,
})
export class VInput {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
