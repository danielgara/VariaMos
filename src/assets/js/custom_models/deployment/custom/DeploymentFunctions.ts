/**
 * @author Daniel Correa <dcorreab@eafit.edu.co>
 */
 export class DeploymentFunctions {
  public static getApps(graph:any) {
    // collect the defined unique apps
    const componentRoot = graph.getModel().getCell('component');
    const componentRelations = graph.getModel().getChildEdges(componentRoot);
    const apps = [];

    for (let i = 0; i < componentRelations.length; i += 1) {
      const { target } = componentRelations[i];

      if (target.getAttribute('type') == 'app') {
        apps.push(target.getAttribute('label'));
      }
    }

    const uniqueApps = [...new Set(apps)];

    return uniqueApps;
  }
 }