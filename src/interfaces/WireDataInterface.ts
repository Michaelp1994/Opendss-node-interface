import type { GMRunitsEnum, RadunitsEnum, UnitsEnum } from "@enums/enums";
import type BaseInterface from "./BaseInterface";

/**   Conductor Data  */
export interface WireDataInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.WireData#Rdc
   */
  rdc?: number;
  /**
   *@inheritdoc Models.WireData#Rac
   */
  rac?: number;
  /**
   *@inheritdoc Models.WireData#Runits
   */
  rUnits?: UnitsEnum;
  /**
   *@inheritdoc Models.WireData#GMRac
   */
  gmrac?: number;
  /**
   *@inheritdoc Models.WireData#GMRunits
   */
  gmrUnits?: GMRunitsEnum;
  /**
   *@inheritdoc Models.WireData#radius
   */
  radius?: number;
  /**
   *@inheritdoc Models.WireData#radunits
   */
  radUnits?: RadunitsEnum;
  /**
   *@inheritdoc Models.WireData#normamps
   */
  normAmps?: number;
  /**
   *@inheritdoc Models.WireData#emergamps
   */
  emergAmps?: number;
  /**
   *@inheritdoc Models.WireData#diam
   */
  diam?: number;
  /**
   *@inheritdoc Models.WireData#Seasons
   */
  seasons?: number;
  /**
   *@inheritdoc Models.WireData#Ratings
   */
  ratings?: number[];
  /**
   *@inheritdoc Models.WireData#Capradius
   */
  capRadius?: number;
}
