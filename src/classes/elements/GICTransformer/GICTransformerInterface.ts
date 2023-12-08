import { TypeEnum } from "@enums/enums";
import BaseInterface from "@components/BaseInterface";

/**   Circuit Element, PD Element  */
export interface GICTransformerInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.GICTransformer#BusH
   */
  BusH?: string;
  /**
   *@inheritdoc Models.GICTransformer#BusNH
   */
  BusNH?: string;
  /**
   *@inheritdoc Models.GICTransformer#BusX
   */
  BusX?: string;
  /**
   *@inheritdoc Models.GICTransformer#BusNX
   */
  BusNX?: string;
  /**
   *@inheritdoc Models.GICTransformer#phases
   */
  phases?: number;
  /**
   *@inheritdoc Models.GICTransformer#Type
   */
  Type?: TypeEnum;
  /**
   *@inheritdoc Models.GICTransformer#R1
   */
  R1?: number;
  /**
   *@inheritdoc Models.GICTransformer#R2
   */
  R2?: number;
  /**
   *@inheritdoc Models.GICTransformer#KVLL1
   */
  KVLL1?: number;
  /**
   *@inheritdoc Models.GICTransformer#KVLL2
   */
  KVLL2?: number;
  /**
   *@inheritdoc Models.GICTransformer#MVA
   */
  MVA?: number;
  /**
   *@inheritdoc Models.GICTransformer#VarCurve
   */
  VarCurve?: string;
  /**
   *@inheritdoc Models.GICTransformer#%R1
   */
  "%R1"?: number;
  /**
   *@inheritdoc Models.GICTransformer#%R2
   */
  "%R2"?: number;
  /**
   *@inheritdoc Models.GICTransformer#K
   */
  K?: number;
  /**
   *@inheritdoc Models.GICTransformer#normamps
   */
  normamps?: number;
  /**
   *@inheritdoc Models.GICTransformer#emergamps
   */
  emergamps?: number;
  /**
   *@inheritdoc Models.GICTransformer#faultrate
   */
  faultrate?: number;
  /**
   *@inheritdoc Models.GICTransformer#pctperm
   */
  pctperm?: number;
  /**
   *@inheritdoc Models.GICTransformer#repair
   */
  repair?: number;
  /**
   *@inheritdoc Models.GICTransformer#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.GICTransformer#enabled
   */
  enabled?: boolean;
}
