import { ActionEnum } from "@enums/enums";
import { EnergyMeterInterface } from "@interfaces/EnergyMeterInterface";
import CircuitElementComponent from "./CircuitElementComponent";

/**   Circuit Element, Meter Element  */
export class EnergyMeter extends CircuitElementComponent {
  _type = "EnergyMeter";
  _parameters = [
    "element",
    "terminal",
    "action",
    "option",
    "kVAnormal",
    "kVAemerg",
    "peakcurrent",
    "Zonelist",
    "LocalOnly",
    "Mask",
    "Losses",
    "LineLosses",
    "XfmrLosses",
    "SeqLosses",
    "3phaseLosses",
    "VbaseLosses",
    "PhaseVoltageReport",
    "Int_Rate",
    "Int_Duration",
    "SAIFI",
    "SAIFIkW",
    "SAIDI",
    "CAIDI",
    "CustInterrupts",
    "basefreq",
    "enabled",
    "like",
  ];
  /** Name (Full Object name) of element to which the monitor is connected.*/
  element: string;
  /** Number of the terminal of the circuit element to which the monitor is connected. 1 or 2, typically.*/
  terminal?: number;
  /** {Clear (reset) | Save | Take | Zonedump | Allocate | Reduce}
   *
   * (A)llocate = Allocate loads on the meter zone to match PeakCurrent.
   *
   * (C)lear = reset all registers to zero
   *
   * (R)educe = reduces zone by merging lines (see Set Keeplist & ReduceOption)
   *
   * (S)ave = saves the current register values to a file.
   *
   * File name is "MTR_metername.CSV".
   *
   * (T)ake = Takes a sample at present solution
   *
   * (Z)onedump = Dump names of elements in meter zone to a file
   *
   * File name is "Zone_metername.CSV".*/
  action?: ActionEnum;
  /** Enter a string ARRAY of any combination of the following. Options processed left-to-right:
   *
   * (E)xcess : (default) UE/EEN is estimate of energy over capacity
   *
   * (T)otal : UE/EEN is total energy after capacity exceeded
   *
   * (R)adial : (default) Treats zone as a radial circuit
   *
   * (M)esh : Treats zone as meshed network (not radial).
   *
   * (C)ombined : (default) Load UE/EEN computed from combination of overload and undervoltage.
   *
   * (V)oltage : Load UE/EEN computed based on voltage only.
   *
   * Example: option=(E, R)*/
  option?: string[];
  /** Upper limit on kVA load in the zone, Normal configuration. Default is 0.0 (ignored). Overrides limits on individual lines for overload EEN. With "LocalOnly=Yes" option, uses only load in metered branch.*/
  kVAnormal?: number;
  /** Upper limit on kVA load in the zone, Emergency configuration. Default is 0.0 (ignored). Overrides limits on individual lines for overload UE. With "LocalOnly=Yes" option, uses only load in metered branch.*/
  kVAemerg?: number;
  /** ARRAY of current magnitudes representing the peak currents measured at this location for the load allocation function.  Default is (400, 400, 400). Enter one current for each phase*/
  peakcurrent?: number[];
  /** ARRAY of full element names for this meter's zone.  Default is for meter to find it's own zone. If specified, DSS uses this list instead.  Can access the names in a single-column text file.  Examples:
   *
   * zonelist=[line.L1, transformer.T1, Line.L3]
   *
   * zonelist=(file=branchlist.txt)*/
  Zonelist?: string[];
  /** {Yes | No}  Default is NO.  If Yes, meter considers only the monitored element for EEN and UE calcs.  Uses whole zone for losses.*/
  LocalOnly?: boolean;
  /** Mask for adding registers whenever all meters are totalized.  Array of floating point numbers representing the multiplier to be used for summing each register from this meter. Default = (1, 1, 1, 1, ... ).  You only have to enter as many as are changed (positional). Useful when two meters monitor same energy, etc.*/
  Mask?: number[];
  /** {Yes | No}  Default is YES. Compute Zone losses. If NO, then no losses at all are computed.*/
  Losses?: boolean;
  /** {Yes | No}  Default is YES. Compute Line losses. If NO, then none of the losses are computed.*/
  LineLosses?: boolean;
  /** {Yes | No}  Default is YES. Compute Transformer losses. If NO, transformers are ignored in loss calculations.*/
  XfmrLosses?: boolean;
  /** {Yes | No}  Default is YES. Compute Sequence losses in lines and segregate by line mode losses and zero mode losses.*/
  SeqLosses?: boolean;
  /** {Yes | No}  Default is YES. Compute Line losses and segregate by 3-phase and other (1- and 2-phase) line losses.*/
  "3phaseLosses"?: boolean;
  /** {Yes | No}  Default is YES. Compute losses and segregate by voltage base. If NO, then voltage-based tabulation is not reported.*/
  VbaseLosses?: boolean;
  /** {Yes | No}  Default is NO.  Report min, max, and average phase voltages for the zone and tabulate by voltage base. Demand Intervals must be turned on (Set Demand=true) and voltage bases must be defined for this property to take effect. Result is in a separate report file.*/
  PhaseVoltageReport?: boolean;
  /** Average number of annual interruptions for head of the meter zone (source side of zone or feeder).*/
  Int_Rate?: number;
  /** Average annual duration, in hr, of interruptions for head of the meter zone (source side of zone or feeder).*/
  Int_Duration?: number;
  /** (Read only) Makes SAIFI result available via return on query (? energymeter.myMeter.SAIFI.*/
  SAIFI?: number;
  /** (Read only) Makes SAIFIkW result available via return on query (? energymeter.myMeter.SAIFIkW.*/
  SAIFIkW?: number;
  /** (Read only) Makes SAIDI result available via return on query (? energymeter.myMeter.SAIDI.*/
  SAIDI?: number;
  /** (Read only) Makes CAIDI result available via return on query (? energymeter.myMeter.CAIDI.*/
  CAIDI?: number;
  /** (Read only) Makes Total Customer Interrupts value result available via return on query (? energymeter.myMeter.CustInterrupts.*/
  CustInterrupts?: number;
  /** Base Frequency for ratings.*/
  basefreq?: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled?: boolean;
  constructor(
    nameOrOptions: string | EnergyMeterInterface,
    options: Omit<EnergyMeterInterface, "name">
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
