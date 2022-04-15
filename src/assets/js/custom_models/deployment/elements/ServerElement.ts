import { ModelElement } from '../../../model/ModelElement';

/**
 * @author Daniel Correa <dcorreab@eafit.edu.co>
 */
export class ServerElement extends ModelElement {
  public constructor(currentModel:any) {
    super(
      'server.png',
      'server',
      50,
      80,
      'shape=server',
      'Server',
      currentModel,
    );

    const properties = this.getProperties();
    properties.push(
      {
        id: 'ip',
        label: 'IP',
        defValue: '',
        inputType: 'text',
        disabled: 'false',
        display: 'true',
      },
    );
    this.setProperties(properties);
  }
}
