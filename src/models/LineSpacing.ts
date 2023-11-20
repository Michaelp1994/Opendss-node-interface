/**   General  */
export default class LineSpacing {
  /** Name of the component */
  name: string;
  /** Number of wires in this geometry. Default is 3. Triggers memory allocations. Define first!*/
  nconds: number;
  /** Number of retained phase conductors. If less than the number of wires, list the retained phase coordinates first.*/
  nphases: number;
  /** Array of wire X coordinates.*/
  x: number[];
  /** Array of wire Heights.*/
  h: number[];
  /** Units for x and h: {mi|kft|km|m|Ft|in|cm } Initial default is "ft", but defaults to last unit defined*/
  units: string;
  /** Make like another object, e.g.:
   *
   * New Capacitor.C2 like=c1  ...*/
  like: string;
}
