import { SlipOptionEnum } from "@enums/enums";
import { IndMach012Interface } from "@interfaces/IndMach012Interface";
import CircuitElementComponent from "./CircuitElementComponent";

/**   Circuit Element, PC Element  */
export class IndMach012 extends CircuitElementComponent {
  _type = "IndMach012";
  _parameters = [
    "phases",
    "bus1",
    "kv",
    "kW",
    "pf",
    "conn",
    "kVA",
    "H",
    "D",
    "puRs",
    "puXs",
    "puRr",
    "puXr",
    "puXm",
    "Slip",
    "MaxSlip",
    "SlipOption",
    "Yearly",
    "Daily",
    "Duty",
    "Debugtrace",
    "spectrum",
    "basefreq",
    "enabled",
    "like",
  ];
  /** Number of Phases, this Induction Machine.*/
  phases?: number;
  /** Bus to which the Induction Machine is connected.  May include specific node specification.*/
  bus1?: string;
  /** Nominal rated (1.0 per unit) voltage, kV. For 2- and 3-phase machines, specify phase-phase kV. Otherwise, specify actual kV across each branch of the machine. If wye (star), specify phase-neutral kV. If delta or phase-phase connected, specify phase-phase kV.*/
  kv?: number;
  /** Shaft Power, kW, for the Induction Machine.  A positive value denotes power for a load.
   *
   * Negative value denotes an induction generator.*/
  kW?: number;
  /** [Read Only] Present power factor for the machine.*/
  pf?: number;
  /** Connection of stator: Delta or Wye. Default is Delta.*/
  conn?: string;
  /** Rated kVA for the machine.*/
  kVA?: number;
  /** Per unit mass constant of the machine.  MW-sec/MVA.  Default is 1.0.*/
  H?: number;
  /** Damping constant.  Usual range is 0 to 4. Default is 1.0.  Adjust to get damping in Dynamics mode,*/
  D?: number;
  /** Per unit stator resistance. Default is 0.0053.*/
  puRs?: number;
  /** Per unit stator leakage reactance. Default is 0.106.*/
  puXs?: number;
  /** Per unit rotor  resistance. Default is 0.007.*/
  puRr?: number;
  /** Per unit rotor leakage reactance. Default is 0.12.*/
  puXr?: number;
  /** Per unit magnetizing reactance.Default is 4.0.*/
  puXm?: number;
  /** Initial slip value. Default is 0.007*/
  Slip?: number;
  /** Max slip value to allow. Default is 0.1. Set this before setting slip.*/
  MaxSlip?: number;
  /** Option for slip model. One of {fixedslip | variableslip*  }*/
  SlipOption?: SlipOptionEnum;
  /** LOADSHAPE object to use for yearly simulations.  Must be previously defined as a Loadshape object. Is set to the Daily load shape  when Daily is defined.  The daily load shape is repeated in this case. Set Status=Fixed to ignore Loadshape designation. Set to NONE to reset to no loadahape. The default is no variation.*/
  Yearly?: string;
  /** LOADSHAPE object to use for daily simulations.  Must be previously defined as a Loadshape object of 24 hrs, typically. Set Status=Fixed to ignore Loadshape designation. Set to NONE to reset to no loadahape. Default is no variation (constant) if not defined. Side effect: Sets Yearly load shape if not already defined.*/
  Daily?: string;
  /** LOADSHAPE object to use for duty cycle simulations.  Must be previously defined as a Loadshape object.  Typically would have time intervals less than 1 hr. Designate the number of points to solve using the Set Number=xxxx command. If there are fewer points in the actual shape, the shape is assumed to repeat.Set to NONE to reset to no loadahape. Set Status=Fixed to ignore Loadshape designation.  Defaults to Daily curve If not specified.*/
  Duty?: string;
  /** [Yes | No*] Write DebugTrace file.*/
  Debugtrace?: boolean;
  /** Name of harmonic voltage or current spectrum for this IndMach012. Voltage behind Xd" for machine - default. Current injection for inverter. Default value is "default", which is defined when the DSS starts.*/
  spectrum?: string;
  /** Base Frequency for ratings.*/
  basefreq?: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled?: boolean;
  constructor(
    nameOrOptions: string | IndMach012Interface,
    options?: Omit<IndMach012Interface, "name">
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
