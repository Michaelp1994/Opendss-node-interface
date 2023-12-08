import { AutoTransConnEnum, CoreEnum, LeadLagEnum } from "@enums/enums";
import BaseInterface from "./BaseInterface";

/**   Circuit Element, PD Element  */
export interface AutoTransInterface extends BaseInterface {
  /**
   *@inheritdoc Models.AutoTrans#phases
   */
  phases?: number;
  /**
   *@inheritdoc Models.AutoTrans#windings
   */
  windings?: number;
  /**
   *@inheritdoc Models.AutoTrans#wdg
   */
  wdg?: number;
  /**
   *@inheritdoc Models.AutoTrans#bus
   */
  bus?: string;
  /**
   *@inheritdoc Models.AutoTrans#conn
   */
  conn?: AutoTransConnEnum;
  /**
   *@inheritdoc Models.AutoTrans#kV
   */
  kV?: number;
  /**
   *@inheritdoc Models.AutoTrans#kVA
   */
  kVA?: number;
  /**
   *@inheritdoc Models.AutoTrans#tap
   */
  tap?: number;
  /**
   *@inheritdoc Models.AutoTrans#%R
   */
  "%R"?: number;
  /**
   *@inheritdoc Models.AutoTrans#Rdcohms
   */
  RdcOhms?: number;
  /**
   *@inheritdoc Models.AutoTrans#Core
   */
  core?: CoreEnum;
  /**
   *@inheritdoc Models.AutoTrans#buses
   */
  buses?: string[];
  /**
   *@inheritdoc Models.AutoTrans#conns
   */
  conns?: AutoTransConnEnum[];
  /**
   *@inheritdoc Models.AutoTrans#kVs
   */
  kVs?: number[];
  /**
   *@inheritdoc Models.AutoTrans#kVAs
   */
  kVAs?: number[];
  /**
   *@inheritdoc Models.AutoTrans#taps
   */
  taps?: number[];
  /**
   *@inheritdoc Models.AutoTrans#XHX
   */
  XHX?: number;
  /**
   *@inheritdoc Models.AutoTrans#XHT
   */
  XHT?: number;
  /**
   *@inheritdoc Models.AutoTrans#XXT
   */
  XXT?: number;
  /**
   *@inheritdoc Models.AutoTrans#XSCarray
   */
  XSCarray?: number[];
  /**
   *@inheritdoc Models.AutoTrans#thermal
   */
  thermal?: number;
  /**
   *@inheritdoc Models.AutoTrans#n
   */
  n?: number;
  /**
   *@inheritdoc Models.AutoTrans#m
   */
  m?: number;
  /**
   *@inheritdoc Models.AutoTrans#flrise
   */
  flRise?: number;
  /**
   *@inheritdoc Models.AutoTrans#hsrise
   */
  hsRise?: number;
  /**
   *@inheritdoc Models.AutoTrans#%loadloss
   */
  "%loadLoss"?: number;
  /**
   *@inheritdoc Models.AutoTrans#%noloadloss
   */
  "%noLoadLoss"?: number;
  /**
   *@inheritdoc Models.AutoTrans#normhkVA
   */
  normhkVA?: number;
  /**
   *@inheritdoc Models.AutoTrans#emerghkVA
   */
  emerghkVA?: number;
  /**
   *@inheritdoc Models.AutoTrans#sub
   */
  sub?: boolean;
  /**
   *@inheritdoc Models.AutoTrans#MaxTap
   */
  maxTap?: number;
  /**
   *@inheritdoc Models.AutoTrans#MinTap
   */
  minTap?: number;
  /**
   *@inheritdoc Models.AutoTrans#NumTaps
   */
  numTaps?: number;
  /**
   *@inheritdoc Models.AutoTrans#subname
   */
  subName?: string;
  /**
   *@inheritdoc Models.AutoTrans#%imag
   */
  "%imag"?: number;
  /**
   *@inheritdoc Models.AutoTrans#ppm_antifloat
   */
  ppm_antifloat?: number;
  /**
   *@inheritdoc Models.AutoTrans#%Rs
   */
  "%Rs"?: number[];
  /**
   *@inheritdoc Models.AutoTrans#XRConst
   */
  XRConst?: boolean;
  /**
   *@inheritdoc Models.AutoTrans#LeadLag
   */
  leadLag?: LeadLagEnum;
  /**
   *@inheritdoc Models.AutoTrans#WdgCurrents
   */
  wdgCurrents?: string;
  /**
   *@inheritdoc Models.AutoTrans#normamps
   */
  normAmps?: number;
  /**
   *@inheritdoc Models.AutoTrans#emergamps
   */
  emergAmps?: number;
  /**
   *@inheritdoc Models.AutoTrans#faultrate
   */
  faultRate?: number;
  /**
   *@inheritdoc Models.AutoTrans#pctperm
   */
  pctPerm?: number;
  /**
   *@inheritdoc Models.AutoTrans#repair
   */
  repair?: number;
  /**
   *@inheritdoc Models.AutoTrans#basefreq
   */
  baseFreq?: number;
  /**
   *@inheritdoc Models.AutoTrans#enabled
   */
  enabled?: boolean;
}
