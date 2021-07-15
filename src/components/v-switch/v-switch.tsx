import { Component, Host, h, Prop, State, Listen, Event, EventEmitter, Watch, Element } from '@stencil/core';

@Component({
  tag: 'v-switch',
  styleUrl: 'v-switch.css',
  shadow: true,
})
export class VSwitch {
  @Element() el: HTMLElement;
  @Prop() checked: boolean = false
  @State() ischeck: boolean
  @Event() vchange: EventEmitter;
  @Listen('click', {capture: true})
  handleClick () {
    this.ischeck = !this.checked
  }
  componentWillLoad () {
    this.ischeck = this.checked
  }
  render() {
    return (
      <Host class="v-switch">
        <input checked={this.ischeck} type="checkbox" class="v-switch-core"/>
        <span class="v-switch-frame"></span>
        <span class="v-switch-label"></span>
      </Host>
    );
  }
  @Watch('checked')
  checkedHandler (v) {
    this.ischeck = v
  }
  @Watch('ischeck')
  checkHandler (v) {
    this.vchange.emit({
      checked: v
    })
    if (v) {
      this.el.setAttribute('checked', 'true')
    } else {
      this.el.removeAttribute('checked')
    }
  }
}
