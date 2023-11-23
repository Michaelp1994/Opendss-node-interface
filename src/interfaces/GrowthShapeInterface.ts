import BaseInterface from "./BaseInterface";

/**   General  */
export interface GrowthShapeInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.GrowthShape#npts
   */
  npts?: number;
  /**
   *@inheritdoc Models.GrowthShape#year
   */
  year?: number[];
  /**
   *@inheritdoc Models.GrowthShape#mult
   */
  mult?: number[];
  /**
   *@inheritdoc Models.GrowthShape#csvfile
   */
  csvfile?: string;
  /**
   *@inheritdoc Models.GrowthShape#sngfile
   */
  sngfile?: string;
  /**
   *@inheritdoc Models.GrowthShape#dblfile
   */
  dblfile?: string;
}
