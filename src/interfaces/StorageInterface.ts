import { BooleanEnum } from "../enums/enums";
import BaseInterface from "./BaseInterface";
/**   Circuit Element, PC Element  */
export interface StorageInterface extends BaseInterface  {
/** Name of the component */
name: string;
/** 
	*@inheritdoc Models.Storage#phases 
*/
	phases?: number;
/** 
	*@inheritdoc Models.Storage#bus1 
*/
	bus1?: string;
/** 
	*@inheritdoc Models.Storage#kv 
*/
	kv?: number;
/** 
	*@inheritdoc Models.Storage#conn 
*/
	conn?: connEnum;
/** 
	*@inheritdoc Models.Storage#kW 
*/
	kW?: number;
/** 
	*@inheritdoc Models.Storage#kvar 
*/
	kvar?: number;
/** 
	*@inheritdoc Models.Storage#pf 
*/
	pf?: number;
/** 
	*@inheritdoc Models.Storage#kVA 
*/
	kVA?: number;
/** 
	*@inheritdoc Models.Storage#%Cutin 
*/
	"%Cutin"?: number;
/** 
	*@inheritdoc Models.Storage#%Cutout 
*/
	"%Cutout"?: number;
/** 
	*@inheritdoc Models.Storage#EffCurve 
*/
	EffCurve?: string;
/** 
	*@inheritdoc Models.Storage#VarFollowInverter 
*/
	VarFollowInverter?: boolean;
/** 
	*@inheritdoc Models.Storage#kvarMax 
*/
	kvarMax?: number;
/** 
	*@inheritdoc Models.Storage#kvarMaxAbs 
*/
	kvarMaxAbs?: number;
/** 
	*@inheritdoc Models.Storage#WattPriority 
*/
	WattPriority?: WattPriorityEnum;
/** 
	*@inheritdoc Models.Storage#PFPriority 
*/
	PFPriority?: boolean;
/** 
	*@inheritdoc Models.Storage#%PminNoVars 
*/
	"%PminNoVars"?: number;
/** 
	*@inheritdoc Models.Storage#%PminkvarMax 
*/
	"%PminkvarMax"?: number;
/** 
	*@inheritdoc Models.Storage#kWrated 
*/
	kWrated?: number;
/** 
	*@inheritdoc Models.Storage#%kWrated 
*/
	"%kWrated"?: number;
/** 
	*@inheritdoc Models.Storage#kWhrated 
*/
	kWhrated?: number;
/** 
	*@inheritdoc Models.Storage#kWhstored 
*/
	kWhstored?: number;
/** 
	*@inheritdoc Models.Storage#%stored 
*/
	"%stored"?: number;
/** 
	*@inheritdoc Models.Storage#%reserve 
*/
	"%reserve"?: number;
/** 
	*@inheritdoc Models.Storage#State 
*/
	State?: StateEnum;
/** 
	*@inheritdoc Models.Storage#%Discharge 
*/
	"%Discharge"?: number;
/** 
	*@inheritdoc Models.Storage#%Charge 
*/
	"%Charge"?: number;
/** 
	*@inheritdoc Models.Storage#%EffCharge 
*/
	"%EffCharge"?: number;
/** 
	*@inheritdoc Models.Storage#%EffDischarge 
*/
	"%EffDischarge"?: number;
/** 
	*@inheritdoc Models.Storage#%IdlingkW 
*/
	"%IdlingkW"?: number;
/** 
	*@inheritdoc Models.Storage#%Idlingkvar 
*/
	"%Idlingkvar"?: number;
/** 
	*@inheritdoc Models.Storage#%R 
*/
	"%R"?: number;
/** 
	*@inheritdoc Models.Storage#%X 
*/
	"%X"?: number;
/** 
	*@inheritdoc Models.Storage#model 
*/
	model?: number;
/** 
	*@inheritdoc Models.Storage#Vminpu 
*/
	Vminpu?: number;
/** 
	*@inheritdoc Models.Storage#Vmaxpu 
*/
	Vmaxpu?: number;
/** 
	*@inheritdoc Models.Storage#Balanced 
*/
	Balanced?: BalancedEnum;
/** 
	*@inheritdoc Models.Storage#LimitCurrent 
*/
	LimitCurrent?: boolean;
/** 
	*@inheritdoc Models.Storage#yearly 
*/
	yearly?: string;
/** 
	*@inheritdoc Models.Storage#daily 
*/
	daily?: string;
/** 
	*@inheritdoc Models.Storage#duty 
*/
	duty?: string;
/** 
	*@inheritdoc Models.Storage#DispMode 
*/
	DispMode?: DispModeEnum;
/** 
	*@inheritdoc Models.Storage#DischargeTrigger 
*/
	DischargeTrigger?: number;
/** 
	*@inheritdoc Models.Storage#ChargeTrigger 
*/
	ChargeTrigger?: number;
/** 
	*@inheritdoc Models.Storage#TimeChargeTrig 
*/
	TimeChargeTrig?: number;
/** 
	*@inheritdoc Models.Storage#class 
*/
	class?: number;
/** 
	*@inheritdoc Models.Storage#DynaDLL 
*/
	DynaDLL?: string;
/** 
	*@inheritdoc Models.Storage#DynaData 
*/
	DynaData?: string;
/** 
	*@inheritdoc Models.Storage#UserModel 
*/
	UserModel?: string;
/** 
	*@inheritdoc Models.Storage#UserData 
*/
	UserData?: string;
/** 
	*@inheritdoc Models.Storage#debugtrace 
*/
	debugtrace?: debugtraceEnum;
/** 
	*@inheritdoc Models.Storage#kVDC 
*/
	kVDC?: number;
/** 
	*@inheritdoc Models.Storage#Kp 
*/
	Kp?: number;
/** 
	*@inheritdoc Models.Storage#PITol 
*/
	PITol?: number;
/** 
	*@inheritdoc Models.Storage#SafeVoltage 
*/
	SafeVoltage?: number;
/** 
	*@inheritdoc Models.Storage#SafeMode 
*/
	SafeMode?: boolean;
/** 
	*@inheritdoc Models.Storage#DynamicEq 
*/
	DynamicEq?: string;
/** 
	*@inheritdoc Models.Storage#DynOut 
*/
	DynOut?: string;
/** 
	*@inheritdoc Models.Storage#ControlMode 
*/
	ControlMode?: ControlModeEnum;
/** 
	*@inheritdoc Models.Storage#spectrum 
*/
	spectrum?: string;
/** 
	*@inheritdoc Models.Storage#basefreq 
*/
	basefreq?: number;
/** 
	*@inheritdoc Models.Storage#enabled 
*/
	enabled?: BooleanEnum;
}