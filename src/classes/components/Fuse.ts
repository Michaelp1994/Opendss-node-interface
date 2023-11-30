import { NormalEnum, StateEnum } from "@enums/enums";
import { FuseInterface } from "@interfaces/FuseInterface";
import CircuitElementComponent from "./CircuitElementComponent";

/**   Circuit Element, Control Element  */
export class Fuse extends CircuitElementComponent {
  _type = "Fuse";
  _parameters = [
    "monitoredObj",
    "MonitoredTerm",
    "SwitchedObj",
    "SwitchedTerm",
    "fuseCurve",
    "RatedCurrent",
    "Delay",
    "Action",
    "Normal",
    "State",
    "basefreq",
    "enabled",
    "like",
  ];
  /** Full object name of the circuit element, typically a line, transformer, load, or generator, to which the Fuse is connected. This is the "monitored" element. There is no default; must be specified.*/
  monitoredObj: string;
  /** Number of the terminal of the circuit element to which the Fuse is connected. 1 or 2, typically.  Default is 1.*/
  MonitoredTerm?: number;
  /** Name of circuit element switch that the Fuse controls. Specify the full object name.Defaults to the same as the Monitored element. This is the "controlled" element.*/
  SwitchedObj?: string;
  /** Number of the terminal of the controlled element in which the switch is controlled by the Fuse. 1 or 2, typically.  Default is 1.  Assumes all phases of the element have a fuse of this type.*/
  SwitchedTerm?: number;
  /** Name of the TCC Curve object that determines the fuse blowing.  Must have been previously defined as a TCC_Curve object. Default is "Tlink". Multiplying the current values in the curve by the "RatedCurrent" value gives the actual current.*/
  fuseCurve?: string;
  /** Multiplier or actual phase amps for the phase TCC curve.  Defaults to 1.0.*/
  RatedCurrent?: number;
  /** Fixed delay time (sec) added to Fuse blowing time determined from the TCC curve. Default is 0.0. Used to represent fuse clearing time or any other delay.*/
  Delay?: number;
  /** DEPRECATED. See "State" property.*/
  Action?: string;
  /** ARRAY of strings {Open | Closed} representing the Normal state of the fuse in each phase of the controlled element. The fuse reverts to this state for reset, change of mode, etc. Defaults to "State" if not specifically declared.*/
  Normal?: NormalEnum;
  /** ARRAY of strings {Open | Closed} representing the Actual state of the fuse in each phase of the controlled element. Upon setting, immediately forces state of fuse(s). Simulates manual control on Fuse. Defaults to Closed for all phases.*/
  State?: StateEnum;
  /** Base Frequency for ratings.*/
  basefreq?: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled?: boolean;
  constructor(
    nameOrOptions: string | FuseInterface,
    options: Omit<FuseInterface, "name">
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
