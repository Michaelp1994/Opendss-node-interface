import { BooleanEnum, ConnEnum, ParallelEnum } from "../enums/enums";
import BaseInterface from "./BaseInterface";
/**   Circuit Element, PD Element  */
export interface ReactorInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.Reactor#bus1
   */
  bus1?: string;
  /**
   *@inheritdoc Models.Reactor#bus2
   */
  bus2?: string;
  /**
   *@inheritdoc Models.Reactor#phases
   */
  phases?: number;
  /**
   *@inheritdoc Models.Reactor#kvar
   */
  kvar?: number;
  /**
   *@inheritdoc Models.Reactor#kv
   */
  kv?: number;
  /**
   *@inheritdoc Models.Reactor#conn
   */
  conn?: ConnEnum;
  /**
   *@inheritdoc Models.Reactor#Rmatrix
   */
  Rmatrix?: number[];
  /**
   *@inheritdoc Models.Reactor#Xmatrix
   */
  Xmatrix?: number[];
  /**
   *@inheritdoc Models.Reactor#Parallel
   */
  Parallel?: ParallelEnum;
  /**
   *@inheritdoc Models.Reactor#R
   */
  R?: number;
  /**
   *@inheritdoc Models.Reactor#X
   */
  X?: number;
  /**
   *@inheritdoc Models.Reactor#Rp
   */
  Rp?: number;
  /**
   *@inheritdoc Models.Reactor#Z1
   */
  Z1?: number[];
  /**
   *@inheritdoc Models.Reactor#Z2
   */
  Z2?: number[];
  /**
   *@inheritdoc Models.Reactor#Z0
   */
  Z0?: number[];
  /**
   *@inheritdoc Models.Reactor#Z
   */
  Z?: number[];
  /**
   *@inheritdoc Models.Reactor#RCurve
   */
  RCurve?: string;
  /**
   *@inheritdoc Models.Reactor#LCurve
   */
  LCurve?: string;
  /**
   *@inheritdoc Models.Reactor#LmH
   */
  LmH?: number;
  /**
   *@inheritdoc Models.Reactor#normamps
   */
  normamps?: number;
  /**
   *@inheritdoc Models.Reactor#emergamps
   */
  emergamps?: number;
  /**
   *@inheritdoc Models.Reactor#faultrate
   */
  faultrate?: number;
  /**
   *@inheritdoc Models.Reactor#pctperm
   */
  pctperm?: number;
  /**
   *@inheritdoc Models.Reactor#repair
   */
  repair?: number;
  /**
   *@inheritdoc Models.Reactor#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.Reactor#enabled
   */
  enabled?: BooleanEnum;
}
