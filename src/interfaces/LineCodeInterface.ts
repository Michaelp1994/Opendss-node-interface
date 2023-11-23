import { UnitsEnum } from "../enums/enums";
import BaseInterface from "./BaseInterface";
/**   General  */
export interface LineCodeInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.LineCode#nphases
   */
  nphases?: number;
  /**
   *@inheritdoc Models.LineCode#r1
   */
  r1?: number;
  /**
   *@inheritdoc Models.LineCode#x1
   */
  x1?: number;
  /**
   *@inheritdoc Models.LineCode#r0
   */
  r0?: number;
  /**
   *@inheritdoc Models.LineCode#x0
   */
  x0?: number;
  /**
   *@inheritdoc Models.LineCode#C1
   */
  C1?: number;
  /**
   *@inheritdoc Models.LineCode#C0
   */
  C0?: number;
  /**
   *@inheritdoc Models.LineCode#units
   */
  units?: UnitsEnum;
  /**
   *@inheritdoc Models.LineCode#rmatrix
   */
  rmatrix?: number[];
  /**
   *@inheritdoc Models.LineCode#xmatrix
   */
  xmatrix?: number[];
  /**
   *@inheritdoc Models.LineCode#cmatrix
   */
  cmatrix?: number[];
  /**
   *@inheritdoc Models.LineCode#baseFreq
   */
  baseFreq?: number;
  /**
   *@inheritdoc Models.LineCode#normamps
   */
  normamps?: number;
  /**
   *@inheritdoc Models.LineCode#emergamps
   */
  emergamps?: number;
  /**
   *@inheritdoc Models.LineCode#faultrate
   */
  faultrate?: number;
  /**
   *@inheritdoc Models.LineCode#pctperm
   */
  pctperm?: number;
  /**
   *@inheritdoc Models.LineCode#repair
   */
  repair?: number;
  /**
   *@inheritdoc Models.LineCode#Kron
   */
  Kron?: boolean;
  /**
   *@inheritdoc Models.LineCode#Rg
   */
  Rg?: number;
  /**
   *@inheritdoc Models.LineCode#Xg
   */
  Xg?: number;
  /**
   *@inheritdoc Models.LineCode#rho
   */
  rho?: number;
  /**
   *@inheritdoc Models.LineCode#neutral
   */
  neutral?: number;
  /**
   *@inheritdoc Models.LineCode#B1
   */
  B1?: number;
  /**
   *@inheritdoc Models.LineCode#B0
   */
  B0?: number;
  /**
   *@inheritdoc Models.LineCode#Seasons
   */
  Seasons?: number;
  /**
   *@inheritdoc Models.LineCode#Ratings
   */
  Ratings?: number[];
  /**
   *@inheritdoc Models.LineCode#LineType
   */
  LineType?: string;
}
