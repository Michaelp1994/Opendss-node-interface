import { ActionEnum } from "@enums/enums";
import { BaseElementInterface } from "@elements/BaseElements";

/**   General  */
export default interface PriceShapeInterface extends BaseElementInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.PriceShape#npts
   */
  npts?: number;
  /**
   *@inheritdoc Models.PriceShape#interval
   */
  interval?: number;
  /**
   *@inheritdoc Models.PriceShape#price
   */
  price?: number[];
  /**
   *@inheritdoc Models.PriceShape#hour
   */
  hour?: number[];
  /**
   *@inheritdoc Models.PriceShape#mean
   */
  mean?: number;
  /**
   *@inheritdoc Models.PriceShape#stddev
   */
  stddev?: number;
  /**
   *@inheritdoc Models.PriceShape#csvfile
   */
  csvfile?: string;
  /**
   *@inheritdoc Models.PriceShape#sngfile
   */
  sngfile?: string;
  /**
   *@inheritdoc Models.PriceShape#dblfile
   */
  dblfile?: string;
  /**
   *@inheritdoc Models.PriceShape#sinterval
   */
  sinterval?: number;
  /**
   *@inheritdoc Models.PriceShape#minterval
   */
  minterval?: number;
  /**
   *@inheritdoc Models.PriceShape#action
   */
  action?: ActionEnum;
}
