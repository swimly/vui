import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-page',
  styleUrl: 'v-page.css',
  shadow: true,
})
export class VPage {

  render() {
    return (
      <Host>
        <div class="v-page">
          <header class="v-header"></header>
          <section class="v-section"></section>
          <footer class="v-footer"></footer>
        </div>
      </Host>
    );
  }

}
