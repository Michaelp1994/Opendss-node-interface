import BaseComponent from "./BaseComponent";
import { SensorInterface } from "../interfaces/SensorInterface";
/**   Circuit Element, Meter Element  */
export class Sensor extends BaseComponent {
  _type = "Sensor";
  _parameters = [
    "element",
    "terminal",
    "kvbase",
    "clear",
    "kVs",
    "currents",
    "kWs",
    "kvars",
    "conn",
    "Deltadirection",
    "%Error",
    "Weight",
    "basefreq",
    "enabled",
    "like",
  ];
  /** Name (Full Object name) of element to which the Sensor is connected.*/
  element?: string;
  /** Number of the terminal of the circuit element to which the Sensor is connected. 1 or 2, typically. Default is 1.*/
  terminal?: number;
  /** Voltage base for the sensor, in kV. If connected to a 2- or 3-phase terminal,
   *
   * specify L-L voltage. For 1-phase devices specify L-N or actual 1-phase voltage. Like many other DSS devices, default is 12.47kV.*/
  kvbase?: number;
  /** { Yes | No }. Clear=Yes clears sensor values. Should be issued before putting in a new set of measurements.*/
  clear?: boolean;
  /** Array of Voltages (kV) measured by the voltage sensor. For Delta-connected sensors, Line-Line voltages are expected. For Wye, Line-Neutral are expected.*/
  kVs?: number[];
  /** Array of Currents (amps) measured by the current sensor. Specify this or power quantities; not both.*/
  currents?: number[];
  /** Array of Active power (kW) measurements at the sensor. Is converted into Currents along with q=[...]
   *
   * Will override any currents=[...] specification.*/
  kWs?: number[];
  /** Array of Reactive power (kvar) measurements at the sensor. Is converted into Currents along with p=[...]*/
  kvars?: number[];
  /** Voltage sensor Connection: { wye | delta | LN | LL }.  Default is wye. Applies to voltage measurement only.
   *
   * Currents are always assumed to be line currents.
   *
   * If wye or LN, voltage is assumed measured line-neutral; otherwise, line-line.*/
  conn?: ConnEnum;
  /** {1 or -1}  Default is 1:  1-2, 2-3, 3-1.  For reverse rotation, enter -1. Any positive or negative entry will suffice.*/
  Deltadirection?: number;
  /** Assumed percent error in the measurement. Default is 1.*/
  "%Error"?: number;
  /** Weighting factor: Default is 1.*/
  Weight?: number;
  /** Base Frequency for ratings.*/
  basefreq?: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled?: boolean;

  constructor(
    nameOrOptions: string | SensorInterface,
    options?: Omit<SensorInterface, "name">
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
