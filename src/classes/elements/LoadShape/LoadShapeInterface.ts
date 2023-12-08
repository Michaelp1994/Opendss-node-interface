import { LoadShapeActionEnum } from "@enums/enums";
import BaseInterface from "@components/BaseInterface";

/**   General  */
export interface LoadShapeInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.LoadShape#npts
   */
  npts?: number;
  /**
   *@inheritdoc Models.LoadShape#interval
   */
  interval?: number;
  /**
   *@inheritdoc Models.LoadShape#mult
   */
  mult?: number[];
  /**
   *@inheritdoc Models.LoadShape#hour
   */
  hour?: number[];
  /**
   *@inheritdoc Models.LoadShape#mean
   */
  mean?: number;
  /**
   *@inheritdoc Models.LoadShape#stddev
   */
  stddev?: number;
  /**
   *@inheritdoc Models.LoadShape#csvfile
   */
  csvfile?: string;
  /**
   *@inheritdoc Models.LoadShape#sngfile
   */
  sngfile?: string;
  /**
   *@inheritdoc Models.LoadShape#dblfile
   */
  dblfile?: string;
  /**
   *@inheritdoc Models.LoadShape#action
   */
  action?: LoadShapeActionEnum;
  /**
   *@inheritdoc Models.LoadShape#qmult
   */
  qmult?: number[];
  /**
   *@inheritdoc Models.LoadShape#UseActual
   */
  UseActual?: boolean;
  /**
   *@inheritdoc Models.LoadShape#Pmax
   */
  Pmax?: number;
  /**
   *@inheritdoc Models.LoadShape#Qmax
   */
  Qmax?: number;
  /**
   *@inheritdoc Models.LoadShape#sinterval
   */
  sinterval?: number;
  /**
   *@inheritdoc Models.LoadShape#minterval
   */
  minterval?: number;
  /**
   *@inheritdoc Models.LoadShape#Pbase
   */
  Pbase?: number;
  /**
   *@inheritdoc Models.LoadShape#Qbase
   */
  Qbase?: number;
  /**
   *@inheritdoc Models.LoadShape#Pmult
   */
  Pmult?: number[];
  /**
   *@inheritdoc Models.LoadShape#PQCSVFile
   */
  PQCSVFile?: string;
  /**
   *@inheritdoc Models.LoadShape#MemoryMapping
   */
  MemoryMapping?: boolean;
}
