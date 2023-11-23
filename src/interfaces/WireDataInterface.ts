import { GMRunitsEnum, UnitsEnum } from "../enums/enums";
import BaseInterface from "./BaseInterface";

/**   Conductor Data  */
export interface WireDataInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.WireData#Rdc
   */
  Rdc?: number;
  /**
   *@inheritdoc Models.WireData#Rac
   */
  Rac?: number;
  /**
   *@inheritdoc Models.WireData#Runits
   */
  Runits?: UnitsEnum;
  /**
   *@inheritdoc Models.WireData#GMRac
   */
  GMRac?: number;
  /**
   *@inheritdoc Models.WireData#GMRunits
   */
  GMRunits?: GMRunitsEnum;
  /**
   *@inheritdoc Models.WireData#radius
   */
  radius?: number;
  /**
   *@inheritdoc Models.WireData#radunits
   */
  radunits?: UnitsEnum;
  /**
   *@inheritdoc Models.WireData#normamps
   */
  normamps?: number;
  /**
   *@inheritdoc Models.WireData#emergamps
   */
  emergamps?: number;
  /**
   *@inheritdoc Models.WireData#diam
   */
  diam?: number;
  /**
   *@inheritdoc Models.WireData#Seasons
   */
  Seasons?: number;
  /**
   *@inheritdoc Models.WireData#Ratings
   */
  Ratings?: number[];
  /**
   *@inheritdoc Models.WireData#Capradius
   */
  Capradius?: number;
}
