import { TCC_CurveInterface } from "../interfaces/TCC_CurveInterface";
import BaseComponent from "./BaseComponent";

/**   General  */
export class TCC_Curve extends BaseComponent {
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
