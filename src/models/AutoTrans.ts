import BaseComponent from "./BaseComponent";
import { AutoTransInterface } from "../interfaces/AutoTransInterface";
import {
  AutoTransConnEnum,
  BooleanEnum,
  CoreEnum,
  LeadLagEnum,
  YesNoEnum,
} from "../enums/enums";

/**   Circuit Element, PD Element  */
export class AutoTrans extends BaseComponent {
  _type = "AutoTrans";

  _parameters = [
    "phases",
    "windings",
    "wdg",
    "bus",
    "conn",
    "kV",
    "kVA",
    "tap",
    "%R",
    "Rdcohms",
    "Core",
    "buses",
    "conns",
    "kVs",
    "kVAs",
    "taps",
    "XHX",
    "XHT",
    "XXT",
    "XSCarray",
    "thermal",
    "n",
    "m",
    "flrise",
    "hsrise",
    "%loadloss",
    "%noloadloss",
    "normhkVA",
    "emerghkVA",
    "sub",
    "MaxTap",
    "MinTap",
    "NumTaps",
    "subname",
    "%imag",
    "ppm_antifloat",
    "%Rs",
    "XRConst",
    "LeadLag",
    "WdgCurrents",
    "normamps",
    "emergamps",
    "faultrate",
    "pctperm",
    "repair",
    "basefreq",
    "enabled",
    "like",
  ];
  /** Number of phases this AutoTrans.
   * @default  3*/
  phases?: number;
  /** Number of windings, this AutoTrans. (Also is the number of terminals) Default is 2. This property triggers memory allocation for the AutoTrans and will cause other properties to revert to default values.*/
  windings?: number;
  /** Set this = to the number of the winding you wish to define.  Then set the values for this winding.  Winding 1 is always the Series winding. Winding 2 is always Common winding (wye connected). Repeat for each winding.  Alternatively, use the array collections (buses, kVAs, etc.) to define the windings.  Note: reactances are BETWEEN pairs of windings; they are not the property of a single winding.*/
  wdg?: number;
  /** Bus connection spec for this winding.*/
  bus?: string;
  /** Connection of this winding {Series, wye*, Delta, LN, LL }. Default is "wye" with the neutral solidly grounded.
   *
   * For AutoTrans, Winding 1 is always Series and Winding 2 (the Common winding) is always Wye.
   *
   * If only 2 windings, no need to specify connections.*/
  conn?: AutoTransConnEnum;
  /** For 2-or 3-phase, enter phase-phase kV rating.  Otherwise, kV rating of the actual winding. Specify H terminal kV rating for Series winding.*/
  kV?: number;
  /** Base kVA rating of the winding. Side effect: forces change of max normal and emerg kVA ratings.If 2-winding AutoTrans, forces other winding to same value. When winding 1 is defined, all other windings are defaulted to the same rating and the first two winding resistances are defaulted to the %loadloss value.*/
  kVA?: number;
  /** Per unit tap that this winding is on.*/
  tap?: number;
  /** Percent ac resistance this winding.  This value is for the power flow model.Is derived from the full load losses in the transformer test report.*/
  "%R"?: number;
  /** Winding dc resistance in OHMS. Specify this for GIC analysis. From transformer test report (divide by number of phases). Defaults to 85% of %R property (the ac value that includes stray losses).*/
  Rdcohms?: number;
  /** {Shell*|5-leg|3-Leg|1-phase|core-1-phase|4-leg} Core Type. Used for GIC analysis in auxiliary programs. Not used inside OpenDSS.*/
  Core?: CoreEnum;
  /** Use this to specify all the bus connections at once using an array. Example:
   *
   * New AutoTrans.T1 buses=[Hbus, Xbus]
   *
   * Redundant with bus*/
  buses?: string[];
  /** Use this to specify all the Winding connections at once using an array. Example:
   *
   * New AutoTrans.T1 buses=[Hbus, Xbus] ~ conns=(series, wye)
   *
   * Redundant with conn*/
  conns?: string[];
  /** Use this to specify the kV ratings of all windings at once using an array. Example:
   *
   * New AutoTrans.T1 buses=[Hbus, Xbus]
   *
   * ~ conns=(series, wye)
   *
   * ~ kvs=(115, 12.47)
   *
   * See kV= property for voltage rules.
   *
   * Redundant with kV*/
  kVs?: number[];
  /** Use this to specify the kVA ratings of all windings at once using an array.
   *
   * Redundant with kVA*/
  kVAs?: number[];
  /** Use this to specify the p.u. tap of all windings at once using an array.
   *
   * Redundant with tap*/
  taps?: number[];
  /** Use this to specify the percent reactance, H-L (winding 1 to winding 2).  Use for 2- or 3-winding AutoTranss. On the kVA base of winding 1(H-X).*/
  XHX?: number;
  /** Use this to specify the percent reactance, H-T (winding 1 to winding 3).  Use for 3-winding AutoTranss only. On the kVA base of winding 1(H-X).*/
  XHT?: number;
  /** Use this to specify the percent reactance, L-T (winding 2 to winding 3).  Use for 3-winding AutoTranss only. On the kVA base of winding 1(H-X).*/
  XXT?: number;
  /** Use this to specify the percent reactance between all pairs of windings as an array. All values are on the kVA base of winding 1.  The order of the values is as follows:
   *
   * (x12 13 14... 23 24.. 34 ..)
   *
   * There will be n(n-1)/2 values, where n=number of windings.*/
  XSCarray?: number[];
  /** Thermal time constant of the AutoTrans in hours.  Typically about 2.
   *
   * Not used*/
  thermal?: number;
  /** n Exponent for thermal properties in IEEE C57.  Typically 0.8.
   *
   * Not used*/
  n?: number;
  /** m Exponent for thermal properties in IEEE C57.  Typically 0.9 - 1.0
   *
   * Not used*/
  m?: number;
  /** Temperature rise, deg C, for full load.
   *
   * default is 65
   *
   * Not used*/
  flrise?: number;
  /** Hot spot temperature rise, deg C.
   *
   * default is 15.
   *
   * Not used*/
  hsrise?: number;
  /** Percent load loss at full load. The %R of the High and Low windings (1 and 2) are adjusted to agree at rated kVA loading.*/
  "%loadloss"?: number;
  /** Percent no load losses at rated excitatation voltage. Default is 0. Converts to a resistance in parallel with the magnetizing impedance in each winding.*/
  "%noloadloss"?: number;
  /** Normal maximum kVA rating of H winding (winding 1+2).  Usually 100% - 110% ofmaximum nameplate rating, depending on load shape. Defaults to 110% of kVA rating of Winding 1.*/
  normhkVA?: number;
  /** Emergency (contingency)  kVA rating of H winding (winding 1+2).  Usually 140% - 150% ofmaximum nameplate rating, depending on load shape. Defaults to 150% of kVA rating of Winding 1.*/
  emerghkVA?: number;
  /** ={Yes|No}  Designates whether this AutoTrans is to be considered a substation.Default is No.*/
  sub?: YesNoEnum;
  /** Max per unit tap for the active winding.  Default is 1.10*/
  MaxTap?: number;
  /** Min per unit tap for the active winding.  Default is 0.90*/
  MinTap?: number;
  /** Total number of taps between min and max tap.  Default is 32 (16 raise and 16 lower taps about the neutral position). The neutral position is not counted.*/
  NumTaps?: number;
  /** Substation Name. Optional. Default is null. If specified, printed on plots*/
  subname?: string;
  /** Percent magnetizing current. Default=0.0. Magnetizing branch is in parallel with windings in each phase. Also, see "ppm_antifloat".*/
  "%imag"?: number;
  /** Default=1 ppm.  Parts per million of AutoTrans winding VA rating connected to ground to protect against accidentally floating a winding without a reference. If positive then the effect is adding a very large reactance to ground.  If negative, then a capacitor.*/
  ppm_antifloat?: number;
  /** Use this property to specify all the winding ac %resistances using an array. Example:
   *
   * New AutoTrans.T1 buses=[Hibus, lowbus] ~ %Rs=(0.2  0.3)
   *
   * Redundant with %R*/
  "%Rs"?: number[];
  /** ={Yes|No} Default is NO. Signifies whether or not the X/R is assumed contant for harmonic studies.*/
  XRConst?: YesNoEnum;
  /** {Lead | Lag (default) | ANSI (default) | Euro } Designation in mixed Delta-wye connections the relationship between HV to LV winding. Default is ANSI 30 deg lag, e.g., Dy1 of Yd1 vector group. To get typical European Dy11 connection, specify either "lead" or "Euro"*/
  LeadLag?: LeadLagEnum;
  /** (Read only) Makes winding currents available via return on query (? AutoTrans.TX.WdgCurrents). Order: Phase 1, Wdg 1, Wdg 2, ..., Phase 2 ...*/
  WdgCurrents?: string;
  /** Normal rated current.*/
  normamps?: number;
  /** Maximum or emerg current.*/
  emergamps?: number;
  /** Failure rate per year.*/
  faultrate?: number;
  /** Percent of failures that become permanent.*/
  pctperm?: number;
  /** Hours to repair.*/
  repair?: number;
  /** Base Frequency for ratings.*/
  basefreq?: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled?: BooleanEnum;

  constructor(
    nameOrOptions: string | AutoTransInterface,
    options?: Omit<AutoTransInterface, "name">
  ) {
    super();
    if (typeof nameOrOptions === "string") {
      this.name = nameOrOptions;
      Object.assign(this, options);
    } else {
      Object.assign(this, nameOrOptions);
    }
  }
}
