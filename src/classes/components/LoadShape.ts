import { ActionEnum } from "@enums/enums";
import { LoadShapeInterface } from "@interfaces/LoadShapeInterface";
import GeneralElement from "./GeneralElement";

/**   General  */
export default class LoadShape
  extends GeneralElement
  implements HasKeys<LoadShapeInterface>
{
  _type = "LoadShape";

  parameters: Array<keyof this> = [
    "npts",
    "interval",
    "mult",
    "hour",
    "mean",
    "stddev",
    "csvfile",
    "sngfile",
    "dblfile",
    "action",
    "qmult",
    "UseActual",
    "Pmax",
    "Qmax",
    "sinterval",
    "minterval",
    "Pbase",
    "Qbase",
    "Pmult",
    "PQCSVFile",
    "MemoryMapping",
    "like",
  ];

  /** Max number of points to expect in load shape vectors. This gets reset to the number of multiplier values found (in files only) if less than specified. */
  npts?: number;

  /** Time interval for fixed interval data, hrs. Default = 1. If Interval = 0 then time data (in hours) may be at either regular or  irregular intervals and time value must be specified using either the Hour property or input files. Then values are interpolated when Interval=0, but not for fixed interval data.
   *
   * See also "sinterval" and "minterval". */
  interval?: number;

  /** Array of multiplier values for active power (P) or other key value (such as pu V for Vsource).
   *
   * You can also use the syntax:
   *
   * mult = (file=filename)     !for text file one value per line
   *
   * mult = (dblfile=filename)  !for packed file of doubles
   *
   * mult = (sngfile=filename)  !for packed file of singles
   *
   * mult = (file=MyCSVFile.CSV, col=3, header=yes)  !for multicolumn CSV files
   *
   * Note: this property will reset Npts if the  number of values in the files are fewer.
   *
   * Same as Pmult
   *
   * Redundant with Pmult */
  mult?: number[];

  /** Array of hour values. Only necessary to define for variable interval data (Interval=0). If you set Interval>0 to denote fixed interval data, DO NOT USE THIS PROPERTY. You can also use the syntax:
   *
   * hour = (file=filename)     !for text file one value per line
   *
   * hour = (dblfile=filename)  !for packed file of doubles
   *
   * hour = (sngfile=filename)  !for packed file of singles */
  hour?: number[];

  /** Mean of the active power multipliers.  This is computed on demand the first time a value is needed.  However, you may set it to another value independently. Used for Monte Carlo load simulations. */
  mean?: number;

  /** Standard deviation of active power multipliers.  This is computed on demand the first time a value is needed.  However, you may set it to another value independently.Is overwritten if you subsequently read in a curve
   *
   * Used for Monte Carlo load simulations. */
  stddev?: number;

  /** Switch input of active power load curve data to a CSV text file containing (hour, mult) points, or simply (mult) values for fixed time interval data, one per line. NOTE: This action may reset the number of points to a lower value. */
  csvfile?: string;

  /** Switch input of active power load curve data to a binary file of singles containing (hour, mult) points, or simply (mult) values for fixed time interval data, packed one after another. NOTE: This action may reset the number of points to a lower value. */
  sngfile?: string;

  /** Switch input of active power load curve data to a binary file of doubles containing (hour, mult) points, or simply (mult) values for fixed time interval data, packed one after another. NOTE: This action may reset the number of points to a lower value. */
  dblfile?: string;

  /** {NORMALIZE | DblSave | SngSave} After defining load curve data, setting action=normalize will modify the multipliers so that the peak is 1.0. The mean and std deviation are recomputed.
   *
   * Setting action=DblSave or SngSave will cause the present mult and qmult values to be written to either a packed file of double or single. The filename is the loadshape name. The mult array will have a "_P" appended on the file name and the qmult array, if it exists, will have "_Q" appended. */
  action?: ActionEnum;

  /** Array of multiplier values for reactive power (Q).  You can also use the syntax:
   *
   * qmult = (file=filename)     !for text file one value per line
   *
   * qmult = (dblfile=filename)  !for packed file of doubles
   *
   * qmult = (sngfile=filename)  !for packed file of singles
   *
   * qmult = (file=MyCSVFile.CSV, col=4, header=yes)  !for multicolumn CSV files */
  qmult?: number[];

  /** {Yes | No | True | False} If true, signifies to Load, Generator, Vsource, or other objects to use the return value as the actual kW, kvar, kV, or other value rather than a multiplier. Nominally for AMI Load data but may be used for other functions. */
  UseActual?: boolean;

  /** kW value at the time of max power. Is automatically set upon reading in a loadshape. Use this property to override the value automatically computed or to retrieve the value computed. */
  Pmax?: number;

  /** kvar value at the time of max kW power. Is automatically set upon reading in a loadshape. Use this property to override the value automatically computed or to retrieve the value computed. */
  Qmax?: number;

  /** Specify fixed interval in SECONDS. Alternate way to specify Interval property.
   *
   * Redundant with interval */
  sinterval?: number;

  /** Specify fixed interval in MINUTES. Alternate way to specify Interval property.
   *
   * Redundant with interval */
  minterval?: number;

  /** Base P value for normalization. Default is zero, meaning the peak will be used. */
  Pbase?: number;

  /** Base Q value for normalization. Default is zero, meaning the peak will be used. */
  Qbase?: number;

  /** Synonym for "mult". */
  Pmult?: number[];

  /** Switch input to a CSV text file containing (active, reactive) power (P, Q) multiplier pairs, one per row.
   *
   * If the interval=0, there should be 3 items on each line: (hour, Pmult, Qmult) */
  PQCSVFile?: string;

  /** {Yes | No | True | False} Enables the memory mapping functionality for dealing with large amounts of load shapes.
   *
   * By defaul is False. Use it to accelerate the model loading when the containing a large number of load shapes. */
  MemoryMapping?: boolean;

  constructor(options: LoadShapeInterface);
  constructor(name: string, options?: Omit<LoadShapeInterface, "name">);
  constructor(
    nameOrOptions: string | LoadShapeInterface,
    optionalOptions?: Omit<LoadShapeInterface, "name">,
  ) {
    super(nameOrOptions);
    if (typeof nameOrOptions === "string") {
      if (optionalOptions) Object.assign(this, optionalOptions);
    } else {
      const { name, ...otherOptions } = nameOrOptions;
      Object.assign(this, otherOptions);
    }
  }
}
