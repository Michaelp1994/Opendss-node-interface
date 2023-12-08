import { ConnEnum, DeltaDirectionEnum } from "@enums/enums";
import { BaseElementInterface } from "@elements/BaseElements";

/**   Circuit Element, Meter Element  */
export default interface SensorInterface extends BaseElementInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.Sensor#element
   */
  element?: string;
  /**
   *@inheritdoc Models.Sensor#terminal
   */
  terminal?: number;
  /**
   *@inheritdoc Models.Sensor#kvbase
   */
  kvbase?: number;
  /**
   *@inheritdoc Models.Sensor#clear
   */
  clear?: boolean;
  /**
   *@inheritdoc Models.Sensor#kVs
   */
  kVs?: number[];
  /**
   *@inheritdoc Models.Sensor#currents
   */
  currents?: number[];
  /**
   *@inheritdoc Models.Sensor#kWs
   */
  kWs?: number[];
  /**
   *@inheritdoc Models.Sensor#kvars
   */
  kvars?: number[];
  /**
   *@inheritdoc Models.Sensor#conn
   */
  conn?: ConnEnum;
  /**
   *@inheritdoc Models.Sensor#Deltadirection
   */
  DeltaDirection?: DeltaDirectionEnum;
  /**
   *@inheritdoc Models.Sensor#%Error
   */
  "%Error"?: number;
  /**
   *@inheritdoc Models.Sensor#Weight
   */
  Weight?: number;
  /**
   *@inheritdoc Models.Sensor#baseFreq
   */
  baseFreq?: number;
  /**
   *@inheritdoc Models.Sensor#enabled
   */
  enabled?: boolean;
}
