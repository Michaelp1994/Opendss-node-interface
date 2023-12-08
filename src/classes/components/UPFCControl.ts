import { UPFCControlInterface } from "@interfaces/UPFCControlInterface";
import CircuitElementComponent from "./CircuitElementComponent";

/**   Circuit Element, Control Element  */
export default class UPFCControl
  extends CircuitElementComponent
  implements HasKeys<UPFCControlInterface>
{
  _type = "UPFCControl";

  parameters: Array<keyof this> = ["UPFCList", "basefreq", "enabled", "like"];

  /** The list of all the UPFC devices to be controlled by this controller, If left empty, this control will apply for all UPFCs in the model. */
  UPFCList?: string[];

  /** Base Frequency for ratings. */
  basefreq?: number;

  /** {Yes|No or True|False} Indicates whether this element is enabled. */
  enabled?: boolean;

  constructor(options: UPFCControlInterface);
  constructor(name: string, options?: OmitName<UPFCControlInterface>);
  constructor(
    nameOrOptions: string | UPFCControlInterface,
    options?: OmitName<UPFCControlInterface>,
  ) {
    super(nameOrOptions);
    if (typeof nameOrOptions === "string") {
      Object.assign(this, options);
    } else {
      const { name, ...otherOptions } = nameOrOptions;
      Object.assign(this, otherOptions);
    }
  }
}
