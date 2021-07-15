import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-popup',
  styleUrl: 'v-popup.css',
  shadow: true,
})
export class VPopup {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
