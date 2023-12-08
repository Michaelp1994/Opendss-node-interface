import { NormalEnum, StateEnum } from "@enums/enums";
import { BaseElementInterface } from "@elements/BaseElements";

/**   Circuit Element, Control Element  */
export default interface RecloserInterface extends BaseElementInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.Recloser#MonitoredObj
   */
  monitoredObj: string;
  /**
   *@inheritdoc Models.Recloser#MonitoredTerm
   */
  MonitoredTerm?: number;
  /**
   *@inheritdoc Models.Recloser#SwitchedObj
   */
  SwitchedObj?: string;
  /**
   *@inheritdoc Models.Recloser#SwitchedTerm
   */
  SwitchedTerm?: number;
  /**
   *@inheritdoc Models.Recloser#NumFast
   */
  NumFast?: number;
  /**
   *@inheritdoc Models.Recloser#PhaseFast
   */
  PhaseFast?: string;
  /**
   *@inheritdoc Models.Recloser#PhaseDelayed
   */
  PhaseDelayed?: string;
  /**
   *@inheritdoc Models.Recloser#GroundFast
   */
  GroundFast?: string;
  /**
   *@inheritdoc Models.Recloser#GroundDelayed
   */
  GroundDelayed?: string;
  /**
   *@inheritdoc Models.Recloser#PhaseTrip
   */
  PhaseTrip?: number;
  /**
   *@inheritdoc Models.Recloser#GroundTrip
   */
  GroundTrip?: number;
  /**
   *@inheritdoc Models.Recloser#PhaseInst
   */
  PhaseInst?: number;
  /**
   *@inheritdoc Models.Recloser#GroundInst
   */
  GroundInst?: number;
  /**
   *@inheritdoc Models.Recloser#Reset
   */
  reset?: number;
  /**
   *@inheritdoc Models.Recloser#Shots
   */
  Shots?: number;
  /**
   *@inheritdoc Models.Recloser#RecloseIntervals
   */
  RecloseIntervals?: number[];
  /**
   *@inheritdoc Models.Recloser#Delay
   */
  delay?: number;
  /**
   *@inheritdoc Models.Recloser#Action
   */
  Action?: string;
  /**
   *@inheritdoc Models.Recloser#TDPhFast
   */
  TDPhFast?: number;
  /**
   *@inheritdoc Models.Recloser#TDGrFast
   */
  TDGrFast?: number;
  /**
   *@inheritdoc Models.Recloser#TDPhDelayed
   */
  TDPhDelayed?: number;
  /**
   *@inheritdoc Models.Recloser#TDGrDelayed
   */
  TDGrDelayed?: number;
  /**
   *@inheritdoc Models.Recloser#Normal
   */
  Normal?: NormalEnum;
  /**
   *@inheritdoc Models.Recloser#State
   */
  State?: StateEnum;
  /**
   *@inheritdoc Models.Recloser#baseFreq
   */
  baseFreq?: number;
  /**
   *@inheritdoc Models.Recloser#enabled
   */
  enabled?: boolean;
}
