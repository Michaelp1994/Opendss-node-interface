import BaseInterface from "@components/BaseInterface";

/**   Circuit Element, Control Element  */
export interface ExpControlInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.ExpControl#PVSystemList
   */
  pvSystemList?: string[];
  /**
   *@inheritdoc Models.ExpControl#Vreg
   */
  vReg?: number;
  /**
   *@inheritdoc Models.ExpControl#Slope
   */
  slope?: number;
  /**
   *@inheritdoc Models.ExpControl#VregTau
   */
  vRegTau?: number;
  /**
   *@inheritdoc Models.ExpControl#Qbias
   */
  qBias?: number;
  /**
   *@inheritdoc Models.ExpControl#VregMin
   */
  vRegMin?: number;
  /**
   *@inheritdoc Models.ExpControl#VregMax
   */
  vRegMax?: number;
  /**
   *@inheritdoc Models.ExpControl#QmaxLead
   */
  qMaxLead?: number;
  /**
   *@inheritdoc Models.ExpControl#QmaxLag
   */
  qMaxLag?: number;
  /**
   *@inheritdoc Models.ExpControl#EventLog
   */
  eventLog?: boolean;
  /**
   *@inheritdoc Models.ExpControl#DeltaQ_factor
   */
  deltaQ_factor?: number;
  /**
   *@inheritdoc Models.ExpControl#PreferQ
   */
  preferQ?: boolean;
  /**
   *@inheritdoc Models.ExpControl#Tresponse
   */
  tresponse?: number;
  /**
   *@inheritdoc Models.ExpControl#DERList
   */
  derList?: string[];
  /**
   *@inheritdoc Models.ExpControl#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.ExpControl#enabled
   */
  enabled?: boolean;
}
