import { GMRunitsEnum, RadunitsEnum, UnitsEnum } from "@enums/enums";
import { ConductorDataElement } from "@elements";
import WireDataInterface from "./WireDataInterface";

/**   Conductor Data  */
export default class WireData
  extends ConductorDataElement
  implements WireDataInterface
{
  _type = "WireData";

  parameters: Array<keyof this> = [
    "rdc",
    "rac",
    "rUnits",
    "gmrac",
    "gmrUnits",
    "radius",
    "radUnits",
    "normAmps",
    "emergAmps",
    "diam",
    "seasons",
    "ratings",
    "capRadius",
    "like",
  ];

  rdc?: number;

  rac?: number;

  rUnits?: UnitsEnum;

  gmrac?: number;

  gmrUnits?: GMRunitsEnum;

  radius?: number;

  radUnits?: RadunitsEnum;

  normAmps?: number;

  emergAmps?: number;

  diam?: number;

  seasons?: number;

  ratings?: number[];

  capRadius?: number;

  constructor(options: WireDataInterface);
  constructor(name: string, options?: OmitName<WireDataInterface>);
  constructor(
    nameOrOptions: string | WireDataInterface,
    options?: OmitName<WireDataInterface>,
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
