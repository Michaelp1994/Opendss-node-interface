import { UnitsEnum } from "@enums/enums";
import { LineSpacingInterface } from "@interfaces/LineSpacingInterface";
import CircuitElementComponent from "./CircuitElementComponent";
import GeneralElement from "./GeneralElement";

/**   General  */
export class LineSpacing extends GeneralElement {
  _type = "LineSpacing";
  _parameters = ["nconds", "nphases", "x", "h", "units", "like"];
  /** Number of wires in this geometry. Default is 3. Triggers memory allocations. Define first!*/
  nconds?: number;
  /** Number of retained phase conductors. If less than the number of wires, list the retained phase coordinates first.*/
  nphases?: number;
  /** Array of wire X coordinates.*/
  x?: number[];
  /** Array of wire Heights.*/
  h?: number[];
  /** Units for x and h: {mi|kft|km|m|Ft|in|cm } Initial default is "ft", but defaults to last unit defined*/
  units?: UnitsEnum;
  constructor(
    nameOrOptions: string | LineSpacingInterface,
    options?: Omit<LineSpacingInterface, "name">
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
