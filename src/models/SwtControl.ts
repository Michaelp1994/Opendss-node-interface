import { ActionEnum, YesNoEnum, BooleanEnum } from "../enums/enums";
import { SwtControlInterface } from "../interfaces/SwtControlInterface";
import BaseComponent from "./BaseComponent";

/**   Circuit Element, Control Element  */
export class SwtControl extends BaseComponent {
  _type = "SwtControl";
  _parameters = [
    "SwitchedObj",
    "SwitchedTerm",
    "Action",
    "Lock",
    "Delay",
    "Normal",
    "State",
    "Reset",
    "basefreq",
    "enabled",
    "like",
  ];
  /** Name of circuit element switch that the SwtControl operates. Specify the full object class and name.*/
  SwitchedObj?: string;
  /** Terminal number of the controlled element switch. 1 or 2, typically.  Default is 1.*/
  SwitchedTerm?: number;
  /** {Open | Close}  After specified delay time, and if not locked, causes the controlled switch to open or close.
   *
   * Redundant with State*/
  Action?: ActionEnum;
  /** {Yes | No} Delayed action. Sends CTRL_LOCK or CTRL_UNLOCK message to control queue. After delay time, controlled switch is locked in its present open / close state or unlocked. Switch will not respond to either manual (Action) or automatic (COM interface) control or internal OpenDSS Reset when locked.*/
  Lock?: YesNoEnum;
  /** Operating time delay (sec) of the switch. Defaults to 120.*/
  Delay?: number;
  /** {Open | Closed] Normal state of the switch. If not Locked, the switch reverts to this state for reset, change of mode, etc. Defaults to first Action or State specified if not specifically declared.*/
  Normal?: string;
  /** {Open | Closed] Present state of the switch. Upon setting, immediately forces state of switch.*/
  State?: string;
  /** {Yes | No} If Yes, forces Reset of switch to Normal state and removes Lock independently of any internal reset command for mode change, etc.*/
  Reset?: YesNoEnum;
  /** Base Frequency for ratings.*/
  basefreq?: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled?: BooleanEnum;
  constructor(
    nameOrOptions: string | SwtControlInterface,
    options?: Omit<SwtControlInterface, "name">
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
