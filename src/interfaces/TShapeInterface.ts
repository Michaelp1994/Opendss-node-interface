import { ActionEnum } from "@enums/enums";
import BaseInterface from "./BaseInterface";

/**   General  */
export interface TShapeInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.TShape#npts
   */
  npts?: number;
  /**
   *@inheritdoc Models.TShape#interval
   */
  interval?: number;
  /**
   *@inheritdoc Models.TShape#temp
   */
  temp?: number[];
  /**
   *@inheritdoc Models.TShape#hour
   */
  hour?: number[];
  /**
   *@inheritdoc Models.TShape#mean
   */
  mean?: number;
  /**
   *@inheritdoc Models.TShape#stddev
   */
  stddev?: number;
  /**
   *@inheritdoc Models.TShape#csvfile
   */
  csvfile?: string;
  /**
   *@inheritdoc Models.TShape#sngfile
   */
  sngfile?: string;
  /**
   *@inheritdoc Models.TShape#dblfile
   */
  dblfile?: string;
  /**
   *@inheritdoc Models.TShape#sinterval
   */
  sinterval?: number;
  /**
   *@inheritdoc Models.TShape#minterval
   */
  minterval?: number;
  /**
   *@inheritdoc Models.TShape#action
   */
  action?: ActionEnum;
}
