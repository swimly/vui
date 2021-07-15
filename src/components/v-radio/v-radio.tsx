import { Component, Host, h, Prop, EventEmitter, Event, Watch, Element, Listen, State, Method} from '@stencil/core';

export interface VRadioProps {
  value: string,
  checked: boolean
}

@Component({
  tag: 'v-radio',
  styleUrl: 'v-radio.css',
  shadow: true,
})
export class VRadio implements VRadioProps {
  @Prop() value:string
  @Prop() checked: boolean = false
  @Element() el: HTMLElement;
  @Event() vchange: EventEmitter;

  @State() checks: boolean
  @Listen('click', {capture: true})
  handleClick () {
    this.checks = !this.checks
    this.vchange.emit({
      value: this.value,
      checked: true
    })
  }
  componentWillLoad () {
    this.checks = this.checked
  }
  render() {
    const {checked} = this
    return (
      <Host class="v-radio">
        <input checked={checked} type="radio" class="v-radio-core" />
        <span class="v-radio-frame"></span>
        <span class="v-radio-label"><slot></slot></span>
      </Host>
    );
  }
  componentDidLoad () {
  }
  @Watch('checks')
  checkChange (v) {
    if (v) {
      this.el.setAttribute('checked', 'true')
    } else {
      this.el.removeAttribute('checked')
    }
  }
  @Watch('checked')
  checkedChange (v) {
    this.checks = v
  }
  @Method()
  async val () {
    return this.value
  }
  @Method()
  async check (val) {
    this.checks = val
  }
}
