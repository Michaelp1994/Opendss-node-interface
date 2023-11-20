/**   General  */
export default class DynamicExp {
  /** Name of the component */
  name: string;
  /** (Int) Number of state variables to be considered in the differential equation.*/
  NVariables: number;
  /** ([String]) Array of strings with the names of the state variables.*/
  VarNames: string[];
  /** (String) Activates the state variable using the given name.*/
  var: string;
  /** (Int) read-only, returns the index of the active state variable.*/
  VarIdx: number;
  /** It is the differential expression using OpenDSS RPN syntax. The expression must be contained within brackets in case of having multiple equations, for example:
   *
   * expression="[w dt = 1 M / (P_m Dw - P_e -) ]"*/
  Expression: string;
  /** It is the domain for which the equation is defined, it can be one of [time*, dq]. By deafult, dynamic epxressions are defined in the time domain.*/
  Domain: string;
  /** DynamicExp.like*/
  like: string;
}
