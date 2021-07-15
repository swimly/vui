import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-dropdown',
  styleUrl: 'v-dropdown.css',
  shadow: true,
})
export class VDropdown {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
