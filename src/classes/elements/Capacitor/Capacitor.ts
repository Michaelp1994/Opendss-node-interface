import { ConnEnum, StatesEnum } from "@enums/enums";
import { CapacitorInterface } from "./CapacitorInterface";
import CircuitElementComponent from "./CircuitElementComponent";

/**   Circuit Element, PD Element  */
export default class Capacitor
  extends CircuitElementComponent
  implements HasKeys<CapacitorInterface>
{
  _type = "Capacitor";

  parameters: Array<keyof this> = [
    "bus1",
    "bus2",
    "phases",
    "kvar",
    "kv",
    "conn",
    "cmatrix",
    "cuf",
    "R",
    "XL",
    "Harm",
    "Numsteps",
    "states",
    "normamps",
    "emergamps",
    "faultrate",
    "pctperm",
    "repair",
    "basefreq",
    "enabled",
    "like",
  ] as const;

  /** Name of first bus of 2-terminal capacitor. Examples:
   *
   * bus1=busname
   *
   * bus1=busname.1.2.3
   *
   * If only one bus specified, Bus2 will default to this bus, Node 0, and the capacitor will be a Yg shunt bank. */
  bus1?: string;

  /** Name of 2nd bus. Defaults to all phases connected to first bus, node 0, (Shunt Wye Connection) except when Bus2 explicitly specified.
   *
   * Not necessary to specify for delta (LL) connection. */
  bus2?: string;

  /** Number of phases. */
  phases?: number;

  /** Total kvar, if one step, or ARRAY of kvar ratings for each step.  Evenly divided among phases. See rules for NUMSTEPS. */
  kvar?: number[];

  /** For 2, 3-phase, kV phase-phase. Otherwise specify actual can rating. */
  kv?: number;

  /** ={wye | delta |LN |LL}  Default is wye, which is equivalent to LN */
  conn?: ConnEnum;

  /** Nodal cap. matrix, lower triangle, microfarads, of the following form:
   *
   * cmatrix="c11 | -c21 c22 | -c31 -c32 c33"
   *
   * All steps are assumed the same if this property is used. */
  cmatrix?: number[];

  /** ARRAY of Capacitance, each phase, for each step, microfarads.
   *
   * See Rules for NumSteps. */
  cuf?: number[];

  /** ARRAY of series resistance in each phase (line), ohms. Default is 0.0 */
  R?: number[];

  /** ARRAY of series inductive reactance(s) in each phase (line) for filter, ohms at base frequency. Use this OR "h" property to define filter. Default is 0.0. */
  XL?: number[];

  /** ARRAY of harmonics to which each step is tuned. Zero is interpreted as meaning zero reactance (no filter). Default is zero. */
  Harm?: number[];

  /** Number of steps in this capacitor bank. Default = 1. Forces reallocation of the capacitance, reactor, and states array.  Rules: If this property was previously =1, the value in the kvar property is divided equally among the steps. The kvar property does not need to be reset if that is accurate.  If the Cuf or Cmatrix property was used previously, all steps are set to the value of the first step. The states property is set to all steps on. All filter steps are set to the same harmonic. If this property was previously >1, the arrays are reallocated, but no values are altered. You must SUBSEQUENTLY assign all array properties. */
  Numsteps?: number;

  /** ARRAY of integers {1|0} states representing the state of each step (on|off). Defaults to 1 when reallocated (on). Capcontrol will modify this array as it turns steps on or off. */
  states?: StatesEnum;

  /** Normal rated current. */
  normamps?: number;

  /** Maximum or emerg current. */
  emergamps?: number;

  /** Failure rate per year. */
  faultrate?: number;

  /** Percent of failures that become permanent. */
  pctperm?: number;

  /** Hours to repair. */
  repair?: number;

  /** Base Frequency for ratings. */
  basefreq?: number;

  /** {Yes|No or True|False} Indicates whether this element is enabled. */
  enabled?: boolean;

  constructor(options: CapacitorInterface);
  constructor(name: string, options?: OmitName<CapacitorInterface>);
  constructor(
    nameOrOptions: string | CapacitorInterface,
    optionalOptions?: OmitName<CapacitorInterface>,
  ) {
    super(nameOrOptions);
    if (typeof nameOrOptions === "string") {
      if (optionalOptions) Object.assign(this, optionalOptions);
    } else {
      const { name, ...otherOptions } = nameOrOptions;
      Object.assign(this, otherOptions);
    }
  }
}
