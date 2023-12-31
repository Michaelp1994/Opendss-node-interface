import { TypeEnum } from "@enums/enums";
import CircuitElement from "@elements/BaseElements/CircuitElement";
import GICTransformerInterface from "./GICTransformerInterface";

/**   Circuit Element, PD Element  */
export default class GICTransformer
  extends CircuitElement
  implements GICTransformerInterface
{
  _type = "GICTransformer";

  parameters: Array<keyof this> = [
    "BusH",
    "BusNH",
    "BusX",
    "BusNX",
    "phases",
    "Type",
    "R1",
    "R2",
    "KVLL1",
    "KVLL2",
    "MVA",
    "VarCurve",
    "%R1",
    "%R2",
    "K",
    "normAmps",
    "emergAmps",
    "faultRate",
    "pctperm",
    "repair",
    "baseFreq",
    "enabled",
    "like",
  ];

  /** Name of High-side(H) bus. Examples:
   *
   * BusH=busname
   *
   * BusH=busname.1.2.3 */
  BusH?: string;

  /** Name of Neutral bus for H, or first, winding. Defaults to all phases connected to H-side bus, node 0, if not specified and transformer type is either GSU or YY. (Shunt Wye Connection to ground reference)For Auto, this is automatically set to the X bus. */
  BusNH?: string;

  /** Name of Low-side(X) bus, if type=Auto or YY. */
  BusX?: string;

  /** Name of Neutral bus for X, or Second, winding. Defaults to all phases connected to X-side bus, node 0, if not specified. (Shunt Wye Connection to ground reference) */
  BusNX?: string;

  /** Number of Phases. Default is 3. */
  phases?: number;

  /** Type of transformer: {GSU* | Auto | YY}. Default is GSU. */
  Type?: TypeEnum;

  /** Resistance, each phase, ohms for H winding, (Series winding, if Auto). Default is 0.0001. If */
  R1?: number;

  /** Resistance, each phase, ohms for X winding, (Common winding, if Auto). Default is 0.0001. */
  R2?: number;

  /** Optional. kV LL rating for H winding (winding 1). Default is 500. Required if you are going to export vars for power flow analysis or enter winding resistances in percent. */
  KVLL1?: number;

  /** Optional. kV LL rating for X winding (winding 2). Default is 138. Required if you are going to export vars for power flow analysis or enter winding resistances in percent.. */
  KVLL2?: number;

  /** Optional. MVA Rating assumed Transformer. Default is 100. Used for computing vars due to GIC and winding resistances if kV and MVA ratings are specified. */
  MVA?: number;

  /** Optional. XYCurve object name. Curve is expected as TOTAL pu vars vs pu GIC amps/phase. Vars are in pu of the MVA property. No Default value. Required only if you are going to export vars for power flow analysis. See K property. */
  VarCurve?: string;

  /** Optional. Percent Resistance, each phase, for H winding (1), (Series winding, if Auto). Default is 0.2.
   *
   * Alternative way to enter R1 value. It is the actual resistances in ohmns that matter. MVA and kV should be specified. */
  "%R1"?: number;

  /** Optional. Percent Resistance, each phase, for X winding (2), (Common winding, if Auto). Default is 0.2.
   *
   * Alternative way to enter R2 value. It is the actual resistances in ohms that matter. MVA and kV should be specified. */
  "%R2"?: number;

  /** Mvar K factor. Default way to convert GIC Amps in H winding (winding 1) to Mvar. Default is 2.2. Commonly-used simple multiplier for estimating Mvar losses for power flow analysis.
   *
   * Mvar = K * kvLL * GIC per phase / 1000
   *
   * Mutually exclusive with using the VarCurve property and pu curves.If you specify this (default), VarCurve is ignored. */
  K?: number;

  /** Normal rated current. */
  normAmps?: number;

  /** Maximum or emerg current. */
  emergAmps?: number;

  /** Failure rate per year. */
  faultRate?: number;

  /** Percent of failures that become permanent. */
  pctperm?: number;

  /** Hours to repair. */
  repair?: number;

  /** Base Frequency for ratings. */
  baseFreq?: number;

  /** {Yes|No or True|False} Indicates whether this element is enabled. */
  enabled?: boolean;

  constructor(options: GICTransformerInterface);
  constructor(name: string, options?: OmitName<GICTransformerInterface>);
  constructor(
    nameOrOptions: string | GICTransformerInterface,
    options?: OmitName<GICTransformerInterface>,
  ) {
    super(nameOrOptions);
    if (typeof nameOrOptions === "string") {
      Object.assign(this, options);
    } else {
      const { name, ...otherOptions } = nameOrOptions;
      Object.assign(this, otherOptions);
    }
  }
}
