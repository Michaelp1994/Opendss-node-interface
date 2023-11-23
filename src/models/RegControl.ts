import BaseComponent from "./BaseComponent";
import { RegControlInterface } from "../interfaces/RegControlInterface";
/**   Circuit Element, Control Element  */
export class RegControl extends BaseComponent {
  _type = "RegControl";
  _parameters = [
    "transformer",
    "winding",
    "vreg",
    "band",
    "ptratio",
    "CTprim",
    "R",
    "X",
    "bus",
    "delay",
    "reversible",
    "revvreg",
    "revband",
    "revR",
    "revX",
    "tapdelay",
    "debugtrace",
    "maxtapchange",
    "inversetime",
    "tapwinding",
    "vlimit",
    "PTphase",
    "revThreshold",
    "revDelay",
    "revNeutral",
    "EventLog",
    "RemotePTRatio",
    "TapNum",
    "Reset",
    "LDC_Z",
    "rev_Z",
    "Cogen",
    "basefreq",
    "enabled",
    "like",
  ];
  /** Name of Transformer or AutoTrans element to which the RegControl is connected. Do not specify the full object name; "Transformer" or "AutoTrans" is assumed for the object class.  Example:
   *
   * Transformer=Xfmr1*/
  transformer?: string;
  /** Number of the winding of the transformer element that the RegControl is monitoring. 1 or 2, typically.  Side Effect: Sets TAPWINDING property to the same winding.*/
  winding?: number;
  /** Voltage regulator setting, in VOLTS, for the winding being controlled.  Multiplying this value times the ptratio should yield the voltage across the WINDING of the controlled transformer. Default is 120.0*/
  vreg?: number;
  /** Bandwidth in VOLTS for the controlled bus (see help for ptratio property).  Default is 3.0*/
  band?: number;
  /** Ratio of the PT that converts the controlled winding voltage to the regulator control voltage. Default is 60.  If the winding is Wye, the line-to-neutral voltage is used.  Else, the line-to-line voltage is used. SIDE EFFECT: Also sets RemotePTRatio property.*/
  ptratio?: number;
  /** Rating, in Amperes, of the primary CT rating for which the line amps convert to control rated amps.The typical default secondary ampere rating is 0.2 Amps (check with manufacturer specs). Current at which the LDC voltages match the R and X settings.*/
  CTprim?: number;
  /** R setting on the line drop compensator in the regulator, expressed in VOLTS.*/
  R?: number;
  /** X setting on the line drop compensator in the regulator, expressed in VOLTS.*/
  X?: number;
  /** Name of a bus (busname.nodename) in the system to use as the controlled bus instead of the bus to which the transformer winding is connected or the R and X line drop compensator settings.  Do not specify this value if you wish to use the line drop compensator settings.  Default is null string. Assumes the base voltage for this bus is the same as the transformer winding base specified above. Note: This bus (1-phase) WILL BE CREATED by the regulator control upon SOLVE if not defined by some other device. You can specify the node of the bus you wish to sample (defaults to 1). If specified, the RegControl is redefined as a 1-phase device since only one voltage is used.*/
  bus?: string;
  /** Time delay, in seconds, from when the voltage goes out of band to when the tap changing begins. This is used to determine which regulator control will act first. Default is 15.  You may specify any floating point number to achieve a model of whatever condition is necessary.*/
  delay?: number;
  /** {Yes |No*} Indicates whether or not the regulator can be switched to regulate in the reverse direction. Default is No.Typically applies only to line regulators and not to LTC on a substation transformer.*/
  reversible?: boolean;
  /** Voltage setting in volts for operation in the reverse direction.*/
  revvreg?: number;
  /** Bandwidth for operating in the reverse direction.*/
  revband?: number;
  /** R line drop compensator setting for reverse direction.*/
  revR?: number;
  /** X line drop compensator setting for reverse direction.*/
  revX?: number;
  /** Delay in sec between tap changes. Default is 2. This is how long it takes between changes after the first change.*/
  tapdelay?: number;
  /** {Yes | No* }  Default is no.  Turn this on to capture the progress of the regulator model for each control iteration.  Creates a separate file for each RegControl named "REG_name.CSV".*/
  debugtrace?: boolean;
  /** Maximum allowable tap change per control iteration in STATIC control mode.  Default is 16.
   *
   * Set this to 1 to better approximate actual control action.
   *
   * Set this to 0 to fix the tap in the current position.*/
  maxtapchange?: number;
  /** {Yes | No* } Default is no.  The time delay is adjusted inversely proportional to the amount the voltage is outside the band down to 10%.*/
  inversetime?: boolean;
  /** Winding containing the actual taps, if different than the WINDING property. Defaults to the same winding as specified by the WINDING property.*/
  tapwinding?: number;
  /** Voltage Limit for bus to which regulated winding is connected (e.g. first customer). Default is 0.0. Set to a value greater then zero to activate this function.*/
  vlimit?: number;
  /** For multi-phase transformers, the number of the phase being monitored or one of { MAX | MIN} for all phases. Default=1. Must be less than or equal to the number of phases. Ignored for regulated bus.*/
  PTphase?: string;
  /** kW reverse power threshold for reversing the direction of the regulator. Default is 100.0 kw.*/
  revThreshold?: number;
  /** Time Delay in seconds (s) for executing the reversing action once the threshold for reversing has been exceeded. Default is 60 s.*/
  revDelay?: number;
  /** {Yes | No*} Default is no. Set this to Yes if you want the regulator to go to neutral in the reverse direction or in cogen operation.*/
  revNeutral?: boolean;
  /** {Yes/True* | No/False} Default is YES for regulator control. Log control actions to Eventlog.*/
  EventLog?: boolean;
  /** When regulating a bus (the Bus= property is set), the PT ratio required to convert actual voltage at the remote bus to control voltage. Is initialized to PTratio property. Set this property after setting PTratio.*/
  RemotePTRatio?: number;
  /** An integer number indicating the tap position that the controlled transformer winding tap position is currently at, or is being set to.  If being set, and the value is outside the range of the transformer min or max tap, then set to the min or max tap position as appropriate. Default is 0*/
  TapNum?: number;
  /** {Yes | No} If Yes, forces Reset of this RegControl.*/
  Reset?: boolean;
  /** Z value for Beckwith LDC_Z control option. Volts adjustment at rated control current.*/
  LDC_Z?: number;
  /** Reverse Z value for Beckwith LDC_Z control option.*/
  rev_Z?: number;
  /** {Yes|No*} Default is No. The Cogen feature is activated. Continues looking forward if power reverses, but switches to reverse-mode LDC, vreg and band values.*/
  Cogen?: boolean;
  /** Base Frequency for ratings.*/
  basefreq?: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled?: boolean;

  constructor(
    nameOrOptions: string | RegControlInterface,
    options?: Omit<RegControlInterface, "name">
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
