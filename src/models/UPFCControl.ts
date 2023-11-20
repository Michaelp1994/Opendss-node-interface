/**   Circuit Element, Control Element  */
export default class UPFCControl {
  /** Name of the component */
  name: string;
  /** The list of all the UPFC devices to be controlled by this controller, If left empty, this control will apply for all UPFCs in the model.*/
  UPFCList: string[];
  /** Base Frequency for ratings.*/
  basefreq: number;
  /** {Yes|No or True|False} Indicates whether this element is enabled.*/
  enabled: boolean;
  /** Make like another object, e.g.:
   *
   * New Capacitor.C2 like=c1  ...*/
  like: string;
}
