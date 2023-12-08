import BaseInterface from "@components/BaseInterface";

/**   General  */
export interface SpectrumInterface extends BaseInterface {
  /** Name of the component */
  name: string;
  /**
   *@inheritdoc Models.Spectrum#NumHarm
   */
  NumHarm?: number;
  /**
   *@inheritdoc Models.Spectrum#harmonic
   */
  harmonic?: number[];
  /**
   *@inheritdoc Models.Spectrum#%mag
   */
  "%mag"?: number[];
  /**
   *@inheritdoc Models.Spectrum#angle
   */
  angle?: number[];
  /**
   *@inheritdoc Models.Spectrum#CSVFile
   */
  CSVFile?: string;
}
