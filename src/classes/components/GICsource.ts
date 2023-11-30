import { GICsourceInterface } from "@interfaces/GICsourceInterface";
import CircuitElementComponent from "./CircuitElementComponent";

/**   Circuit Element, PC Element  */
export class GICsource extends CircuitElementComponent {
  _type = "GICsource";
  _parameters = [
    "Volts",
    "angle",
    "frequency",
    "phases",
    "EN",
    "EE",
    "Lat1",
    "Lon1",
    "Lat2",
    "Lon2",
    "spectrum",
    "basefreq",
    "enabled",
    "like",
  ];
  /** Voltage magnitude, in volts, of the GIC voltage induced across the associated line. When specified, induced voltage is assumed defined by Voltage and Angle properties.
   *
   * Specify this value
   *
   * OR
   *
   * EN, EE, lat1, lon1, lat2, lon2.
   *
   * Not both!!  Last one entered will take precedence. Assumed identical in each phase of the Line object.*/
  Volts?: number;
  /** Phase angle in degrees of first phase. Default=0.0.  See Voltage property*/
  angle?: number;
  /** Source frequency.  Defaults to  0.1 Hz. So GICSource=0 at power frequency.*/
  frequency?: number;
  /** Number of phases.  Defaults to 3. All three phases are assumed in phase (zero sequence)*/
  phases?: number;
  /** Northward Electric field (V/km). If specified, Voltage and Angle are computed from EN, EE, lat and lon values.*/
  EN?: number;
  /** Eastward Electric field (V/km).  If specified, Voltage and Angle are computed from EN, EE, lat and lon values.*/
  EE?: number;
  /** Latitude of Bus1 of the line(degrees)*/
  Lat1?: number;
  /** Longitude of Bus1 of the line (degrees)*/
  Lon1?: number;
  /** Latitude of Bus2 of the line (degrees)*/
  Lat2?: number;
  /** Longitude of Bus2 of the line (degrees)*/
  Lon2?: number;
  /** Not used.*/
  spectrum?: string;
  /** Not used.*/
  basefreq?: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled?: boolean;
  constructor(
    nameOrOptions: string | GICsourceInterface,
    options?: Omit<GICsourceInterface, "name">
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
