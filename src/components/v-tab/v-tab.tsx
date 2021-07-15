import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-tab',
  styleUrl: 'v-tab.css',
  shadow: true,
})
export class VTab {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
