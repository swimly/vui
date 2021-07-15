import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-switch',
  styleUrl: 'v-switch.css',
  shadow: true,
})
export class VSwitch {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
