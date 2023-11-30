import BaseInterface from "./BaseInterface";

/**   Circuit Element, Control Element  */
export interface ExpControlInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.ExpControl#PVSystemList
   */
  PVSystemList?: string;
  /**
   *@inheritdoc Models.ExpControl#Vreg
   */
  Vreg?: number;
  /**
   *@inheritdoc Models.ExpControl#Slope
   */
  Slope?: number;
  /**
   *@inheritdoc Models.ExpControl#VregTau
   */
  VregTau?: number;
  /**
   *@inheritdoc Models.ExpControl#Qbias
   */
  Qbias?: number;
  /**
   *@inheritdoc Models.ExpControl#VregMin
   */
  VregMin?: number;
  /**
   *@inheritdoc Models.ExpControl#VregMax
   */
  VregMax?: number;
  /**
   *@inheritdoc Models.ExpControl#QmaxLead
   */
  QmaxLead?: number;
  /**
   *@inheritdoc Models.ExpControl#QmaxLag
   */
  QmaxLag?: number;
  /**
   *@inheritdoc Models.ExpControl#EventLog
   */
  EventLog?: boolean;
  /**
   *@inheritdoc Models.ExpControl#DeltaQ_factor
   */
  DeltaQ_factor?: number;
  /**
   *@inheritdoc Models.ExpControl#PreferQ
   */
  PreferQ?: boolean;
  /**
   *@inheritdoc Models.ExpControl#Tresponse
   */
  Tresponse?: number;
  /**
   *@inheritdoc Models.ExpControl#DERList
   */
  DERList?: string[];
  /**
   *@inheritdoc Models.ExpControl#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.ExpControl#enabled
   */
  enabled?: boolean;
}
