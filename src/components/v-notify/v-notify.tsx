import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-notify',
  styleUrl: 'v-notify.css',
  shadow: true,
})
export class VNotify {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
