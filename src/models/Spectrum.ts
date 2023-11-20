/**   General  */
export default class Spectrum {
  /** Name of the component */
  name: string;
  /** Number of frequencies in this spectrum. (See CSVFile)*/
  NumHarm: number;
  /** Array of harmonic values. You can also use the syntax
   *
   * harmonic = (file=filename)     !for text file one value per line
   *
   * harmonic = (dblfile=filename)  !for packed file of doubles
   *
   * harmonic = (sngfile=filename)  !for packed file of singles*/
  harmonic: number[];
  /** Array of magnitude values, assumed to be in PERCENT. You can also use the syntax
   *
   * %mag = (file=filename)     !for text file one value per line
   *
   * %mag = (dblfile=filename)  !for packed file of doubles
   *
   * %mag = (sngfile=filename)  !for packed file of singles*/
  "%mag": number[];
  /** Array of phase angle values, degrees.You can also use the syntax
   *
   * angle = (file=filename)     !for text file one value per line
   *
   * angle = (dblfile=filename)  !for packed file of doubles
   *
   * angle = (sngfile=filename)  !for packed file of singles*/
  angle: number[];
  /** File of spectrum points with (harmonic, magnitude-percent, angle-degrees) values, one set of 3 per line, in CSV format. If fewer than NUMHARM frequencies found in the file, NUMHARM is set to the smaller value.*/
  CSVFile: string;
  /** Make like another object, e.g.:
   *
   * New Capacitor.C2 like=c1  ...*/
  like: string;
}
