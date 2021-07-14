import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'v-button',
  styleUrl: 'v-button.css',
  shadow: true,
})

export class VButton {
  @Prop() type: string = 'default'
  @Prop() outline: boolean = false
  @Prop() conner: boolean = false
  @Prop() rounder: boolean = false
  render() {
    const {type, outline, conner, rounder} = this
    return (
      <Host>
        <button
          class="v-button"
          type={type}
          {...{
            'outline': outline,
            'conner': conner,
            'rounder': rounder
          }}
        >
          <span class="v-button-icon"></span>
          <span class="v-button-label"><slot></slot></span>
        </button>
      </Host>
    );
  }

}
