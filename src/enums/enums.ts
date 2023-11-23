/** @enum */
export type YesNoEnum = "Yes" | "No";
/** @enum */
export type TrueFalseEnum = "True" | "False";
/** @enum */
export type BooleanEnum = "Yes" | "No" | "True" | "False";
/** @enum */
export type MonitorActionEnum = "Clear" | "Save" | "Take" | "Process";
/** @enum */
export type EnergyMeterActionEnum =
  | "Clear"
  | " Save "
  | " Take "
  | " Zonedump "
  | " Allocate "
  | " Reduce";
/** @enum */
export type TShapeActionEnum = "DblSave" | "SngSave";
/** @enum */
export type LoadShapeActionEnum = "NORMALIZE" | "DblSave" | "SngSave";
/** @enum */
export type SwtControlActionEnum = "Open" | "Close";
/** @enum */
export type CombiModeEnum = "VV_VW" | "VV_DRC";
/** @enum */
export type ConnEnum = "wye" | "LN" | "delta" | "LL";
/** @enum */
export type ControlModeEnum = "GFM" | "GFL";

/** @enum */
export type CTPhaseEnum = "AVG" | "MAX" | "MIN";
/** @enum */
export type DeltadirectionEnum = "1" | "-1";
/** @enum */
export type DispModeEnum =
  | "DEFAULT"
  | "FOLLOW"
  | "EXTERNAL"
  | "LOADLEVEL"
  | "PRICE";
/** @enum */
export type DispModeEnum = "Default" | "Loadlevel" | "Price ";
/** @enum */
export type EarthModelEnum = "Carson" | "FullCarson" | "Deri";
/** @enum */
export type LeadLagEnum = "Lead" | "Lag" | "ANSI" | "Euro ";

/** @enum */
export type ModeEnum =
  | "VOLTVAR "
  | "VOLTWATT "
  | "DYNAMICREACCURR "
  | "WATTPF "
  | "WATTVAR "
  | "GFM";
/** @enum */
export type LineTypeEnum =
  | "OH"
  | "UG"
  | "UG_TS"
  | "UG_CN"
  | "SWT_LDBRK"
  | "SWT_FUSE"
  | "SWT_SECT"
  | "SWT_REC"
  | "SWT_DISC"
  | "SWT_BRK"
  | "SWT_ELBOW";
/** @enum */
export type ModeChargeEnum =
  | "Loadshape "
  | "Time "
  | "PeakShaveLow "
  | "I-PeakShaveLow";
/** @enum */
export type ModeDischargeEnum =
  | "PeakShave "
  | "Follow "
  | "Support "
  | "Loadshape "
  | "Time "
  | "Schedule "
  | "I-PeakShave";
/** @enum */
export type ModelEnum = "Thevenin" | "Ideal";
/** @enum */
export type MonPhaseEnum = "AVG" | "MAX" | "MIN";
/** @enum */
export type MonVoltageCalcEnum = "AVG" | "MAX" | "MIN";
/** @enum */
export type NormalEnum = "Open" | "Closed";
/** @enum */
export type PTphaseEnum = " MAX" | "MIN";
/** @enum */
export type PTPhaseEnum = "AVG" | "MAX" | "MIN";
/** @enum */
export type RateofChangeModeEnum = "INACTIVE" | "LPF" | "RISEFALL ";
/** @enum */
export type ScanTypeEnum = "pos" | "zero" | "none";
/** @enum */
export type SequenceEnum = "pos" | "neg" | "zero";
/** @enum */
export type SlipOptionEnum = "fixedslip" | "variableslip  ";
/** @enum */
export type StorageStateEnum = "IDLING" | "CHARGING" | "DISCHARGING";
/** @enum */
export type RelayStateEnum = "Open" | "Closed";
/** @enum */
export type StatesEnum = "1" | "0";
/** @enum */
export type GeneratorStatusEnum = "Fixed" | "Variable";
/** @enum */
export type LoadStatusEnum = "Variable" | "Fixed" | "Exempt";
/** @enum */
export type TypeEnum = "Current" | "voltage" | "kvar" | "PF" | "time ";
/** @enum */
export type TypeEnum = "GSU" | "Auto" | "YY";

/** @enum */
export type UnitsEnum =
  | "none"
  | "mi"
  | "kft"
  | "km"
  | "m"
  | "Ft"
  | "in"
  | "cm"
  | "mm";

/** @enum */
export type UnitsEnum = "mi" | "kft" | "km" | "m" | "Ft" | "in" | "cm ";

/** @enum */
export type LineCodeUnitsEnum =
  | "none"
  | "mi"
  | "km"
  | "kft"
  | "m"
  | "me"
  | "ft"
  | "in"
  | "cm";

/** @enum */
export type VoltageCurvexRefEnum = "rated" | "avg" | "ravg";

/** @enum */
export type VoltwattYAxisEnum =
  | "PMPPPU"
  | "PAVAILABLEPU"
  | "PCTPMPPPU "
  | "KVARATINGPU";

/** Auto Transformer Connection Type
 * @enum
 */
export type AutoTransConnEnum = "Series" | "wye" | "Delta" | "LN" | "LL";
/** @enum */

export type CoreEnum =
  | "Shell"
  | "5-leg"
  | "3-Leg"
  | "1-phase"
  | "core-1-phase"
  | "4-leg";
