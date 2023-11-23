import { BooleanEnum } from "../enums/enums";
import BaseInterface from "./BaseInterface";
/**   Circuit Element, PC Element  */
export interface LoadInterface extends BaseInterface  {
/** Name of the component */
name: string;
/** 
	*@inheritdoc Models.Load#phases 
*/
	phases?: number;
/** 
	*@inheritdoc Models.Load#bus1 
*/
	bus1?: string;
/** 
	*@inheritdoc Models.Load#kV 
*/
	kV?: number;
/** 
	*@inheritdoc Models.Load#kW 
*/
	kW?: number;
/** 
	*@inheritdoc Models.Load#pf 
*/
	pf?: number;
/** 
	*@inheritdoc Models.Load#model 
*/
	model?: number;
/** 
	*@inheritdoc Models.Load#yearly 
*/
	yearly?: string;
/** 
	*@inheritdoc Models.Load#daily 
*/
	daily?: string;
/** 
	*@inheritdoc Models.Load#duty 
*/
	duty?: string;
/** 
	*@inheritdoc Models.Load#growth 
*/
	growth?: string;
/** 
	*@inheritdoc Models.Load#conn 
*/
	conn?: connEnum;
/** 
	*@inheritdoc Models.Load#kvar 
*/
	kvar?: number;
/** 
	*@inheritdoc Models.Load#Rneut 
*/
	Rneut?: number;
/** 
	*@inheritdoc Models.Load#Xneut 
*/
	Xneut?: number;
/** 
	*@inheritdoc Models.Load#status 
*/
	status?: statusEnum;
/** 
	*@inheritdoc Models.Load#class 
*/
	class?: number;
/** 
	*@inheritdoc Models.Load#Vminpu 
*/
	Vminpu?: number;
/** 
	*@inheritdoc Models.Load#Vmaxpu 
*/
	Vmaxpu?: number;
/** 
	*@inheritdoc Models.Load#Vminnorm 
*/
	Vminnorm?: number;
/** 
	*@inheritdoc Models.Load#Vminemerg 
*/
	Vminemerg?: number;
/** 
	*@inheritdoc Models.Load#xfkVA 
*/
	xfkVA?: number;
/** 
	*@inheritdoc Models.Load#allocationfactor 
*/
	allocationfactor?: number;
/** 
	*@inheritdoc Models.Load#kVA 
*/
	kVA?: number;
/** 
	*@inheritdoc Models.Load#%mean 
*/
	"%mean"?: number;
/** 
	*@inheritdoc Models.Load#%stddev 
*/
	"%stddev"?: number;
/** 
	*@inheritdoc Models.Load#CVRwatts 
*/
	CVRwatts?: number;
/** 
	*@inheritdoc Models.Load#CVRvars 
*/
	CVRvars?: number;
/** 
	*@inheritdoc Models.Load#kwh 
*/
	kwh?: number;
/** 
	*@inheritdoc Models.Load#kwhdays 
*/
	kwhdays?: number;
/** 
	*@inheritdoc Models.Load#Cfactor 
*/
	Cfactor?: number;
/** 
	*@inheritdoc Models.Load#CVRcurve 
*/
	CVRcurve?: string;
/** 
	*@inheritdoc Models.Load#NumCust 
*/
	NumCust?: number;
/** 
	*@inheritdoc Models.Load#ZIPV 
*/
	ZIPV?: number[];
/** 
	*@inheritdoc Models.Load#%SeriesRL 
*/
	"%SeriesRL"?: number;
/** 
	*@inheritdoc Models.Load#RelWeight 
*/
	RelWeight?: number;
/** 
	*@inheritdoc Models.Load#Vlowpu 
*/
	Vlowpu?: number;
/** 
	*@inheritdoc Models.Load#puXharm 
*/
	puXharm?: number;
/** 
	*@inheritdoc Models.Load#XRharm 
*/
	XRharm?: number;
/** 
	*@inheritdoc Models.Load#spectrum 
*/
	spectrum?: string;
/** 
	*@inheritdoc Models.Load#basefreq 
*/
	basefreq?: number;
/** 
	*@inheritdoc Models.Load#enabled 
*/
	enabled?: BooleanEnum;
}