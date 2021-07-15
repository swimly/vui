import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-popover',
  styleUrl: 'v-popover.css',
  shadow: true,
})
export class VPopover {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
