import { UnitsEnum } from "@enums/enums";
import { LineSpacingInterface } from "@interfaces/LineSpacingInterface";
import GeneralElement from "./GeneralElement";

/**   General  */
export default class LineSpacing
  extends GeneralElement
  implements HasKeys<LineSpacingInterface>
{
  _type = "LineSpacing";

  parameters: Array<keyof this> = [
    "nconds",
    "nphases",
    "x",
    "h",
    "units",
    "like",
  ];

  /** Number of wires in this geometry. Default is 3. Triggers memory allocations. Define first! */
  nconds?: number;

  /** Number of retained phase conductors. If less than the number of wires, list the retained phase coordinates first. */
  nphases?: number;

  /** Array of wire X coordinates. */
  x?: number[];

  /** Array of wire Heights. */
  h?: number[];

  /** Units for x and h: {mi|kft|km|m|Ft|in|cm } Initial default is "ft", but defaults to last unit defined */
  units?: UnitsEnum;

  constructor(options: LineSpacingInterface);
  constructor(name: string, options?: OmitName<LineSpacingInterface>);
  constructor(
    nameOrOptions: string | LineSpacingInterface,
    options?: OmitName<LineSpacingInterface>,
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
