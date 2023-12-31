import { BaseElementInterface } from "@elements/BaseElements";

/**   Circuit Element, PC Element  */
export default interface VCCSInterface extends BaseElementInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.VCCS#bus1
   */
  bus1?: string;
  /**
   *@inheritdoc Models.VCCS#phases
   */
  phases?: number;
  /**
   *@inheritdoc Models.VCCS#prated
   */
  prated?: number;
  /**
   *@inheritdoc Models.VCCS#vrated
   */
  vrated?: number;
  /**
   *@inheritdoc Models.VCCS#ppct
   */
  ppct?: number;
  /**
   *@inheritdoc Models.VCCS#bp1
   */
  bp1?: string;
  /**
   *@inheritdoc Models.VCCS#bp2
   */
  bp2?: string;
  /**
   *@inheritdoc Models.VCCS#filter
   */
  filter?: string;
  /**
   *@inheritdoc Models.VCCS#fsample
   */
  fsample?: number;
  /**
   *@inheritdoc Models.VCCS#rmsmode
   */
  rmsmode?: boolean;
  /**
   *@inheritdoc Models.VCCS#imaxpu
   */
  imaxpu?: number;
  /**
   *@inheritdoc Models.VCCS#vrmstau
   */
  vrmstau?: number;
  /**
   *@inheritdoc Models.VCCS#irmstau
   */
  irmstau?: number;
  /**
   *@inheritdoc Models.VCCS#spectrum
   */
  spectrum?: string;
  /**
   *@inheritdoc Models.VCCS#baseFreq
   */
  baseFreq?: number;
  /**
   *@inheritdoc Models.VCCS#enabled
   */
  enabled?: boolean;
}
