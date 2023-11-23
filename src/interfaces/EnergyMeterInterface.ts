import {
  BooleanEnum,
  EnergyMeterActionEnum,
  LineLossesEnum,
  LocalOnlyEnum,
  LossesEnum,
  PhaseVoltageReportEnum,
  SeqLossesEnum,
  VbaseLossesEnum,
  XfmrLossesEnum,
  YesNoEnum,
} from "../enums/enums";
import BaseInterface from "./BaseInterface";
/**   Circuit Element, Meter Element  */
export interface EnergyMeterInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.EnergyMeter#element
   */
  element?: string;
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
  LocalOnly?: LocalOnlyEnum;
  /**
   *@inheritdoc Models.EnergyMeter#Mask
   */
  Mask?: number[];
  /**
   *@inheritdoc Models.EnergyMeter#Losses
   */
  Losses?: LossesEnum;
  /**
   *@inheritdoc Models.EnergyMeter#LineLosses
   */
  LineLosses?: LineLossesEnum;
  /**
   *@inheritdoc Models.EnergyMeter#XfmrLosses
   */
  XfmrLosses?: XfmrLossesEnum;
  /**
   *@inheritdoc Models.EnergyMeter#SeqLosses
   */
  SeqLosses?: SeqLossesEnum;
  /**
   *@inheritdoc Models.EnergyMeter#3phaseLosses
   */
  "3phaseLosses"?: YesNoEnum;
  /**
   *@inheritdoc Models.EnergyMeter#VbaseLosses
   */
  VbaseLosses?: VbaseLossesEnum;
  /**
   *@inheritdoc Models.EnergyMeter#PhaseVoltageReport
   */
  PhaseVoltageReport?: PhaseVoltageReportEnum;
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
   *@inheritdoc Models.EnergyMeter#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.EnergyMeter#enabled
   */
  enabled?: BooleanEnum;
}
