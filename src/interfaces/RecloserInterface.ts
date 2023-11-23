import { BooleanEnum } from "../enums/enums";
import BaseInterface from "./BaseInterface";
/**   Circuit Element, Control Element  */
export interface RecloserInterface extends BaseInterface  {
/** Name of the component */
name: string;
/** 
	*@inheritdoc Models.Recloser#MonitoredObj 
*/
	MonitoredObj?: string;
/** 
	*@inheritdoc Models.Recloser#MonitoredTerm 
*/
	MonitoredTerm?: number;
/** 
	*@inheritdoc Models.Recloser#SwitchedObj 
*/
	SwitchedObj?: string;
/** 
	*@inheritdoc Models.Recloser#SwitchedTerm 
*/
	SwitchedTerm?: number;
/** 
	*@inheritdoc Models.Recloser#NumFast 
*/
	NumFast?: number;
/** 
	*@inheritdoc Models.Recloser#PhaseFast 
*/
	PhaseFast?: string;
/** 
	*@inheritdoc Models.Recloser#PhaseDelayed 
*/
	PhaseDelayed?: string;
/** 
	*@inheritdoc Models.Recloser#GroundFast 
*/
	GroundFast?: string;
/** 
	*@inheritdoc Models.Recloser#GroundDelayed 
*/
	GroundDelayed?: string;
/** 
	*@inheritdoc Models.Recloser#PhaseTrip 
*/
	PhaseTrip?: number;
/** 
	*@inheritdoc Models.Recloser#GroundTrip 
*/
	GroundTrip?: number;
/** 
	*@inheritdoc Models.Recloser#PhaseInst 
*/
	PhaseInst?: number;
/** 
	*@inheritdoc Models.Recloser#GroundInst 
*/
	GroundInst?: number;
/** 
	*@inheritdoc Models.Recloser#Reset 
*/
	Reset?: number;
/** 
	*@inheritdoc Models.Recloser#Shots 
*/
	Shots?: number;
/** 
	*@inheritdoc Models.Recloser#RecloseIntervals 
*/
	RecloseIntervals?: number[];
/** 
	*@inheritdoc Models.Recloser#Delay 
*/
	Delay?: number;
/** 
	*@inheritdoc Models.Recloser#Action 
*/
	Action?: string;
/** 
	*@inheritdoc Models.Recloser#TDPhFast 
*/
	TDPhFast?: number;
/** 
	*@inheritdoc Models.Recloser#TDGrFast 
*/
	TDGrFast?: number;
/** 
	*@inheritdoc Models.Recloser#TDPhDelayed 
*/
	TDPhDelayed?: number;
/** 
	*@inheritdoc Models.Recloser#TDGrDelayed 
*/
	TDGrDelayed?: number;
/** 
	*@inheritdoc Models.Recloser#Normal 
*/
	Normal?: NormalEnum;
/** 
	*@inheritdoc Models.Recloser#State 
*/
	State?: StateEnum;
/** 
	*@inheritdoc Models.Recloser#basefreq 
*/
	basefreq?: number;
/** 
	*@inheritdoc Models.Recloser#enabled 
*/
	enabled?: BooleanEnum;
}