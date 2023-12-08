import { BaseElementInterface } from "@elements/BaseElements";

/**   Circuit Element, Control Element  */
export default interface ESPVLControlInterface extends BaseElementInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.ESPVLControl#Element
   */
  element: string;
  /**
   *@inheritdoc Models.ESPVLControl#Terminal
   */
  Terminal?: number;
  /**
   *@inheritdoc Models.ESPVLControl#Type
   */
  Type?: string;
  /**
   *@inheritdoc Models.ESPVLControl#kWBand
   */
  kWBand?: number;
  /**
   *@inheritdoc Models.ESPVLControl#kvarlimit
   */
  kvarlimit?: number;
  /**
   *@inheritdoc Models.ESPVLControl#LocalControlList
   */
  LocalControlList?: string[];
  /**
   *@inheritdoc Models.ESPVLControl#LocalControlWeights
   */
  LocalControlWeights?: number[];
  /**
   *@inheritdoc Models.ESPVLControl#PVSystemList
   */
  PVSystemList?: string[];
  /**
   *@inheritdoc Models.ESPVLControl#PVSystemWeights
   */
  PVSystemWeights?: number[];
  /**
   *@inheritdoc Models.ESPVLControl#StorageList
   */
  StorageList?: string[];
  /**
   *@inheritdoc Models.ESPVLControl#StorageWeights
   */
  StorageWeights?: number[];
  /**
   *@inheritdoc Models.ESPVLControl#baseFreq
   */
  baseFreq?: number;
  /**
   *@inheritdoc Models.ESPVLControl#enabled
   */
  enabled?: boolean;
}
