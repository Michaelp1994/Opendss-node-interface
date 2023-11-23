import { BooleanEnum } from "../enums/enums";
import BaseInterface from "./BaseInterface";
/**   General  */
export interface XfmrCodeInterface extends BaseInterface  {
/** Name of the component */
name: string;
/** 
	*@inheritdoc Models.XfmrCode#phases 
*/
	phases?: number;
/** 
	*@inheritdoc Models.XfmrCode#windings 
*/
	windings?: number;
/** 
	*@inheritdoc Models.XfmrCode#wdg 
*/
	wdg?: number;
/** 
	*@inheritdoc Models.XfmrCode#conn 
*/
	conn?: string;
/** 
	*@inheritdoc Models.XfmrCode#kV 
*/
	kV?: number;
/** 
	*@inheritdoc Models.XfmrCode#kVA 
*/
	kVA?: number;
/** 
	*@inheritdoc Models.XfmrCode#tap 
*/
	tap?: number;
/** 
	*@inheritdoc Models.XfmrCode#%R 
*/
	"%R"?: number;
/** 
	*@inheritdoc Models.XfmrCode#Rneut 
*/
	Rneut?: number;
/** 
	*@inheritdoc Models.XfmrCode#Xneut 
*/
	Xneut?: number;
/** 
	*@inheritdoc Models.XfmrCode#conns 
*/
	conns?: string[];
/** 
	*@inheritdoc Models.XfmrCode#kVs 
*/
	kVs?: number[];
/** 
	*@inheritdoc Models.XfmrCode#kVAs 
*/
	kVAs?: number[];
/** 
	*@inheritdoc Models.XfmrCode#taps 
*/
	taps?: number[];
/** 
	*@inheritdoc Models.XfmrCode#Xhl 
*/
	Xhl?: number;
/** 
	*@inheritdoc Models.XfmrCode#Xht 
*/
	Xht?: number;
/** 
	*@inheritdoc Models.XfmrCode#Xlt 
*/
	Xlt?: number;
/** 
	*@inheritdoc Models.XfmrCode#Xscarray 
*/
	Xscarray?: number[];
/** 
	*@inheritdoc Models.XfmrCode#thermal 
*/
	thermal?: number;
/** 
	*@inheritdoc Models.XfmrCode#n 
*/
	n?: number;
/** 
	*@inheritdoc Models.XfmrCode#m 
*/
	m?: number;
/** 
	*@inheritdoc Models.XfmrCode#flrise 
*/
	flrise?: number;
/** 
	*@inheritdoc Models.XfmrCode#hsrise 
*/
	hsrise?: number;
/** 
	*@inheritdoc Models.XfmrCode#%loadloss 
*/
	"%loadloss"?: number;
/** 
	*@inheritdoc Models.XfmrCode#%noloadloss 
*/
	"%noloadloss"?: number;
/** 
	*@inheritdoc Models.XfmrCode#normhkVA 
*/
	normhkVA?: number;
/** 
	*@inheritdoc Models.XfmrCode#emerghkVA 
*/
	emerghkVA?: number;
/** 
	*@inheritdoc Models.XfmrCode#MaxTap 
*/
	MaxTap?: number;
/** 
	*@inheritdoc Models.XfmrCode#MinTap 
*/
	MinTap?: number;
/** 
	*@inheritdoc Models.XfmrCode#NumTaps 
*/
	NumTaps?: number;
/** 
	*@inheritdoc Models.XfmrCode#%imag 
*/
	"%imag"?: number;
/** 
	*@inheritdoc Models.XfmrCode#ppm_antifloat 
*/
	ppm_antifloat?: number;
/** 
	*@inheritdoc Models.XfmrCode#%Rs 
*/
	"%Rs"?: number[];
/** 
	*@inheritdoc Models.XfmrCode#X12 
*/
	X12?: number;
/** 
	*@inheritdoc Models.XfmrCode#X13 
*/
	X13?: number;
/** 
	*@inheritdoc Models.XfmrCode#X23 
*/
	X23?: number;
/** 
	*@inheritdoc Models.XfmrCode#RdcOhms 
*/
	RdcOhms?: number;
/** 
	*@inheritdoc Models.XfmrCode#Seasons 
*/
	Seasons?: number;
/** 
	*@inheritdoc Models.XfmrCode#Ratings 
*/
	Ratings?: number[];
}