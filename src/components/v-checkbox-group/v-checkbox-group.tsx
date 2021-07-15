import { Component, Host, h, Prop, State, Element, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'v-checkbox-group',
  styleUrl: 'v-checkbox-group.css',
  shadow: true,
})
export class VCheckboxGroup {
  @Element() el: HTMLElement;
  @Prop() value: any
  @State() current: string[];
  @Event() vchange: EventEmitter;
  $children: any[];
  componentWillLoad () {
    this.current = typeof this.value === 'string' ? JSON.parse(this.value) : this.value
  }
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
  componentDidLoad () {
    const slot = this.el.shadowRoot.querySelector('slot')
    this.$children = slot.assignedElements()
    this.renderActive()
  }
  renderActive () {
    const {$children, current} = this
    $children.forEach(async (item) => {
      const v = await item.val()
      item.check(current.indexOf(v) >= 0)
      item.addEventListener('vchange', (e) => {
        const val = e.detail.value
        const ck = e.detail.checked
        if (!ck) {
          this.current = this.current.filter(item => item !== val)
        } else {
          this.current = [...this.current, val]
        }
      })
    })
  }
  @Watch('current')
  currentHandler (v) {
    this.vchange.emit({
      value: v
    })
    this.el.setAttribute('value', JSON.stringify(v))
  }
}
