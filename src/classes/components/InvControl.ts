import {
  CombiModeEnum,
  InvControlModeEnum,
  MonVoltageCalcEnum,
  RateofChangeModeEnum,
  VoltageCurvexRefEnum,
  VoltwattYAxisEnum,
} from "@enums/enums";
import { InvControlInterface } from "@interfaces/InvControlInterface";
import CircuitElementComponent from "./CircuitElementComponent";

/**   Circuit Element, Control Element  */
export class InvControl extends CircuitElementComponent {
  _type = "InvControl";
  _parameters = [
    "DERList",
    "Mode",
    "CombiMode",
    "vvc_curve1",
    "hysteresis_offset",
    "voltage_curvex_ref",
    "avgwindowlen",
    "voltwatt_curve",
    "DbVMin",
    "DbVMax",
    "ArGraLowV",
    "ArGraHiV",
    "DynReacavgwindowlen",
    "deltaQ_Factor",
    "VoltageChangeTolerance",
    "VarChangeTolerance",
    "VoltwattYAxis",
    "RateofChangeMode",
    "LPFTau",
    "RiseFallLimit",
    "deltaP_Factor",
    "EventLog",
    "RefReactivePower",
    "ActivePChangeTolerance",
    "monVoltageCalc",
    "monBus",
    "MonBusesVbase",
    "voltwattCH_curve",
    "wattpf_curve",
    "wattvar_curve",
    "VV_RefReactivePower",
    "PVSystemList",
    "Vsetpoint",
    "ControlModel",
    "basefreq",
    "enabled",
    "like",
  ];
  /** Array list of PVSystem and/or Storage elements to be controlled. If not specified, all PVSystem and Storage in the circuit are assumed to be controlled by this control.
   *
   * No capability of hierarchical control between two controls for a single element is implemented at this time.*/
  DERList?: string[];
  /** Smart inverter function in which the InvControl will control the PC elements specified in DERList, according to the options below:
   *
   * Must be one of: {VOLTVAR* | VOLTWATT | DYNAMICREACCURR | WATTPF | WATTVAR | GFM}
   *
   * if the user desires to use modes simultaneously, then set the CombiMode property. Setting the Mode to any valid value disables combination mode.
   *
   * In volt-var mode (Default). This mode attempts to CONTROL the vars, according to one or two volt-var curves, depending on the monitored voltages, present active power output, and the capabilities of the PVSystem/Storage.
   *
   * In volt-watt mode. This mode attempts to LIMIT the watts, according to one defined volt-watt curve, depending on the monitored voltages and the capabilities of the PVSystem/Storage.
   *
   * In dynamic reactive current mode. This mode attempts to increasingly counter deviations by CONTROLLING vars, depending on the monitored voltages, present active power output, and the capabilities of the of the PVSystem/Storage.
   *
   * In watt-pf mode. This mode attempts to CONTROL the vars, according to a watt-pf curve, depending on the present active power output, and the capabilities of the PVSystem/Storage.
   *
   * In watt-var mode. This mode attempts to CONTROL the vars, according to a watt-var curve, depending on the present active power output, and the capabilities of the PVSystem/Storage.
   *
   * In GFM mode this control will trigger the GFM control routine for the DERs within the DERList. The GFM actiosn will only take place if the pointed DERs are in GFM mode. The controller parameters are locally setup at the DER.*/
  Mode?: InvControlModeEnum;
  /** Combination of smart inverter functions in which the InvControl will control the PC elements in DERList, according to the options below:
   *
   * Must be a combination of the following: {VV_VW | VV_DRC}. Default is to not set this property, in which case the single control mode in Mode is active.
   *
   * In combined VV_VW mode, both volt-var and volt-watt control modes are active simultaneously.  See help individually for volt-var mode and volt-watt mode in Mode property.
   *
   * Note that the PVSystem/Storage will attempt to achieve both the volt-watt and volt-var set-points based on the capabilities of the inverter in the PVSystem/Storage (kVA rating, etc), any limits set on maximum active power,
   *
   * In combined VV_DRC, both the volt-var and the dynamic reactive current modes are simultaneously active.*/
  CombiMode?: CombiModeEnum;
  /** Required for VOLTVAR mode.
   *
   * Name of the XYCurve object containing the volt-var curve. The positive values of the y-axis of the volt-var curve represent values in pu of the provided base reactive power. The negative values of the y-axis are values in pu of the absorbed base reactive power.
   *
   * Provided and absorbed base reactive power values are defined in the RefReactivePower property
   *
   * Units for the x-axis are per-unit voltage, which may be in per unit of the rated voltage for the PVSystem/Storage, or may be in per unit of the average voltage at the terminals over a user-defined number of prior solutions.*/
  vvc_curve1?: string;
  /** Required for VOLTVAR mode, and defaults to 0.
   *
   * for the times when the terminal voltage is decreasing, this is the off-set in per-unit voltage of a curve whose shape is the same as vvc_curve. It is offset by a certain negative value of per-unit voltage, which is defined by the base quantity for the x-axis of the volt-var curve (see help for voltage_curvex_ref)
   *
   * if the PVSystem/Storage terminal voltage has been increasing, and has not changed directions, utilize vvc_curve1 for the volt-var response.
   *
   * if the PVSystem/Storage terminal voltage has been increasing and changes directions and begins to decrease, then move from utilizing vvc_curve1 to a volt-var curve of the same shape, but offset by a certain per-unit voltage value.
   *
   * Maintain the same per-unit available var output level (unless head-room has changed due to change in active power or kva rating of PVSystem/Storage).  Per-unit var values remain the same for this internally constructed second curve (hysteresis curve).
   *
   * if the terminal voltage has been decreasing and changes directions and begins to increase , then move from utilizing the offset curve, back to the vvc_curve1 for volt-var response, but stay at the same per-unit available vars output level.*/
  hysteresis_offset?: number;
  /** Required for VOLTVAR and VOLTWATT modes, and defaults to rated.  Possible values are: {rated|avg|ravg}.
   *
   * Defines whether the x-axis values (voltage in per unit) for vvc_curve1 and the volt-watt curve corresponds to:
   *
   * rated. The rated voltage for the PVSystem/Storage object (1.0 in the volt-var curve equals rated voltage).
   *
   * avg. The average terminal voltage recorded over a certain number of prior power-flow solutions.
   *
   * with the avg setting, 1.0 per unit on the x-axis of the volt-var curve(s) corresponds to the average voltage.
   *
   * from a certain number of prior intervals.  See avgwindowlen parameter.
   *
   * ravg. Same as avg, with the exception that the avgerage terminal voltage is divided by the rated voltage.*/
  voltage_curvex_ref?: VoltageCurvexRefEnum;
  /** Required for VOLTVAR mode and VOLTWATT mode, and defaults to 0 seconds (0s).
   *
   * Sets the length of the averaging window over which the average PVSystem/Storage terminal voltage is calculated.
   *
   * Units are indicated by appending s, m, or h to the integer value.
   *
   * The averaging window will calculate the average PVSystem/Storage terminal voltage over the specified period of time, up to and including the last power flow solution.
   *
   * Note, if the solution stepsize is larger than the window length, then the voltage will be assumed to have been constant over the time-frame specified by the window length.*/
  avgwindowlen?: number;
  /** Required for VOLTWATT mode.
   *
   * Name of the XYCurve object containing the volt-watt curve.
   *
   * Units for the x-axis are per-unit voltage, which may be in per unit of the rated voltage for the PVSystem/Storage, or may be in per unit of the average voltage at the terminals over a user-defined number of prior solutions.
   *
   * Units for the y-axis are either in one of the options described in the VoltwattYAxis property.*/
  voltwatt_curve?: string;
  /** Required for the dynamic reactive current mode (DYNAMICREACCURR), and defaults to 0.95 per-unit voltage (referenced to the PVSystem/Storage object rated voltage or a windowed average value).
   *
   * This parameter is the minimum voltage that defines the voltage dead-band within which no reactive power is allowed to be generated.*/
  DbVMin?: number;
  /** Required for the dynamic reactive current mode (DYNAMICREACCURR), and defaults to 1.05 per-unit voltage (referenced to the PVSystem object rated voltage or a windowed average value).
   *
   * This parameter is the maximum voltage that defines the voltage dead-band within which no reactive power is allowed to be generated.*/
  DbVMax?: number;
  /** Required for the dynamic reactive current mode (DYNAMICREACCURR), and defaults to 0.1
   *
   * This is a gradient, expressed in unit-less terms of %/%, to establish the ratio by which percentage capacitive reactive power production is increased as the  percent delta-voltage decreases below DbVMin.
   *
   * Percent delta-voltage is defined as the present PVSystem/Storage terminal voltage minus the moving average voltage, expressed as a percentage of the rated voltage for the PVSystem/Storage object.
   *
   * Note, the moving average voltage for the dynamic reactive current mode is different than the moving average voltage for the volt-watt and volt-var modes.*/
  ArGraLowV?: number;
  /** Required for the dynamic reactive current mode (DYNAMICREACCURR), and defaults to 0.1
   *
   * This is a gradient, expressed in unit-less terms of %/%, to establish the ratio by which percentage inductive reactive power production is increased as the  percent delta-voltage decreases above DbVMax.
   *
   * Percent delta-voltage is defined as the present PVSystem/Storage terminal voltage minus the moving average voltage, expressed as a percentage of the rated voltage for the PVSystem/Storage object.
   *
   * Note, the moving average voltage for the dynamic reactive current mode is different than the mmoving average voltage for the volt-watt and volt-var modes.*/
  ArGraHiV?: number;
  /** Required for the dynamic reactive current mode (DYNAMICREACCURR), and defaults to 1 seconds (1s). do not use a value smaller than 1.0
   *
   * Sets the length of the averaging window over which the average PVSystem/Storage terminal voltage is calculated for the dynamic reactive current mode.
   *
   * Units are indicated by appending s, m, or h to the integer value.
   *
   * Typically this will be a shorter averaging window than the volt-var and volt-watt averaging window.
   *
   * The averaging window will calculate the average PVSystem/Storage terminal voltage over the specified period of time, up to and including the last power flow solution.  Note, if the solution stepsize is larger than the window length, then the voltage will be assumed to have been constant over the time-frame specified by the window length.*/
  DynReacavgwindowlen?: number;
  /** Required for the VOLTVAR and DYNAMICREACCURR modes.  Defaults to -1.0.
   *
   * Defining -1.0, OpenDSS takes care internally of delta_Q itself. It tries to improve convergence as well as speed up process
   *
   * Sets the maximum change (in per unit) from the prior var output level to the desired var output level during each control iteration.
   *
   * if numerical instability is noticed in solutions such as var sign changing from one control iteration to the next and voltages oscillating between two values with some separation, this is an indication of numerical instability (use the EventLog to diagnose).
   *
   * if the maximum control iterations are exceeded, and no numerical instability is seen in the EventLog of via monitors, then try increasing the value of this parameter to reduce the number of control iterations needed to achieve the control criteria, and move to the power flow solution.
   *
   * When operating the controller using expoenential control model (see CtrlModel), this parameter represents the sampling time gain of the controller, which is used for accelrating the controller response in terms of control iterations required.*/
  deltaQ_Factor?: number;
  /** Defaults to 0.0001 per-unit voltage.  This parameter should only be modified by advanced users of the InvControl.
   *
   * Tolerance in pu of the control loop convergence associated to the monitored voltage in pu. This value is compared with the difference of the monitored voltage in pu of the current and previous control iterations of the control loop
   *
   * This voltage tolerance value plus the var/watt tolerance value (VarChangeTolerance/ActivePChangeTolerance) determine, together, when to stop control iterations by the InvControl.
   *
   * If an InvControl is controlling more than one PVSystem/Storage, each PVSystem/Storage has this quantity calculated independently, and so an individual PVSystem/Storage may reach the tolerance within different numbers of control iterations.*/
  VoltageChangeTolerance?: number;
  /** Required for VOLTVAR and DYNAMICREACCURR modes.  Defaults to 0.025 per unit of the base provided or absorbed reactive power described in the RefReactivePower property This parameter should only be modified by advanced users of the InvControl.
   *
   * Tolerance in pu of the convergence of the control loop associated with reactive power. For the same control iteration, this value is compared to the difference, as an absolute value (without sign), between the desired reactive power value in pu and the output reactive power in pu of the controlled element.
   *
   * This reactive power tolerance value plus the voltage tolerance value (VoltageChangeTolerance) determine, together, when to stop control iterations by the InvControl.
   *
   * If an InvControl is controlling more than one PVSystem/Storage, each PVSystem/Storage has this quantity calculated independently, and so an individual PVSystem/Storage may reach the tolerance within different numbers of control iterations.*/
  VarChangeTolerance?: number;
  /** Required for VOLTWATT mode.  Must be one of: {PMPPPU* | PAVAILABLEPU| PCTPMPPPU | KVARATINGPU}.  The default is PMPPPU.
   *
   * Units for the y-axis of the volt-watt curve while in volt-watt mode.
   *
   * When set to PMPPPU. The y-axis corresponds to the value in pu of Pmpp property of the PVSystem.
   *
   * When set to PAVAILABLEPU. The y-axis corresponds to the value in pu of the available active power of the PVSystem.
   *
   * When set to PCTPMPPPU. The y-axis corresponds to the value in pu of the power Pmpp multiplied by 1/100 of the %Pmpp property of the PVSystem.
   *
   * When set to KVARATINGPU. The y-axis corresponds to the value in pu of the kVA property of the PVSystem.*/
  VoltwattYAxis?: VoltwattYAxisEnum;
  /** Required for VOLTWATT and VOLTVAR mode.  Must be one of: {INACTIVE* | LPF | RISEFALL }.  The default is INACTIVE.
   *
   * Auxiliary option that aims to limit the changes of the desired reactive power and the active power limit between time steps, the alternatives are listed below:
   *
   * INACTIVE. It indicates there is no limit on rate of change imposed for either active or reactive power output.
   *
   * LPF. A low-pass RC filter is applied to the desired reactive power and/or the active power limit to determine the output power as a function of a time constant defined in the LPFTau property.
   *
   * RISEFALL. A rise and fall limit in the change of active and/or reactive power expressed in terms of pu power per second, defined in the RiseFallLimit, is applied to the desired reactive power and/or the active power limit.*/
  RateofChangeMode?: RateofChangeModeEnum;
  /** Not required. Defaults to 0 seconds.
   *
   * Filter time constant of the LPF option of the RateofChangeMode property. The time constant will cause the low-pass filter to achieve 95% of the target value in 3 time constants.*/
  LPFTau?: number;
  /** Not required.  Defaults to no limit (-1). Must be -1 (no limit) or a positive value.
   *
   * Limit in power in pu per second used by the RISEFALL option of the RateofChangeMode property.The base value for this ramp is defined in the RefReactivePower property and/or in VoltwattYAxis.*/
  RiseFallLimit?: number;
  /** Required for the VOLTWATT modes.  Defaults to -1.0.
   *
   * Defining -1.0, OpenDSS takes care internally of delta_P itself. It tries to improve convergence as well as speed up process
   *
   * Defining between 0.05 and 1.0, it sets the maximum change (in unit of the y-axis) from the prior active power output level to the desired active power output level during each control iteration.
   *
   * If numerical instability is noticed in solutions such as active power changing substantially from one control iteration to the next and/or voltages oscillating between two values with some separation, this is an indication of numerical instability (use the EventLog to diagnose).
   *
   * If the maximum control iterations are exceeded, and no numerical instability is seen in the EventLog of via monitors, then try increasing the value of this parameter to reduce the number of control iterations needed to achieve the control criteria, and move to the power flow solution.*/
  deltaP_Factor?: number;
  /** {Yes/True | No/False*} Default is NO for InvControl. Log control actions to Eventlog.*/
  EventLog?: boolean;
  /** Required for any mode that has VOLTVAR, DYNAMICREACCURR and WATTVAR. Defaults to VARAVAL.
   *
   * Defines the base reactive power for both the provided and absorbed reactive power, according to one of the following options:
   *
   * VARAVAL. The base values for the provided and absorbed reactive power are equal to the available reactive power.
   *
   * VARMAX: The base values of the provided and absorbed reactive power are equal to the value defined in the kvarMax and kvarMaxAbs properties, respectively.*/
  RefReactivePower?: string;
  /** Required for VOLTWATT. Default is 0.01
   *
   * Tolerance in pu of the convergence of the control loop associated with active power. For the same control iteration, this value is compared to the difference between the active power limit in pu resulted from the convergence process and the one resulted from the volt-watt function.
   *
   * This reactive power tolerance value plus the voltage tolerance value (VoltageChangeTolerance) determine, together, when to stop control iterations by the InvControl.
   *
   * If an InvControl is controlling more than one PVSystem/Storage, each PVSystem/Storage has this quantity calculated independently, and so an individual PVSystem/Storage may reach the tolerance within different numbers of control iterations.*/
  ActivePChangeTolerance?: number;
  /** Number of the phase being monitored or one of {AVG | MAX | MIN} for all phases. Default=AVG.*/
  monVoltageCalc?: MonVoltageCalcEnum;
  /** Name of monitored bus used by the voltage-dependente control modes. Default is bus of the controlled PVSystem/Storage or Storage.*/
  monBus?: string[];
  /** Array list of rated voltages of the buses and their nodes presented in the monBus property. This list may have different line-to-line and/or line-to-ground voltages.*/
  MonBusesVbase?: number[];
  /** Required for VOLTWATT mode for Storage element in CHARGING state.
   *
   * The name of an XYCurve object that describes the variation in active power output (in per unit of maximum active power outut for the Storage).
   *
   * Units for the x-axis are per-unit voltage, which may be in per unit of the rated voltage for the Storage, or may be in per unit of the average voltage at the terminals over a user-defined number of prior solutions.
   *
   * Units for the y-axis are either in: (1) per unit of maximum active power output capability of the Storage, or (2) maximum available active power output capability (defined by the parameter: VoltwattYAxis), corresponding to the terminal voltage (x-axis value in per unit).
   *
   * No default -- must be specified for VOLTWATT mode for Storage element in CHARGING state.*/
  voltwattCH_curve?: string;
  /** Required for WATTPF mode.
   *
   * Name of the XYCurve object containing the watt-pf curve.
   *
   * The positive values of the y-axis are positive power factor values. The negative values of the the y-axis are negative power factor values. When positive, the output reactive power has the same direction of the output active power, and when negative, it has the opposite direction.
   *
   * Units for the x-axis are per-unit output active power, and the base active power is the Pmpp for PVSystem and kWrated for Storage.
   *
   * The y-axis represents the power factor and the reference is power factor equal to 0.
   *
   * For example, if the user wants to define the following XY coordinates: (0, 0.9); (0.2, 0.9); (0.5, -0.9); (1, -0.9).
   *
   * Try to plot them considering the y-axis reference equal to unity power factor.
   *
   * The user needs to translate this curve into a plot in which the y-axis reference is equal to 0 power factor.It means that two new XY coordinates need to be included, in this case they are: (0.35, 1); (0.35, -1).
   *
   * Try to plot them considering the y-axis reference equal to 0 power factor.
   *
   * The discontinity in 0.35pu is not a problem since var is zero for either power factor equal to 1 or -1.*/
  wattpf_curve?: string;
  /** Required for WATTVAR mode.
   *
   * Name of the XYCurve object containing the watt-var curve. The positive values of the y-axis of the watt-var curve represent values in pu of the provided base reactive power. The negative values of the y-axis are values in pu of the absorbed base reactive power.
   *
   * Provided and absorbed base reactive power values are defined in the RefReactivePower property.
   *
   * Units for the x-axis are per-unit output active power, and the base active power is the Pmpp for PVSystem and kWrated for Storage.*/
  wattvar_curve?: string;
  /** Deprecated, use RefReactivePower instead.*/
  VV_RefReactivePower?: number;
  /** Deprecated, use DERList instead.
   *
   * Redundant with DERList*/
  PVSystemList?: string[];
  /** Required for Active Voltage Regulation (AVR).*/
  Vsetpoint?: number;
  /** Integer defining the method for moving across the control curve. It can be one of the following:
   *
   * 0 = Linear mode (default)
   *
   * 1 = Exponential
   *
   * Use this property for better tunning your controller and improve the controller response in terms of control iterations needed to reach the target.
   *
   * This property alters the meaning of deltaQ_factor and deltaP_factor properties accroding to its value (Check help). The method can also be combined with the controller tolerance for improving performance.*/
  ControlModel?: number;
  /** Base Frequency for ratings.*/
  basefreq?: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled?: boolean;
  constructor(
    nameOrOptions: string | InvControlInterface,
    options?: Omit<InvControlInterface, "name">
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
