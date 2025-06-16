import { Component, h } from '@stencil/core';
import { Lifecycle } from '../../../internal/lifecycle';

@Component({
  tag: 'dt-inert',
  styleUrl: 'dt-inert.style.css',
})
export class DtInertComponent {
  @Lifecycle()
  render() {
    return <slot />;
  }
}
