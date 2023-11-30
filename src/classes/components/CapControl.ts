import { CTPhaseEnum, PTPhaseEnum, TypeEnum } from "@enums/enums";
import { CapControlInterface } from "@interfaces/CapControlInterface";
import CircuitElementComponent from "./CircuitElementComponent";

/**   Circuit Element, Control Element  */
export class CapControl extends CircuitElementComponent {
  _type = "CapControl";
  _parameters = [
    "element",
    "terminal",
    "capacitor",
    "type",
    "PTratio",
    "CTratio",
    "ONsetting",
    "OFFsetting",
    "Delay",
    "VoltOverride",
    "Vmax",
    "Vmin",
    "DelayOFF",
    "DeadTime",
    "CTPhase",
    "PTPhase",
    "VBus",
    "EventLog",
    "UserModel",
    "UserData",
    "pctMinkvar",
    "Reset",
    "basefreq",
    "enabled",
    "like",
  ];
  /** Full object name of the circuit element, typically a line or transformer, to which the capacitor control's PT and/or CT are connected.There is no default; must be specified.*/
  element: string;
  /** Number of the terminal of the circuit element to which the CapControl is connected. 1 or 2, typically.  Default is 1.*/
  terminal?: number;
  /** Name of Capacitor element which the CapControl controls. No Default; Must be specified.Do not specify the full object name; "Capacitor" is assumed for the object class.  Example:
   *
   * Capacitor=cap1*/
  capacitor: string;
  /** {Current | voltage | kvar | PF | time } Control type.  Specify the ONsetting and OFFsetting appropriately with the type of control. (See help for ONsetting)*/
  type?: TypeEnum;
  /** Ratio of the PT that converts the monitored voltage to the control voltage. Default is 60.  If the capacitor is Wye, the 1st phase line-to-neutral voltage is monitored.  Else, the line-to-line voltage (1st - 2nd phase) is monitored.*/
  PTratio?: number;
  /** Ratio of the CT from line amps to control ampere setting for current and kvar control types.*/
  CTratio?: number;
  /** Value at which the control arms to switch the capacitor ON (or ratchet up a step).
   *
   * Type of Control:
   *
   * Current: Line Amps / CTratio
   *
   * Voltage: Line-Neutral (or Line-Line for delta) Volts / PTratio
   *
   * kvar:    Total kvar, all phases (3-phase for pos seq model). This is directional.
   *
   * PF:      Power Factor, Total power in monitored terminal. Negative for Leading.
   *
   * Time:    Hrs from Midnight as a floating point number (decimal). 7:30am would be entered as 7.5.*/
  ONsetting?: number;
  /** Value at which the control arms to switch the capacitor OFF. (See help for ONsetting)For Time control, is OK to have Off time the next day ( < On time)*/
  OFFsetting?: number;
  /** Time delay, in seconds, from when the control is armed before it sends out the switching command to turn ON.  The control may reset before the action actually occurs. This is used to determine which capacity control will act first. Default is 15.  You may specify any floating point number to achieve a model of whatever condition is necessary.*/
  Delay?: number;
  /** {Yes | No}  Default is No.  Switch to indicate whether VOLTAGE OVERRIDE is to be considered. Vmax and Vmin must be set to reasonable values if this property is Yes.*/
  VoltOverride?: boolean;
  /** Maximum voltage, in volts.  If the voltage across the capacitor divided by the PTRATIO is greater than this voltage, the capacitor will switch OFF regardless of other control settings. Default is 126 (goes with a PT ratio of 60 for 12.47 kV system).*/
  Vmax?: number;
  /** Minimum voltage, in volts.  If the voltage across the capacitor divided by the PTRATIO is less than this voltage, the capacitor will switch ON regardless of other control settings. Default is 115 (goes with a PT ratio of 60 for 12.47 kV system).*/
  Vmin?: number;
  /** Time delay, in seconds, for control to turn OFF when present state is ON. Default is 15.*/
  DelayOFF?: number;
  /** Dead time after capacitor is turned OFF before it can be turned back ON. Default is 300 sec.*/
  DeadTime?: number;
  /** Number of the phase being monitored for CURRENT control or one of {AVG | MAX | MIN} for all phases. Default=1. If delta or L-L connection, enter the first or the two phases being monitored [1-2, 2-3, 3-1]. Must be less than the number of phases. Does not apply to kvar control which uses all phases by default.*/
  CTPhase?: CTPhaseEnum;
  /** Number of the phase being monitored for VOLTAGE control or one of {AVG | MAX | MIN} for all phases. Default=1. If delta or L-L connection, enter the first or the two phases being monitored [1-2, 2-3, 3-1]. Must be less than the number of phases. Does not apply to kvar control which uses all phases by default.*/
  PTPhase?: PTPhaseEnum;
  /** Name of bus to use for voltage override function. Default is bus at monitored terminal. Sometimes it is useful to monitor a bus in another location to emulate various DMS control algorithms.*/
  VBus?: string;
  /** {Yes/True* | No/False} Default is YES for CapControl. Log control actions to Eventlog.*/
  EventLog?: boolean;
  /** Name of DLL containing user-written CapControl model, overriding the default model.  Set to "none" to negate previous setting.*/
  UserModel?: string;
  /** String (in quotes or parentheses if necessary) that gets passed to the user-written CapControl model Edit function for defining the data required for that model.*/
  UserData?: string;
  /** For PF control option, min percent of total bank kvar at which control will close capacitor switch. Default = 50.*/
  pctMinkvar?: number;
  /** {Yes | No} If Yes, forces Reset of this CapControl.*/
  Reset?: boolean;
  /** Base Frequency for ratings.*/
  basefreq?: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled?: boolean;
  constructor(
    nameOrOptions: string | CapControlInterface,
    options: Omit<CapControlInterface, "name">
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
