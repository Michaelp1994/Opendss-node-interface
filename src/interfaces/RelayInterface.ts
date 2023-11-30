import { NormalEnum, StateEnum } from "@enums/enums";
import BaseInterface from "./BaseInterface";

/**   Circuit Element, Control Element  */
export interface RelayInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.Relay#MonitoredObj
   */
  MonitoredObj: string;
  /**
   *@inheritdoc Models.Relay#MonitoredTerm
   */
  MonitoredTerm?: number;
  /**
   *@inheritdoc Models.Relay#SwitchedObj
   */
  SwitchedObj?: string;
  /**
   *@inheritdoc Models.Relay#SwitchedTerm
   */
  SwitchedTerm?: number;
  /**
   *@inheritdoc Models.Relay#type
   */
  type?: string;
  /**
   *@inheritdoc Models.Relay#Phasecurve
   */
  Phasecurve?: string;
  /**
   *@inheritdoc Models.Relay#Groundcurve
   */
  Groundcurve?: string;
  /**
   *@inheritdoc Models.Relay#PhaseTrip
   */
  PhaseTrip?: number;
  /**
   *@inheritdoc Models.Relay#GroundTrip
   */
  GroundTrip?: number;
  /**
   *@inheritdoc Models.Relay#TDPhase
   */
  TDPhase?: number;
  /**
   *@inheritdoc Models.Relay#TDGround
   */
  TDGround?: number;
  /**
   *@inheritdoc Models.Relay#PhaseInst
   */
  PhaseInst?: number;
  /**
   *@inheritdoc Models.Relay#GroundInst
   */
  GroundInst?: number;
  /**
   *@inheritdoc Models.Relay#Reset
   */
  Reset?: number;
  /**
   *@inheritdoc Models.Relay#Shots
   */
  Shots?: number;
  /**
   *@inheritdoc Models.Relay#RecloseIntervals
   */
  RecloseIntervals?: number[];
  /**
   *@inheritdoc Models.Relay#Delay
   */
  Delay?: number;
  /**
   *@inheritdoc Models.Relay#Overvoltcurve
   */
  Overvoltcurve?: string;
  /**
   *@inheritdoc Models.Relay#Undervoltcurve
   */
  Undervoltcurve?: string;
  /**
   *@inheritdoc Models.Relay#kvbase
   */
  kvbase?: number;
  /**
   *@inheritdoc Models.Relay#47%Pickup
   */
  "47%Pickup"?: number;
  /**
   *@inheritdoc Models.Relay#46BaseAmps
   */
  "46BaseAmps"?: number;
  /**
   *@inheritdoc Models.Relay#46%Pickup
   */
  "46%Pickup"?: number;
  /**
   *@inheritdoc Models.Relay#46isqt
   */
  "46isqt"?: number;
  /**
   *@inheritdoc Models.Relay#Variable
   */
  Variable?: string;
  /**
   *@inheritdoc Models.Relay#overtrip
   */
  overtrip?: number;
  /**
   *@inheritdoc Models.Relay#undertrip
   */
  undertrip?: number;
  /**
   *@inheritdoc Models.Relay#Breakertime
   */
  Breakertime?: number;
  /**
   *@inheritdoc Models.Relay#action
   */
  action?: string;
  /**
   *@inheritdoc Models.Relay#Z1mag
   */
  Z1mag?: number;
  /**
   *@inheritdoc Models.Relay#Z1ang
   */
  Z1ang?: number;
  /**
   *@inheritdoc Models.Relay#Z0mag
   */
  Z0mag?: number;
  /**
   *@inheritdoc Models.Relay#Z0ang
   */
  Z0ang?: number;
  /**
   *@inheritdoc Models.Relay#Mphase
   */
  Mphase?: number;
  /**
   *@inheritdoc Models.Relay#Mground
   */
  Mground?: number;
  /**
   *@inheritdoc Models.Relay#EventLog
   */
  EventLog?: boolean;
  /**
   *@inheritdoc Models.Relay#DebugTrace
   */
  DebugTrace?: boolean;
  /**
   *@inheritdoc Models.Relay#DistReverse
   */
  DistReverse?: boolean;
  /**
   *@inheritdoc Models.Relay#Normal
   */
  Normal?: NormalEnum;
  /**
   *@inheritdoc Models.Relay#State
   */
  State?: StateEnum;
  /**
   *@inheritdoc Models.Relay#DOC_TiltAngleLow
   */
  DOC_TiltAngleLow?: number;
  /**
   *@inheritdoc Models.Relay#DOC_TiltAngleHigh
   */
  DOC_TiltAngleHigh?: number;
  /**
   *@inheritdoc Models.Relay#DOC_TripSettingLow
   */
  DOC_TripSettingLow?: number;
  /**
   *@inheritdoc Models.Relay#DOC_TripSettingHigh
   */
  DOC_TripSettingHigh?: number;
  /**
   *@inheritdoc Models.Relay#DOC_TripSettingMag
   */
  DOC_TripSettingMag?: number;
  /**
   *@inheritdoc Models.Relay#DOC_DelayInner
   */
  DOC_DelayInner?: number;
  /**
   *@inheritdoc Models.Relay#DOC_PhaseCurveInner
   */
  DOC_PhaseCurveInner?: number;
  /**
   *@inheritdoc Models.Relay#DOC_PhaseTripInner
   */
  DOC_PhaseTripInner?: number;
  /**
   *@inheritdoc Models.Relay#DOC_TDPhaseInner
   */
  DOC_TDPhaseInner?: string;
  /**
   *@inheritdoc Models.Relay#DOC_P1Blocking
   */
  DOC_P1Blocking?: boolean;
  /**
   *@inheritdoc Models.Relay#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.Relay#enabled
   */
  enabled?: boolean;
}
