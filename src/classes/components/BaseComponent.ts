import splitStringsIntoRows from "@helpers/splitArray";
import BaseInterface from "@interfaces/BaseInterface";

export default abstract class BaseComponent {
  /** Type of Component
   * @ignore
   */
  abstract _type: string;

  /** Name of the component */
  name: string;

  /** Electrical Parameters for Component */
  abstract parameters: Array<string | number | symbol>;

  /** Make like another object, e.g.:
   *
   * New Capacitor.C2 like=c1  ... */
  like?: string;

  constructor(nameOrOptions: string | BaseInterface) {
    if (typeof nameOrOptions === "string") {
      this.name = nameOrOptions;
    } else {
      this.name = nameOrOptions.name;
    }
  }

  create() {
    const script = [`New ${this._type}.${this.name}`];
    this.parameters.forEach((key) => {
      // @ts-expect-error FIXME: I don't know how to properly type this
      if (this[key] !== undefined) {
        //  @ts-expect-error FIXME: I don't know how to properly type this
        const value = this[key];
        if (Array.isArray(value)) {
          const values = value.join(" ");
          script.push(`${String(key)}=[${values}]`);
        } else {
          script.push(`${String(key)}=${value}`);
        }
      }
    });
    return splitStringsIntoRows(script);
  }
}
