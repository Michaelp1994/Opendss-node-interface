import { SpectrumInterface } from "./SpectrumInterface";
import GeneralElement from "@components/GeneralElement";

/**   General  */
export default class Spectrum
  extends GeneralElement
  implements HasKeys<SpectrumInterface>
{
  _type = "Spectrum";

  parameters: Array<keyof this> = [
    "NumHarm",
    "harmonic",
    "%mag",
    "angle",
    "CSVFile",
    "like",
  ];

  /** Number of frequencies in this spectrum. (See CSVFile) */
  NumHarm?: number;

  /** Array of harmonic values. You can also use the syntax
   *
   * harmonic = (file=filename)     !for text file one value per line
   *
   * harmonic = (dblfile=filename)  !for packed file of doubles
   *
   * harmonic = (sngfile=filename)  !for packed file of singles */
  harmonic?: number[];

  /** Array of magnitude values, assumed to be in PERCENT. You can also use the syntax
   *
   * %mag = (file=filename)     !for text file one value per line
   *
   * %mag = (dblfile=filename)  !for packed file of doubles
   *
   * %mag = (sngfile=filename)  !for packed file of singles */
  "%mag"?: number[];

  /** Array of phase angle values, degrees.You can also use the syntax
   *
   * angle = (file=filename)     !for text file one value per line
   *
   * angle = (dblfile=filename)  !for packed file of doubles
   *
   * angle = (sngfile=filename)  !for packed file of singles */
  angle?: number[];

  /** File of spectrum points with (harmonic, magnitude-percent, angle-degrees) values, one set of 3 per line, in CSV format. If fewer than NUMHARM frequencies found in the file, NUMHARM is set to the smaller value. */
  CSVFile?: string;

  constructor(options: SpectrumInterface);
  constructor(name: string, options?: OmitName<SpectrumInterface>);
  constructor(
    nameOrOptions: string | SpectrumInterface,
    options?: OmitName<SpectrumInterface>,
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
