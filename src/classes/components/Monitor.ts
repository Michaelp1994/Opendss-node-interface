import { ActionEnum } from "@enums/enums";
import { MonitorInterface } from "@interfaces/MonitorInterface";
import CircuitElementComponent from "./CircuitElementComponent";

/**   Circuit Element, Meter Element  */
export class Monitor extends CircuitElementComponent {
  _type = "Monitor";
  _parameters = [
    "element",
    "terminal",
    "mode",
    "action",
    "residual",
    "VIPolar",
    "PPolar",
    "basefreq",
    "enabled",
    "like",
  ];
  /** Name (Full Object name) of element to which the monitor is connected.*/
  element?: string;
  /** Number of the terminal of the circuit element to which the monitor is connected. 1 or 2, typically. For monitoring states, attach monitor to terminal 1.*/
  terminal?: number;
  /** Bitmask integer designating the values the monitor is to capture:
   *
   * 0 = Voltages and currents at designated terminal
   *
   * 1 = Powers at designated terminal
   *
   * 2 = Tap Position (Transformer Device only)
   *
   * 3 = State Variables (PCElements only)
   *
   * 4 = Flicker level and severity index (Pst) for voltages. No adders apply.
   *
   * Flicker level at simulation time step, Pst at 10-minute time step.
   *
   *
   *
   * 5 = Solution variables (Iterations, etc).
   *
   * Normally, these would be actual phasor quantities from solution.
   *
   * 6 = Capacitor Switching (Capacitors only)
   *
   * 7 = Storage state vars (Storage device only)
   *
   * 8 = All winding currents (Transformer device only)
   *
   * 9 = Losses, watts and var (of monitored device)
   *
   * 10 = All Winding voltages (Transformer device only)
   *
   * Normally, these would be actual phasor quantities from solution.
   *
   * 11 = All terminal node voltages and line currents of monitored device
   *
   * 12 = All terminal node voltages LL and line currents of monitored device
   *
   * Combine mode with adders below to achieve other results for terminal quantities:
   *
   * +16 = Sequence quantities
   *
   * +32 = Magnitude only
   *
   * +64 = Positive sequence only or avg of all phases
   *
   * Mix adder to obtain desired results. For example:
   *
   * Mode=112 will save positive sequence voltage and current magnitudes only
   *
   * Mode=48 will save all sequence voltages and currents, but magnitude only.*/
  mode?: number;
  /** {Clear | Save | Take | Process}
   *
   * (C)lears or (S)aves current buffer.
   *
   * (T)ake action takes a sample.
   *
   * (P)rocesses the data taken so far (e.g. Pst for mode 4).
   *
   * Note that monitors are automatically reset (cleared) when the Set Mode= command is issued. Otherwise, the user must explicitly reset all monitors (reset monitors command) or individual monitors with the Clear action.*/
  action?: ActionEnum;
  /** {Yes/True | No/False} Default = No.  Include Residual cbannel (sum of all phases) for voltage and current. Does not apply to sequence quantity modes or power modes.*/
  residual?: boolean;
  /** {Yes/True | No/False} Default = YES. Report voltage and current in polar form (Mag/Angle). (default)  Otherwise, it will be real and imaginary.*/
  VIPolar?: boolean;
  /** {Yes/True | No/False} Default = YES. Report power in Apparent power, S, in polar form (Mag/Angle).(default)  Otherwise, is P and Q*/
  PPolar?: boolean;
  /** Base Frequency for ratings.*/
  basefreq?: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled?: boolean;
  constructor(
    nameOrOptions: string | MonitorInterface,
    options?: Omit<MonitorInterface, "name">
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
