import { GMRunitsEnum, RadunitsEnum, UnitsEnum } from "../enums/enums";
import { CNDataInterface } from "../interfaces/CNDataInterface";
import BaseComponent from "./BaseComponent";

/**   Conductor Data, Cable Data  */
export class CNData extends BaseComponent {
  _type = "CNData";
  _parameters = [
    "k",
    "DiaStrand",
    "GmrStrand",
    "Rstrand",
    "EpsR",
    "InsLayer",
    "DiaIns",
    "DiaCable",
    "Rdc",
    "Rac",
    "Runits",
    "GMRac",
    "GMRunits",
    "radius",
    "radunits",
    "normamps",
    "emergamps",
    "diam",
    "Seasons",
    "Ratings",
    "Capradius",
    "like",
  ];
  /** Number of concentric neutral strands; default is 2*/
  k?: number;
  /** Diameter of a concentric neutral strand; same units as core conductor radius; no default.*/
  DiaStrand?: number;
  /** Geometric mean radius of a concentric neutral strand; same units as core conductor GMR; defaults to 0.7788 * CN strand radius.*/
  GmrStrand?: number;
  /** AC resistance of a concentric neutral strand; same units as core conductor resistance; no default.*/
  Rstrand?: number;
  /** Insulation layer relative permittivity; default is 2.3.*/
  EpsR?: number;
  /** Insulation layer thickness; same units as radius; no default. With DiaIns, establishes inner radius for capacitance calculation.*/
  InsLayer?: number;
  /** Diameter over insulation layer; same units as radius; no default. Establishes outer radius for capacitance calculation.*/
  DiaIns?: number;
  /** Diameter over cable; same units as radius; no default.*/
  DiaCable?: number;
  /** dc Resistance, ohms per unit length (see Runits). Defaults to Rac/1.02 if not specified.*/
  Rdc?: number;
  /** Resistance at 60 Hz per unit length. Defaults to 1.02*Rdc if not specified.*/
  Rac?: number;
  /** Length units for resistance: ohms per {mi|kft|km|m|Ft|in|cm|mm} Default=none.*/
  Runits?: UnitsEnum;
  /** GMR at 60 Hz. Defaults to .7788*radius if not specified.*/
  GMRac?: number;
  /** Units for GMR: {mi|kft|km|m|Ft|in|cm|mm} Default=none.*/
  GMRunits?: GMRunitsEnum;
  /** Outside radius of conductor. Defaults to GMR/0.7788 if not specified.*/
  radius?: number;
  /** Units for outside radius: {mi|kft|km|m|Ft|in|cm|mm} Default=none.*/
  radunits?: RadunitsEnum;
  /** Normal ampacity, amperes. Defaults to Emergency amps/1.5 if not specified.*/
  normamps?: number;
  /** Emergency ampacity, amperes. Defaults to 1.5 * Normal Amps if not specified.*/
  emergamps?: number;
  /** Diameter; Alternative method for entering radius.
   *
   * Redundant with radius*/
  diam?: number;
  /** Defines the number of ratings to be defined for the wire, to be used only when defining seasonal ratings using the "Ratings" property.*/
  Seasons?: number;
  /** An array of ratings to be used when the seasonal ratings flag is True. It can be used to insert
   *
   * multiple ratings to change during a QSTS simulation to evaluate different ratings in lines.*/
  Ratings?: number[];
  /** Equivalent conductor radius for capacitance calcs. Specify this for bundled conductors. Defaults to same value as radius. Define Diam or Radius property first.*/
  Capradius?: number;
  constructor(
    nameOrOptions: string | CNDataInterface,
    options?: Omit<CNDataInterface, "name">
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
