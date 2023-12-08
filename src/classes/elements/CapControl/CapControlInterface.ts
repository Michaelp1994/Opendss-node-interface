import { CapControlTypeEnum, CTPhaseEnum, PTPhaseEnum } from "@enums/enums";
import { BaseElementInterface } from "@elements/BaseElements";

/**   Circuit Element, Control Element  */
export default interface CapControlInterface extends BaseElementInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.CapControl#element
   */
  element: string;
  /**
   *@inheritdoc Models.CapControl#terminal
   */
  terminal?: number;
  /**
   *@inheritdoc Models.CapControl#capacitor
   */
  capacitor: string;
  /**
   *@inheritdoc Models.CapControl#type
   */
  type?: CapControlTypeEnum;
  /**
   *@inheritdoc Models.CapControl#ptRatio
   */
  ptRatio?: number;
  /**
   *@inheritdoc Models.CapControl#ctRatio
   */
  ctRatio?: number;
  /**
   *@inheritdoc Models.CapControl#onSetting
   */
  onSetting?: number;
  /**
   *@inheritdoc Models.CapControl#offSetting
   */
  offSetting?: number;
  /**
   *@inheritdoc Models.CapControl#Delay
   */
  delay?: number;
  /**
   *@inheritdoc Models.CapControl#voltOverride
   */
  voltOverride?: boolean;
  /**
   *@inheritdoc Models.CapControl#Vmax
   */
  vMax?: number;
  /**
   *@inheritdoc Models.CapControl#Vmin
   */
  vMin?: number;
  /**
   *@inheritdoc Models.CapControl#delayOff
   */
  delayOff?: number;
  /**
   *@inheritdoc Models.CapControl#deadTime
   */
  deadTime?: number;
  /**
   *@inheritdoc Models.CapControl#ctPhase
   */
  ctPhase?: CTPhaseEnum;
  /**
   *@inheritdoc Models.CapControl#ptPhase
   */
  ptPhase?: PTPhaseEnum;
  /**
   *@inheritdoc Models.CapControl#vBus
   */
  vBus?: string;
  /**
   *@inheritdoc Models.CapControl#EventLog
   */
  eventLog?: boolean;
  /**
   *@inheritdoc Models.CapControl#userModel
   */
  userModel?: string;
  /**
   *@inheritdoc Models.CapControl#userData
   */
  userData?: string;
  /**
   *@inheritdoc Models.CapControl#pctMinkvar
   */
  pctMinkvar?: number;
  /**
   *@inheritdoc Models.CapControl#Reset
   */
  reset?: boolean;
  /**
   *@inheritdoc Models.CapControl#baseFreq
   */
  baseFreq?: number;
  /**
   *@inheritdoc Models.CapControl#enabled
   */
  enabled?: boolean;
}
