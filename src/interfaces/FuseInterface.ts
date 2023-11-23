import { BooleanEnum, NormalEnum, StateEnum } from "../enums/enums";
import BaseInterface from "./BaseInterface";

/**   Circuit Element, Control Element  */
export interface FuseInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.Fuse#MonitoredObj
   */
  monitoredObj?: string;
  /**
   *@inheritdoc Models.Fuse#MonitoredTerm
   */
  monitoredTerm?: number;
  /**
   *@inheritdoc Models.Fuse#SwitchedObj
   */
  switchedObj?: string;
  /**
   *@inheritdoc Models.Fuse#SwitchedTerm
   */
  switchedTerm?: number;
  /**
   *@inheritdoc Models.Fuse#FuseCurve
   */
  fuseCurve?: string;
  /**
   *@inheritdoc Models.Fuse#RatedCurrent
   */
  ratedCurrent?: number;
  /**
   *@inheritdoc Models.Fuse#Delay
   */
  delay?: number;
  /**
   *@inheritdoc Models.Fuse#Action
   */
  action?: string;
  /**
   *@inheritdoc Models.Fuse#Normal
   */
  normal?: NormalEnum;
  /**
   *@inheritdoc Models.Fuse#State
   */
  state?: StateEnum[];
  /**
   *@inheritdoc Models.Fuse#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.Fuse#enabled
   */
  enabled?: BooleanEnum;
}
