import { CapControlTypeEnum, CTPhaseEnum, PTPhaseEnum } from "@enums/enums";
import BaseInterface from "@components/BaseInterface";

/**   Circuit Element, Control Element  */
export interface CapControlInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.CapControl#element
   */
  element: string;
  /**
   *@inheritdoc Models.CapControl#terminal
   */
  terminal?: number;
  /**
   *@inheritdoc Models.CapControl#capacitor
   */
  capacitor: string;
  /**
   *@inheritdoc Models.CapControl#type
   */
  type?: CapControlTypeEnum;
  /**
   *@inheritdoc Models.CapControl#PTratio
   */
  PTratio?: number;
  /**
   *@inheritdoc Models.CapControl#CTratio
   */
  CTratio?: number;
  /**
   *@inheritdoc Models.CapControl#ONsetting
   */
  ONsetting?: number;
  /**
   *@inheritdoc Models.CapControl#OFFsetting
   */
  OFFsetting?: number;
  /**
   *@inheritdoc Models.CapControl#Delay
   */
  Delay?: number;
  /**
   *@inheritdoc Models.CapControl#VoltOverride
   */
  VoltOverride?: boolean;
  /**
   *@inheritdoc Models.CapControl#Vmax
   */
  Vmax?: number;
  /**
   *@inheritdoc Models.CapControl#Vmin
   */
  Vmin?: number;
  /**
   *@inheritdoc Models.CapControl#DelayOFF
   */
  DelayOFF?: number;
  /**
   *@inheritdoc Models.CapControl#DeadTime
   */
  DeadTime?: number;
  /**
   *@inheritdoc Models.CapControl#CTPhase
   */
  CTPhase?: CTPhaseEnum;
  /**
   *@inheritdoc Models.CapControl#PTPhase
   */
  PTPhase?: PTPhaseEnum;
  /**
   *@inheritdoc Models.CapControl#VBus
   */
  VBus?: string;
  /**
   *@inheritdoc Models.CapControl#EventLog
   */
  EventLog?: boolean;
  /**
   *@inheritdoc Models.CapControl#UserModel
   */
  UserModel?: string;
  /**
   *@inheritdoc Models.CapControl#UserData
   */
  UserData?: string;
  /**
   *@inheritdoc Models.CapControl#pctMinkvar
   */
  pctMinkvar?: number;
  /**
   *@inheritdoc Models.CapControl#Reset
   */
  Reset?: boolean;
  /**
   *@inheritdoc Models.CapControl#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.CapControl#enabled
   */
  enabled?: boolean;
}
