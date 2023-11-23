import {
  AutoTransConnEnum,
  BooleanEnum,
  CoreEnum,
  LeadLagEnum,
  YesNoEnum,
} from "../enums/enums";
import BaseInterface from "./BaseInterface";

/**   Circuit Element, PD Element  */
export interface AutoTransInterface extends BaseInterface {
  /** Name of the component */
  name: string;
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
  Rdcohms?: number;
  /**
   *@inheritdoc Models.AutoTrans#Core
   */
  Core?: CoreEnum;
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
  flrise?: number;
  /**
   *@inheritdoc Models.AutoTrans#hsrise
   */
  hsrise?: number;
  /**
   *@inheritdoc Models.AutoTrans#%loadloss
   */
  "%loadloss"?: number;
  /**
   *@inheritdoc Models.AutoTrans#%noloadloss
   */
  "%noloadloss"?: number;
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
  sub?: YesNoEnum;
  /**
   *@inheritdoc Models.AutoTrans#MaxTap
   */
  MaxTap?: number;
  /**
   *@inheritdoc Models.AutoTrans#MinTap
   */
  MinTap?: number;
  /**
   *@inheritdoc Models.AutoTrans#NumTaps
   */
  NumTaps?: number;
  /**
   *@inheritdoc Models.AutoTrans#subname
   */
  subname?: string;
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
  XRConst?: YesNoEnum;
  /**
   *@inheritdoc Models.AutoTrans#LeadLag
   */
  LeadLag?: LeadLagEnum;
  /**
   *@inheritdoc Models.AutoTrans#WdgCurrents
   */
  WdgCurrents?: string;
  /**
   *@inheritdoc Models.AutoTrans#normamps
   */
  normamps?: number;
  /**
   *@inheritdoc Models.AutoTrans#emergamps
   */
  emergamps?: number;
  /**
   *@inheritdoc Models.AutoTrans#faultrate
   */
  faultrate?: number;
  /**
   *@inheritdoc Models.AutoTrans#pctperm
   */
  pctperm?: number;
  /**
   *@inheritdoc Models.AutoTrans#repair
   */
  repair?: number;
  /**
   *@inheritdoc Models.AutoTrans#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.AutoTrans#enabled
   */
  enabled?: BooleanEnum;
}
