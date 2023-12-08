import BaseInterface from "@components/BaseInterface";

/**   Circuit Element, Control Element  */
export interface GenDispatcherInterface extends BaseInterface {
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
   *@inheritdoc Models.GenDispatcher#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.GenDispatcher#enabled
   */
  enabled?: boolean;
}
