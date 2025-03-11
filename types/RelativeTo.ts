/**
 * Specifies the external relative to code in the format of a character string with a maximum length of 4 characters. The list of valid codes is an external code list published separately.
 * ISO20022 External Code
 * Original name: ExternalRelativeTo1Code
 */
export enum RelativeTo {
  /** Percentage rate expressed relative to the value of goods. */
  GOOD = "GOOD",
  /** Percentage rate expressed relative to the payment amount. */
  PAYM = "PAYM",
  /** Percentage rate expressed relative to the undertaking amount. */
  UNDG = "UNDG",
}