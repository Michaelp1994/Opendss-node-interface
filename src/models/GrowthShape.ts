/**   General  */
export default class GrowthShape {
  /** Name of the component */
  name: string;
  /** Number of points to expect in subsequent vector.*/
  npts: number;
  /** Array of year values, or a text file spec, corresponding to the multipliers. Enter only those years where the growth changes. May be any integer sequence -- just so it is consistent. See help on Mult.*/
  year: number[];
  /** Array of growth multiplier values, or a text file spec, corresponding to the year values. Enter the multiplier by which you would multiply the previous year's load to get the present year's.
   *
   * Examples:
   *
   * Year = [1, 2, 5]   Mult=[1.05, 1.025, 1.02].
   *
   * Year= (File=years.txt) Mult= (file=mults.txt).
   *
   * Text files contain one value per line.*/
  mult: number[];
  /** Switch input of growth curve data to a csv file containing (year, mult) points, one per line.*/
  csvfile: string;
  /** Switch input of growth curve data to a binary file of singles containing (year, mult) points, packed one after another.*/
  sngfile: string;
  /** Switch input of growth curve data to a binary file of doubles containing (year, mult) points, packed one after another.*/
  dblfile: string;
  /** Make like another object, e.g.:
   *
   * New Capacitor.C2 like=c1  ...*/
  like: string;
}
