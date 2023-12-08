import BaseInterface from "@components/BaseInterface";

/**   General  */
export interface XYcurveInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.XYcurve#npts
   */
  npts?: number;
  /**
   *@inheritdoc Models.XYcurve#Points
   */
  Points?: number[];
  /**
   *@inheritdoc Models.XYcurve#Yarray
   */
  Yarray?: number[];
  /**
   *@inheritdoc Models.XYcurve#Xarray
   */
  Xarray?: number[];
  /**
   *@inheritdoc Models.XYcurve#csvfile
   */
  csvfile?: string;
  /**
   *@inheritdoc Models.XYcurve#sngfile
   */
  sngfile?: string;
  /**
   *@inheritdoc Models.XYcurve#dblfile
   */
  dblfile?: string;
  /**
   *@inheritdoc Models.XYcurve#x
   */
  x?: number;
  /**
   *@inheritdoc Models.XYcurve#y
   */
  y?: number;
  /**
   *@inheritdoc Models.XYcurve#Xshift
   */
  Xshift?: number;
  /**
   *@inheritdoc Models.XYcurve#Yshift
   */
  Yshift?: number;
  /**
   *@inheritdoc Models.XYcurve#Xscale
   */
  Xscale?: number;
  /**
   *@inheritdoc Models.XYcurve#Yscale
   */
  Yscale?: number;
}
