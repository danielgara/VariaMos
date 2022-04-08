import { ModelElement } from '../../../model/ModelElement';

/**
 * @author Daniel Correa <dcorreab@eafit.edu.co>
 */
export class AppElement extends ModelElement {
  public constructor(currentModel:any) {
    super(
      'app.png',
      'app',
      100,
      40,
      'shape=app',
      'App',
      currentModel,
    );

    const properties = this.getProperties();
    properties.push(
      {
        id: 'destination',
        label: 'Destination',
        defValue: '',
        inputType: 'text',
        disabled: 'false',
        display: 'true',
      },
    );
    this.setProperties(properties);
  }
}
