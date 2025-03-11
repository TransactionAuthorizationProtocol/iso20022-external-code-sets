/**
 * Specifies the external representment reason code in the format of character string with a maximum length of 4 characters. The list of valid codes is an external code list published separately.
 * ISO20022 External Code
 * Original name: ExternalRePresentmentReason1Code
 */
export enum RePresentmentReason {
  /** Amount corrected due to proof of transaction */
  AMCR = "AMCR",
  /** Liability Shift to acquirer due to missing card authentication method denied */
  CLSD = "CLSD",
  /** Credit previously issued */
  CRPI = "CRPI",
  /** Original transaction was valid */
  OTVA = "OTVA",
  /** Liability Shift to acquirer due to missing cardholder verification method denied */
  VLSD = "VLSD",
}