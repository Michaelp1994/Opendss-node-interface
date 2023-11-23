import { BooleanEnum } from "../enums/enums";
import BaseInterface from "./BaseInterface";
/**   General  */
export interface LineSpacingInterface extends BaseInterface  {
/** Name of the component */
name: string;
/** 
	*@inheritdoc Models.LineSpacing#nconds 
*/
	nconds?: number;
/** 
	*@inheritdoc Models.LineSpacing#nphases 
*/
	nphases?: number;
/** 
	*@inheritdoc Models.LineSpacing#x 
*/
	x?: number[];
/** 
	*@inheritdoc Models.LineSpacing#h 
*/
	h?: number[];
/** 
	*@inheritdoc Models.LineSpacing#units 
*/
	units?: unitsEnum;
}