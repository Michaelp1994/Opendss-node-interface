import BaseInterface from "./BaseInterface";

/**   Circuit Element, Control Element  */
export interface ESPVLControlInterface extends BaseInterface {
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
   *@inheritdoc Models.ESPVLControl#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.ESPVLControl#enabled
   */
  enabled?: boolean;
}
