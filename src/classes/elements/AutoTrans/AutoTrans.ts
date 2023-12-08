import { AutoTransConnEnum, CoreEnum, LeadLagEnum } from "@enums/enums";
import CircuitElement from "@elements/BaseElements/CircuitElement";
import AutoTransInterface from "./AutoTransInterface";

/**   Circuit Element, PD Element  */
export default class AutoTrans
  extends CircuitElement
  implements AutoTransInterface
{
  _type = "AutoTrans";

  parameters: Array<keyof this> = [
    "phases",
    "windings",
    "wdg",
    "bus",
    "conn",
    "kV",
    "kVA",
    "tap",
    "%R",
    "rdcOhms",
    "core",
    "buses",
    "conns",
    "kVs",
    "kVAs",
    "taps",
    "XHX",
    "XHT",
    "XXT",
    "XSCarray",
    "thermal",
    "n",
    "m",
    "flRise",
    "hsRise",
    "%loadLoss",
    "%noLoadLoss",
    "normhkVA",
    "emerghkVA",
    "sub",
    "maxTap",
    "minTap",
    "numTaps",
    "subname",
    "%imag",
    "ppm_antifloat",
    "%Rs",
    "XRConst",
    "leadLag",
    "wdgCurrents",
    "normAmps",
    "emergAmps",
    "faultRate",
    "pctPerm",
    "repair",
    "baseFreq",
    "enabled",
    "like",
  ] as const;

  phases?: number;

  windings?: number;

  wdg?: number;

  bus?: string;

  conn?: AutoTransConnEnum;

  kV?: number;

  kVA?: number;

  tap?: number;

  "%R"?: number;

  rdcOhms?: number;

  core?: CoreEnum;

  buses?: string[];

  conns?: AutoTransConnEnum[];

  kVs?: number[];

  kVAs?: number[];

  taps?: number[];

  XHX?: number;

  XHT?: number;

  XXT?: number;

  XSCarray?: number[];

  thermal?: number;

  n?: number;

  m?: number;

  flRise?: number;

  hsRise?: number;

  "%loadLoss"?: number;

  "%noLoadLoss"?: number;

  normhkVA?: number;

  emerghkVA?: number;

  sub?: boolean;

  maxTap?: number;

  minTap?: number;

  numTaps?: number;

  subname?: string;

  "%imag"?: number;

  ppm_antifloat?: number;

  "%Rs"?: number[];

  XRConst?: boolean;

  leadLag?: LeadLagEnum;

  wdgCurrents?: string;

  normAmps?: number;

  emergAmps?: number;

  faultRate?: number;

  pctPerm?: number;

  repair?: number;

  baseFreq?: number;

  enabled?: boolean;

  constructor(options: AutoTransInterface);
  constructor(name: string, options?: OmitName<AutoTransInterface>);
  constructor(
    nameOrOptions: string | AutoTransInterface,

    optionalOptions?: OmitName<AutoTransInterface>,
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
