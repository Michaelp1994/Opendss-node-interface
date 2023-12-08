import BaseInterface from "@components/BaseInterface";

/**   General  */
export interface TCCCurveInterface extends BaseInterface {
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
