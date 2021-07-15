import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'v-row',
  styleUrl: 'v-row.css',
  shadow: true,
})
export class VRow {
  @Prop() gutter:number = 0
  render() {
    return (
      <Host class="v-row">
        <slot></slot>
      </Host>
    );
  }

}
