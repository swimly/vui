import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-keyboard',
  styleUrl: 'v-keyboard.css',
  shadow: true,
})
export class VKeyboard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
