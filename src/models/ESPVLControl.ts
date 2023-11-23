import { BooleanEnum } from "../enums/enums";
import { ESPVLControlInterface } from "../interfaces/ESPVLControlInterface";
import BaseComponent from "./BaseComponent";

/**   Circuit Element, Control Element  */
export class ESPVLControl extends BaseComponent {
  _type = "ESPVLControl";
  _parameters = [
    "Element",
    "Terminal",
    "Type",
    "kWBand",
    "kvarlimit",
    "LocalControlList",
    "LocalControlWeights",
    "PVSystemList",
    "PVSystemWeights",
    "StorageList",
    "StorageWeights",
    "basefreq",
    "enabled",
    "like",
  ];
  /** Full object name of the circuit element, typically a line or transformer, which the control is monitoring. There is no default; must be specified.*/
  Element?: string;
  /** Number of the terminal of the circuit element to which the ESPVLControl control is connected. 1 or 2, typically.  Default is 1. Make sure you have the direction on the power matching the sign of kWLimit.*/
  Terminal?: number;
  /** Type of controller.  1= System Controller; 2= Local controller.*/
  Type?: string;
  /** Bandwidth (kW) of the dead band around the target limit.No dispatch changes are attempted if the power in the monitored terminal stays within this band.*/
  kWBand?: number;
  /** Max kvar to be delivered through the element.  Uses same dead band as kW.*/
  kvarlimit?: number;
  /** Array list of ESPVLControl local controller objects to be dispatched by System Controller. If not specified, all ESPVLControl devices with type=local in the circuit not attached to another controller are assumed to be part of this controller's fleet.*/
  LocalControlList?: string[];
  /** Array of proportional weights corresponding to each ESPVLControl local controller in the LocalControlList.*/
  LocalControlWeights?: number[];
  /** Array list of PVSystem objects to be dispatched by a Local Controller.*/
  PVSystemList?: string[];
  /** Array of proportional weights corresponding to each PVSystem in the PVSystemList.*/
  PVSystemWeights?: number[];
  /** Array list of Storage objects to be dispatched by Local Controller.*/
  StorageList?: string[];
  /** Array of proportional weights corresponding to each Storage object in the StorageControlList.*/
  StorageWeights?: number[];
  /** Base Frequency for ratings.*/
  basefreq?: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled?: BooleanEnum;
  constructor(
    nameOrOptions: string | ESPVLControlInterface,
    options?: Omit<ESPVLControlInterface, "name">
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
