/**   Circuit Element, Control Element  */
export default class GenDispatcher {
  /** Name of the component */
  name: string;
  /** Full object name of the circuit element, typically a line or transformer, which the control is monitoring. There is no default; must be specified.*/
  Element: string;
  /** Number of the terminal of the circuit element to which the GenDispatcher control is connected. 1 or 2, typically.  Default is 1. Make sure you have the direction on the power matching the sign of kWLimit.*/
  Terminal: number;
  /** kW Limit for the monitored element. The generators are dispatched to hold the power in band.*/
  kWLimit: number;
  /** Bandwidth (kW) of the dead band around the target limit.No dispatch changes are attempted if the power in the monitored terminal stays within this band.*/
  kWBand: number;
  /** Max kvar to be delivered through the element.  Uses same dead band as kW.*/
  kvarlimit: number;
  /** Array list of generators to be dispatched.  If not specified, all generators in the circuit are assumed dispatchable.*/
  GenList: string[];
  /** GenDispatcher.Weights*/
  Weights: number[];
  /** Base Frequency for ratings.*/
  basefreq: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled: boolean;
  /** Make like another object, e.g.:
   *
   * New Capacitor.C2 like=c1  ...*/
  like: string;
}
