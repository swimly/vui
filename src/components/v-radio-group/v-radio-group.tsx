import { Component, Host, h, Element, Prop, State, Watch, Event, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'v-radio-group',
  styleUrl: 'v-radio-group.css',
  shadow: true,
})

export class VRadioGroup {
  @Element() el: HTMLElement
  @Prop() value: any
  @State() current: any
  @Event() vchange: EventEmitter;
  $children: any[];
  componentWillLoad () {
    this.current = this.value
  }
  render() {
    return (
      <Host class="v-radio-group">
        <slot></slot>
      </Host>
    );
  }
  componentDidLoad () {
    const {current} = this
    const slot = this.el.shadowRoot.querySelector('slot')
    this.$children = slot.assignedElements()
    this.renderActive(current)
  }
  renderActive (current) {
    const {$children} = this
    $children.forEach(item => {
      const v = item.getAttribute('value')
      item.setAttribute('checked', `${v === current}`)
      item.addEventListener('vchange', (e) => {
        const val = e.detail.value
        this.current = val
        $children.forEach(async (radio) => {
          const cv = await radio.val()
          radio.check(val === cv)
        })
      })
    })
  }
  @Watch('current')
  currentHandler (v) {
    this.vchange.emit({
      value: v
    })
    this.el.setAttribute('value', v)
  }
  @Method()
  async val () {
    return this.current
  }
}
