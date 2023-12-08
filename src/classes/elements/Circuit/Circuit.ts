import { Vsource } from "@elements/Vsource";
import VsourceInterface from "@elements/Vsource/VsourceInterface";

/**   Circuit Element, PC Element  */
export default class Circuit extends Vsource {
  _type = "Circuit";

  constructor(options: VsourceInterface);
  constructor(name: string, options?: OmitName<VsourceInterface>);
  constructor(
    nameOrOptions: string | VsourceInterface,
    optionalOptions?: OmitName<VsourceInterface>,
  ) {
    if (typeof nameOrOptions === "string") {
      super(nameOrOptions, optionalOptions);
      if (optionalOptions) Object.assign(this, optionalOptions);
    } else {
      super(nameOrOptions);
      const { name, ...otherOptions } = nameOrOptions;
      Object.assign(this, otherOptions);
    }
  }
}
