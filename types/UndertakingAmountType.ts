/**
 * Specifies the external undertaking amount type code in the format of a character string with a maximum length of 4 characters. The list of valid codes is an external code list published separately.
 * ISO20022 External Code
 * Original name: ExternalUndertakingAmountType1Code
 */
export enum UndertakingAmountType {
  /** Amount is an increase. */
  INCR = "INCR",
  /** Amount is a reduction. */
  REDC = "REDC",
}