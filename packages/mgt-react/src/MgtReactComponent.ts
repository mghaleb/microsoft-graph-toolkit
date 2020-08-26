import { Providers } from '@microsoft/mgt';
import { MgtBaseComponent } from '@microsoft/mgt/dist/es6/components/baseComponent';
import { customElement } from 'lit-element';

@customElement('mgt-react-component')
export class MgtReactComponent extends MgtBaseComponent {
  constructor() {
    super();
    console.log(`Constructed: ${this.tagName}`);
    console.log(`Global provider: ${Providers.globalProvider}`);
  }
}
