import { ConnEnum, StatesEnum } from "@enums/enums";
import { BaseElementInterface } from "@elements/BaseElements";

/**   Circuit Element, PD Element  */
export default interface CapacitorInterface extends BaseElementInterface {
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
   *@inheritdoc Models.Capacitor#cMatrix
   */
  cMatrix?: number[];
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
   *@inheritdoc Models.Capacitor#normAmps
   */
  normAmps?: number;
  /**
   *@inheritdoc Models.Capacitor#emergAmps
   */
  emergAmps?: number;
  /**
   *@inheritdoc Models.Capacitor#faultRate
   */
  faultRate?: number;
  /**
   *@inheritdoc Models.Capacitor#pctperm
   */
  pctperm?: number;
  /**
   *@inheritdoc Models.Capacitor#repair
   */
  repair?: number;
  /**
   *@inheritdoc Models.Capacitor#baseFreq
   */
  baseFreq?: number;
  /**
   *@inheritdoc Models.Capacitor#enabled
   */
  enabled?: boolean;
}
