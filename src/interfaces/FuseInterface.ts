import { BooleanEnum } from "../enums/enums";
import BaseInterface from "./BaseInterface";
/**   Circuit Element, Control Element  */
export interface FuseInterface extends BaseInterface  {
/** Name of the component */
name: string;
/** 
	*@inheritdoc Models.Fuse#MonitoredObj 
*/
	MonitoredObj?: string;
/** 
	*@inheritdoc Models.Fuse#MonitoredTerm 
*/
	MonitoredTerm?: number;
/** 
	*@inheritdoc Models.Fuse#SwitchedObj 
*/
	SwitchedObj?: string;
/** 
	*@inheritdoc Models.Fuse#SwitchedTerm 
*/
	SwitchedTerm?: number;
/** 
	*@inheritdoc Models.Fuse#FuseCurve 
*/
	FuseCurve?: string;
/** 
	*@inheritdoc Models.Fuse#RatedCurrent 
*/
	RatedCurrent?: number;
/** 
	*@inheritdoc Models.Fuse#Delay 
*/
	Delay?: number;
/** 
	*@inheritdoc Models.Fuse#Action 
*/
	Action?: string;
/** 
	*@inheritdoc Models.Fuse#Normal 
*/
	Normal?: NormalEnum;
/** 
	*@inheritdoc Models.Fuse#State 
*/
	State?: StateEnum;
/** 
	*@inheritdoc Models.Fuse#basefreq 
*/
	basefreq?: number;
/** 
	*@inheritdoc Models.Fuse#enabled 
*/
	enabled?: BooleanEnum;
}