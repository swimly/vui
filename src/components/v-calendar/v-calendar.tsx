import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-calendar',
  styleUrl: 'v-calendar.css',
  shadow: true,
})
export class VCalendar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
