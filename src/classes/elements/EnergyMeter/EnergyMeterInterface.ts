import { EnergyMeterActionEnum } from "@enums/enums";
import { BaseElementInterface } from "@elements/BaseElements";

/**   Circuit Element, Meter Element  */
export default interface EnergyMeterInterface extends BaseElementInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.EnergyMeter#element
   */
  element: string;
  /**
   *@inheritdoc Models.EnergyMeter#terminal
   */
  terminal?: number;
  /**
   *@inheritdoc Models.EnergyMeter#action
   */
  action?: EnergyMeterActionEnum;
  /**
   *@inheritdoc Models.EnergyMeter#option
   */
  option?: string[];
  /**
   *@inheritdoc Models.EnergyMeter#kVAnormal
   */
  kVAnormal?: number;
  /**
   *@inheritdoc Models.EnergyMeter#kVAemerg
   */
  kVAemerg?: number;
  /**
   *@inheritdoc Models.EnergyMeter#peakcurrent
   */
  peakcurrent?: number[];
  /**
   *@inheritdoc Models.EnergyMeter#Zonelist
   */
  Zonelist?: string[];
  /**
   *@inheritdoc Models.EnergyMeter#LocalOnly
   */
  LocalOnly?: boolean;
  /**
   *@inheritdoc Models.EnergyMeter#Mask
   */
  Mask?: number[];
  /**
   *@inheritdoc Models.EnergyMeter#Losses
   */
  Losses?: boolean;
  /**
   *@inheritdoc Models.EnergyMeter#LineLosses
   */
  LineLosses?: boolean;
  /**
   *@inheritdoc Models.EnergyMeter#XfmrLosses
   */
  XfmrLosses?: boolean;
  /**
   *@inheritdoc Models.EnergyMeter#SeqLosses
   */
  SeqLosses?: boolean;
  /**
   *@inheritdoc Models.EnergyMeter#3phaseLosses
   */
  "3phaseLosses"?: boolean;
  /**
   *@inheritdoc Models.EnergyMeter#VbaseLosses
   */
  VbaseLosses?: boolean;
  /**
   *@inheritdoc Models.EnergyMeter#PhaseVoltageReport
   */
  PhaseVoltageReport?: boolean;
  /**
   *@inheritdoc Models.EnergyMeter#Int_Rate
   */
  Int_Rate?: number;
  /**
   *@inheritdoc Models.EnergyMeter#Int_Duration
   */
  Int_Duration?: number;
  /**
   *@inheritdoc Models.EnergyMeter#SAIFI
   */
  SAIFI?: number;
  /**
   *@inheritdoc Models.EnergyMeter#SAIFIkW
   */
  SAIFIkW?: number;
  /**
   *@inheritdoc Models.EnergyMeter#SAIDI
   */
  SAIDI?: number;
  /**
   *@inheritdoc Models.EnergyMeter#CAIDI
   */
  CAIDI?: number;
  /**
   *@inheritdoc Models.EnergyMeter#CustInterrupts
   */
  CustInterrupts?: number;
  /**
   *@inheritdoc Models.EnergyMeter#baseFreq
   */
  baseFreq?: number;
  /**
   *@inheritdoc Models.EnergyMeter#enabled
   */
  enabled?: boolean;
}
