import {
  BooleanEnum,
  CogenEnum,
  DebugTraceEnum,
  EventLogEnum,
  InverseTimeEnum,
  PTphaseEnum,
  ResetEnum,
  ReversibleEnum,
  RevNeutralEnum,
} from "../enums/enums";
import BaseInterface from "./BaseInterface";

/**   Circuit Element, Control Element  */
export interface RegControlInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.RegControl#transformer
   */
  transformer?: string;
  /**
   *@inheritdoc Models.RegControl#winding
   */
  winding?: number;
  /**
   *@inheritdoc Models.RegControl#vreg
   */
  vreg?: number;
  /**
   *@inheritdoc Models.RegControl#band
   */
  band?: number;
  /**
   *@inheritdoc Models.RegControl#ptratio
   */
  ptratio?: number;
  /**
   *@inheritdoc Models.RegControl#CTprim
   */
  CTprim?: number;
  /**
   *@inheritdoc Models.RegControl#R
   */
  R?: number;
  /**
   *@inheritdoc Models.RegControl#X
   */
  X?: number;
  /**
   *@inheritdoc Models.RegControl#bus
   */
  bus?: string;
  /**
   *@inheritdoc Models.RegControl#delay
   */
  delay?: number;
  /**
   *@inheritdoc Models.RegControl#reversible
   */
  reversible?: ReversibleEnum;
  /**
   *@inheritdoc Models.RegControl#revvreg
   */
  revvreg?: number;
  /**
   *@inheritdoc Models.RegControl#revband
   */
  revband?: number;
  /**
   *@inheritdoc Models.RegControl#revR
   */
  revR?: number;
  /**
   *@inheritdoc Models.RegControl#revX
   */
  revX?: number;
  /**
   *@inheritdoc Models.RegControl#tapdelay
   */
  tapdelay?: number;
  /**
   *@inheritdoc Models.RegControl#debugtrace
   */
  debugtrace?: DebugTraceEnum;
  /**
   *@inheritdoc Models.RegControl#maxtapchange
   */
  maxtapchange?: number;
  /**
   *@inheritdoc Models.RegControl#inversetime
   */
  inversetime?: InverseTimeEnum;
  /**
   *@inheritdoc Models.RegControl#tapwinding
   */
  tapwinding?: number;
  /**
   *@inheritdoc Models.RegControl#vlimit
   */
  vlimit?: number;
  /**
   *@inheritdoc Models.RegControl#PTphase
   */
  PTphase?: PTphaseEnum;
  /**
   *@inheritdoc Models.RegControl#revThreshold
   */
  revThreshold?: number;
  /**
   *@inheritdoc Models.RegControl#revDelay
   */
  revDelay?: number;
  /**
   *@inheritdoc Models.RegControl#revNeutral
   */
  revNeutral?: RevNeutralEnum;
  /**
   *@inheritdoc Models.RegControl#EventLog
   */
  EventLog?: EventLogEnum;
  /**
   *@inheritdoc Models.RegControl#RemotePTRatio
   */
  RemotePTRatio?: number;
  /**
   *@inheritdoc Models.RegControl#TapNum
   */
  TapNum?: number;
  /**
   *@inheritdoc Models.RegControl#Reset
   */
  Reset?: ResetEnum;
  /**
   *@inheritdoc Models.RegControl#LDC_Z
   */
  LDC_Z?: number;
  /**
   *@inheritdoc Models.RegControl#rev_Z
   */
  rev_Z?: number;
  /**
   *@inheritdoc Models.RegControl#Cogen
   */
  Cogen?: CogenEnum;
  /**
   *@inheritdoc Models.RegControl#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.RegControl#enabled
   */
  enabled?: BooleanEnum;
}
