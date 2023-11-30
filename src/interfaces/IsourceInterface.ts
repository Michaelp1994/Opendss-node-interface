import { ScanTypeEnum, SequenceEnum } from "@enums/enums";
import BaseInterface from "./BaseInterface";

/**   Circuit Element, PC Element  */
export interface IsourceInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.Isource#bus1
   */
  bus1?: string;
  /**
   *@inheritdoc Models.Isource#amps
   */
  amps?: number;
  /**
   *@inheritdoc Models.Isource#angle
   */
  angle?: number;
  /**
   *@inheritdoc Models.Isource#frequency
   */
  frequency?: number;
  /**
   *@inheritdoc Models.Isource#phases
   */
  phases?: number;
  /**
   *@inheritdoc Models.Isource#scantype
   */
  scantype?: ScanTypeEnum;
  /**
   *@inheritdoc Models.Isource#sequence
   */
  sequence?: SequenceEnum;
  /**
   *@inheritdoc Models.Isource#Yearly
   */
  Yearly?: string;
  /**
   *@inheritdoc Models.Isource#Daily
   */
  Daily?: string;
  /**
   *@inheritdoc Models.Isource#Duty
   */
  Duty?: string;
  /**
   *@inheritdoc Models.Isource#Bus2
   */
  Bus2?: string;
  /**
   *@inheritdoc Models.Isource#spectrum
   */
  spectrum?: string;
  /**
   *@inheritdoc Models.Isource#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.Isource#enabled
   */
  enabled?: boolean;
}
