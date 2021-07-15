import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-form-item',
  styleUrl: 'v-form-item.css',
  shadow: true,
})
export class VFormItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
