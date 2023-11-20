/**   Circuit Element, PC Element  */
export default class Generator {
  /** Name of the component */
  name: string;
  /** Number of Phases, this Generator.  Power is evenly divided among phases.*/
  phases: number;
  /** Bus to which the Generator is connected.  May include specific node specification.*/
  bus1: string;
  /** Nominal rated (1.0 per unit) voltage, kV, for Generator. For 2- and 3-phase Generators, specify phase-phase kV. Otherwise, for phases=1 or phases>3, specify actual kV across each branch of the Generator. If wye (star), specify phase-neutral kV. If delta or phase-phase connected, specify phase-phase kV.*/
  kv: number;
  /** Total base kW for the Generator.  A positive value denotes power coming OUT of the element,
   *
   * which is the opposite of a load. This value is modified depending on the dispatch mode. Unaffected by the global load multiplier and growth curves. If you want there to be more generation, you must add more generators or change this value.*/
  kW: number;
  /** Generator power factor. Default is 0.80. Enter negative for leading powerfactor (when kW and kvar have opposite signs.)
   *
   * A positive power factor for a generator signifies that the generator produces vars
   *
   * as is typical for a synchronous generator.  Induction machines would be
   *
   * specified with a negative power factor.*/
  pf: number;
  /** Specify the base kvar.  Alternative to specifying the power factor.  Side effect:  the power factor value is altered to agree based on present value of kW.*/
  kvar: number;
  /** Integer code for the model to use for generation variation with voltage. Valid values are:
   *
   * 1:Generator injects a constant kW at specified power factor.
   *
   * 2:Generator is modeled as a constant admittance.
   *
   * 3:Const kW, constant kV.  Somewhat like a conventional transmission power flow P-V generator.
   *
   * 4:Const kW, Fixed Q (Q never varies)
   *
   * 5:Const kW, Fixed Q(as a constant reactance)
   *
   * 6:Compute load injection from User-written Model.(see usage of Xd, Xdp)
   *
   * 7:Constant kW, kvar, but current-limited below Vminpu. Approximates a simple inverter. See also Balanced.*/
  model: number;
  /** Default = 0.90.  Minimum per unit voltage for which the Model is assumed to apply. Below this value, the load model reverts to a constant impedance model. For model 7, the current is limited to the value computed for constant power at Vminpu.*/
  Vminpu: number;
  /** Default = 1.10.  Maximum per unit voltage for which the Model is assumed to apply. Above this value, the load model reverts to a constant impedance model.*/
  Vmaxpu: number;
  /** Dispatch shape to use for yearly simulations.  Must be previously defined as a Loadshape object. If this is not specified, a constant value is assumed (no variation). If the generator is assumed to be ON continuously, specify Status=FIXED, or designate a curve that is 1.0 per unit at all times. Set to NONE to reset to no loadahape. Nominally for 8760 simulations.  If there are fewer points in the designated shape than the number of points in the solution, the curve is repeated.*/
  yearly: string;
  /** Dispatch shape to use for daily simulations.  Must be previously defined as a Loadshape object of 24 hrs, typically.  If generator is assumed to be ON continuously, specify Status=FIXED, or designate a Loadshape objectthat is 1.0 perunit for all hours. Set to NONE to reset to no loadahape.*/
  daily: string;
  /** Load shape to use for duty cycle dispatch simulations such as for wind generation. Must be previously defined as a Loadshape object. Typically would have time intervals less than 1 hr -- perhaps, in seconds. Set Status=Fixed to ignore Loadshape designation. Set to NONE to reset to no loadahape. Designate the number of points to solve using the Set Number=xxxx command. If there are fewer points in the actual shape, the shape is assumed to repeat.*/
  duty: string;
  /** {Default* | Loadlevel | Price } Default = Default. Dispatch mode. In default mode, gen is either always on or follows dispatch curve as specified. Otherwise, the gen comes on when either the global default load level (Loadshape "default") or the price level exceeds the dispatch value.*/
  dispmode: string;
  /** Dispatch value.
   *
   * If = 0.0 (default) then Generator follow dispatch curves, if any.
   *
   * If > 0  then Generator is ON only when either the price signal (in Price dispatch mode) exceeds this value or the active circuit load multiplier * "default" loadshape value * the default yearly growth factor exceeds this value.  Then the generator follows dispatch curves (duty, daily, or yearly), if any (see also Status).*/
  dispvalue: number;
  /** ={wye|LN|delta|LL}.  Default is wye.*/
  conn: string;
  /** ={Fixed | Variable*}.  If Fixed, then dispatch multipliers do not apply. The generator is alway at full power when it is ON.  Default is Variable  (follows curves).*/
  status: string;
  /** An arbitrary integer number representing the class of Generator so that Generator values may be segregated by class.*/
  class: number;
  /** Per Unit voltage set point for Model = 3  (typical power flow model).  Default is 1.0.*/
  Vpu: number;
  /** Maximum kvar limit for Model = 3.  Defaults to twice the specified load kvar.  Always reset this if you change PF or kvar properties.*/
  maxkvar: number;
  /** Minimum kvar limit for Model = 3. Enter a negative number if generator can absorb vars. Defaults to negative of Maxkvar.  Always reset this if you change PF or kvar properties.*/
  minkvar: number;
  /** Deceleration factor for P-V generator model (Model=3).  Default is 0.1. If the circuit converges easily, you may want to use a higher number such as 1.0. Use a lower number if solution diverges. Use Debugtrace=yes to create a file that will trace the convergence of a generator model.*/
  pvfactor: number;
  /** {Yes | No}  Forces generator ON despite requirements of other dispatch modes. Stays ON until this property is set to NO, or an internal algorithm cancels the forced ON state.*/
  forceon: boolean;
  /** kVA rating of electrical machine. Defaults to 1.2* kW if not specified. Applied to machine or inverter definition for Dynamics mode solutions.*/
  kVA: number;
  /** MVA rating of electrical machine.  Alternative to using kVA=.
   *
   * Redundant with kVA*/
  MVA: number;
  /** Per unit synchronous reactance of machine. Presently used only for Thevinen impedance for power flow calcs of user models (model=6). Typically use a value 0.4 to 1.0. Default is 1.0*/
  Xd: number;
  /** Per unit transient reactance of the machine.  Used for Dynamics mode and Fault studies.  Default is 0.27.For user models, this value is used for the Thevinen/Norton impedance for Dynamics Mode.*/
  Xdp: number;
  /** Per unit subtransient reactance of the machine.  Used for Harmonics. Default is 0.20.*/
  Xdpp: number;
  /** Per unit mass constant of the machine.  MW-sec/MVA.  Default is 1.0.*/
  H: number;
  /** Damping constant.  Usual range is 0 to 4. Default is 1.0.  Adjust to get damping*/
  D: number;
  /** Name of DLL containing user-written model, which computes the terminal currents for Dynamics studies, overriding the default model.  Set to "none" to negate previous setting.*/
  UserModel: string;
  /** String (in quotes or parentheses) that gets passed to user-written model for defining the data required for that model.*/
  UserData: string;
  /** Name of user-written DLL containing a Shaft model, which models the prime mover and determines the power on the shaft for Dynamics studies. Models additional mass elements other than the single-mass model in the DSS default model. Set to "none" to negate previous setting.*/
  ShaftModel: string;
  /** String (in quotes or parentheses) that gets passed to user-written shaft dynamic model for defining the data for that model.*/
  ShaftData: string;
  /** Starting time offset [hours] into the duty cycle shape for this generator, defaults to 0*/
  DutyStart: number;
  /** {Yes | No }  Default is no.  Turn this on to capture the progress of the generator model for each iteration.  Creates a separate file for each generator named "GEN_name.CSV".*/
  debugtrace: boolean;
  /** {Yes | No*} Default is No.  For Model=7, force balanced current only for 3-phase generators. Force zero- and negative-sequence to zero.*/
  Balanced: boolean;
  /** Default is 20. X/R ratio for Xdp property for FaultStudy and Dynamic modes.*/
  XRdp: number;
  /** {Yes | *No}. Activates the use of fuel for the operation of the generator. When the fuel level reaches the reserve level, the generator stops until it gets refueled. By default, the generator is connected to a continuous fuel supply, Use this mode to mimic dependency on fuel level for different generation technologies.*/
  UseFuel: boolean;
  /** {*0}Is the nominal level of fuel for the generator (kWh). It only applies if UseFuel = Yes/True*/
  FuelkWh: number;
  /** It is a number between 0 and 100 representing the current amount of fuel avaiable in percentage of FuelkWh. It only applies if UseFuel = Yes/True*/
  "%Fuel": number;
  /** It is a number between 0 and 100 representing the reserve level in percentage of FuelkWh. It only applies if UseFuel = Yes/True*/
  "%Reserve": number;
  /** It is a boolean value (Yes/True, No/False) that can be used to manually refuel the generator when needed. It only applies if UseFuel = Yes/True*/
  Refuel: boolean;
  /** The name of the dynamic equation (DynamicExp) that will be used for defining the dynamic behavior of the generator. if not defined, the generator dynamics will follow the built-in dynamic equation.*/
  DynamicEq: string;
  /** The name of the variables within the Dynamic equation that will be used to govern the generator dynamics.This generator model requires 2 outputs from the dynamic equation:
   *
   *
   *
   *
   *
   * Shaft speed (velocity) relative to synchronous speed.
   *
   *
   *
   *
   *
   * Shaft, or power, angle (relative to synchronous reference frame).
   *
   *
   *
   *
   *
   * The output variables need to be defined in tha strict order.*/
  DynOut: string;
  /** Name of harmonic voltage or current spectrum for this generator. Voltage behind Xd" for machine - default. Current injection for inverter. Default value is "default", which is defined when the DSS starts.*/
  spectrum: string;
  /** Base Frequency for ratings.*/
  basefreq: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled: boolean;
  /** Make like another object, e.g.:
   *
   * New Capacitor.C2 like=c1  ...*/
  like: string;
}
