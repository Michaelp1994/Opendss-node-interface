import BaseInterface from "./BaseInterface";

/**   Circuit Element, PC Element  */
export interface UPFCInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.UPFC#bus1
   */
  bus1?: string;
  /**
   *@inheritdoc Models.UPFC#bus2
   */
  bus2?: string;
  /**
   *@inheritdoc Models.UPFC#refkV
   */
  refkV?: number;
  /**
   *@inheritdoc Models.UPFC#PF
   */
  PF?: number;
  /**
   *@inheritdoc Models.UPFC#Frequency
   */
  Frequency?: number;
  /**
   *@inheritdoc Models.UPFC#Phases
   */
  Phases?: number;
  /**
   *@inheritdoc Models.UPFC#Xs
   */
  Xs?: number;
  /**
   *@inheritdoc Models.UPFC#Tol1
   */
  Tol1?: number;
  /**
   *@inheritdoc Models.UPFC#Mode
   */
  Mode?: number;
  /**
   *@inheritdoc Models.UPFC#VpqMax
   */
  VpqMax?: number;
  /**
   *@inheritdoc Models.UPFC#LossCurve
   */
  LossCurve?: string;
  /**
   *@inheritdoc Models.UPFC#VHLimit
   */
  VHLimit?: number;
  /**
   *@inheritdoc Models.UPFC#VLLimit
   */
  VLLimit?: number;
  /**
   *@inheritdoc Models.UPFC#CLimit
   */
  CLimit?: number;
  /**
   *@inheritdoc Models.UPFC#refkV2
   */
  refkV2?: number;
  /**
   *@inheritdoc Models.UPFC#kvarLimit
   */
  kvarLimit?: number;
  /**
   *@inheritdoc Models.UPFC#Element
   */
  Element?: string;
  /**
   *@inheritdoc Models.UPFC#spectrum
   */
  spectrum?: string;
  /**
   *@inheritdoc Models.UPFC#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.UPFC#enabled
   */
  enabled?: boolean;
}
