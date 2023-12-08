import { BaseElementInterface } from "@elements/BaseElements";

/**   Circuit Element, Control Element  */
export default interface UPFCControlInterface extends BaseElementInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.UPFCControl#UPFCList
   */
  UPFCList?: string[];
  /**
   *@inheritdoc Models.UPFCControl#baseFreq
   */
  baseFreq?: number;
  /**
   *@inheritdoc Models.UPFCControl#enabled
   */
  enabled?: boolean;
}
