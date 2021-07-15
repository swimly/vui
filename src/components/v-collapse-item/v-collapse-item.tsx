import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-collapse-item',
  styleUrl: 'v-collapse-item.css',
  shadow: true,
})
export class VCollapseItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
