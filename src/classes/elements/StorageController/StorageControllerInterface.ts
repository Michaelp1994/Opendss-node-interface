import { ModeChargeEnum, ModeDischargeEnum, MonPhaseEnum } from "@enums/enums";
import { BaseElementInterface } from "@elements/BaseElements";

/**   Circuit Element, Control Element  */
export default interface StorageControllerInterface
  extends BaseElementInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.StorageController#Element
   */
  Element: string;
  /**
   *@inheritdoc Models.StorageController#Terminal
   */
  Terminal?: number;
  /**
   *@inheritdoc Models.StorageController#MonPhase
   */
  MonPhase?: MonPhaseEnum;
  /**
   *@inheritdoc Models.StorageController#kWTarget
   */
  kWTarget?: number;
  /**
   *@inheritdoc Models.StorageController#kWTargetLow
   */
  kWTargetLow?: number;
  /**
   *@inheritdoc Models.StorageController#%kWBand
   */
  "%kWBand"?: number;
  /**
   *@inheritdoc Models.StorageController#kWBand
   */
  kWBand?: number;
  /**
   *@inheritdoc Models.StorageController#%kWBandLow
   */
  "%kWBandLow"?: number;
  /**
   *@inheritdoc Models.StorageController#kWBandLow
   */
  kWBandLow?: number;
  /**
   *@inheritdoc Models.StorageController#ElementList
   */
  ElementList?: string[];
  /**
   *@inheritdoc Models.StorageController#Weights
   */
  Weights?: number[];
  /**
   *@inheritdoc Models.StorageController#ModeDischarge
   */
  ModeDischarge?: ModeDischargeEnum;
  /**
   *@inheritdoc Models.StorageController#ModeCharge
   */
  ModeCharge?: ModeChargeEnum;
  /**
   *@inheritdoc Models.StorageController#TimeDischargeTrigger
   */
  TimeDischargeTrigger?: number;
  /**
   *@inheritdoc Models.StorageController#TimeChargeTrigger
   */
  TimeChargeTrigger?: number;
  /**
   *@inheritdoc Models.StorageController#%RatekW
   */
  "%RatekW"?: number;
  /**
   *@inheritdoc Models.StorageController#%RateCharge
   */
  "%RateCharge"?: number;
  /**
   *@inheritdoc Models.StorageController#%Reserve
   */
  "%Reserve"?: number;
  /**
   *@inheritdoc Models.StorageController#kWhTotal
   */
  kWhTotal?: number;
  /**
   *@inheritdoc Models.StorageController#kWTotal
   */
  kWTotal?: number;
  /**
   *@inheritdoc Models.StorageController#kWhActual
   */
  kWhActual?: number;
  /**
   *@inheritdoc Models.StorageController#kWActual
   */
  kWActual?: number;
  /**
   *@inheritdoc Models.StorageController#kWneed
   */
  kWneed?: number;
  /**
   *@inheritdoc Models.StorageController#Yearly
   */
  Yearly?: string;
  /**
   *@inheritdoc Models.StorageController#Daily
   */
  Daily?: string;
  /**
   *@inheritdoc Models.StorageController#Duty
   */
  Duty?: string;
  /**
   *@inheritdoc Models.StorageController#EventLog
   */
  eventLog?: boolean;
  /**
   *@inheritdoc Models.StorageController#InhibitTime
   */
  InhibitTime?: number;
  /**
   *@inheritdoc Models.StorageController#Tup
   */
  Tup?: number;
  /**
   *@inheritdoc Models.StorageController#TFlat
   */
  TFlat?: number;
  /**
   *@inheritdoc Models.StorageController#Tdn
   */
  Tdn?: number;
  /**
   *@inheritdoc Models.StorageController#kWThreshold
   */
  kWThreshold?: number;
  /**
   *@inheritdoc Models.StorageController#DispFactor
   */
  DispFactor?: number;
  /**
   *@inheritdoc Models.StorageController#ResetLevel
   */
  ResetLevel?: number;
  /**
   *@inheritdoc Models.StorageController#Seasons
   */
  Seasons?: number;
  /**
   *@inheritdoc Models.StorageController#SeasonTargets
   */
  SeasonTargets?: number[];
  /**
   *@inheritdoc Models.StorageController#SeasonTargetsLow
   */
  SeasonTargetsLow?: number[];
  /**
   *@inheritdoc Models.StorageController#baseFreq
   */
  baseFreq?: number;
  /**
   *@inheritdoc Models.StorageController#enabled
   */
  enabled?: boolean;
}
