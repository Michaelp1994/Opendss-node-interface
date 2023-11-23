import {
  BalancedEnum,
  BooleanEnum,
  ConnEnum,
  ControlModeEnum,
  DebugTraceEnum,
  PFPriorityEnum,
  WattPriorityEnum,
} from "../enums/enums";
import BaseInterface from "./BaseInterface";
/**   Circuit Element, PC Element  */
export interface PVSystemInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.PVSystem#phases
   */
  phases?: number;
  /**
   *@inheritdoc Models.PVSystem#bus1
   */
  bus1?: string;
  /**
   *@inheritdoc Models.PVSystem#kv
   */
  kv?: number;
  /**
   *@inheritdoc Models.PVSystem#irradiance
   */
  irradiance?: number;
  /**
   *@inheritdoc Models.PVSystem#Pmpp
   */
  Pmpp?: number;
  /**
   *@inheritdoc Models.PVSystem#%Pmpp
   */
  "%Pmpp"?: number;
  /**
   *@inheritdoc Models.PVSystem#Temperature
   */
  Temperature?: number;
  /**
   *@inheritdoc Models.PVSystem#pf
   */
  pf?: number;
  /**
   *@inheritdoc Models.PVSystem#conn
   */
  conn?: ConnEnum;
  /**
   *@inheritdoc Models.PVSystem#kvar
   */
  kvar?: number;
  /**
   *@inheritdoc Models.PVSystem#kVA
   */
  kVA?: number;
  /**
   *@inheritdoc Models.PVSystem#%Cutin
   */
  "%Cutin"?: number;
  /**
   *@inheritdoc Models.PVSystem#%Cutout
   */
  "%Cutout"?: number;
  /**
   *@inheritdoc Models.PVSystem#EffCurve
   */
  EffCurve?: string;
  /**
   *@inheritdoc Models.PVSystem#P-TCurve
   */
  "P-TCurve"?: string;
  /**
   *@inheritdoc Models.PVSystem#%R
   */
  "%R"?: number;
  /**
   *@inheritdoc Models.PVSystem#%X
   */
  "%X"?: number;
  /**
   *@inheritdoc Models.PVSystem#model
   */
  model?: number;
  /**
   *@inheritdoc Models.PVSystem#Vminpu
   */
  Vminpu?: number;
  /**
   *@inheritdoc Models.PVSystem#Vmaxpu
   */
  Vmaxpu?: number;
  /**
   *@inheritdoc Models.PVSystem#Balanced
   */
  Balanced?: BalancedEnum;
  /**
   *@inheritdoc Models.PVSystem#LimitCurrent
   */
  LimitCurrent?: boolean;
  /**
   *@inheritdoc Models.PVSystem#yearly
   */
  yearly?: string;
  /**
   *@inheritdoc Models.PVSystem#daily
   */
  daily?: string;
  /**
   *@inheritdoc Models.PVSystem#duty
   */
  duty?: string;
  /**
   *@inheritdoc Models.PVSystem#Tyearly
   */
  Tyearly?: string;
  /**
   *@inheritdoc Models.PVSystem#Tdaily
   */
  Tdaily?: string;
  /**
   *@inheritdoc Models.PVSystem#Tduty
   */
  Tduty?: string;
  /**
   *@inheritdoc Models.PVSystem#class
   */
  class?: number;
  /**
   *@inheritdoc Models.PVSystem#UserModel
   */
  userModel?: string;
  /**
   *@inheritdoc Models.PVSystem#UserData
   */
  userData?: string;
  /**
   *@inheritdoc Models.PVSystem#debugtrace
   */
  debugTrace?: DebugTraceEnum;
  /**
   *@inheritdoc Models.PVSystem#VarFollowInverter
   */
  VarFollowInverter?: boolean;
  /**
   *@inheritdoc Models.PVSystem#DutyStart
   */
  DutyStart?: number;
  /**
   *@inheritdoc Models.PVSystem#WattPriority
   */
  WattPriority?: WattPriorityEnum;
  /**
   *@inheritdoc Models.PVSystem#PFPriority
   */
  PFPriority?: PFPriorityEnum;
  /**
   *@inheritdoc Models.PVSystem#%PminNoVars
   */
  "%PminNoVars"?: number;
  /**
   *@inheritdoc Models.PVSystem#%PminkvarMax
   */
  "%PminkvarMax"?: number;
  /**
   *@inheritdoc Models.PVSystem#kvarMax
   */
  kvarMax?: number;
  /**
   *@inheritdoc Models.PVSystem#kvarMaxAbs
   */
  kvarMaxAbs?: number;
  /**
   *@inheritdoc Models.PVSystem#kVDC
   */
  kVDC?: number;
  /**
   *@inheritdoc Models.PVSystem#Kp
   */
  Kp?: number;
  /**
   *@inheritdoc Models.PVSystem#PITol
   */
  PITol?: number;
  /**
   *@inheritdoc Models.PVSystem#SafeVoltage
   */
  SafeVoltage?: number;
  /**
   *@inheritdoc Models.PVSystem#SafeMode
   */
  SafeMode?: boolean;
  /**
   *@inheritdoc Models.PVSystem#DynamicEq
   */
  DynamicEq?: string;
  /**
   *@inheritdoc Models.PVSystem#DynOut
   */
  DynOut?: string;
  /**
   *@inheritdoc Models.PVSystem#ControlMode
   */
  ControlMode?: ControlModeEnum;
  /**
   *@inheritdoc Models.PVSystem#spectrum
   */
  spectrum?: string;
  /**
   *@inheritdoc Models.PVSystem#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.PVSystem#enabled
   */
  enabled?: BooleanEnum;
}
