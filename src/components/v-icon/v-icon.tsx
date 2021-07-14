import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'v-icon',
  styleUrl: 'v-icon.css',
  shadow: true,
})
export class VIcon {
  @Element() el: HTMLElement;
  @Prop() view: number = 1024
  @Prop() path: string
  @Prop() name: string
  componentDidLoad () {
    this.renderIcon()
  }
  render() {
    const {view} = this
    return (
      <Host>
        <svg class="v-icon" aria-hidden="true" viewBox={`0 0 ${view} ${view}`}>
          {this.renderCore()}
        </svg>
      </Host>
    );
  }
  renderCore () {
    const {path} = this
    if (path) {
      return (
        <path id="path"/>
      )
    } else {
      return (
        <use id="use"/>
      )
    }
  }
  renderIcon () {
    const {path, name} = this
    const $path = this.el.shadowRoot.querySelector('#path')
    const $use = this.el.shadowRoot.querySelector('#use')
    if (path) {
      $path.setAttribute('d', path)
    } else if (name) {
      $use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `#icon-${name}`)
    }
  }
}
