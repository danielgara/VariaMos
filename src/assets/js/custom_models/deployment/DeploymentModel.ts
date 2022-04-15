import { Model } from "../../model/Model";

/**
 * @author Daniel Correa <dcorreab@eafit.edu.co>
 */
export class DeploymentModel extends Model {

  public constructor() {
    super(
      "deployment",
      ["ServerElement"]
    );

    let constraints = this.getConstraints();
    constraints = [
      {
        source: 'true',
        type: 'server',
        attr: null,
        value: null,
        min: 0,
        max: 0,
        validNeighbors: null,
        countError: 'Invalid connection',
        typeError: 'Only shape targets allowed',
      },
      {
        source: 'true',
        type: 'app',
        attr: null,
        value: null,
        min: 0,
        max: 1,
        validNeighbors: ['server'],
        countError: 'Invalid connection',
        typeError: 'Only shape targets allowed',
      },
    ];
    this.setConstraints(constraints);
  }
}