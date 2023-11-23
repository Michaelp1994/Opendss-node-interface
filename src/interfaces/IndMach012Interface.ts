import { BooleanEnum } from "../enums/enums";
import BaseInterface from "./BaseInterface";
/**   Circuit Element, PC Element  */
export interface IndMach012Interface extends BaseInterface  {
/** Name of the component */
name: string;
/** 
	*@inheritdoc Models.IndMach012#phases 
*/
	phases?: number;
/** 
	*@inheritdoc Models.IndMach012#bus1 
*/
	bus1?: string;
/** 
	*@inheritdoc Models.IndMach012#kv 
*/
	kv?: number;
/** 
	*@inheritdoc Models.IndMach012#kW 
*/
	kW?: number;
/** 
	*@inheritdoc Models.IndMach012#pf 
*/
	pf?: number;
/** 
	*@inheritdoc Models.IndMach012#conn 
*/
	conn?: string;
/** 
	*@inheritdoc Models.IndMach012#kVA 
*/
	kVA?: number;
/** 
	*@inheritdoc Models.IndMach012#H 
*/
	H?: number;
/** 
	*@inheritdoc Models.IndMach012#D 
*/
	D?: number;
/** 
	*@inheritdoc Models.IndMach012#puRs 
*/
	puRs?: number;
/** 
	*@inheritdoc Models.IndMach012#puXs 
*/
	puXs?: number;
/** 
	*@inheritdoc Models.IndMach012#puRr 
*/
	puRr?: number;
/** 
	*@inheritdoc Models.IndMach012#puXr 
*/
	puXr?: number;
/** 
	*@inheritdoc Models.IndMach012#puXm 
*/
	puXm?: number;
/** 
	*@inheritdoc Models.IndMach012#Slip 
*/
	Slip?: number;
/** 
	*@inheritdoc Models.IndMach012#MaxSlip 
*/
	MaxSlip?: number;
/** 
	*@inheritdoc Models.IndMach012#SlipOption 
*/
	SlipOption?: SlipOptionEnum;
/** 
	*@inheritdoc Models.IndMach012#Yearly 
*/
	Yearly?: string;
/** 
	*@inheritdoc Models.IndMach012#Daily 
*/
	Daily?: string;
/** 
	*@inheritdoc Models.IndMach012#Duty 
*/
	Duty?: string;
/** 
	*@inheritdoc Models.IndMach012#Debugtrace 
*/
	Debugtrace?: boolean;
/** 
	*@inheritdoc Models.IndMach012#spectrum 
*/
	spectrum?: string;
/** 
	*@inheritdoc Models.IndMach012#basefreq 
*/
	basefreq?: number;
/** 
	*@inheritdoc Models.IndMach012#enabled 
*/
	enabled?: BooleanEnum;
}