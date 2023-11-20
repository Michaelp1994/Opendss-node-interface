/**   Circuit Element, PC Element  */
export default class GICLine {
  /** Name of the component */
  name: string;
  /** Name of bus to which the main terminal (1) is connected.
   *
   * bus1=busname
   *
   * bus1=busname.1.2.3*/
  bus1: string;
  /** Name of bus to which 2nd terminal is connected.
   *
   * bus2=busname
   *
   * bus2=busname.1.2.3
   *
   * No Default; must be specified.*/
  bus2: string;
  /** Voltage magnitude, in volts, of the GIC voltage induced across this line. When spedified, voltage source is assumed defined by Voltage and Angle properties.
   *
   * Specify this value
   *
   * OR
   *
   * EN, EE, lat1, lon1, lat2, lon2.
   *
   * Not both!!  Last one entered will take precedence. Assumed identical in each phase of the Line object.*/
  Volts: number;
  /** Phase angle in degrees of first phase. Default=0.0.  See Voltage property*/
  Angle: number;
  /** Source frequency.  Defaults to 0.1 Hz.*/
  frequency: number;
  /** Number of phases.  Defaults to 3.*/
  phases: number;
  /** Resistance of line, ohms of impedance in series with GIC voltage source.*/
  R: number;
  /** Reactance at base frequency, ohms. Default = 0.0. This value is generally not important for GIC studies but may be used if desired.*/
  X: number;
  /** Value of line blocking capacitance in microfarads. Default = 0.0, implying that there is no line blocking capacitor.*/
  C: number;
  /** Northward Electric field (V/km). If specified, Voltage and Angle are computed from EN, EE, lat and lon values.*/
  EN: number;
  /** Eastward Electric field (V/km).  If specified, Voltage and Angle are computed from EN, EE, lat and lon values.*/
  EE: number;
  /** Latitude of Bus1 (degrees)*/
  Lat1: number;
  /** Longitude of Bus1 (degrees)*/
  Lon1: number;
  /** Latitude of Bus2 (degrees)*/
  Lat2: number;
  /** Longitude of Bus2 (degrees)*/
  Lon2: number;
  /** Inherited Property for all PCElements. Name of harmonic spectrum for this source.  Default is "defaultvsource", which is defined when the DSS starts.*/
  spectrum: string;
  /** Inherited Property for all PCElements. Base frequency for specification of reactance value.*/
  basefreq: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled: boolean;
  /** Make like another object, e.g.:
   *
   * New Capacitor.C2 like=c1  ...*/
  like: string;
}
