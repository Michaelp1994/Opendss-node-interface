import { BooleanEnum } from "../enums/enums";
import BaseInterface from "./BaseInterface";
/**   Circuit Element, PC Element  */
export interface VSConverterInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.VSConverter#phases
   */
  phases?: number;
  /**
   *@inheritdoc Models.VSConverter#Bus1
   */
  Bus1?: string;
  /**
   *@inheritdoc Models.VSConverter#kVac
   */
  kVac?: number;
  /**
   *@inheritdoc Models.VSConverter#kVdc
   */
  kVdc?: number;
  /**
   *@inheritdoc Models.VSConverter#kW
   */
  kW?: number;
  /**
   *@inheritdoc Models.VSConverter#Ndc
   */
  Ndc?: number;
  /**
   *@inheritdoc Models.VSConverter#Rac
   */
  Rac?: number;
  /**
   *@inheritdoc Models.VSConverter#Xac
   */
  Xac?: number;
  /**
   *@inheritdoc Models.VSConverter#m0
   */
  m0?: number;
  /**
   *@inheritdoc Models.VSConverter#d0
   */
  d0?: number;
  /**
   *@inheritdoc Models.VSConverter#Mmin
   */
  Mmin?: number;
  /**
   *@inheritdoc Models.VSConverter#Mmax
   */
  Mmax?: number;
  /**
   *@inheritdoc Models.VSConverter#Iacmax
   */
  Iacmax?: number;
  /**
   *@inheritdoc Models.VSConverter#Idcmax
   */
  Idcmax?: number;
  /**
   *@inheritdoc Models.VSConverter#Vacref
   */
  Vacref?: number;
  /**
   *@inheritdoc Models.VSConverter#Pacref
   */
  Pacref?: number;
  /**
   *@inheritdoc Models.VSConverter#Qacref
   */
  Qacref?: number;
  /**
   *@inheritdoc Models.VSConverter#Vdcref
   */
  Vdcref?: number;
  /**
   *@inheritdoc Models.VSConverter#VscMode
   */
  VscMode?: string;
  /**
   *@inheritdoc Models.VSConverter#spectrum
   */
  spectrum?: string;
  /**
   *@inheritdoc Models.VSConverter#basefreq
   */
  basefreq?: number;
  /**
   *@inheritdoc Models.VSConverter#enabled
   */
  enabled?: BooleanEnum;
}
