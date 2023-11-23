import { BooleanEnum } from "../enums/enums";
import BaseInterface from "./BaseInterface";
/**   Circuit Element, PC Element  */
export interface GICsourceInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.GICsource#Volts
   */
  Volts?: number;
  /**
   *@inheritdoc Models.GICsource#angle
   */
  angle?: number;
  /**
   *@inheritdoc Models.GICsource#frequency
   */
  frequency?: number;
  /**
   *@inheritdoc Models.GICsource#phases
   */
  phases?: number;
  /**
   *@inheritdoc Models.GICsource#EN
   */
  EN?: number;
  /**
   *@inheritdoc Models.GICsource#EE
   */
  EE?: number;
  /**
   *@inheritdoc Models.GICsource#Lat1
   */
  Lat1?: number;
  /**
   *@inheritdoc Models.GICsource#Lon1
   */
  Lon1?: number;
  /**
   *@inheritdoc Models.GICsource#Lat2
   */
  Lat2?: number;
  /**
   *@inheritdoc Models.GICsource#Lon2
   */
  Lon2?: number;
  /**
   *@inheritdoc Models.GICsource#spectrum
   */
  spectrum?: string;
  /**
   *@inheritdoc Models.GICsource#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.GICsource#enabled
   */
  enabled?: BooleanEnum;
}
