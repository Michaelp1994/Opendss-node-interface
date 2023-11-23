import { BooleanEnum } from "../enums/enums";
import BaseInterface from "./BaseInterface";
/**   Circuit Element, PC Element  */
export interface GICLineInterface extends BaseInterface  {
/** Name of the component */
name: string;
/** 
	*@inheritdoc Models.GICLine#bus1 
*/
	bus1?: string;
/** 
	*@inheritdoc Models.GICLine#bus2 
*/
	bus2?: string;
/** 
	*@inheritdoc Models.GICLine#Volts 
*/
	Volts?: number;
/** 
	*@inheritdoc Models.GICLine#Angle 
*/
	Angle?: number;
/** 
	*@inheritdoc Models.GICLine#frequency 
*/
	frequency?: number;
/** 
	*@inheritdoc Models.GICLine#phases 
*/
	phases?: number;
/** 
	*@inheritdoc Models.GICLine#R 
*/
	R?: number;
/** 
	*@inheritdoc Models.GICLine#X 
*/
	X?: number;
/** 
	*@inheritdoc Models.GICLine#C 
*/
	C?: number;
/** 
	*@inheritdoc Models.GICLine#EN 
*/
	EN?: number;
/** 
	*@inheritdoc Models.GICLine#EE 
*/
	EE?: number;
/** 
	*@inheritdoc Models.GICLine#Lat1 
*/
	Lat1?: number;
/** 
	*@inheritdoc Models.GICLine#Lon1 
*/
	Lon1?: number;
/** 
	*@inheritdoc Models.GICLine#Lat2 
*/
	Lat2?: number;
/** 
	*@inheritdoc Models.GICLine#Lon2 
*/
	Lon2?: number;
/** 
	*@inheritdoc Models.GICLine#spectrum 
*/
	spectrum?: string;
/** 
	*@inheritdoc Models.GICLine#basefreq 
*/
	basefreq?: number;
/** 
	*@inheritdoc Models.GICLine#enabled 
*/
	enabled?: BooleanEnum;
}