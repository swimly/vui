import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-checkbox',
  styleUrl: 'v-checkbox.css',
  shadow: true,
})
export class VCheckbox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
