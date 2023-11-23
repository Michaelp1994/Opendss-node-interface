import { BooleanEnum, ConnEnum, StatesEnum } from "../enums/enums";
import BaseInterface from "./BaseInterface";

/**   Circuit Element, PD Element  */
export interface CapacitorInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.Capacitor#bus1
   */
  bus1?: string;
  /**
   *@inheritdoc Models.Capacitor#bus2
   */
  bus2?: string;
  /**
   *@inheritdoc Models.Capacitor#phases
   */
  phases?: number;
  /**
   *@inheritdoc Models.Capacitor#kvar
   */
  kvar?: number[];
  /**
   *@inheritdoc Models.Capacitor#kv
   */
  kv?: number;
  /**
   *@inheritdoc Models.Capacitor#conn
   */
  conn?: ConnEnum;
  /**
   *@inheritdoc Models.Capacitor#cmatrix
   */
  cmatrix?: number[];
  /**
   *@inheritdoc Models.Capacitor#cuf
   */
  cuf?: number[];
  /**
   *@inheritdoc Models.Capacitor#R
   */
  R?: number[];
  /**
   *@inheritdoc Models.Capacitor#XL
   */
  XL?: number[];
  /**
   *@inheritdoc Models.Capacitor#Harm
   */
  Harm?: number[];
  /**
   *@inheritdoc Models.Capacitor#Numsteps
   */
  Numsteps?: number;
  /**
   *@inheritdoc Models.Capacitor#states
   */
  states?: StatesEnum;
  /**
   *@inheritdoc Models.Capacitor#normamps
   */
  normamps?: number;
  /**
   *@inheritdoc Models.Capacitor#emergamps
   */
  emergamps?: number;
  /**
   *@inheritdoc Models.Capacitor#faultrate
   */
  faultrate?: number;
  /**
   *@inheritdoc Models.Capacitor#pctperm
   */
  pctperm?: number;
  /**
   *@inheritdoc Models.Capacitor#repair
   */
  repair?: number;
  /**
   *@inheritdoc Models.Capacitor#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.Capacitor#enabled
   */
  enabled?: BooleanEnum;
}
