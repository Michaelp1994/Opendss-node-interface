/**   Circuit Element, PC Element  */
export default class VSConverter {
  /** Name of the component */
  name: string;
  /** Number of AC plus DC conductors. Default is 4. AC phases numbered before DC conductors.*/
  phases: number;
  /** Name of converter bus, containing both AC and DC conductors. Bus2 is always ground.*/
  Bus1: string;
  /** Nominal AC line-neutral voltage in kV. Must be specified > 0.*/
  kVac: number;
  /** Nominal DC voltage in kV. Must be specified > 0.*/
  kVdc: number;
  /** Nominal converter power in kW. Must be specified > 0.*/
  kW: number;
  /** Number of DC conductors. Default is 1. DC conductors numbered after AC phases.*/
  Ndc: number;
  /** AC resistance (ohms) for the converter transformer, plus any series reactors. Default is 0.
   *
   * Must be 0 for Vac control mode.*/
  Rac: number;
  /** AC reactance (ohms) for the converter transformer, plus any series reactors. Default is 0.
   *
   * Must be 0 for Vac control mode. Must be >0 for PacVac, PacQac or VacVdc control mode.*/
  Xac: number;
  /** Fixed or initial value of the modulation index. Default is 0.5.*/
  m0: number;
  /** Fixed or initial value of the power angle in degrees. Default is 0.*/
  d0: number;
  /** Minimum value of modulation index. Default is 0.1.*/
  Mmin: number;
  /** Maximum value of modulation index. Default is 0.9.*/
  Mmax: number;
  /** Maximum value of AC line current, per-unit of nominal. Default is 2.*/
  Iacmax: number;
  /** Maximum value of DC current, per-unit of nominal. Default is 2.*/
  Idcmax: number;
  /** Reference AC line-to-neutral voltage, RMS Volts. Default is 0.
   *
   * Applies to PacVac and VdcVac control modes, influencing m.*/
  Vacref: number;
  /** Reference total AC real power, Watts. Default is 0.
   *
   * Applies to PacVac and PacQac control modes, influencing d.*/
  Pacref: number;
  /** Reference total AC reactive power, Vars. Default is 0.
   *
   * Applies to PacQac and VdcQac control modes, influencing m.*/
  Qacref: number;
  /** Reference DC voltage, Volts. Default is 0.
   *
   * Applies to VdcVac control mode, influencing d.*/
  Vdcref: number;
  /** Control Mode (Fixed|PacVac|PacQac|VdcVac|VdcQac). Default is Fixed.*/
  VscMode: string;
  /** Name of harmonic spectrum for this device.*/
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
