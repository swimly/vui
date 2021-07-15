import { Component, Host, h, Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'v-input',
  styleUrl: 'v-input.css',
  shadow: true,
})
export class VInput {
  @Element() el: HTMLElement;
  @Prop() type: string = 'text'
  @Prop() placeholder: string = '请输入'
  @Prop() value: string = ''
  @State() v: string
  $core: HTMLElement;
  componentWillLoad () {
    this.v = this.value
  }
  render() {
    const {placeholder, type} = this
    return (
      <Host class="v-input" tabIndex="1">
        <div class="v-input-prefix"></div>
        <div class="v-input-content">
          <input placeholder={placeholder} type={type} class="v-input-core" />
        </div>
        <div class="v-input-suffix"></div>
      </Host>
    );
  }
  componentDidLoad () {
    this.$core = this.el.shadowRoot.querySelector('.v-input-core')
  }
}
