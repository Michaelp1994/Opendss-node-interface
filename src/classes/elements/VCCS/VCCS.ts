import CircuitElement from "@elements/BaseElements/CircuitElement";
import VCCSInterface from "./VCCSInterface";

/**   Circuit Element, PC Element  */
export default class VCCS extends CircuitElement implements VCCSInterface {
  _type = "VCCS";

  parameters: Array<keyof this> = [
    "bus1",
    "phases",
    "prated",
    "vrated",
    "ppct",
    "bp1",
    "bp2",
    "filter",
    "fsample",
    "rmsmode",
    "imaxpu",
    "vrmstau",
    "irmstau",
    "spectrum",
    "baseFreq",
    "enabled",
    "like",
  ];

  /** Name of bus to which source is connected.
   *
   * bus1=busname
   *
   * bus1=busname.1.2.3 */
  bus1?: string;

  /** Number of phases.  Defaults to 1. */
  phases?: number;

  /** Total rated power, in Watts. */
  prated?: number;

  /** Rated line-to-line voltage, in Volts */
  vrated?: number;

  /** Steady-state operating output, in percent of rated. */
  ppct?: number;

  /** XYCurve defining the input piece-wise linear block. */
  bp1?: string;

  /** XYCurve defining the output piece-wise linear block. */
  bp2?: string;

  /** XYCurve defining the digital filter coefficients (x numerator, y denominator). */
  filter?: string;

  /** Sample frequency [Hz} for the digital filter. */
  fsample?: number;

  /** True if only Hz is used to represent a phase-locked loop (PLL), ignoring the BP1, BP2 and time-domain transformations. Default is no. */
  rmsmode?: boolean;

  /** Maximum output current in per-unit of rated; defaults to 1.1 */
  imaxpu?: number;

  /** Time constant in sensing Vrms for the PLL; defaults to 0.0015 */
  vrmstau?: number;

  /** Time constant in producing Irms from the PLL; defaults to 0.0015 */
  irmstau?: number;

  /** Harmonic spectrum assumed for this source.  Default is "default". */
  spectrum?: string;

  /** Base Frequency for ratings. */
  baseFreq?: number;

  /** {Yes|No or True|False} Indicates whether this element is enabled. */
  enabled?: boolean;

  constructor(options: VCCSInterface);
  constructor(name: string, options?: OmitName<VCCSInterface>);
  constructor(
    nameOrOptions: string | VCCSInterface,
    options?: OmitName<VCCSInterface>,
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
