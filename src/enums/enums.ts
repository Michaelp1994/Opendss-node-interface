export type MonitorActionEnum = "Clear" | "Save" | "Take" | "Process";
export type EnergyMeterActionEnum =
  | "Clear (reset)"
  | "Save"
  | "Take"
  | "Zonedump"
  | "Allocate"
  | "Reduce";
export type ActionEnum = "DblSave" | "SngSave";
export type LoadShapeActionEnum = "NORMALIZE" | "DblSave" | "SngSave";
export type SwtControlActionEnum = "Open" | "Close";
export type BalancedEnum = "Yes" | "No";
export type ClearEnum = " Yes" | "No";
export type CogenEnum = "Yes" | "No";
export type CombiModeEnum = "VV_VW" | "VV_DRC";

export type AutoTransConnEnum = "Series" | "wye" | "Delta" | "LN" | "LL";
export type ConnEnum = "wye" | "delta" | "LN" | "LL";

export type ControlModeEnum = "GFM" | "GFL";
export type CoreEnum =
  | "Shell"
  | "5-leg"
  | "3-Leg"
  | "1-phase"
  | "core-1-phase"
  | "4-leg";

export type CTPhaseEnum = "AVG" | "MAX" | "MIN";
export type DebugtraceEnum = "Yes" | "No";
export type DebugTraceEnum = "Yes/True" | "No/False";
export type DeltaDirectionEnum = "1" | "-1";
export type DispModeEnum =
  | "DEFAULT"
  | "FOLLOW"
  | "EXTERNAL"
  | "LOADLEVEL"
  | "PRICE";
export type DispmodeEnum = "Default" | "Loadlevel" | "Price";
export type DistReverseEnum = "Yes/True" | "No/False";
export type DOC_P1BlockingEnum = "Yes/True" | "No/False";
export type EarthModelEnum = "Carson" | "FullCarson" | "Deri";
export type EventLogEnum = "Yes/True" | "No/False";
export type ForceOnEnum = "Yes" | "No";
export type FuelkWhEnum = "0";
export type GMRunitsEnum =
  | "mi"
  | "kft"
  | "km"
  | "m"
  | "Ft"
  | "in"
  | "cm"
  | "mm";
export type InverseTimeEnum = "Yes" | "No";
export type LeadLagEnum = "Lead" | "Lag (default)" | "ANSI (default)" | "Euro";
export type LineLossesEnum = "Yes" | "No";
export type LocalOnlyEnum = "Yes" | "No";
export type LockEnum = "Yes" | "No";
export type LossesEnum = "Yes" | "No";
export type MemoryMappingEnum = "Yes" | "No" | "True" | "False";
export type ModeChargeEnum =
  | "Loadshape"
  | "Time"
  | "PeakShaveLow"
  | "I-PeakShaveLow";
export type ModeDischargeEnum =
  | "PeakShave"
  | "Follow"
  | "Support"
  | "Loadshape"
  | "Time"
  | "Schedule"
  | "I-PeakShave";
export type ModeEnum =
  | "VOLTVAR"
  | "VOLTWATT"
  | "DYNAMICREACCURR"
  | "WATTPF"
  | "WATTVAR"
  | "GFM";
export type ModelEnum = "Thevenin" | "Ideal";
export type MonPhaseEnum = "AVG" | "MAX" | "MIN";
export type MonVoltageCalcEnum = "AVG" | "MAX" | "MIN";
export type NormalEnum = "Open" | "Closed";
export type ParallelEnum = "Yes" | "No";
export type PFPriorityEnum = "Yes/No/True/False";
export type PhaseVoltageReportEnum = "Yes" | "No";
export type PPolarEnum = "Yes/True" | "No/False";
export type PreferQEnum = "Yes/True" | "No/False";
export type PTphaseEnum = " MAX" | "MIN";
export type PTPhaseEnum = "AVG" | "MAX" | "MIN";
export type RadunitsEnum =
  | "mi"
  | "kft"
  | "km"
  | "m"
  | "Ft"
  | "in"
  | "cm"
  | "mm";
export type RateofChangeModeEnum = "INACTIVE" | "LPF" | "RISEFALL";
export type ReduceEnum = "Yes" | "No";
export type ResetEnum = "Yes" | "No";
export type ResidualEnum = "Yes/True" | "No/False";
export type ReversibleEnum = "Yes" | "No";
export type RevNeutralEnum = "Yes" | "No";
export type ScanTypeEnum = "pos" | "zero" | "none";
export type ScantypeEnum = "pos" | "zero" | "none";
export type SeqLossesEnum = "Yes" | "No";
export type SequenceEnum = "pos" | "neg" | "zero";
export type SlipOptionEnum = "fixedslip" | "variableslip ";
export type StorageStateEnum = "idling" | "charging" | "discharging";
export type StateEnum = "Open" | "Closed";
export type StatesEnum = "1" | "0";
export type StatusEnum = "Fixed" | "Variable";
export type LoadStatusEnum = "Variable" | "Fixed" | "Exempt";
export type SubEnum = "Yes" | "No";
export type SwitchEnum = "y/n" | "T/F";
export type TemporaryEnum = "Yes" | "No";
export type CapControlTypeEnum = "Current" | "voltage" | "kvar" | "PF" | "time";
export type TypeEnum = "GSU" | "Auto" | "YY";

export type UnitsEnum = "mi" | "kft" | "km" | "m" | "Ft" | "in" | "cm";
export type UnitsWithNoneEnum =
  | "none"
  | "mi"
  | "kft"
  | "km"
  | "m"
  | "Ft"
  | "in"
  | "cm";
export type UnitsWithMilliMeterEnum =
  | "mi"
  | "kft"
  | "km"
  | "m"
  | "Ft"
  | "in"
  | "cm"
  | "mm";
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
export type UseActualEnum = "Yes" | "No" | "True" | "False";
export type UseFuelEnum = "Yes" | "No";
export type VbaseLossesEnum = "Yes" | "No";
export type VIPolarEnum = "Yes/True" | "No/False";
export type VoltageCurvexRefEnum = "rated" | "avg" | "ravg";
export type VoltOverrideEnum = "Yes" | "No";
export type VoltwattYAxisEnum =
  | "PMPPPU"
  | "PAVAILABLEPU"
  | "PCTPMPPPU"
  | "KVARATINGPU";
export type WattPriorityEnum = "Yes" | "No" | "True" | "False";
export type XfmrLossesEnum = "Yes" | "No";
export type XRConstEnum = "Yes" | "No";

/** @enum */
export type YesNoEnum = "Yes" | "No";
/** @enum */
export type TrueFalseEnum = "True" | "False";
/** @enum */
export type BooleanEnum = "Yes" | "No" | "True" | "False";
/** @enum */
