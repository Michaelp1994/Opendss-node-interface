/**   General  */
export default class TCC_Curve {
  /** Name of the component */
  name: string;
  /** Number of points to expect in time-current arrays.*/
  npts: number;
  /** Array of current (or voltage) values corresponding to time values (see help on T_Array).*/
  C_array: number[];
  /** Array of time values in sec. Typical array syntax:
   *
   * t_array = (1, 2, 3, 4, ...)
   *
   * Can also substitute a file designation:
   *
   * t_array =  (file=filename)
   *
   * The specified file has one value per line.*/
  T_array: number[];
  /** Make like another object, e.g.:
   *
   * New Capacitor.C2 like=c1  ...*/
  like: string;
}
