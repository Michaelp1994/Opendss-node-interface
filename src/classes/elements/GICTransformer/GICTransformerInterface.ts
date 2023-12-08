import { TypeEnum } from "@enums/enums";
import { BaseElementInterface } from "@elements/BaseElements";

/**   Circuit Element, PD Element  */
export default interface GICTransformerInterface extends BaseElementInterface {
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
   *@inheritdoc Models.GICTransformer#normAmps
   */
  normAmps?: number;
  /**
   *@inheritdoc Models.GICTransformer#emergAmps
   */
  emergAmps?: number;
  /**
   *@inheritdoc Models.GICTransformer#faultRate
   */
  faultRate?: number;
  /**
   *@inheritdoc Models.GICTransformer#pctperm
   */
  pctperm?: number;
  /**
   *@inheritdoc Models.GICTransformer#repair
   */
  repair?: number;
  /**
   *@inheritdoc Models.GICTransformer#baseFreq
   */
  baseFreq?: number;
  /**
   *@inheritdoc Models.GICTransformer#enabled
   */
  enabled?: boolean;
}
