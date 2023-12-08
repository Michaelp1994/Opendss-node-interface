import BaseInterface from "@components/BaseInterface";

/**   General  */
export interface GrowthShapeInterface extends BaseInterface {
  /**
   *@inheritdoc Models.GrowthShape#npts
   */
  npts: number;
  /**
   *@inheritdoc Models.GrowthShape#year
   */
  year: number[];
  /**
   *@inheritdoc Models.GrowthShape#mult
   */
  mult: number[];
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
