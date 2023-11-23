import { BooleanEnum } from "../enums/enums";
import BaseInterface from "./BaseInterface";
/**   General  */
export interface PriceShapeInterface extends BaseInterface  {
/** Name of the component */
name: string;
/** 
	*@inheritdoc Models.PriceShape#npts 
*/
	npts?: number;
/** 
	*@inheritdoc Models.PriceShape#interval 
*/
	interval?: number;
/** 
	*@inheritdoc Models.PriceShape#price 
*/
	price?: number[];
/** 
	*@inheritdoc Models.PriceShape#hour 
*/
	hour?: number[];
/** 
	*@inheritdoc Models.PriceShape#mean 
*/
	mean?: number;
/** 
	*@inheritdoc Models.PriceShape#stddev 
*/
	stddev?: number;
/** 
	*@inheritdoc Models.PriceShape#csvfile 
*/
	csvfile?: string;
/** 
	*@inheritdoc Models.PriceShape#sngfile 
*/
	sngfile?: string;
/** 
	*@inheritdoc Models.PriceShape#dblfile 
*/
	dblfile?: string;
/** 
	*@inheritdoc Models.PriceShape#sinterval 
*/
	sinterval?: number;
/** 
	*@inheritdoc Models.PriceShape#minterval 
*/
	minterval?: number;
/** 
	*@inheritdoc Models.PriceShape#action 
*/
	action?: actionEnum;
}