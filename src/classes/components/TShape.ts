import { ActionEnum } from "@enums/enums";
import { TShapeInterface } from "@interfaces/TShapeInterface";
import GeneralElement from "./GeneralElement";

/**   General  */
export class TShape extends GeneralElement {
  _type = "TShape";
  _parameters = [
    "npts",
    "interval",
    "temp",
    "hour",
    "mean",
    "stddev",
    "csvfile",
    "sngfile",
    "dblfile",
    "sinterval",
    "minterval",
    "action",
    "like",
  ];
  /** Max number of points to expect in temperature shape vectors. This gets reset to the number of Temperature values found if less than specified.*/
  npts?: number;
  /** Time interval for fixed interval data, hrs. Default = 1. If Interval = 0 then time data (in hours) may be at irregular intervals and time value must be specified using either the Hour property or input files. Then values are interpolated when Interval=0, but not for fixed interval data.
   *
   * See also "sinterval" and "minterval".*/
  interval?: number;
  /** Array of temperature values.  Units should be compatible with the object using the data. You can also use the syntax:
   *
   * Temp = (file=filename)     !for text file one value per line
   *
   * Temp = (dblfile=filename)  !for packed file of doubles
   *
   * Temp = (sngfile=filename)  !for packed file of singles
   *
   * Note: this property will reset Npts if the  number of values in the files are fewer.*/
  temp?: number[];
  /** Array of hour values. Only necessary to define this property for variable interval data. If the data are fixed interval, do not use this property. You can also use the syntax:
   *
   * hour = (file=filename)     !for text file one value per line
   *
   * hour = (dblfile=filename)  !for packed file of doubles
   *
   * hour = (sngfile=filename)  !for packed file of singles*/
  hour?: number[];
  /** Mean of the temperature curve values.  This is computed on demand the first time a value is needed.  However, you may set it to another value independently. Used for Monte Carlo load simulations.*/
  mean?: number;
  /** Standard deviation of the temperatures.  This is computed on demand the first time a value is needed.  However, you may set it to another value independently.Is overwritten if you subsequently read in a curve
   *
   * Used for Monte Carlo load simulations.*/
  stddev?: number;
  /** Switch input of  temperature curve data to a csv file containing (hour, Temp) points, or simply (Temp) values for fixed time interval data, one per line. NOTE: This action may reset the number of points to a lower value.*/
  csvfile?: string;
  /** Switch input of  temperature curve data to a binary file of singles containing (hour, Temp) points, or simply (Temp) values for fixed time interval data, packed one after another. NOTE: This action may reset the number of points to a lower value.*/
  sngfile?: string;
  /** Switch input of  temperature curve data to a binary file of doubles containing (hour, Temp) points, or simply (Temp) values for fixed time interval data, packed one after another. NOTE: This action may reset the number of points to a lower value.*/
  dblfile?: string;
  /** Specify fixed interval in SECONDS. Alternate way to specify Interval property.
   *
   * Redundant with interval*/
  sinterval?: number;
  /** Specify fixed interval in MINUTES. Alternate way to specify Interval property.
   *
   * Redundant with interval*/
  minterval?: number;
  /** {DblSave | SngSave} After defining temperature curve data... Setting action=DblSave or SngSave will cause the present "Temp" values to be written to either a packed file of double or single. The filename is the Tshape name.*/
  action?: ActionEnum;
  constructor(
    nameOrOptions: string | TShapeInterface,
    options?: Omit<TShapeInterface, "name">
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
