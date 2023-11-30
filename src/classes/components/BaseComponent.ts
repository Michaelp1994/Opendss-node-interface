import { splitStringsIntoRows } from "@helpers/splitArray";

export default abstract class BaseComponent {
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
        const value = this[key];
        if (Array.isArray(value)) {
          const values = value.join(" ");
          script.push(`${key}=[${values}]`);
        } else {
          script.push(`${key}=${value}`);
        }
      }
    });
    return splitStringsIntoRows(script);
  }
}
