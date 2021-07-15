import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-checkbox-group',
  styleUrl: 'v-checkbox-group.css',
  shadow: true,
})
export class VCheckboxGroup {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
