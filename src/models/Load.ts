import { ConnEnum, StatusEnum, BooleanEnum } from "../enums/enums";
import { LoadInterface } from "../interfaces/LoadInterface";
import BaseComponent from "./BaseComponent";

/**   Circuit Element, PC Element  */
export class Load extends BaseComponent {
  _type = "Load";
  _parameters = [
    "phases",
    "bus1",
    "kV",
    "kW",
    "pf",
    "model",
    "yearly",
    "daily",
    "duty",
    "growth",
    "conn",
    "kvar",
    "Rneut",
    "Xneut",
    "status",
    "class",
    "Vminpu",
    "Vmaxpu",
    "Vminnorm",
    "Vminemerg",
    "xfkVA",
    "allocationfactor",
    "kVA",
    "%mean",
    "%stddev",
    "CVRwatts",
    "CVRvars",
    "kwh",
    "kwhdays",
    "Cfactor",
    "CVRcurve",
    "NumCust",
    "ZIPV",
    "%SeriesRL",
    "RelWeight",
    "Vlowpu",
    "puXharm",
    "XRharm",
    "spectrum",
    "basefreq",
    "enabled",
    "like",
  ];
  /** Number of Phases, this load.  Load is evenly divided among phases.*/
  phases?: number;
  /** Bus to which the load is connected.  May include specific node specification.*/
  bus1?: string;
  /** Nominal rated (1.0 per unit) voltage, kV, for load. For 2- and 3-phase loads, specify phase-phase kV. Otherwise, specify actual kV across each branch of the load. If wye (star), specify phase-neutral kV. If delta or phase-phase connected, specify phase-phase kV.*/
  kV?: number;
  /** Total base kW for the load.  Normally, you would enter the maximum kW for the load for the first year and allow it to be adjusted by the load shapes, growth shapes, and global load multiplier.
   *
   * Legal ways to define base load:
   *
   * kW, PF
   *
   * kW, kvar
   *
   * kVA, PF
   *
   * XFKVA * Allocationfactor, PF
   *
   * kWh/(kWhdays*24) * Cfactor, PF*/
  kW?: number;
  /** Load power factor.  Enter negative for leading powerfactor (when kW and kvar have opposite signs.)*/
  pf?: number;
  /** Integer code for the model to use for load variation with voltage. Valid values are:
   *
   * 1:Standard constant P+jQ load. (Default)
   *
   * 2:Constant impedance load.
   *
   * 3:Const P, Quadratic Q (like a motor).
   *
   * 4:Nominal Linear P, Quadratic Q (feeder mix). Use this with CVRfactor.
   *
   * 5:Constant Current Magnitude
   *
   * 6:Const P, Fixed Q
   *
   * 7:Const P, Fixed Impedance Q
   *
   * 8:ZIPV (7 values)
   *
   * For Types 6 and 7, only the P is modified by load multipliers.*/
  model?: number;
  /** LOADSHAPE object to use for yearly simulations.  Must be previously defined as a Loadshape object. Is set to the Daily load shape  when Daily is defined.  The daily load shape is repeated in this case. Set Status=Fixed to ignore Loadshape designation. Set to NONE to reset to no loadahape. The default is no variation.*/
  yearly?: string;
  /** LOADSHAPE object to use for daily simulations.  Must be previously defined as a Loadshape object of 24 hrs, typically. Set Status=Fixed to ignore Loadshape designation. Set to NONE to reset to no loadahape. Default is no variation (constant) if not defined. Side effect: Sets Yearly load shape if not already defined.*/
  daily?: string;
  /** LOADSHAPE object to use for duty cycle simulations.  Must be previously defined as a Loadshape object.  Typically would have time intervals less than 1 hr. Designate the number of points to solve using the Set Number=xxxx command. If there are fewer points in the actual shape, the shape is assumed to repeat.Set to NONE to reset to no loadahape. Set Status=Fixed to ignore Loadshape designation.  Defaults to Daily curve If not specified.*/
  duty?: string;
  /** Characteristic  to use for growth factors by years.  Must be previously defined as a Growthshape object. Defaults to circuit default growth factor (see Set Growth command).*/
  growth?: string;
  /** ={wye or LN | delta or LL}.  Default is wye.*/
  conn?: ConnEnum;
  /** Specify the base kvar for specifying load as kW & kvar.  Assumes kW has been already defined.  Alternative to specifying the power factor.  Side effect:  the power factor and kVA is altered to agree.*/
  kvar?: number;
  /** Default is -1. Neutral resistance of wye (star)-connected load in actual ohms. If entered as a negative value, the neutral can be open, or floating, or it can be connected to node 0 (ground), which is the usual default. If >=0 be sure to explicitly specify the node connection for the neutral, or last, conductor. Otherwise, the neutral impedance will be shorted to ground.*/
  Rneut?: number;
  /** Neutral reactance of wye(star)-connected load in actual ohms.  May be + or -.*/
  Xneut?: number;
  /** ={Variable | Fixed | Exempt}.  Default is variable. If Fixed, no load multipliers apply;  however, growth multipliers do apply.  All multipliers apply to Variable loads.  Exempt loads are not modified by the global load multiplier, such as in load duration curves, etc.  Daily multipliers do apply, so setting this property to Exempt is a good way to represent industrial load that stays the same day-after-day for the period study.*/
  status?: StatusEnum;
  /** An arbitrary integer number representing the class of load so that load values may be segregated by load value. Default is 1; not used internally.*/
  class?: number;
  /** Default = 0.95.  Minimum per unit voltage for which the MODEL is assumed to apply. Lower end of normal voltage range.Below this value, the load model reverts to a constant impedance model that matches the model at the transition voltage. See also "Vlowpu" which causes the model to match Model=2 below the transition voltage.*/
  Vminpu?: number;
  /** Default = 1.05.  Maximum per unit voltage for which the MODEL is assumed to apply. Above this value, the load model reverts to a constant impedance model.*/
  Vmaxpu?: number;
  /** Minimum per unit voltage for load EEN evaluations, Normal limit.  Default = 0, which defaults to system "vminnorm" property (see Set Command under Executive).  If this property is specified, it ALWAYS overrides the system specification. This allows you to have different criteria for different loads. Set to zero to revert to the default system value.*/
  Vminnorm?: number;
  /** Minimum per unit voltage for load UE evaluations, Emergency limit.  Default = 0, which defaults to system "vminemerg" property (see Set Command under Executive).  If this property is specified, it ALWAYS overrides the system specification. This allows you to have different criteria for different loads. Set to zero to revert to the default system value.*/
  Vminemerg?: number;
  /** Default = 0.0.  Rated kVA of service transformer for allocating loads based on connected kVA at a bus. Side effect:  kW, PF, and kvar are modified. See help on kVA.*/
  xfkVA?: number;
  /** Default = 0.5.  Allocation factor for allocating loads based on connected kVA at a bus. Side effect:  kW, PF, and kvar are modified by multiplying this factor times the XFKVA (if > 0).*/
  allocationfactor?: number;
  /** Specify base Load in kVA (and power factor)
   *
   * Legal ways to define base load:
   *
   * kW, PF
   *
   * kW, kvar
   *
   * kVA, PF
   *
   * XFKVA * Allocationfactor, PF
   *
   * kWh/(kWhdays*24) * Cfactor, PF*/
  kVA?: number;
  /** Percent mean value for load to use for monte carlo studies if no loadshape is assigned to this load. Default is 50.*/
  "%mean"?: number;
  /** Percent Std deviation value for load to use for monte carlo studies if no loadshape is assigned to this load. Default is 10.*/
  "%stddev"?: number;
  /** Percent reduction in active power (watts) per 1% reduction in voltage from 100% rated. Default=1.
   *
   * Typical values range from 0.4 to 0.8. Applies to Model=4 only.
   *
   * Intended to represent conservation voltage reduction or voltage optimization measures.*/
  CVRwatts?: number;
  /** Percent reduction in reactive power (vars) per 1% reduction in voltage from 100% rated. Default=2.
   *
   * Typical values range from 2 to 3. Applies to Model=4 only.
   *
   * Intended to represent conservation voltage reduction or voltage optimization measures.*/
  CVRvars?: number;
  /** kWh billed for this period. Default is 0. See help on kVA and Cfactor and kWhDays.*/
  kwh?: number;
  /** Length of kWh billing period in days (24 hr days). Default is 30. Average demand is computed using this value.*/
  kwhdays?: number;
  /** Factor relating average kW to peak kW. Default is 4.0. See kWh and kWhdays. See kVA.*/
  Cfactor?: number;
  /** Default is NONE. Curve describing both watt and var factors as a function of time. Refers to a LoadShape object with both Mult and Qmult defined. Define a Loadshape to agree with yearly or daily curve according to the type of analysis being done. If NONE, the CVRwatts and CVRvars factors are used and assumed constant.*/
  CVRcurve?: string;
  /** Number of customers, this load. Default is 1.*/
  NumCust?: number;
  /** Array of 7 coefficients:
   *
   * First 3 are ZIP weighting factors for real power (should sum to 1)
   *
   * Next 3 are ZIP weighting factors for reactive power (should sum to 1)
   *
   * Last 1 is cut-off voltage in p.u. of base kV; load is 0 below this cut-off
   *
   * No defaults; all coefficients must be specified if using model=8.*/
  ZIPV?: number[];
  /** Percent of load that is series R-L for Harmonic studies. Default is 50. Remainder is assumed to be parallel R and L. This can have a significant impact on the amount of damping observed in Harmonics solutions.*/
  "%SeriesRL"?: number;
  /** Relative weighting factor for reliability calcs. Default = 1. Used to designate high priority loads such as hospitals, etc.
   *
   * Is multiplied by number of customers and load kW during reliability calcs.*/
  RelWeight?: number;
  /** Default = 0.50.  Per unit voltage at which the model switches to same as constant Z model (model=2). This allows more consistent convergence at very low voltaes due to opening switches or solving for fault situations.*/
  Vlowpu?: number;
  /** Special reactance, pu (based on kVA, kV properties), for the series impedance branch in the load model for HARMONICS analysis. Generally used to represent motor load blocked rotor reactance. If not specified (that is, set =0, the default value), the series branch is computed from the percentage of the nominal load at fundamental frequency specified by the %SERIESRL property.
   *
   * Applies to load model in HARMONICS mode only.
   *
   * A typical value would be approximately 0.20 pu based on kVA * %SeriesRL / 100.0.*/
  puXharm?: number;
  /** X/R ratio of the special harmonics mode reactance specified by the puXHARM property at fundamental frequency. Default is 6.*/
  XRharm?: number;
  /** Name of harmonic current spectrum for this load.  Default is "defaultload", which is defined when the DSS starts.*/
  spectrum?: string;
  /** Base Frequency for ratings.*/
  basefreq?: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled?: BooleanEnum;
  constructor(
    nameOrOptions: string | LoadInterface,
    options?: Omit<LoadInterface, "name">
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
