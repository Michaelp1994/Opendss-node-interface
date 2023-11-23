import { UnitsEnum } from "../enums/enums";
import BaseInterface from "./BaseInterface";
/**   Conductor Data, Cable Data  */
export interface TSDataInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.TSData#DiaShield
   */
  DiaShield?: number;
  /**
   *@inheritdoc Models.TSData#TapeLayer
   */
  TapeLayer?: number;
  /**
   *@inheritdoc Models.TSData#TapeLap
   */
  TapeLap?: number;
  /**
   *@inheritdoc Models.TSData#EpsR
   */
  EpsR?: number;
  /**
   *@inheritdoc Models.TSData#InsLayer
   */
  InsLayer?: number;
  /**
   *@inheritdoc Models.TSData#DiaIns
   */
  DiaIns?: number;
  /**
   *@inheritdoc Models.TSData#DiaCable
   */
  DiaCable?: number;
  /**
   *@inheritdoc Models.TSData#Rdc
   */
  Rdc?: number;
  /**
   *@inheritdoc Models.TSData#Rac
   */
  Rac?: number;
  /**
   *@inheritdoc Models.TSData#Runits
   */
  Runits?: UnitsEnum;
  /**
   *@inheritdoc Models.TSData#GMRac
   */
  GMRac?: number;
  /**
   *@inheritdoc Models.TSData#GMRunits
   */
  GMRunits?: UnitsEnum;
  /**
   *@inheritdoc Models.TSData#radius
   */
  radius?: number;
  /**
   *@inheritdoc Models.TSData#radunits
   */
  radunits?: UnitsEnum;
  /**
   *@inheritdoc Models.TSData#normamps
   */
  normamps?: number;
  /**
   *@inheritdoc Models.TSData#emergamps
   */
  emergamps?: number;
  /**
   *@inheritdoc Models.TSData#diam
   */
  diam?: number;
  /**
   *@inheritdoc Models.TSData#Seasons
   */
  Seasons?: number;
  /**
   *@inheritdoc Models.TSData#Ratings
   */
  Ratings?: number[];
  /**
   *@inheritdoc Models.TSData#Capradius
   */
  Capradius?: number;
}
