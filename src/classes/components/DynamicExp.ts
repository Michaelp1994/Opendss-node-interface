import { DynamicExpInterface } from "@interfaces/DynamicExpInterface";
import GeneralElement from "./GeneralElement";

/**   General  */
export default class DynamicExp
  extends GeneralElement
  implements HasKeys<DynamicExpInterface>
{
  _type = "DynamicExp";

  parameters: Array<keyof this> = [
    "NVariables",
    "VarNames",
    "var",
    "VarIdx",
    "Expression",
    "Domain",
    "like",
  ];

  /** (Int) Number of state variables to be considered in the differential equation. */
  NVariables?: number;

  /** ([String]) Array of strings with the names of the state variables. */
  VarNames?: string[];

  /** (String) Activates the state variable using the given name. */
  var?: string;

  /** (Int) read-only, returns the index of the active state variable. */
  VarIdx?: number;

  /** It is the differential expression using OpenDSS RPN syntax. The expression must be contained within brackets in case of having multiple equations, for example:
   *
   * expression="[w dt = 1 M / (P_m Dw - P_e -) ]" */
  Expression?: string;

  /** It is the domain for which the equation is defined, it can be one of [time*, dq]. By deafult, dynamic epxressions are defined in the time domain. */
  Domain?: string;

  constructor(options: DynamicExpInterface);
  constructor(name: string, options?: OmitName<DynamicExpInterface>);
  constructor(
    nameOrOptions: string | DynamicExpInterface,
    optionalOptions?: OmitName<DynamicExpInterface>,
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
