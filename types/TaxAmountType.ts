/**
 * Specifies the nature, or use, of the amount in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalTaxAmountType1Code
 */
export enum TaxAmountType {
  /** Tax accessed by city jurisdications within a country. */
  CITY = "CITY",
  /** Tax accessed by county jurisdications within a country. */
  CNTY = "CNTY",
  /** Tax accessed by local jurisdications within a country. */
  LOCL = "LOCL",
  /** Tax accessed by province jurisdications within a country. */
  PROV = "PROV",
  /** Tax accessed by state jurisdications within a country. */
  STAT = "STAT",
}