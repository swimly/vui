import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-navbar',
  styleUrl: 'v-navbar.css',
  shadow: true,
})
export class VNavbar {

  render() {
    return (
      <Host>
        <div class="v-navbar">
          <div class="v-navbar-prefix">
          </div>
          <div class="v-navbar-content">
            <h2 class="v-navbar-title"><slot></slot></h2>
          </div>
          <div class="v-navbar-suffix"></div>
        </div>
      </Host>
    );
  }

}
