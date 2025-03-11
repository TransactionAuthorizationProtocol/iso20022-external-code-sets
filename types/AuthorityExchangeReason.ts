/**
 * Specifies the reason for the exchange with the national competent authority, as published in an external category purpose code list.
 * ISO20022 External Code
 * Original name: ExternalAuthorityExchangeReason1Code
 */
export enum AuthorityExchangeReason {
  /** Ad hoc request. */
  ADHR = "ADHR",
  /** Competent Authority for Buyer Branch. */
  CABB = "CABB",
  /** Competent Authority for Basket Constituant. */
  CABC = "CABC",
  /** Competent Authority for Buyer Transmitting Firm. */
  CABT = "CABT",
  /** Competent Authority for Decision Making Branch. */
  CADB = "CADB",
  /** Competent Authority for Direct Underlying. */
  CADU = "CADU",
  /** Competent Authority for Executing Branch. */
  CAEB = "CAEB",
  /** Competent Authority for Instrument. */
  CAFI = "CAFI",
  /** Competent Authority for Index. */
  CAIX = "CAIX",
  /** Competent Authority for Membership Branch. */
  CAMB = "CAMB",
  /** Competent Authority for Seller Branch. */
  CASB = "CASB",
  /** Competent Authority for Seller Transmitting Firm. */
  CAST = "CAST",
  /** Competent Authority for Trading Venue. */
  CATV = "CATV",
}