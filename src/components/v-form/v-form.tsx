import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-form',
  styleUrl: 'v-form.css',
  shadow: true,
})
export class VForm {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
