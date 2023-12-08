import { BaseElementInterface } from "@elements/BaseElements";

/**   General  */
export default interface DynamicExpInterface extends BaseElementInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.DynamicExp#NVariables
   */
  NVariables?: number;
  /**
   *@inheritdoc Models.DynamicExp#VarNames
   */
  VarNames?: string[];
  /**
   *@inheritdoc Models.DynamicExp#var
   */
  var?: string;
  /**
   *@inheritdoc Models.DynamicExp#VarIdx
   */
  VarIdx?: number;
  /**
   *@inheritdoc Models.DynamicExp#Expression
   */
  Expression?: string;
  /**
   *@inheritdoc Models.DynamicExp#Domain
   */
  Domain?: string;
}
