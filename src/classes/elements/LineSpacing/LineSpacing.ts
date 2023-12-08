import { UnitsEnum } from "@enums/enums";
import { GeneralElement } from "@elements";
import LineSpacingInterface from "./LineSpacingInterface";

/**   General  */
export default class LineSpacing
  extends GeneralElement
  implements LineSpacingInterface
{
  readonly _type = "LineSpacing";

  readonly parameters: Array<keyof this> = [
    "nConds",
    "nPhases",
    "x",
    "h",
    "units",
    "like",
  ];

  nConds?: number;

  nPhases?: number;

  x?: number[];

  h?: number[];

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
