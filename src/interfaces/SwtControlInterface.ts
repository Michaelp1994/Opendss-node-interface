import { SwtControlActionEnum } from "@enums/enums";
import BaseInterface from "./BaseInterface";

/**   Circuit Element, Control Element  */
export interface SwtControlInterface extends BaseInterface {
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
  Delay?: number;
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
  Reset?: boolean;
  /**
   *@inheritdoc Models.SwtControl#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.SwtControl#enabled
   */
  enabled?: boolean;
}
