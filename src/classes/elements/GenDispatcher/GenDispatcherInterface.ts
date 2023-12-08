import { BaseElementInterface } from "@elements/BaseElements";

/**   Circuit Element, Control Element  */
export default interface GenDispatcherInterface extends BaseElementInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.GenDispatcher#Element
   */
  element: string;
  /**
   *@inheritdoc Models.GenDispatcher#Terminal
   */
  Terminal?: number;
  /**
   *@inheritdoc Models.GenDispatcher#kWLimit
   */
  kWLimit?: number;
  /**
   *@inheritdoc Models.GenDispatcher#kWBand
   */
  kWBand?: number;
  /**
   *@inheritdoc Models.GenDispatcher#kvarlimit
   */
  kvarlimit?: number;
  /**
   *@inheritdoc Models.GenDispatcher#GenList
   */
  GenList?: string[];
  /**
   *@inheritdoc Models.GenDispatcher#Weights
   */
  // weights?: number[];
  /**
   *@inheritdoc Models.GenDispatcher#baseFreq
   */
  baseFreq?: number;
  /**
   *@inheritdoc Models.GenDispatcher#enabled
   */
  enabled?: boolean;
}
