import { ConnEnum, CoreEnum, LeadLagEnum } from "@enums/enums";
import BaseInterface from "@components/BaseInterface";

/**   Circuit Element, PD Element  */
export interface TransformerInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.Transformer#phases
   */
  phases?: number;
  /**
   *@inheritdoc Models.Transformer#windings
   */
  windings?: number;
  /**
   *@inheritdoc Models.Transformer#wdg
   */
  wdg?: number;
  /**
   *@inheritdoc Models.Transformer#bus
   */
  bus?: string;
  /**
   *@inheritdoc Models.Transformer#conn
   */
  conn?: ConnEnum;
  /**
   *@inheritdoc Models.Transformer#kV
   */
  kV?: number;
  /**
   *@inheritdoc Models.Transformer#kVA
   */
  kVA?: number;
  /**
   *@inheritdoc Models.Transformer#tap
   */
  tap?: number;
  /**
   *@inheritdoc Models.Transformer#%R
   */
  "%R"?: number;
  /**
   *@inheritdoc Models.Transformer#Rneut
   */
  Rneut?: number;
  /**
   *@inheritdoc Models.Transformer#Xneut
   */
  Xneut?: number;
  /**
   *@inheritdoc Models.Transformer#buses
   */
  buses?: string[];
  /**
   *@inheritdoc Models.Transformer#conns
   */
  conns?: string[];
  /**
   *@inheritdoc Models.Transformer#kVs
   */
  kVs?: number[];
  /**
   *@inheritdoc Models.Transformer#kVAs
   */
  kVAs?: number[];
  /**
   *@inheritdoc Models.Transformer#taps
   */
  taps?: number[];
  /**
   *@inheritdoc Models.Transformer#XHL
   */
  XHL?: number;
  /**
   *@inheritdoc Models.Transformer#XHT
   */
  XHT?: number;
  /**
   *@inheritdoc Models.Transformer#XLT
   */
  XLT?: number;
  /**
   *@inheritdoc Models.Transformer#Xscarray
   */
  Xscarray?: number[];
  /**
   *@inheritdoc Models.Transformer#thermal
   */
  thermal?: number;
  /**
   *@inheritdoc Models.Transformer#n
   */
  n?: number;
  /**
   *@inheritdoc Models.Transformer#m
   */
  m?: number;
  /**
   *@inheritdoc Models.Transformer#flrise
   */
  flrise?: number;
  /**
   *@inheritdoc Models.Transformer#hsrise
   */
  hsrise?: number;
  /**
   *@inheritdoc Models.Transformer#%loadloss
   */
  "%loadloss"?: number;
  /**
   *@inheritdoc Models.Transformer#%noloadloss
   */
  "%noloadloss"?: number;
  /**
   *@inheritdoc Models.Transformer#normhkVA
   */
  normhkVA?: number;
  /**
   *@inheritdoc Models.Transformer#emerghkVA
   */
  emerghkVA?: number;
  /**
   *@inheritdoc Models.Transformer#sub
   */
  sub?: boolean;
  /**
   *@inheritdoc Models.Transformer#MaxTap
   */
  MaxTap?: number;
  /**
   *@inheritdoc Models.Transformer#MinTap
   */
  MinTap?: number;
  /**
   *@inheritdoc Models.Transformer#NumTaps
   */
  NumTaps?: number;
  /**
   *@inheritdoc Models.Transformer#subname
   */
  subname?: string;
  /**
   *@inheritdoc Models.Transformer#%imag
   */
  "%imag"?: number;
  /**
   *@inheritdoc Models.Transformer#ppm_antifloat
   */
  ppm_antifloat?: number;
  /**
   *@inheritdoc Models.Transformer#%Rs
   */
  "%Rs"?: number[];
  /**
   *@inheritdoc Models.Transformer#bank
   */
  bank?: string;
  /**
   *@inheritdoc Models.Transformer#XfmrCode
   */
  XfmrCode?: string;
  /**
   *@inheritdoc Models.Transformer#XRConst
   */
  XRConst?: boolean;
  /**
   *@inheritdoc Models.Transformer#X12
   */
  X12?: number;
  /**
   *@inheritdoc Models.Transformer#X13
   */
  X13?: number;
  /**
   *@inheritdoc Models.Transformer#X23
   */
  X23?: number;
  /**
   *@inheritdoc Models.Transformer#LeadLag
   */
  LeadLag?: LeadLagEnum;
  /**
   *@inheritdoc Models.Transformer#WdgCurrents
   */
  WdgCurrents?: string;
  /**
   *@inheritdoc Models.Transformer#Core
   */
  Core?: CoreEnum;
  /**
   *@inheritdoc Models.Transformer#RdcOhms
   */
  RdcOhms?: number;
  /**
   *@inheritdoc Models.Transformer#Seasons
   */
  Seasons?: number;
  /**
   *@inheritdoc Models.Transformer#Ratings
   */
  Ratings?: number[];
  /**
   *@inheritdoc Models.Transformer#normamps
   */
  normamps?: number;
  /**
   *@inheritdoc Models.Transformer#emergamps
   */
  emergamps?: number;
  /**
   *@inheritdoc Models.Transformer#faultrate
   */
  faultrate?: number;
  /**
   *@inheritdoc Models.Transformer#pctperm
   */
  pctperm?: number;
  /**
   *@inheritdoc Models.Transformer#repair
   */
  repair?: number;
  /**
   *@inheritdoc Models.Transformer#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.Transformer#enabled
   */
  enabled?: boolean;
}
