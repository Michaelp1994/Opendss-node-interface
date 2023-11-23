import { BooleanEnum } from "../enums/enums";
import BaseInterface from "./BaseInterface";

/**   Circuit Element, Control Element  */
export interface UPFCControlInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.UPFCControl#UPFCList
   */
  UPFCList?: string[];
  /**
   *@inheritdoc Models.UPFCControl#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.UPFCControl#enabled
   */
  enabled?: BooleanEnum;
}
