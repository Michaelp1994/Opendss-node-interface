import BaseInterface from "./BaseInterface";
/**   General  */
export interface DynamicExpInterface extends BaseInterface {
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
