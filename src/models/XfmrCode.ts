/**   General  */
export default class XfmrCode {
  /** Name of the component */
  name: string;
  /** Number of phases this transformer. Default is 3.*/
  phases: number;
  /** Number of windings, this transformers. (Also is the number of terminals) Default is 2. This property triggers memory allocation for the Transformer and will cause other properties to revert to default values.*/
  windings: number;
  /** Set this = to the number of the winding you wish to define.  Then set the values for this winding.  Repeat for each winding.  Alternatively, use the array collections (buses, kvas, etc.) to define the windings.  Note: reactances are BETWEEN pairs of windings; they are not the property of a single winding.*/
  wdg: number;
  /** Connection of this winding. Default is "wye" with the neutral solidly grounded.*/
  conn: string;
  /** For 2-or 3-phase, enter phase-phase kV rating.  Otherwise, kV rating of the actual winding*/
  kV: number;
  /** Base kVA rating of the winding. Side effect: forces change of max normal and emerg kva ratings.If 2-winding transformer, forces other winding to same value. When winding 1 is defined, all other windings are defaulted to the same rating and the first two winding resistances are defaulted to the %loadloss value.*/
  kVA: number;
  /** Per unit tap that this winding is normally on.*/
  tap: number;
  /** Percent resistance this winding.  (half of total for a 2-winding).*/
  "%R": number;
  /** Default = -1. Neutral resistance of wye (star)-connected winding in actual ohms.If entered as a negative value, the neutral is assumed to be open, or floating.*/
  Rneut: number;
  /** Neutral reactance of wye(star)-connected winding in actual ohms.  May be + or -.*/
  Xneut: number;
  /** Use this to specify all the Winding connections at once using an array. Example:
   *
   * New Transformer.T1 buses="Hibus, lowbus" ~ conns=(delta, wye)
   *
   * Redundant with conn*/
  conns: string[];
  /** Use this to specify the kV ratings of all windings at once using an array. Example:
   *
   * New Transformer.T1 buses="Hibus, lowbus"
   *
   * ~ conns=(delta, wye)
   *
   * ~ kvs=(115, 12.47)
   *
   * See kV= property for voltage rules.
   *
   * Redundant with kV*/
  kVs: number[];
  /** Use this to specify the kVA ratings of all windings at once using an array.
   *
   * Redundant with kVA*/
  kVAs: number[];
  /** Use this to specify the normal p.u. tap of all windings at once using an array.
   *
   * Redundant with tap*/
  taps: number[];
  /** Use this to specify the percent reactance, H-L (winding 1 to winding 2).  Use for 2- or 3-winding transformers. On the kva base of winding 1.*/
  Xhl: number;
  /** Use this to specify the percent reactance, H-T (winding 1 to winding 3).  Use for 3-winding transformers only. On the kVA base of winding 1.*/
  Xht: number;
  /** Use this to specify the percent reactance, L-T (winding 2 to winding 3).  Use for 3-winding transformers only. On the kVA base of winding 1.*/
  Xlt: number;
  /** Use this to specify the percent reactance between all pairs of windings as an array. All values are on the kVA base of winding 1.  The order of the values is as follows:
   *
   * (x12 13 14... 23 24.. 34 ..)
   *
   * There will be n(n-1)/2 values, where n=number of windings.*/
  Xscarray: number[];
  /** Thermal time constant of the transformer in hours.  Typically about 2.
   *
   * Not used*/
  thermal: number;
  /** n Exponent for thermal properties in IEEE C57.  Typically 0.8.
   *
   * Not used*/
  n: number;
  /** m Exponent for thermal properties in IEEE C57.  Typically 0.9 - 1.0
   *
   * Not used*/
  m: number;
  /** Temperature rise, deg C, for full load.  Default is 65.
   *
   * Not used*/
  flrise: number;
  /** Hot spot temperature rise, deg C.  Default is 15.
   *
   * Not used*/
  hsrise: number;
  /** Percent load loss at full load. The %R of the High and Low windings (1 and 2) are adjusted to agree at rated kVA loading.*/
  "%loadloss": number;
  /** Percent no load losses at rated excitatation voltage. Default is 0. Converts to a resistance in parallel with the magnetizing impedance in each winding.*/
  "%noloadloss": number;
  /** Normal maximum kVA rating of H winding (winding 1).  Usually 100% - 110% ofmaximum nameplate rating, depending on load shape. Defaults to 110% of kVA rating of Winding 1.*/
  normhkVA: number;
  /** Emergency (contingency)  kVA rating of H winding (winding 1).  Usually 140% - 150% ofmaximum nameplate rating, depending on load shape. Defaults to 150% of kVA rating of Winding 1.*/
  emerghkVA: number;
  /** Max per unit tap for the active winding.  Default is 1.10*/
  MaxTap: number;
  /** Min per unit tap for the active winding.  Default is 0.90*/
  MinTap: number;
  /** Total number of taps between min and max tap.  Default is 32.*/
  NumTaps: number;
  /** Percent magnetizing current. Default=0.0. Magnetizing branch is in parallel with windings in each phase. Also, see "ppm_antifloat".*/
  "%imag": number;
  /** Default=1 ppm.  Parts per million of transformer winding VA rating connected to ground to protect against accidentally floating a winding without a reference. If positive then the effect is adding a very large reactance to ground.  If negative, then a capacitor.*/
  ppm_antifloat: number;
  /** Use this property to specify all the winding %resistances using an array. Example:
   *
   * New Transformer.T1 buses="Hibus, lowbus" ~ %Rs=(0.2  0.3)
   *
   * Redundant with %R*/
  "%Rs": number[];
  /** Alternative to XHL for specifying the percent reactance from winding 1 to winding 2.  Use for 2- or 3-winding transformers. Percent on the kVA base of winding 1.
   *
   * Redundant with Xhl*/
  X12: number;
  /** Alternative to XHT for specifying the percent reactance from winding 1 to winding 3.  Use for 3-winding transformers only. Percent on the kVA base of winding 1.
   *
   * Redundant with Xht*/
  X13: number;
  /** Alternative to XLT for specifying the percent reactance from winding 2 to winding 3.Use for 3-winding transformers only. Percent on the kVA base of winding 1.
   *
   * Redundant with Xlt*/
  X23: number;
  /** Winding dc resistance in OHMS. Useful for GIC analysis. From transformer test report. Defaults to 85% of %R property*/
  RdcOhms: number;
  /** Defines the number of ratings to be defined for the transfomer, to be used only when defining seasonal ratings using the "Ratings" property.*/
  Seasons: number;
  /** An array of ratings to be used when the seasonal ratings flag is True. It can be used to insert
   *
   * multiple ratings to change during a QSTS simulation to evaluate different ratings in transformers.*/
  Ratings: number[];
  /** Make like another object, e.g.:
   *
   * New Capacitor.C2 like=c1  ...*/
  like: string;
}
