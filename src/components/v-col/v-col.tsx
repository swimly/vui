import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'v-col',
  styleUrl: 'v-col.css',
  shadow: true,
})
export class VCol {
  @Prop() span:number = 24
  render() {
    const {span} = this
    const style = {
      width: `${100/24*span}%`
    }
    return (
      <Host class="v-col" style={style}>
        <slot></slot>
      </Host>
    );
  }

}
