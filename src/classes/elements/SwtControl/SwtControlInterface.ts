import { SwtControlActionEnum } from "@enums/enums";
import { BaseElementInterface } from "@elements/BaseElements";

/**   Circuit Element, Control Element  */
export default interface SwtControlInterface extends BaseElementInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.SwtControl#SwitchedObj
   */
  SwitchedObj: string;
  /**
   *@inheritdoc Models.SwtControl#SwitchedTerm
   */
  SwitchedTerm?: number;
  /**
   *@inheritdoc Models.SwtControl#Action
   */
  action?: SwtControlActionEnum;
  /**
   *@inheritdoc Models.SwtControl#Lock
   */
  Lock?: boolean;
  /**
   *@inheritdoc Models.SwtControl#Delay
   */
  delay?: number;
  /**
   *@inheritdoc Models.SwtControl#Normal
   */
  Normal?: string;
  /**
   *@inheritdoc Models.SwtControl#State
   */
  State?: string;
  /**
   *@inheritdoc Models.SwtControl#Reset
   */
  reset?: boolean;
  /**
   *@inheritdoc Models.SwtControl#baseFreq
   */
  baseFreq?: number;
  /**
   *@inheritdoc Models.SwtControl#enabled
   */
  enabled?: boolean;
}
