import BaseComponent from "./BaseComponent";
import { RecloserInterface } from "../interfaces/RecloserInterface";
/**   Circuit Element, Control Element  */
export class Recloser extends BaseComponent {
  _type = "Recloser";
  _parameters = [
    "MonitoredObj",
    "MonitoredTerm",
    "SwitchedObj",
    "SwitchedTerm",
    "NumFast",
    "PhaseFast",
    "PhaseDelayed",
    "GroundFast",
    "GroundDelayed",
    "PhaseTrip",
    "GroundTrip",
    "PhaseInst",
    "GroundInst",
    "Reset",
    "Shots",
    "RecloseIntervals",
    "Delay",
    "Action",
    "TDPhFast",
    "TDGrFast",
    "TDPhDelayed",
    "TDGrDelayed",
    "Normal",
    "State",
    "basefreq",
    "enabled",
    "like",
  ];
  /** Full object name of the circuit element, typically a line, transformer, load, or generator, to which the Recloser's PT and/or CT are connected. This is the "monitored" element. There is no default; must be specified.*/
  MonitoredObj?: string;
  /** Number of the terminal of the circuit element to which the Recloser is connected. 1 or 2, typically.  Default is 1.*/
  MonitoredTerm?: number;
  /** Name of circuit element switch that the Recloser controls. Specify the full object name.Defaults to the same as the Monitored element. This is the "controlled" element.*/
  SwitchedObj?: string;
  /** Number of the terminal of the controlled element in which the switch is controlled by the Recloser. 1 or 2, typically.  Default is 1.*/
  SwitchedTerm?: number;
  /** Number of Fast (fuse saving) operations.  Default is 1. (See "Shots")*/
  NumFast?: number;
  /** Name of the TCC Curve object that determines the Phase Fast trip.  Must have been previously defined as a TCC_Curve object. Default is "A". Multiplying the current values in the curve by the "phasetrip" value gives the actual current.*/
  PhaseFast?: string;
  /** Name of the TCC Curve object that determines the Phase Delayed trip.  Must have been previously defined as a TCC_Curve object. Default is "D".Multiplying the current values in the curve by the "phasetrip" value gives the actual current.*/
  PhaseDelayed?: string;
  /** Name of the TCC Curve object that determines the Ground Fast trip.  Must have been previously defined as a TCC_Curve object. Default is none (ignored). Multiplying the current values in the curve by the "groundtrip" value gives the actual current.*/
  GroundFast?: string;
  /** Name of the TCC Curve object that determines the Ground Delayed trip.  Must have been previously defined as a TCC_Curve object. Default is none (ignored).Multiplying the current values in the curve by the "groundtrip" value gives the actual current.*/
  GroundDelayed?: string;
  /** Multiplier or actual phase amps for the phase TCC curve.  Defaults to 1.0.*/
  PhaseTrip?: number;
  /** Multiplier or actual ground amps (3I0) for the ground TCC curve.  Defaults to 1.0.*/
  GroundTrip?: number;
  /** Actual amps for instantaneous phase trip which is assumed to happen in 0.01 sec + Delay Time. Default is 0.0, which signifies no inst trip.*/
  PhaseInst?: number;
  /** Actual amps for instantaneous ground trip which is assumed to happen in 0.01 sec + Delay Time.Default is 0.0, which signifies no inst trip.*/
  GroundInst?: number;
  /** Reset time in sec for Recloser.  Default is 15.*/
  Reset?: number;
  /** Total Number of fast and delayed shots to lockout.  Default is 4. This is one more than the number of reclose intervals.*/
  Shots?: number;
  /** Array of reclose intervals.  Default for Recloser is (0.5, 2.0, 2.0) seconds. A locked out Recloser must be closed manually (action=close).*/
  RecloseIntervals?: number[];
  /** Fixed delay time (sec) added to Recloser trip time. Default is 0.0. Used to represent breaker time or any other delay.*/
  Delay?: number;
  /** DEPRECATED. See "State" property
   *
   * Redundant with State*/
  Action?: string;
  /** Time dial for Phase Fast trip curve. Multiplier on time axis of specified curve. Default=1.0.*/
  TDPhFast?: number;
  /** Time dial for Ground Fast trip curve. Multiplier on time axis of specified curve. Default=1.0.*/
  TDGrFast?: number;
  /** Time dial for Phase Delayed trip curve. Multiplier on time axis of specified curve. Default=1.0.*/
  TDPhDelayed?: number;
  /** Time dial for Ground Delayed trip curve. Multiplier on time axis of specified curve. Default=1.0.*/
  TDGrDelayed?: number;
  /** {Open | Closed} Normal state of the recloser. The recloser reverts to this state for reset, change of mode, etc. Defaults to "State" if not specificallt declared.*/
  Normal?: string;
  /** {Open | Closed} Actual state of the recloser. Upon setting, immediately forces state of the recloser, overriding the Recloser control. Simulates manual control on recloser. Defaults to Closed. "Open" causes the controlled element to open and lock out. "Closed" causes the controlled element to close and the recloser to reset to its first operation.*/
  State?: string;
  /** Base Frequency for ratings.*/
  basefreq?: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled?: boolean;

  constructor(
    nameOrOptions: string | RecloserInterface,
    options?: Omit<RecloserInterface, "name">
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
