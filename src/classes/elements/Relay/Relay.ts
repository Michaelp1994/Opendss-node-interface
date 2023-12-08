import { NormalEnum, StateEnum } from "@enums/enums";
import { RelayInterface } from "./RelayInterface";
import CircuitElementComponent from "./CircuitElementComponent";

/**   Circuit Element, Control Element  */
export default class Relay
  extends CircuitElementComponent
  implements HasKeys<RelayInterface>
{
  _type = "Relay";

  parameters: Array<keyof this> = [
    "MonitoredObj",
    "MonitoredTerm",
    "SwitchedObj",
    "SwitchedTerm",
    "type",
    "Phasecurve",
    "Groundcurve",
    "PhaseTrip",
    "GroundTrip",
    "TDPhase",
    "TDGround",
    "PhaseInst",
    "GroundInst",
    "Reset",
    "Shots",
    "RecloseIntervals",
    "Delay",
    "Overvoltcurve",
    "Undervoltcurve",
    "kvbase",
    "47%Pickup",
    "46BaseAmps",
    "46%Pickup",
    "46isqt",
    "Variable",
    "overtrip",
    "undertrip",
    "Breakertime",
    "action",
    "Z1mag",
    "Z1ang",
    "Z0mag",
    "Z0ang",
    "Mphase",
    "Mground",
    "EventLog",
    "DebugTrace",
    "DistReverse",
    "Normal",
    "State",
    "DOC_TiltAngleLow",
    "DOC_TiltAngleHigh",
    "DOC_TripSettingLow",
    "DOC_TripSettingHigh",
    "DOC_TripSettingMag",
    "DOC_DelayInner",
    "DOC_PhaseCurveInner",
    "DOC_PhaseTripInner",
    "DOC_TDPhaseInner",
    "DOC_P1Blocking",
    "basefreq",
    "enabled",
    "like",
  ];

  /** Full object name of the circuit element, typically a line, transformer, load, or generator, to which the relay's PT and/or CT are connected. This is the "monitored" element. There is no default; must be specified. */
  MonitoredObj: string;

  /** Number of the terminal of the circuit element to which the Relay is connected. 1 or 2, typically.  Default is 1. */
  MonitoredTerm?: number;

  /** Name of circuit element switch that the Relay controls. Specify the full object name.Defaults to the same as the Monitored element. This is the "controlled" element. */
  SwitchedObj?: string;

  /** Number of the terminal of the controlled element in which the switch is controlled by the Relay. 1 or 2, typically.  Default is 1. */
  SwitchedTerm?: number;

  /** One of a legal relay type:
   *
   * Current
   *
   * Voltage
   *
   * Reversepower
   *
   * 46 (neg seq current)
   *
   * 47 (neg seq voltage)
   *
   * Generic (generic over/under relay)
   *
   * Distance
   *
   * TD21
   *
   * DOC (directional overcurrent)
   *
   * Default is overcurrent relay (Current) Specify the curve and pickup settings appropriate for each type. Generic relays monitor PC Element Control variables and trip on out of over/under range in definite time. */
  type?: string;

  /** Name of the TCC Curve object that determines the phase trip.  Must have been previously defined as a TCC_Curve object. Default is none (ignored). For overcurrent relay, multiplying the current values in the curve by the "phasetrip" value gives the actual current. */
  Phasecurve?: string;

  /** Name of the TCC Curve object that determines the ground trip.  Must have been previously defined as a TCC_Curve object. Default is none (ignored).For overcurrent relay, multiplying the current values in the curve by the "groundtrip" valuw gives the actual current. */
  Groundcurve?: string;

  /** Multiplier or actual phase amps for the phase TCC curve.  Defaults to 1.0. */
  PhaseTrip?: number;

  /** Multiplier or actual ground amps (3I0) for the ground TCC curve.  Defaults to 1.0. */
  GroundTrip?: number;

  /** Time dial for Phase trip curve. Multiplier on time axis of specified curve. Default=1.0. */
  TDPhase?: number;

  /** Time dial for Ground trip curve. Multiplier on time axis of specified curve. Default=1.0. */
  TDGround?: number;

  /** Actual  amps (Current relay) or kW (reverse power relay) for instantaneous phase trip which is assumed to happen in 0.01 sec + Delay Time. Default is 0.0, which signifies no inst trip. Use this value for specifying the Reverse Power threshold (kW) for reverse power relays. */
  PhaseInst?: number;

  /** Actual  amps for instantaneous ground trip which is assumed to happen in 0.01 sec + Delay Time.Default is 0.0, which signifies no inst trip. */
  GroundInst?: number;

  /** Reset time in sec for relay.  Default is 15. If this much time passes between the last pickup event, and the relay has not locked out, the operation counter resets. */
  Reset?: number;

  /** Number of shots to lockout.  Default is 4. This is one more than the number of reclose intervals. */
  Shots?: number;

  /** Array of reclose intervals. If none, specify "NONE". Default for overcurrent relay is (0.5, 2.0, 2.0) seconds. Default for a voltage relay is (5.0). In a voltage relay, this is  seconds after restoration of voltage that the reclose occurs. Reverse power relay is one shot to lockout, so this is ignored.  A locked out relay must be closed manually (set action=close). */
  RecloseIntervals?: number[];

  /** Trip time delay (sec) for DEFINITE TIME relays. Default is 0.0 for current, voltage and DOC relays. If >0 then this value is used instead of curves. Used by Generic, RevPower, 46 and 47 relays. Defaults to 0.1 s for these relays. */
  Delay?: number;

  /** TCC Curve object to use for overvoltage relay.  Curve is assumed to be defined with per unit voltage values. Voltage base should be defined for the relay. Default is none (ignored). */
  Overvoltcurve?: string;

  /** TCC Curve object to use for undervoltage relay.  Curve is assumed to be defined with per unit voltage values. Voltage base should be defined for the relay. Default is none (ignored). */
  Undervoltcurve?: string;

  /** Voltage base (kV) for the relay. Specify line-line for 3 phase devices); line-neutral for 1-phase devices.  Relay assumes the number of phases of the monitored element.  Default is 0.0, which results in assuming the voltage values in the "TCC" curve are specified in actual line-to-neutral volts. */
  kvbase?: number;

  /** Percent voltage pickup for 47 relay (Neg seq voltage). Default is 2. Specify also base voltage (kvbase) and delay time value. */
  "47%Pickup"?: number;

  /** Base current, Amps, for 46 relay (neg seq current).  Used for establishing pickup and per unit I-squared-t. */
  "46BaseAmps"?: number;

  /** Percent pickup current for 46 relay (neg seq current).  Default is 20.0.   When current exceeds this value * BaseAmps, I-squared-t calc starts. */
  "46%Pickup"?: number;

  /** Negative Sequence I-squared-t trip value for 46 relay (neg seq current).  Default is 1 (trips in 1 sec for 1 per unit neg seq current).  Should be 1 to 99. */
  "46isqt"?: number;

  /** Name of variable in PC Elements being monitored.  Only applies to Generic relay. */
  Variable?: string;

  /** Trip setting (high value) for Generic relay variable.  Relay trips in definite time if value of variable exceeds this value. */
  overtrip?: number;

  /** Trip setting (low value) for Generic relay variable.  Relay trips in definite time if value of variable is less than this value. */
  undertrip?: number;

  /** Fixed delay time (sec) added to relay time. Default is 0.0. Designed to represent breaker time or some other delay after a trip decision is made.Use Delay property for setting a fixed trip time delay.Added to trip time of current and voltage relays. Could use in combination with inst trip value to obtain a definite time overcurrent relay. */
  Breakertime?: number;

  /** DEPRECATED. See "State" property
   *
   * Redundant with State */
  action?: string;

  /** Positive sequence reach impedance in primary ohms for Distance and TD21 functions. Default=0.7 */
  Z1mag?: number;

  /** Positive sequence reach impedance angle in degrees for Distance and TD21 functions. Default=64.0 */
  Z1ang?: number;

  /** Zero sequence reach impedance in primary ohms for Distance and TD21 functions. Default=2.1 */
  Z0mag?: number;

  /** Zero sequence reach impedance angle in degrees for Distance and TD21 functions. Default=68.0 */
  Z0ang?: number;

  /** Phase reach multiplier in per-unit for Distance and TD21 functions. Default=0.7 */
  Mphase?: number;

  /** Ground reach multiplier in per-unit for Distance and TD21 functions. Default=0.7 */
  Mground?: number;

  /** {Yes/True* | No/False} Default is Yes for Relay. Write trips, reclose and reset events to EventLog. */
  EventLog?: boolean;

  /** {Yes/True* | No/False} Default is No for Relay. Write extra details to Eventlog. */
  DebugTrace?: boolean;

  /** {Yes/True* | No/False} Default is No; reverse direction for distance and td21 types. */
  DistReverse?: boolean;

  /** {Open | Closed} Normal state of the relay. The relay reverts to this state for reset, change of mode, etc. Defaults to "State" if not specifically declared. */
  Normal?: NormalEnum;

  /** {Open | Closed} Actual state of the relay. Upon setting, immediately forces state of the relay, overriding the Relay control. Simulates manual control on relay. Defaults to Closed. "Open" causes the controlled element to open and lock out. "Closed" causes the controlled element to close and the relay to reset to its first operation. */
  State?: StateEnum;

  /** Tilt angle for low-current trip line. Default is 90. */
  DOC_TiltAngleLow?: number;

  /** Tilt angle for high-current trip line. Default is 90. */
  DOC_TiltAngleHigh?: number;

  /** Resistive trip setting for low-current line. Default is 0. */
  DOC_TripSettingLow?: number;

  /** Resistive trip setting for high-current line.  Default is -1 (deactivated). To activate, set a positive value. Must be greater than "DOC_TripSettingLow". */
  DOC_TripSettingHigh?: number;

  /** Trip setting for current magnitude (defines a circle in the relay characteristics). Default is -1 (deactivated). To activate, set a positive value. */
  DOC_TripSettingMag?: number;

  /** Trip time delay (sec) for operation in inner region for DOC relay, defined when "DOC_TripSettingMag" or "DOC_TripSettingHigh" are activate. Default is -1.0 (deactivated), meaning that the relay characteristic is insensitive in the inner region (no trip). Set to 0 for instantaneous trip and >0 for a definite time delay. If "DOC_PhaseCurveInner" is specified, time delay from curve is utilized instead. */
  DOC_DelayInner?: number;

  /** Name of the TCC Curve object that determines the phase trip for operation in inner region for DOC relay. Must have been previously defined as a TCC_Curve object. Default is none (ignored). Multiplying the current values in the curve by the "DOC_PhaseTripInner" value gives the actual current. */
  DOC_PhaseCurveInner?: number;

  /** Multiplier for the "DOC_PhaseCurveInner" TCC curve.  Defaults to 1.0. */
  DOC_PhaseTripInner?: number;

  /** Time dial for "DOC_PhaseCurveInner" TCC curve. Multiplier on time axis of specified curve. Default=1.0. */
  DOC_TDPhaseInner?: string;

  /** {Yes/True* | No/False} Blocking element that impedes relay from tripping if balanced net three-phase active power is in the forward direction (i.e., flowing into the monitored terminal). For a delayed trip, if at any given time the reverse power flow condition stops, the tripping is reset. Default=True. */
  DOC_P1Blocking?: boolean;

  /** Base Frequency for ratings. */
  basefreq?: number;

  /** {Yes|No or True|False} Indicates whether this element is enabled. */
  enabled?: boolean;

  constructor(options: RelayInterface);
  constructor(name: string, options?: OmitName<RelayInterface>);
  constructor(
    nameOrOptions: string | RelayInterface,
    options?: OmitName<RelayInterface>,
  ) {
    super(nameOrOptions);
    if (typeof nameOrOptions === "string") {
      const { MonitoredObj, ...optOptions } = options!;
      this.MonitoredObj = MonitoredObj;
      Object.assign(this, optOptions);
    } else {
      const { name, MonitoredObj, ...otherOptions } = nameOrOptions;
      this.MonitoredObj = MonitoredObj;
      Object.assign(this, otherOptions);
    }
  }
}
