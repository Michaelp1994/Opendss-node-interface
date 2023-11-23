import { ReduceEnum, UnitsEnum } from "../enums/enums";
import BaseInterface from "./BaseInterface";
/**   General  */
export interface LineGeometryInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.LineGeometry#nconds
   */
  nconds?: number;
  /**
   *@inheritdoc Models.LineGeometry#nphases
   */
  nphases?: number;
  /**
   *@inheritdoc Models.LineGeometry#cond
   */
  cond?: number;
  /**
   *@inheritdoc Models.LineGeometry#wire
   */
  wire?: string;
  /**
   *@inheritdoc Models.LineGeometry#x
   */
  x?: number;
  /**
   *@inheritdoc Models.LineGeometry#h
   */
  h?: number;
  /**
   *@inheritdoc Models.LineGeometry#units
   */
  units?: UnitsEnum;
  /**
   *@inheritdoc Models.LineGeometry#normamps
   */
  normamps?: number;
  /**
   *@inheritdoc Models.LineGeometry#emergamps
   */
  emergamps?: number;
  /**
   *@inheritdoc Models.LineGeometry#reduce
   */
  reduce?: ReduceEnum;
  /**
   *@inheritdoc Models.LineGeometry#spacing
   */
  spacing?: string;
  /**
   *@inheritdoc Models.LineGeometry#wires
   */
  wires?: string[];
  /**
   *@inheritdoc Models.LineGeometry#cncable
   */
  cncable?: string;
  /**
   *@inheritdoc Models.LineGeometry#tscable
   */
  tscable?: string;
  /**
   *@inheritdoc Models.LineGeometry#cncables
   */
  cncables?: string[];
  /**
   *@inheritdoc Models.LineGeometry#tscables
   */
  tscables?: string[];
  /**
   *@inheritdoc Models.LineGeometry#Seasons
   */
  Seasons?: number;
  /**
   *@inheritdoc Models.LineGeometry#Ratings
   */
  Ratings?: number[];
  /**
   *@inheritdoc Models.LineGeometry#LineType
   */
  LineType?: string;
}
