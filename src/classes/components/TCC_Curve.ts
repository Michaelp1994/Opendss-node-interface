import { TCC_CurveInterface } from "@interfaces/TCC_CurveInterface";
import GeneralElement from "./GeneralElement";

/**   General
 *
 *  Nominally, a time-current curve, but also used for volt-time curves.
 *
 * Collections of time points.  Return values can be interpolated either
 * Log-Log as traditional TCC or as over- or under-voltage definite time.
 */
export class TCC_Curve extends GeneralElement {
  _type = "TCC_Curve";
  _parameters = ["npts", "C_array", "T_array", "like"];
  /** Number of points to expect in time-current arrays.*/
  npts?: number;
  /** Array of current (or voltage) values corresponding to time values (see help on T_Array).*/
  C_array?: number[];
  /** Array of time values in sec. Typical array syntax:
   *
   * t_array = (1, 2, 3, 4, ...)
   *
   * Can also substitute a file designation:
   *
   * t_array =  (file=filename)
   *
   * The specified file has one value per line.*/
  T_array?: number[];
  constructor(
    nameOrOptions: string | TCC_CurveInterface,
    options?: Omit<TCC_CurveInterface, "name">
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
