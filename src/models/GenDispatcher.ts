import { BooleanEnum } from "../enums/enums";
import { GenDispatcherInterface } from "../interfaces/GenDispatcherInterface";
import BaseComponent from "./BaseComponent";

/**   Circuit Element, Control Element  */
export class GenDispatcher extends BaseComponent {
  _type = "GenDispatcher";
  _parameters = [
    "Element",
    "Terminal",
    "kWLimit",
    "kWBand",
    "kvarlimit",
    "GenList",
    "Weights",
    "basefreq",
    "enabled",
    "like",
  ];
  /** Full object name of the circuit element, typically a line or transformer, which the control is monitoring. There is no default; must be specified.*/
  Element?: string;
  /** Number of the terminal of the circuit element to which the GenDispatcher control is connected. 1 or 2, typically.  Default is 1. Make sure you have the direction on the power matching the sign of kWLimit.*/
  Terminal?: number;
  /** kW Limit for the monitored element. The generators are dispatched to hold the power in band.*/
  kWLimit?: number;
  /** Bandwidth (kW) of the dead band around the target limit.No dispatch changes are attempted if the power in the monitored terminal stays within this band.*/
  kWBand?: number;
  /** Max kvar to be delivered through the element.  Uses same dead band as kW.*/
  kvarlimit?: number;
  /** Array list of generators to be dispatched.  If not specified, all generators in the circuit are assumed dispatchable.*/
  GenList?: string[];
  /** GenDispatcher.Weights*/
  Weights?: number[];
  /** Base Frequency for ratings.*/
  basefreq?: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled?: BooleanEnum;
  constructor(
    nameOrOptions: string | GenDispatcherInterface,
    options?: Omit<GenDispatcherInterface, "name">
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
