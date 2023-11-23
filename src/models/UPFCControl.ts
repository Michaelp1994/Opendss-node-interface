import BaseComponent from "./BaseComponent";
import { UPFCControlInterface } from "../interfaces/UPFCControlInterface";
/**   Circuit Element, Control Element  */
export class UPFCControl extends BaseComponent {
  _type = "UPFCControl";
  _parameters = ["UPFCList", "basefreq", "enabled", "like"];
  /** The list of all the UPFC devices to be controlled by this controller, If left empty, this control will apply for all UPFCs in the model.*/
  UPFCList?: string[];
  /** Base Frequency for ratings.*/
  basefreq?: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled?: boolean;

  constructor(
    nameOrOptions: string | UPFCControlInterface,
    options?: Omit<UPFCControlInterface, "name">
  ) {
    super();
    if (typeof nameOrOptions === "string") {
      this.name = nameOrOptions;
      Object.assign(this, options);
    } else {
      Object.assign(this, nameOrOptions);
    }
  }
}
