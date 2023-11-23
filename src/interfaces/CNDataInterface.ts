import { UnitsEnum } from "../enums/enums";
import BaseInterface from "./BaseInterface";

/**   Conductor Data, Cable Data  */
export interface CNDataInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.CNData#k
   */
  k?: number;
  /**
   *@inheritdoc Models.CNData#DiaStrand
   */
  DiaStrand?: number;
  /**
   *@inheritdoc Models.CNData#GmrStrand
   */
  GmrStrand?: number;
  /**
   *@inheritdoc Models.CNData#Rstrand
   */
  Rstrand?: number;
  /**
   *@inheritdoc Models.CNData#EpsR
   */
  EpsR?: number;
  /**
   *@inheritdoc Models.CNData#InsLayer
   */
  InsLayer?: number;
  /**
   *@inheritdoc Models.CNData#DiaIns
   */
  DiaIns?: number;
  /**
   *@inheritdoc Models.CNData#DiaCable
   */
  DiaCable?: number;
  /**
   *@inheritdoc Models.CNData#Rdc
   */
  Rdc?: number;
  /**
   *@inheritdoc Models.CNData#Rac
   */
  Rac?: number;
  /**
   *@inheritdoc Models.CNData#Runits
   */
  Runits?: UnitsEnum;
  /**
   *@inheritdoc Models.CNData#GMRac
   */
  GMRac?: number;
  /**
   *@inheritdoc Models.CNData#GMRunits
   */
  GMRunits?: UnitsEnum;
  /**
   *@inheritdoc Models.CNData#radius
   */
  radius?: number;
  /**
   *@inheritdoc Models.CNData#radunits
   */
  radunits?: UnitsEnum;
  /**
   *@inheritdoc Models.CNData#normamps
   */
  normamps?: number;
  /**
   *@inheritdoc Models.CNData#emergamps
   */
  emergamps?: number;
  /**
   *@inheritdoc Models.CNData#diam
   */
  diam?: number;
  /**
   *@inheritdoc Models.CNData#Seasons
   */
  Seasons?: number;
  /**
   *@inheritdoc Models.CNData#Ratings
   */
  Ratings?: number[];
  /**
   *@inheritdoc Models.CNData#Capradius
   */
  Capradius?: number;
}
