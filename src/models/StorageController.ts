/**   Circuit Element, Control Element  */
export default class StorageController {
  /** Name of the component */
  name: string;
  /** Full object name of the circuit element, typically a line or transformer, which the control is monitoring. There is no default; Must be specified.*/
  Element: string;
  /** Number of the terminal of the circuit element to which the StorageController control is connected. 1 or 2, typically.  Default is 1. Make sure to select the proper direction on the power for the respective dispatch mode.*/
  Terminal: number;
  /** Number of the phase being monitored or one of {AVG | MAX | MIN} for all phases. Default=MAX. Must be less than the number of phases. Used in PeakShave, Follow, Support and I-PeakShave discharging modes and in PeakShaveLow, I-PeakShaveLow charging modes. For modes based on active power measurements, the value used by the control is the monitored one multiplied by the number of phases of the monitored element.*/
  MonPhase: string;
  /** kW/kamps target for Discharging. The Storage element fleet is dispatched to try to hold the power/current in band at least until the Storage is depleted. The selection of power or current depends on the Discharge mode (PeakShave->kW, I-PeakShave->kamps).*/
  kWTarget: number;
  /** kW/kamps target for Charging. The Storage element fleet is dispatched to try to hold the power/current in band at least until the Storage is fully charged. The selection of power or current depends on the charge mode (PeakShavelow->kW, I-PeakShavelow->kamps).*/
  kWTargetLow: number;
  /** Bandwidth (% of Target kW/kamps) of the dead band around the kW/kamps target value. Default is 2% (+/-1%).No dispatch changes are attempted if the power in the monitored terminal stays within this band.*/
  "%kWBand": number;
  /** Alternative way of specifying the bandwidth. (kW/kamps) of the dead band around the kW/kamps target value. Default is 2% of kWTarget (+/-1%).No dispatch changes are attempted if the power in the monitored terminal stays within this band.*/
  kWBand: number;
  /** Bandwidth (% of kWTargetLow) of the dead band around the kW/kamps low target value. Default is 2% (+/-1%).No charging is attempted if the power in the monitored terminal stays within this band.*/
  "%kWBandLow": number;
  /** Alternative way of specifying the bandwidth. (kW/kamps) of the dead band around the kW/kamps low target value. Default is 2% of kWTargetLow (+/-1%).No charging is attempted if the power in the monitored terminal stays within this band.*/
  kWBandLow: number;
  /** Array list of Storage elements to be controlled.  If not specified, all Storage elements in the circuit not presently dispatched by another controller are assumed dispatched by this controller.*/
  ElementList: string[];
  /** Array of proportional weights corresponding to each Storage element in the ElementList. The needed kW or kvar to get back to center band is dispatched to each Storage element according to these weights. Default is to set all weights to 1.0.*/
  Weights: number[];
  /** {PeakShave* | Follow | Support | Loadshape | Time | Schedule | I-PeakShave} Mode of operation for the DISCHARGE FUNCTION of this controller.
   *
   * In PeakShave mode (Default), the control attempts to discharge Storage to keep power in the monitored element below the kWTarget.
   *
   * In Follow mode, the control is triggered by time and resets the kWTarget value to the present monitored element power. It then attempts to discharge Storage to keep power in the monitored element below the new kWTarget. See TimeDischargeTrigger.
   *
   * In Support mode, the control operates oppositely of PeakShave mode: Storage is discharged to keep kW power output up near the target.
   *
   * In Loadshape mode, both charging and discharging precisely follows the per unit loadshape. Storage is discharged when the loadshape value is positive.
   *
   * In Time mode, the Storage discharge is turned on at the specified %RatekW at the specified discharge trigger time in fractional hours.
   *
   * In Schedule mode, the Tup, TFlat, and Tdn properties specify the up ramp duration, flat duration, and down ramp duration for the schedule. The schedule start time is set by TimeDischargeTrigger and the rate of discharge for the flat part is determined by %RatekW.
   *
   * In I-PeakShave mode, the control attempts to discharge Storage to keep current in the monitored element below the target given in k-amps (thousands of amps), when this control mode is active, the property kWTarget will be expressed in k-amps.*/
  ModeDischarge: string;
  /** {Loadshape | Time* | PeakShaveLow | I-PeakShaveLow} Mode of operation for the CHARGE FUNCTION of this controller.
   *
   * In Loadshape mode, both charging and discharging precisely follows the per unit loadshape. Storage is charged when the loadshape value is negative.
   *
   * In Time mode, the Storage charging FUNCTION is triggered at the specified %RateCharge at the specified charge trigger time in fractional hours.
   *
   * In PeakShaveLow mode, the charging operation will charge the Storage fleet when the power at amonitored element is below a specified KW target (kWTarget_low). The Storage will charge as much power as necessary to keep the power within the deadband around kWTarget_low.
   *
   * In I-PeakShaveLow mode, the charging operation will charge the Storage fleet when the current (Amps) at amonitored element is below a specified amps target (kWTarget_low). The Storage will charge as much power as necessary to keep the amps within the deadband around kWTarget_low. When this control mode is active, the property kWTarget_low will be expressed in k-amps and all the other parameters will be adjusted to match the amps (current) control criteria.*/
  ModeCharge: string;
  /** Default time of day (hr) for initiating Discharging of the fleet. During Follow or Time mode discharging is triggered at a fixed time each day at this hour. If Follow mode, Storage will be discharged to attempt to hold the load at or below the power level at the time of triggering. In Time mode, the discharge is based on the %RatekW property value. Set this to a negative value to ignore. Default is 12.0 for Follow mode; otherwise it is -1 (ignored).*/
  TimeDischargeTrigger: number;
  /** Default time of day (hr) for initiating charging in Time control mode. Set this to a negative value to ignore. Default is 2.0.  (0200).When this value is >0 the Storage fleet is set to charging at this time regardless of other control criteria to make sure Storage is topped off for the next discharge cycle.*/
  TimeChargeTrigger: number;
  /** Sets the kW discharge rate in % of rated capacity for each element of the fleet. Applies to TIME control mode, SCHEDULE mode, or anytime discharging is triggered by time.*/
  "%RatekW": number;
  /** Sets the kW charging rate in % of rated capacity for each element of the fleet. Applies to TIME control mode and anytime charging mode is entered due to a time trigger.*/
  "%RateCharge": number;
  /** Use this property to change the % reserve for each Storage element under control of this controller. This might be used, for example, to allow deeper discharges of Storage or in case of emergency operation to use the remainder of the Storage element.*/
  "%Reserve": number;
  /** (Read only). Total rated kWh energy Storage capacity of Storage elements controlled by this controller.*/
  kWhTotal: number;
  /** (Read only). Total rated kW power capacity of Storage elements controlled by this controller.*/
  kWTotal: number;
  /** (Read only). Actual kWh stored of all controlled Storage elements.*/
  kWhActual: number;
  /** (Read only). Actual kW output of all controlled Storage elements.*/
  kWActual: number;
  /** (Read only). KW needed to meet target.*/
  kWneed: number;
  /** Dispatch loadshape object, If any, for Yearly solution Mode.*/
  Yearly: string;
  /** Dispatch loadshape object, If any, for Daily solution mode.*/
  Daily: string;
  /** Dispatch loadshape object, If any, for Dutycycle solution mode.*/
  Duty: string;
  /** {Yes/True | No/False} Default is No. Log control actions to Eventlog.*/
  EventLog: boolean;
  /** Hours (integer) to inhibit Discharging after going into Charge mode. Default is 5.*/
  InhibitTime: number;
  /** Duration, hrs, of upramp part for SCHEDULE mode. Default is 0.25.*/
  Tup: number;
  /** Duration, hrs, of flat part for SCHEDULE mode. Default is 2.0.*/
  TFlat: number;
  /** Duration, hrs, of downramp part for SCHEDULE mode. Default is 0.25.*/
  Tdn: number;
  /** Threshold, kW, for Follow mode. kW has to be above this value for the Storage element to be dispatched on. Defaults to 75% of the kWTarget value. Must reset this property after setting kWTarget if you want a different value.*/
  kWThreshold: number;
  /** Defaults to 1 (disabled). Set to any value between 0 and 1 to enable this parameter.
   *
   * Use this parameter to reduce the amount of power requested by the controller in each control iteration. It can be useful when maximum control iterations are exceeded due to numerical instability such as fleet being set to charging and idling in subsequent control iterations (check the Eventlog).*/
  DispFactor: number;
  /** The level of charge required for allowing the storage to discharge again after reaching the reserve storage level. After reaching this level, the storage control  will not allow the storage device to discharge, forcing the storage to charge. Once the storage reaches thislevel, the storage will be able to discharge again. This value is a number between 0.2 and 1*/
  ResetLevel: number;
  /** With this property the user can specify the number of targets to be used by the controller using the list given at "SeasonTargets"/"SeasonTargetsLow", which can be used to dynamically adjust the storage controller during a QSTS simulation. The default value is 1. This property needs to be defined before defining SeasonTargets/SeasonTargetsLow.*/
  Seasons: number;
  /** An array of doubles specifying the targets to be used during a QSTS simulation. These targets will take effect only if SeasonRating=true. The number of targets cannot exceed the number of seasons defined at the SeasonSignal.The difference between the targets defined at SeasonTargets and SeasonTargetsLow is that SeasonTargets applies to discharging modes, while SeasonTargetsLow applies to charging modes.*/
  SeasonTargets: number[];
  /** An array of doubles specifying the targets to be used during a QSTS simulation. These targets will take effect only if SeasonRating=true. The number of targets cannot exceed the number of seasons defined at the SeasonSignal.The difference between the targets defined at SeasonTargets and SeasonTargetsLow is that SeasonTargets applies to discharging modes, while SeasonTargetsLow applies to charging modes.*/
  SeasonTargetsLow: number[];
  /** Base Frequency for ratings.*/
  basefreq: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled: boolean;
  /** Make like another object, e.g.:
   *
   * New Capacitor.C2 like=c1  ...*/
  like: string;
}
