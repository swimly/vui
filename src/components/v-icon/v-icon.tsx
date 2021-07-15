import { Component, Host, h, Prop, Element } from '@stencil/core';
import svg from './asets/iconfont.js'
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
  @Prop() size: number = 16
  @Prop() color: string
  componentDidLoad () {
    this.parseStringtoDom()
    this.renderIcon()
  }
  render() {
    const {view, size, color} = this
    const style = {
      width: `${size}px`,
      height: `${size}px`,
      color: color ? color : 'currentColor'
    }
    return (
      <Host style={style}>
        <svg fill='currentColor' class="v-icon" aria-hidden="true" viewBox={`0 0 ${view} ${view}`}>
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
  parseStringtoDom () {
    const dom = document.createElement('div')
    dom.innerHTML = svg
    const s = dom.childNodes[0] as SVGElement
    s.style.display = 'none'
    this.el.shadowRoot.appendChild(s)
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
