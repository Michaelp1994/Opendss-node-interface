import { ESPVLControlInterface } from "@interfaces/ESPVLControlInterface";
import CircuitElementComponent from "./CircuitElementComponent";

/**   Circuit Element, Control Element
 *
 *   An ESPVLControl is a control element that is connected to a terminal of another
 * circuit element (a PVSystem) and sends dispatch kW signals to a set of Storage Elements it controls
 *
 * An ESPVLControl is either a System Controller or a Local Controller, set by the "Type" property.
 * A System Controller controls one or more Local Controllers
 * A Local Controller controls one or more PVSystem elements and one or more Storage elements.
 */
export default class ESPVLControl
  extends CircuitElementComponent
  implements HasKeys<ESPVLControlInterface>
{
  _type = "ESPVLControl";

  parameters: Array<keyof this> = [
    "element",
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

  /** Full object name of the circuit element, typically a line or transformer, which the control is monitoring. There is no default; must be specified. */
  element: string;

  /** Number of the terminal of the circuit element to which the ESPVLControl control is connected. 1 or 2, typically.  Default is 1. Make sure you have the direction on the power matching the sign of kWLimit. */
  Terminal?: number;

  /** Type of controller.  1= System Controller; 2= Local controller. */
  Type?: string;

  /** Bandwidth (kW) of the dead band around the target limit.No dispatch changes are attempted if the power in the monitored terminal stays within this band. */
  kWBand?: number;

  /** Max kvar to be delivered through the element.  Uses same dead band as kW. */
  kvarlimit?: number;

  /** Array list of ESPVLControl local controller objects to be dispatched by System Controller. If not specified, all ESPVLControl devices with type=local in the circuit not attached to another controller are assumed to be part of this controller's fleet. */
  LocalControlList?: string[];

  /** Array of proportional weights corresponding to each ESPVLControl local controller in the LocalControlList. */
  LocalControlWeights?: number[];

  /** Array list of PVSystem objects to be dispatched by a Local Controller. */
  PVSystemList?: string[];

  /** Array of proportional weights corresponding to each PVSystem in the PVSystemList. */
  PVSystemWeights?: number[];

  /** Array list of Storage objects to be dispatched by Local Controller. */
  StorageList?: string[];

  /** Array of proportional weights corresponding to each Storage object in the StorageControlList. */
  StorageWeights?: number[];

  /** Base Frequency for ratings. */
  basefreq?: number;

  /** {Yes|No or True|False} Indicates whether this element is enabled. */
  enabled?: boolean;

  constructor(options: ESPVLControlInterface);
  constructor(name: string, options?: OmitName<ESPVLControlInterface>);
  constructor(
    nameOrOptions: string | ESPVLControlInterface,
    options?: OmitName<ESPVLControlInterface>,
  ) {
    super(nameOrOptions);
    if (typeof nameOrOptions === "string") {
      const { element, ...optOptions } = options!;
      this.element = element;
      Object.assign(this, optOptions);
    } else {
      const { name, element, ...otherOptions } = nameOrOptions;
      this.element = element;
      Object.assign(this, otherOptions);
    }
  }
}
