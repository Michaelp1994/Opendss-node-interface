import { BooleanEnum } from "../enums/enums";
import BaseInterface from "./BaseInterface";
/**   Circuit Element, Control Element  */
export interface InvControlInterface extends BaseInterface  {
/** Name of the component */
name: string;
/** 
	*@inheritdoc Models.InvControl#DERList 
*/
	DERList?: string[];
/** 
	*@inheritdoc Models.InvControl#Mode 
*/
	Mode?: ModeEnum;
/** 
	*@inheritdoc Models.InvControl#CombiMode 
*/
	CombiMode?: CombiModeEnum;
/** 
	*@inheritdoc Models.InvControl#vvc_curve1 
*/
	vvc_curve1?: string;
/** 
	*@inheritdoc Models.InvControl#hysteresis_offset 
*/
	hysteresis_offset?: number;
/** 
	*@inheritdoc Models.InvControl#voltage_curvex_ref 
*/
	voltage_curvex_ref?: voltage_curvex_refEnum;
/** 
	*@inheritdoc Models.InvControl#avgwindowlen 
*/
	avgwindowlen?: number;
/** 
	*@inheritdoc Models.InvControl#voltwatt_curve 
*/
	voltwatt_curve?: string;
/** 
	*@inheritdoc Models.InvControl#DbVMin 
*/
	DbVMin?: number;
/** 
	*@inheritdoc Models.InvControl#DbVMax 
*/
	DbVMax?: number;
/** 
	*@inheritdoc Models.InvControl#ArGraLowV 
*/
	ArGraLowV?: number;
/** 
	*@inheritdoc Models.InvControl#ArGraHiV 
*/
	ArGraHiV?: number;
/** 
	*@inheritdoc Models.InvControl#DynReacavgwindowlen 
*/
	DynReacavgwindowlen?: number;
/** 
	*@inheritdoc Models.InvControl#deltaQ_Factor 
*/
	deltaQ_Factor?: number;
/** 
	*@inheritdoc Models.InvControl#VoltageChangeTolerance 
*/
	VoltageChangeTolerance?: number;
/** 
	*@inheritdoc Models.InvControl#VarChangeTolerance 
*/
	VarChangeTolerance?: number;
/** 
	*@inheritdoc Models.InvControl#VoltwattYAxis 
*/
	VoltwattYAxis?: VoltwattYAxisEnum;
/** 
	*@inheritdoc Models.InvControl#RateofChangeMode 
*/
	RateofChangeMode?: RateofChangeModeEnum;
/** 
	*@inheritdoc Models.InvControl#LPFTau 
*/
	LPFTau?: number;
/** 
	*@inheritdoc Models.InvControl#RiseFallLimit 
*/
	RiseFallLimit?: number;
/** 
	*@inheritdoc Models.InvControl#deltaP_Factor 
*/
	deltaP_Factor?: number;
/** 
	*@inheritdoc Models.InvControl#EventLog 
*/
	EventLog?: EventLogEnum;
/** 
	*@inheritdoc Models.InvControl#RefReactivePower 
*/
	RefReactivePower?: string;
/** 
	*@inheritdoc Models.InvControl#ActivePChangeTolerance 
*/
	ActivePChangeTolerance?: number;
/** 
	*@inheritdoc Models.InvControl#monVoltageCalc 
*/
	monVoltageCalc?: monVoltageCalcEnum;
/** 
	*@inheritdoc Models.InvControl#monBus 
*/
	monBus?: string[];
/** 
	*@inheritdoc Models.InvControl#MonBusesVbase 
*/
	MonBusesVbase?: number[];
/** 
	*@inheritdoc Models.InvControl#voltwattCH_curve 
*/
	voltwattCH_curve?: string;
/** 
	*@inheritdoc Models.InvControl#wattpf_curve 
*/
	wattpf_curve?: string;
/** 
	*@inheritdoc Models.InvControl#wattvar_curve 
*/
	wattvar_curve?: string;
/** 
	*@inheritdoc Models.InvControl#VV_RefReactivePower 
*/
	VV_RefReactivePower?: number;
/** 
	*@inheritdoc Models.InvControl#PVSystemList 
*/
	PVSystemList?: string[];
/** 
	*@inheritdoc Models.InvControl#Vsetpoint 
*/
	Vsetpoint?: number;
/** 
	*@inheritdoc Models.InvControl#ControlModel 
*/
	ControlModel?: number;
/** 
	*@inheritdoc Models.InvControl#basefreq 
*/
	basefreq?: number;
/** 
	*@inheritdoc Models.InvControl#enabled 
*/
	enabled?: BooleanEnum;
}