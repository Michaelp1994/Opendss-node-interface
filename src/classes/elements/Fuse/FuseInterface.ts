import { NormalEnum, StateEnum } from "@enums/enums";
import { BaseElementInterface } from "@elements/BaseElements";

/**   Circuit Element, Control Element  */
export default interface FuseInterface extends BaseElementInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.Fuse#MonitoredObj
   */
  monitoredObj: string;
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
   *@inheritdoc Models.Fuse#baseFreq
   */
  baseFreq?: number;
  /**
   *@inheritdoc Models.Fuse#enabled
   */
  enabled?: boolean;
}
