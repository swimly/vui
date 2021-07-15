import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-toast',
  styleUrl: 'v-toast.css',
  shadow: true,
})
export class VToast {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
