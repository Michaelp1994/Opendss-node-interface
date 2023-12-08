import { BaseElementInterface } from "@elements/BaseElements";

/**   General  */
export default interface TCCCurveInterface extends BaseElementInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.TCC_Curve#npts
   */
  npts?: number;
  /**
   *@inheritdoc Models.TCC_Curve#C_array
   */
  C_array?: number[];
  /**
   *@inheritdoc Models.TCC_Curve#T_array
   */
  T_array?: number[];
}
