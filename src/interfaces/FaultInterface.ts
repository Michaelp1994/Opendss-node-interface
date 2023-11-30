import BaseInterface from "./BaseInterface";

/**   Circuit Element, PD Element  */
export interface FaultInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.Fault#bus1
   */
  bus1?: string;
  /**
   *@inheritdoc Models.Fault#bus2
   */
  bus2?: string;
  /**
   *@inheritdoc Models.Fault#phases
   */
  phases?: number;
  /**
   *@inheritdoc Models.Fault#r
   */
  r?: number;
  /**
   *@inheritdoc Models.Fault#%stddev
   */
  "%stddev"?: number;
  /**
   *@inheritdoc Models.Fault#Gmatrix
   */
  Gmatrix?: number[];
  /**
   *@inheritdoc Models.Fault#ONtime
   */
  ONtime?: number;
  /**
   *@inheritdoc Models.Fault#temporary
   */
  temporary?: boolean;
  /**
   *@inheritdoc Models.Fault#MinAmps
   */
  MinAmps?: number;
  /**
   *@inheritdoc Models.Fault#normamps
   */
  normamps?: number;
  /**
   *@inheritdoc Models.Fault#emergamps
   */
  emergamps?: number;
  /**
   *@inheritdoc Models.Fault#faultrate
   */
  faultrate?: number;
  /**
   *@inheritdoc Models.Fault#pctperm
   */
  pctperm?: number;
  /**
   *@inheritdoc Models.Fault#repair
   */
  repair?: number;
  /**
   *@inheritdoc Models.Fault#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.Fault#enabled
   */
  enabled?: boolean;
}
