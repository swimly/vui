import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-dialog',
  styleUrl: 'v-dialog.css',
  shadow: true,
})
export class VDialog {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
