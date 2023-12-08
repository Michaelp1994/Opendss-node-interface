import { MonitorActionEnum } from "@enums/enums";
import BaseInterface from "@components/BaseInterface";

/**   Circuit Element, Meter Element  */
export interface MonitorInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.Monitor#element
   */
  element: string;
  /**
   *@inheritdoc Models.Monitor#terminal
   */
  terminal?: number;
  /**
   *@inheritdoc Models.Monitor#mode
   */
  mode?: number;
  /**
   *@inheritdoc Models.Monitor#action
   */
  action?: MonitorActionEnum;
  /**
   *@inheritdoc Models.Monitor#residual
   */
  residual?: boolean;
  /**
   *@inheritdoc Models.Monitor#VIPolar
   */
  VIPolar?: boolean;
  /**
   *@inheritdoc Models.Monitor#PPolar
   */
  PPolar?: boolean;
  /**
   *@inheritdoc Models.Monitor#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.Monitor#enabled
   */
  enabled?: boolean;
}
