import {
  ConnEnum,
  ControlModeEnum,
  DispModeEnum,
  StateEnum,
} from "@enums/enums";
import { StorageInterface } from "./StorageInterface";
import CircuitElementComponent from "./CircuitElementComponent";

/**   Circuit Element, PC Element  */
export default class Storage
  extends CircuitElementComponent
  implements HasKeys<StorageInterface>
{
  _type = "Storage";

  parameters: Array<keyof this> = [
    "phases",
    "bus1",
    "kv",
    "conn",
    "kW",
    "kvar",
    "pf",
    "kVA",
    "%Cutin",
    "%Cutout",
    "EffCurve",
    "VarFollowInverter",
    "kvarMax",
    "kvarMaxAbs",
    "WattPriority",
    "PFPriority",
    "%PminNoVars",
    "%PminkvarMax",
    "kWrated",
    "%kWrated",
    "kWhrated",
    "kWhstored",
    "%stored",
    "%reserve",
    "State",
    "%Discharge",
    "%Charge",
    "%EffCharge",
    "%EffDischarge",
    "%IdlingkW",
    "%Idlingkvar",
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
    "DispMode",
    "DischargeTrigger",
    "ChargeTrigger",
    "TimeChargeTrig",
    "class",
    "DynaDLL",
    "DynaData",
    "UserModel",
    "UserData",
    "debugtrace",
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

  /** Number of Phases, this Storage element.  Power is evenly divided among phases. */
  phases?: number;

  /** Bus to which the Storage element is connected.  May include specific node specification. */
  bus1?: string;

  /** Nominal rated (1.0 per unit) voltage, kV, for Storage element. For 2- and 3-phase Storage elements, specify phase-phase kV. Otherwise, specify actual kV across each branch of the Storage element.
   *
   * If wye (star), specify phase-neutral kV.
   *
   * If delta or phase-phase connected, specify phase-phase kV. */
  kv?: number;

  /** ={wye|LN|delta|LL}.  Default is wye. */
  conn?: ConnEnum;

  /** Get/set the requested kW value. Final kW is subjected to the inverter ratings. A positive value denotes power coming OUT of the element, which is the opposite of a Load element. A negative value indicates the Storage element is in Charging state. This value is modified internally depending on the dispatch mode. */
  kW?: number;

  /** Get/set the requested kvar value. Final kvar is subjected to the inverter ratings. Sets inverter to operate in constant kvar mode. */
  kvar?: number;

  /** Get/set the requested PF value. Final PF is subjected to the inverter ratings. Sets inverter to operate in constant PF mode. Nominally, the power factor for discharging (acting as a generator). Default is 1.0.
   *
   * Enter negative for leading power factor (when kW and kvar have opposite signs.)
   *
   * A positive power factor signifies kw and kvar at the same direction. */
  pf?: number;

  /** Indicates the inverter nameplate capability (in kVA). Used as the base for Dynamics mode and Harmonics mode values. */
  kVA?: number;

  /** Cut-in power as a percentage of inverter kVA rating. It is the minimum DC power necessary to turn the inverter ON when it is OFF. Must be greater than or equal to %CutOut. Defaults to 2 for PVSystems and 0 for Storage elements which means that the inverter state will be always ON for this element. */
  "%Cutin"?: number;

  /** Cut-out power as a percentage of inverter kVA rating. It is the minimum DC power necessary to keep the inverter ON. Must be less than or equal to %CutIn. Defaults to 0, which means that, once ON, the inverter state will be always ON for this element. */
  "%Cutout"?: number;

  /** An XYCurve object, previously defined, that describes the PER UNIT efficiency vs PER UNIT of rated kVA for the inverter. Power at the AC side of the inverter is discounted by the multiplier obtained from this curve. */
  EffCurve?: string;

  /** Boolean variable (Yes|No) or (True|False). Defaults to False, which indicates that the reactive power generation/absorption does not respect the inverter status.When set to True, the reactive power generation/absorption will cease when the inverter status is off, due to DC kW dropping below %CutOut.  The reactive power generation/absorption will begin again when the DC kW is above %CutIn.  When set to False, the Storage will generate/absorb reactive power regardless of the status of the inverter. */
  VarFollowInverter?: boolean;

  /** Indicates the maximum reactive power GENERATION (un-signed numerical variable in kvar) for the inverter. Defaults to kVA rating of the inverter. */
  kvarMax?: number;

  /** Indicates the maximum reactive power ABSORPTION (un-signed numerical variable in kvar) for the inverter. Defaults to kvarMax. */
  kvarMaxAbs?: number;

  /** {Yes/No/True/False} Set inverter to watt priority instead of the default var priority. */
  WattPriority?: boolean;

  /** If set to true, priority is given to power factor and WattPriority is neglected. It works only if operating in either constant PF or constant kvar modes. Defaults to False. */
  PFPriority?: boolean;

  /** Minimum active power as percentage of kWrated under which there is no vars production/absorption. Defaults to 0 (disabled). */
  "%PminNoVars"?: number;

  /** Minimum active power as percentage of kWrated that allows the inverter to produce/absorb reactive power up to its maximum reactive power, which can be either kvarMax or kvarMaxAbs, depending on the current operation quadrant. Defaults to 0 (disabled). */
  "%PminkvarMax"?: number;

  /** kW rating of power output. Base for Loadshapes when DispMode=Follow. Sets kVA property if it has not been specified yet. Defaults to 25. */
  kWrated?: number;

  /** Upper limit on active power as a percentage of kWrated. Defaults to 100 (disabled). */
  "%kWrated"?: number;

  /** Rated Storage capacity in kWh. Default is 50. */
  kWhrated?: number;

  /** Present amount of energy stored, kWh. Default is same as kWhrated. */
  kWhstored?: number;

  /** Present amount of energy stored, % of rated kWh. Default is 100. */
  "%stored"?: number;

  /** Percentage of rated kWh Storage capacity to be held in reserve for normal operation. Default = 20.
   *
   * This is treated as the minimum energy discharge level unless there is an emergency. For emergency operation set this property lower. Cannot be less than zero. */
  "%reserve"?: number;

  /** {IDLING | CHARGING | DISCHARGING}  Get/Set present operational state. In DISCHARGING mode, the Storage element acts as a generator and the kW property is positive. The element continues discharging at the scheduled output power level until the Storage reaches the reserve value. Then the state reverts to IDLING. In the CHARGING state, the Storage element behaves like a Load and the kW property is negative. The element continues to charge until the max Storage kWh is reached and then switches to IDLING state. In IDLING state, the element draws the idling losses plus the associated inverter losses. */
  State?: StateEnum;

  /** Discharge rate (output power) in percentage of rated kW. Default = 100. */
  "%Discharge"?: number;

  /** Charging rate (input power) in percentage of rated kW. Default = 100. */
  "%Charge"?: number;

  /** Percentage efficiency for CHARGING the Storage element. Default = 90. */
  "%EffCharge"?: number;

  /** Percentage efficiency for DISCHARGING the Storage element. Default = 90. */
  "%EffDischarge"?: number;

  /** Percentage of rated kW consumed by idling losses. Default = 1. */
  "%IdlingkW"?: number;

  /** Deprecated. */
  "%Idlingkvar"?: number;

  /** Equivalent percentage internal resistance, ohms. Default is 0. Placed in series with internal voltage source for harmonics and dynamics modes. Use a combination of %IdlingkW, %EffCharge and %EffDischarge to account for losses in power flow modes. */
  "%R"?: number;

  /** Equivalent percentage internal reactance, ohms. Default is 50%. Placed in series with internal voltage source for harmonics and dynamics modes. (Limits fault current to 2 pu. */
  "%X"?: number;

  /** Integer code (default=1) for the model to be used for power output variation with voltage. Valid values are:
   *
   * 1:Storage element injects/absorbs a CONSTANT power.
   *
   * 2:Storage element is modeled as a CONSTANT IMPEDANCE.
   *
   * 3:Compute load injection from User-written Model. */
  model?: number;

  /** Default = 0.90.  Minimum per unit voltage for which the Model is assumed to apply. Below this value, the load model reverts to a constant impedance model. */
  Vminpu?: number;

  /** Default = 1.10.  Maximum per unit voltage for which the Model is assumed to apply. Above this value, the load model reverts to a constant impedance model. */
  Vmaxpu?: number;

  /** {Yes | No*} Default is No. Force balanced current only for 3-phase Storage. Forces zero- and negative-sequence to zero. */
  Balanced?: boolean;

  /** Limits current magnitude to Vminpu value for both 1-phase and 3-phase Storage similar to Generator Model 7. For 3-phase, limits the positive-sequence current but not the negative-sequence. */
  LimitCurrent?: boolean;

  /** Dispatch shape to use for yearly simulations.  Must be previously defined as a Loadshape object. If this is not specified, the Daily dispatch shape, if any, is repeated during Yearly solution modes. In the default dispatch mode, the Storage element uses this loadshape to trigger State changes. */
  yearly?: string;

  /** Dispatch shape to use for daily simulations.  Must be previously defined as a Loadshape object of 24 hrs, typically.  In the default dispatch mode, the Storage element uses this loadshape to trigger State changes. */
  daily?: string;

  /** Load shape to use for duty cycle dispatch simulations such as for solar ramp rate studies. Must be previously defined as a Loadshape object.
   *
   * Typically would have time intervals of 1-5 seconds.
   *
   * Designate the number of points to solve using the Set Number=xxxx command. If there are fewer points in the actual shape, the shape is assumed to repeat. */
  duty?: string;

  /** {DEFAULT | FOLLOW | EXTERNAL | LOADLEVEL | PRICE } Default = "DEFAULT". Dispatch mode.
   *
   * In DEFAULT mode, Storage element state is triggered to discharge or charge at the specified rate by the loadshape curve corresponding to the solution mode.
   *
   * In FOLLOW mode the kW output of the Storage element follows the active loadshape multiplier until Storage is either exhausted or full. The element discharges for positive values and charges for negative values.  The loadshape is based on rated kW.
   *
   * In EXTERNAL mode, Storage element state is controlled by an external Storagecontroller. This mode is automatically set if this Storage element is included in the element list of a StorageController element.
   *
   * For the other two dispatch modes, the Storage element state is controlled by either the global default Loadlevel value or the price level. */
  DispMode?: DispModeEnum;

  /** Dispatch trigger value for discharging the Storage.
   *
   * If = 0.0 the Storage element state is changed by the State command or by a StorageController object.
   *
   * If <> 0  the Storage element state is set to DISCHARGING when this trigger level is EXCEEDED by either the specified Loadshape curve value or the price signal or global Loadlevel value, depending on dispatch mode. See State property. */
  DischargeTrigger?: number;

  /** Dispatch trigger value for charging the Storage.
   *
   * If = 0.0 the Storage element state is changed by the State command or StorageController object.
   *
   * If <> 0  the Storage element state is set to CHARGING when this trigger level is GREATER than either the specified Loadshape curve value or the price signal or global Loadlevel value, depending on dispatch mode. See State property. */
  ChargeTrigger?: number;

  /** Time of day in fractional hours (0230 = 2.5) at which Storage element will automatically go into charge state. Default is 2.0.  Enter a negative time value to disable this feature. */
  TimeChargeTrig?: number;

  /** An arbitrary integer number representing the class of Storage element so that Storage values may be segregated by class. */
  class?: number;

  /** Name of DLL containing user-written dynamics model, which computes the terminal currents for Dynamics-mode simulations, overriding the default model.  Set to "none" to negate previous setting. This DLL has a simpler interface than the UserModel DLL and is only used for Dynamics mode. */
  DynaDLL?: string;

  /** String (in quotes or parentheses if necessary) that gets passed to the user-written dynamics model Edit function for defining the data required for that model. */
  DynaData?: string;

  /** Name of DLL containing user-written model, which computes the terminal currents for both power flow and dynamics, overriding the default model.  Set to "none" to negate previous setting. */
  UserModel?: string;

  /** String (in quotes or parentheses) that gets passed to user-written model for defining the data required for that model. */
  UserData?: string;

  /** {Yes | No }  Default is no.  Turn this on to capture the progress of the Storage model for each iteration.  Creates a separate file for each Storage element named "Storage_name.CSV". */
  debugtrace?: boolean;

  /** Indicates the rated voltage (kV) at the input of the inverter while the storage is discharging. The value is normally greater or equal to the kV base of the Storage device. It is used for dynamics simulation ONLY. */
  kVDC?: number;

  /** It is the proportional gain for the PI controller within the inverter. Use it to modify the controller response in dynamics simulation mode. */
  Kp?: number;

  /** It is the tolerance (%) for the closed loop controller of the inverter. For dynamics simulation mode. */
  PITol?: number;

  /** Indicates the voltage level (%) respect to the base voltage level for which the Inverter will operate. If this threshold is violated, the Inverter will enter safe mode (OFF). For dynamic simulation. By default is 80%. */
  SafeVoltage?: number;

  /** (Read only) Indicates whether the inverter entered (Yes) or not (No) into Safe Mode. */
  SafeMode?: boolean;

  /** The name of the dynamic equation (DynamicExp) that will be used for defining the dynamic behavior of the generator. If not defined, the generator dynamics will follow the built-in dynamic equation. */
  DynamicEq?: string;

  /** The name of the variables within the Dynamic equation that will be used to govern the Storage dynamics. This Storage model requires 1 output from the dynamic equation:
   *
   * 1. Current.
   *
   *
   *
   * The output variables need to be defined in the same order. */
  DynOut?: string;

  /** Defines the control mode for the inverter. It can be one of {GFM | GFL*}. By default it is GFL (Grid Following Inverter). Use GFM (Grid Forming Inverter) for energizing islanded microgrids, but, if the device is conencted to the grid, it is highly recommended to use GFL.
   *
   * GFM control mode disables any control action set by the InvControl device. */
  ControlMode?: ControlModeEnum;

  /** Name of harmonic voltage or current spectrum for this Storage element. Current injection is assumed for inverter. Default value is "default", which is defined when the DSS starts. */
  spectrum?: string;

  /** Base Frequency for ratings. */
  basefreq?: number;

  /** {Yes|No or True|False} Indicates whether this element is enabled. */
  enabled?: boolean;

  constructor(options: StorageInterface);
  constructor(name: string, options?: OmitName<StorageInterface>);
  constructor(
    nameOrOptions: string | StorageInterface,
    options?: OmitName<StorageInterface>,
  ) {
    super(nameOrOptions);
    if (typeof nameOrOptions === "string") {
      Object.assign(this, options);
    } else {
      const { name, ...otherOptions } = nameOrOptions;
      Object.assign(this, otherOptions);
    }
  }
}
