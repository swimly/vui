import { Component, Host, h, Prop, State, Listen, Event, EventEmitter, Method, Watch, Element } from '@stencil/core';

@Component({
  tag: 'v-checkbox',
  styleUrl: 'v-checkbox.css',
  shadow: true,
})
export class VCheckbox {
  @Element() el: HTMLElement;
  @Prop() checked: boolean = false
  @Prop() value: string
  @State() ischeck: boolean;
  @Event() vchange: EventEmitter;
  @Listen('click', {capture: true})
  handleClick () {
    this.ischeck = !this.ischeck
    this.vchange.emit({
      value: this.value,
      checked: this.ischeck
    })
  }
  componentWillLoad () {
    this.ischeck = this.checked
  }
  render() {
    return (
      <Host class="v-checkbox">
        <input checked={this.ischeck} type="checkbox" class="v-checkbox-core"/>
        <span class="v-checkbox-frame">
          <v-icon size={14} name="check"></v-icon>
        </span>
        <span class="v-checkbox-label"><slot></slot></span>
      </Host>
    );
  }
  @Watch('ischeck')
  checkChange (v) {
    if (v) {
      this.el.setAttribute('checked', 'true')
    } else {
      this.el.removeAttribute('checked')
    }
  }
  @Method()
  async val () {
    return this.value
  }
  @Method()
  async check (v) {
    this.ischeck = v
  }
}
