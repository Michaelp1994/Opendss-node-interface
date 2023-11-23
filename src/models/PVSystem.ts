import {
  ConnEnum,
  YesNoEnum,
  WattPriorityEnum,
  PFPriorityEnum,
  ControlModeEnum,
  BooleanEnum,
} from "../enums/enums";
import { PVSystemInterface } from "../interfaces/PVSystemInterface";
import BaseComponent from "./BaseComponent";

/**   Circuit Element, PC Element  */
export class PVSystem extends BaseComponent {
  _type = "PVSystem";
  _parameters = [
    "phases",
    "bus1",
    "kv",
    "irradiance",
    "Pmpp",
    "%Pmpp",
    "Temperature",
    "pf",
    "conn",
    "kvar",
    "kVA",
    "%Cutin",
    "%Cutout",
    "EffCurve",
    "P-TCurve",
    "%R",
    "%X",
    "model",
    "Vminpu",
    "Vmaxpu",
    "Balanced",
    "LimitCurrent",
    "yearly",
    "daily",
    "duty",
    "Tyearly",
    "Tdaily",
    "Tduty",
    "class",
    "UserModel",
    "UserData",
    "debugtrace",
    "VarFollowInverter",
    "DutyStart",
    "WattPriority",
    "PFPriority",
    "%PminNoVars",
    "%PminkvarMax",
    "kvarMax",
    "kvarMaxAbs",
    "kVDC",
    "Kp",
    "PITol",
    "SafeVoltage",
    "SafeMode",
    "DynamicEq",
    "DynOut",
    "ControlMode",
    "spectrum",
    "basefreq",
    "enabled",
    "like",
  ];
  /** Number of Phases, this PVSystem element.  Power is evenly divided among phases.*/
  phases?: number;
  /** Bus to which the PVSystem element is connected.  May include specific node specification.*/
  bus1?: string;
  /** Nominal rated (1.0 per unit) voltage, kV, for PVSystem element. For 2- and 3-phase PVSystem elements, specify phase-phase kV. Otherwise, specify actual kV across each branch of the PVSystem element. If 1-phase wye (star or LN), specify phase-neutral kV. If 1-phase delta or phase-phase connected, specify phase-phase kV.*/
  kv?: number;
  /** Get/set the present irradiance value in kW/sq-m. Used as base value for shape multipliers. Generally entered as peak value for the time period of interest and the yearly, daily, and duty load shape objects are defined as per unit multipliers (just like Loads/Generators).*/
  irradiance?: number;
  /** Get/set the rated max power of the PV array for 1.0 kW/sq-m irradiance and a user-selected array temperature. The P-TCurve should be defined relative to the selected array temperature.*/
  Pmpp?: number;
  /** Upper limit on active power as a percentage of Pmpp.*/
  "%Pmpp"?: number;
  /** Get/set the present Temperature. Used as fixed value corresponding to PTCurve property. A multiplier is obtained from the Pmpp-Temp curve and applied to the nominal Pmpp from the irradiance to determine the net array output.*/
  Temperature?: number;
  /** Nominally, the power factor for the output power. Default is 1.0. Setting this property will cause the inverter to operate in constant power factor mode.Enter negative when kW and kvar have opposite signs.
   *
   * A positive power factor signifies that the PVSystem element produces vars
   *
   * as is typical for a generator.*/
  pf?: number;
  /** ={wye|LN|delta|LL}.  Default is wye.*/
  conn?: ConnEnum;
  /** Get/set the present kvar value.  Setting this property forces the inverter to operate in constant kvar mode.*/
  kvar?: number;
  /** kVA rating of inverter. Used as the base for Dynamics mode and Harmonics mode values.*/
  kVA?: number;
  /** % cut-in power -- % of kVA rating of inverter. When the inverter is OFF, the power from the array must be greater than this for the inverter to turn on.*/
  "%Cutin"?: number;
  /** % cut-out power -- % of kVA rating of inverter. When the inverter is ON, the inverter turns OFF when the power from the array drops below this value.*/
  "%Cutout"?: number;
  /** An XYCurve object, previously defined, that describes the PER UNIT efficiency vs PER UNIT of rated kVA for the inverter. Inverter output power is discounted by the multiplier obtained from this curve.*/
  EffCurve?: string;
  /** An XYCurve object, previously defined, that describes the PV array PER UNIT Pmpp vs Temperature curve. Temperature units must agree with the Temperature property and the Temperature shapes used for simulations. The Pmpp values are specified in per unit of the Pmpp value for 1 kW/sq-m irradiance. The value for the temperature at which Pmpp is defined should be 1.0. The net array power is determined by the irradiance * Pmpp * f(Temperature)*/
  "P-TCurve"?: string;
  /** Equivalent percent internal resistance, ohms. Default is 50%. Placed in series with internal voltage source for harmonics and dynamics modes. (Limits fault current to about 2 pu if not current limited -- see LimitCurrent)*/
  "%R"?: number;
  /** Equivalent percent internal reactance, ohms. Default is 0%. Placed in series with internal voltage source for harmonics and dynamics modes.*/
  "%X"?: number;
  /** Integer code (default=1) for the model to use for power output variation with voltage. Valid values are:
   *
   * 1:PVSystem element injects a CONSTANT kW at specified power factor.
   *
   * 2:PVSystem element is modeled as a CONSTANT ADMITTANCE.
   *
   * 3:Compute load injection from User-written Model.*/
  model?: number;
  /** Default = 0.90.  Minimum per unit voltage for which the Model is assumed to apply. Below this value, the load model reverts to a constant impedance model except for Dynamics model. In Dynamics mode, the current magnitude is limited to the value the power flow would compute for this voltage.*/
  Vminpu?: number;
  /** Default = 1.10.  Maximum per unit voltage for which the Model is assumed to apply. Above this value, the load model reverts to a constant impedance model.*/
  Vmaxpu?: number;
  /** {Yes | No*} Default is No.  Force balanced current only for 3-phase PVSystems. Forces zero- and negative-sequence to zero.*/
  Balanced?: YesNoEnum;
  /** Limits current magnitude to Vminpu value for both 1-phase and 3-phase PVSystems similar to Generator Model 7. For 3-phase, limits the positive-sequence current but not the negative-sequence.*/
  LimitCurrent?: boolean;
  /** Dispatch shape to use for yearly simulations.  Must be previously defined as a Loadshape object. If this is not specified, the Daily dispatch shape, if any, is repeated during Yearly solution modes. In the default dispatch mode, the PVSystem element uses this loadshape to trigger State changes.*/
  yearly?: string;
  /** Dispatch shape to use for daily simulations.  Must be previously defined as a Loadshape object of 24 hrs, typically.  In the default dispatch mode, the PVSystem element uses this loadshape to trigger State changes.*/
  daily?: string;
  /** Load shape to use for duty cycle dispatch simulations such as for solar ramp rate studies. Must be previously defined as a Loadshape object. Typically would have time intervals of 1-5 seconds. Designate the number of points to solve using the Set Number=xxxx command. If there are fewer points in the actual shape, the shape is assumed to repeat.*/
  duty?: string;
  /** Temperature shape to use for yearly simulations.  Must be previously defined as a TShape object. If this is not specified, the Daily dispatch shape, if any, is repeated during Yearly solution modes. The PVSystem element uses this TShape to determine the Pmpp from the Pmpp vs T curve. Units must agree with the Pmpp vs T curve.*/
  Tyearly?: string;
  /** Temperature shape to use for daily simulations.  Must be previously defined as a TShape object of 24 hrs, typically.  The PVSystem element uses this TShape to determine the Pmpp from the Pmpp vs T curve. Units must agree with the Pmpp vs T curve.*/
  Tdaily?: string;
  /** Temperature shape to use for duty cycle dispatch simulations such as for solar ramp rate studies. Must be previously defined as a TShape object. Typically would have time intervals of 1-5 seconds. Designate the number of points to solve using the Set Number=xxxx command. If there are fewer points in the actual shape, the shape is assumed to repeat. The PVSystem model uses this TShape to determine the Pmpp from the Pmpp vs T curve. Units must agree with the Pmpp vs T curve.*/
  Tduty?: string;
  /** An arbitrary integer number representing the class of PVSystem element so that PVSystem values may be segregated by class.*/
  class?: number;
  /** Name of DLL containing user-written model, which computes the terminal currents for Dynamics studies, overriding the default model.  Set to "none" to negate previous setting.*/
  UserModel?: string;
  /** String (in quotes or parentheses) that gets passed to user-written model for defining the data required for that model.*/
  UserData?: string;
  /** {Yes | No }  Default is no.  Turn this on to capture the progress of the PVSystem model for each iteration.  Creates a separate file for each PVSystem element named "PVSystem_name.CSV".*/
  debugtrace?: YesNoEnum;
  /** Boolean variable (Yes|No) or (True|False). Defaults to False which indicates that the reactive power generation/absorption does not respect the inverter status.When set to True, the PVSystem reactive power generation/absorption will cease when the inverter status is off, due to panel kW dropping below %Cutout.  The reactive power generation/absorption will begin again when the panel kW is above %Cutin.  When set to False, the PVSystem will generate/absorb reactive power regardless of the status of the inverter.*/
  VarFollowInverter?: boolean;
  /** Starting time offset [hours] into the duty cycle shape for this PVSystem, defaults to 0*/
  DutyStart?: number;
  /** {Yes/No/True/False} Set inverter to watt priority instead of the default var priority*/
  WattPriority?: WattPriorityEnum;
  /** {Yes/No/True/False} Set inverter to operate with PF priority when in constant PF mode. If "Yes", value assigned to "WattPriority" is neglected. If controlled by an InvControl with either Volt-Var or DRC or both functions activated, PF priority is neglected and "WattPriority" is considered. Default = No.*/
  PFPriority?: PFPriorityEnum;
  /** Minimum active power as percentage of Pmpp under which there is no vars production/absorption.*/
  "%PminNoVars"?: number;
  /** Minimum active power as percentage of Pmpp that allows the inverter to produce/absorb reactive power up to its kvarMax or kvarMaxAbs.*/
  "%PminkvarMax"?: number;
  /** Indicates the maximum reactive power GENERATION (un-signed numerical variable in kvar) for the inverter (as an un-signed value). Defaults to kVA rating of the inverter.*/
  kvarMax?: number;
  /** Indicates the maximum reactive power ABSORPTION (un-signed numerical variable in kvar) for the inverter (as an un-signed value). Defaults to kVA rating of the inverter.*/
  kvarMaxAbs?: number;
  /** Indicates the rated voltage (kV) at the input of the inverter at the peak of PV energy production. The value is normally greater or equal to the kV base of the PV system. It is used for dynamics simulation ONLY.*/
  kVDC?: number;
  /** It is the proportional gain for the PI controller within the inverter. Use it to modify the controller response in dynamics simulation mode.*/
  Kp?: number;
  /** It is the tolerance (%) for the closed loop controller of the inverter. For dynamics simulation mode.*/
  PITol?: number;
  /** Indicates the voltage level (%) respect to the base voltage level for which the Inverter will operate. If this threshold is violated, the Inverter will enter safe mode (OFF). For dynamic simulation. By default is 80%*/
  SafeVoltage?: number;
  /** (Read only) Indicates whether the inverter entered (Yes) or not (No) into Safe Mode.*/
  SafeMode?: boolean;
  /** The name of the dynamic equation (DynamicExp) that will be used for defining the dynamic behavior of the generator. If not defined, the generator dynamics will follow the built-in dynamic equation.*/
  DynamicEq?: string;
  /** The name of the variables within the Dynamic equation that will be used to govern the PVSystem dynamics. This PVsystem model requires 1 output from the dynamic equation:
   *
   * 1. Current.
   *
   *
   *
   * The output variables need to be defined in the same order.*/
  DynOut?: string;
  /** Defines the control mode for the inverter. It can be one of {GFM | GFL*}. By default it is GFL (Grid Following Inverter). Use GFM (Grid Forming Inverter) for energizing islanded microgrids, but, if the device is conencted to the grid, it is highly recommended to use GFL.
   *
   * GFM control mode disables any control action set by the InvControl device.*/
  ControlMode?: ControlModeEnum;
  /** Name of harmonic voltage or current spectrum for this PVSystem element. A harmonic voltage source is assumed for the inverter. Default value is "default", which is defined when the DSS starts.*/
  spectrum?: string;
  /** Base Frequency for ratings.*/
  basefreq?: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled?: BooleanEnum;
  constructor(
    nameOrOptions: string | PVSystemInterface,
    options?: Omit<PVSystemInterface, "name">
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
