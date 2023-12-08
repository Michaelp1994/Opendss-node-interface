import CircuitElement from "@elements/BaseElements/CircuitElement";
import UPFCInterface from "./UPFCInterface";

/**   Circuit Element, PC Element  */
export default class UPFC extends CircuitElement implements UPFCInterface {
  _type = "UPFC";

  parameters: Array<keyof this> = [
    "bus1",
    "bus2",
    "refkV",
    "PF",
    "Frequency",
    "Phases",
    "Xs",
    "Tol1",
    "Mode",
    "VpqMax",
    "LossCurve",
    "VHLimit",
    "VLLimit",
    "CLimit",
    "refkV2",
    "kvarLimit",
    "Element",
    "spectrum",
    "baseFreq",
    "enabled",
    "like",
  ];

  /** Name of bus to which the input terminal (1) is connected.
   *
   * bus1=busname.1.3
   *
   * bus1=busname.1.2.3 */
  bus1?: string;

  /** Name of bus to which the output terminal (2) is connected.
   *
   * bus2=busname.1.2
   *
   * bus2=busname.1.2.3 */
  bus2?: string;

  /** UPFC.refkV */
  refkV?: number;

  /** UPFC.PF */
  PF?: number;

  /** UPFC.Frequency */
  Frequency?: number;

  /** UPFC.Phases */
  Phases?: number;

  /** Reactance of the series transformer of the UPFC, ohms (default=0.7540 ... 2 mH) */
  Xs?: number;

  /** Tolerance in pu for the series PI controller
   *
   * Tol1=0.02 is the format used to define 2% tolerance (Default=2%) */
  Tol1?: number;

  /** Integer used to define the control mode of the UPFC:
   *
   * 0 = Off,
   *
   * 1 = Voltage regulator,
   *
   * 2 = Phase angle regulator,
   *
   * 3 = Dual mode
   *
   * 4 = It is a control mode where the user can set two different set points to create a secure GAP, these references must be defined in the parameters RefkV and RefkV2. The only restriction when setting these values is that RefkV must be higher than RefkV2.
   *
   * 5 = In this mode the user can define the same GAP using two set points as in control mode 4. The only difference between mode 5 and mode 4 is that in mode 5, the UPFC controller performs dual control actions just as in control mode 3 */
  Mode?: number;

  /** Maximum voltage (in volts) delivered by the series voltage source (Default = 24 V) */
  VpqMax?: number;

  /** Name of the XYCurve for describing the losses behavior as a function of the voltage at the input of the UPFC */
  LossCurve?: string;

  /** High limit for the voltage at the input of the UPFC, if the voltage is above this value the UPFC turns off. This value is specified in Volts (default 300 V) */
  VHLimit?: number;

  /** low limit for the voltage at the input of the UPFC, if voltage is below this value the UPFC turns off. This value is specified in Volts (default 125 V) */
  VLLimit?: number;

  /** Current Limit for the UPFC, if the current passing through the UPFC is higher than this value the UPFC turns off. This value is specified in Amps (Default 265 A) */
  CLimit?: number;

  /** UPFC.refkV2 */
  refkV2?: number;

  /** Maximum amount of reactive power (kvar) that can be absorved by the UPFC (Default = 5) */
  kvarLimit?: number;

  /** The name of the PD element monitored when operating with reactive power compensation. Normally, it should be the PD element immediately upstream the UPFC. The element must be defined including the class, e.g. Line.myline. */
  Element?: string;

  /** Name of harmonic spectrum for this source.  Default is "defaultUPFC", which is defined when the DSS starts. */
  spectrum?: string;

  /** Base Frequency for ratings. */
  baseFreq?: number;

  /** {Yes|No or True|False} Indicates whether this element is enabled. */
  enabled?: boolean;

  constructor(options: UPFCInterface);
  constructor(name: string, options?: OmitName<UPFCInterface>);
  constructor(
    nameOrOptions: string | UPFCInterface,
    options?: OmitName<UPFCInterface>,
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
