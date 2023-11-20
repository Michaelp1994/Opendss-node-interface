/**   General  */
export default class XYcurve {
  /** Name of the component */
  name: string;
  /** Max number of points to expect in curve. This could get reset to the actual number of points defined if less than specified.*/
  npts: number;
  /** One way to enter the points in a curve. Enter x and y values as one array in the order [x1, y1, x2, y2, ...]. For example:
   *
   * Points=[1,100 2,200 3, 300]
   *
   * Values separated by commas or white space. Zero fills arrays if insufficient number of values.
   *
   * Redundant with Xarray*/
  Points: number[];
  /** Alternate way to enter Y values. Enter an array of Y values corresponding to the X values.  You can also use the syntax:
   *
   * Yarray = (file=filename)     !for text file one value per line
   *
   * Yarray = (dblfile=filename)  !for packed file of doubles
   *
   * Yarray = (sngfile=filename)  !for packed file of singles
   *
   * Note: this property will reset Npts to a smaller value if the  number of values in the files are fewer.*/
  Yarray: number[];
  /** Alternate way to enter X values. Enter an array of X values corresponding to the Y values.  You can also use the syntax:
   *
   * Xarray = (file=filename)     !for text file one value per line
   *
   * Xarray = (dblfile=filename)  !for packed file of doubles
   *
   * Xarray = (sngfile=filename)  !for packed file of singles
   *
   * Note: this property will reset Npts to a smaller value if the  number of values in the files are fewer.*/
  Xarray: number[];
  /** Switch input of  X-Y curve data to a CSV file containing X, Y points one per line. NOTE: This action may reset the number of points to a lower value.*/
  csvfile: string;
  /** Switch input of  X-Y curve data to a binary file of SINGLES containing X, Y points packed one after another. NOTE: This action may reset the number of points to a lower value.*/
  sngfile: string;
  /** Switch input of  X-Y  curve data to a binary file of DOUBLES containing X, Y points packed one after another. NOTE: This action may reset the number of points to a lower value.*/
  dblfile: string;
  /** Enter a value and then retrieve the interpolated Y value from the Y property. On input shifted then scaled to original curve. Scaled then shifted on output.*/
  x: number;
  /** Enter a value and then retrieve the interpolated X value from the X property. On input shifted then scaled to original curve. Scaled then shifted on output.*/
  y: number;
  /** Shift X property values (in/out) by this amount of offset. Default = 0. Does not change original definition of arrays.*/
  Xshift: number;
  /** Shift Y property values (in/out) by this amount of offset. Default = 0. Does not change original definition of arrays.*/
  Yshift: number;
  /** Scale X property values (in/out) by this factor. Default = 1.0. Does not change original definition of arrays.*/
  Xscale: number;
  /** Scale Y property values (in/out) by this factor. Default = 1.0. Does not change original definition of arrays.*/
  Yscale: number;
  /** Make like another object, e.g.:
   *
   * New Capacitor.C2 like=c1  ...*/
  like: string;
}
