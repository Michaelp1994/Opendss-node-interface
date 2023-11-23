import { splitStringsIntoRows } from "../helpers/splitArray";

export default class BaseComponent {
  /** Type of Component
   * @ignore
   */
  _type: string;
  /** Name of the component */
  name: string;
  /** Electrical Parameters for Component */
  _parameters: string[];
  /** Make like another object, e.g.:
   *
   * New Capacitor.C2 like=c1  ...*/
  like?: string;
  create() {
    const script = [`New ${this._type}.${this.name}`];
    this._parameters.forEach((key) => {
      if (this[key] !== undefined) {
        script.push(`${key}=${this[key]}`);
      }
    });
    return splitStringsIntoRows(script);
  }
}
