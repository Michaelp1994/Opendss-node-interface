import { ConnEnum, DispmodeEnum, FuelkWhEnum, StatusEnum } from "@enums/enums";
import BaseInterface from "@components/BaseInterface";

/**   Circuit Element, PC Element  */
export interface GeneratorInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.Generator#phases
   */
  phases?: number;
  /**
   *@inheritdoc Models.Generator#bus1
   */
  bus1?: string;
  /**
   *@inheritdoc Models.Generator#kv
   */
  kv?: number;
  /**
   *@inheritdoc Models.Generator#kW
   */
  kW?: number;
  /**
   *@inheritdoc Models.Generator#pf
   */
  pf?: number;
  /**
   *@inheritdoc Models.Generator#kvar
   */
  kvar?: number;
  /**
   *@inheritdoc Models.Generator#model
   */
  model?: number;
  /**
   *@inheritdoc Models.Generator#Vminpu
   */
  Vminpu?: number;
  /**
   *@inheritdoc Models.Generator#Vmaxpu
   */
  Vmaxpu?: number;
  /**
   *@inheritdoc Models.Generator#yearly
   */
  yearly?: string;
  /**
   *@inheritdoc Models.Generator#daily
   */
  daily?: string;
  /**
   *@inheritdoc Models.Generator#duty
   */
  duty?: string;
  /**
   *@inheritdoc Models.Generator#dispmode
   */
  dispmode?: DispmodeEnum;
  /**
   *@inheritdoc Models.Generator#dispvalue
   */
  dispvalue?: number;
  /**
   *@inheritdoc Models.Generator#conn
   */
  conn?: ConnEnum;
  /**
   *@inheritdoc Models.Generator#status
   */
  status?: StatusEnum;
  /**
   *@inheritdoc Models.Generator#class
   */
  class?: number;
  /**
   *@inheritdoc Models.Generator#Vpu
   */
  Vpu?: number;
  /**
   *@inheritdoc Models.Generator#maxkvar
   */
  maxkvar?: number;
  /**
   *@inheritdoc Models.Generator#minkvar
   */
  minkvar?: number;
  /**
   *@inheritdoc Models.Generator#pvfactor
   */
  pvfactor?: number;
  /**
   *@inheritdoc Models.Generator#forceon
   */
  forceOn?: boolean;
  /**
   *@inheritdoc Models.Generator#kVA
   */
  kVA?: number;
  /**
   *@inheritdoc Models.Generator#MVA
   */
  MVA?: number;
  /**
   *@inheritdoc Models.Generator#Xd
   */
  Xd?: number;
  /**
   *@inheritdoc Models.Generator#Xdp
   */
  Xdp?: number;
  /**
   *@inheritdoc Models.Generator#Xdpp
   */
  Xdpp?: number;
  /**
   *@inheritdoc Models.Generator#H
   */
  H?: number;
  /**
   *@inheritdoc Models.Generator#D
   */
  D?: number;
  /**
   *@inheritdoc Models.Generator#UserModel
   */
  UserModel?: string;
  /**
   *@inheritdoc Models.Generator#UserData
   */
  UserData?: string;
  /**
   *@inheritdoc Models.Generator#ShaftModel
   */
  ShaftModel?: string;
  /**
   *@inheritdoc Models.Generator#ShaftData
   */
  ShaftData?: string;
  /**
   *@inheritdoc Models.Generator#DutyStart
   */
  DutyStart?: number;
  /**
   *@inheritdoc Models.Generator#debugtrace
   */
  debugtrace?: boolean;
  /**
   *@inheritdoc Models.Generator#Balanced
   */
  Balanced?: boolean;
  /**
   *@inheritdoc Models.Generator#XRdp
   */
  XRdp?: number;
  /**
   *@inheritdoc Models.Generator#UseFuel
   */
  UseFuel?: boolean;
  /**
   *@inheritdoc Models.Generator#FuelkWh
   */
  FuelkWh?: FuelkWhEnum;
  /**
   *@inheritdoc Models.Generator#%Fuel
   */
  "%Fuel"?: number;
  /**
   *@inheritdoc Models.Generator#%Reserve
   */
  "%Reserve"?: number;
  /**
   *@inheritdoc Models.Generator#Refuel
   */
  Refuel?: boolean;
  /**
   *@inheritdoc Models.Generator#DynamicEq
   */
  DynamicEq?: string;
  /**
   *@inheritdoc Models.Generator#DynOut
   */
  DynOut?: string;
  /**
   *@inheritdoc Models.Generator#spectrum
   */
  spectrum?: string;
  /**
   *@inheritdoc Models.Generator#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.Generator#enabled
   */
  enabled?: boolean;
}
