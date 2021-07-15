import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-panel',
  styleUrl: 'v-panel.css',
  shadow: true,
})
export class VPanel {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
