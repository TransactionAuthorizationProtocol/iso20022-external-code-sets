/**
 * Specifies the external mandate status code in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalMandateStatus1Code
 */
export enum MandateStatus {
  /** The mandate is active. */
  ACTV = "ACTV",
  /** The mandate is cancelled. */
  CANC = "CANC",
  /** The mandate has passed the end date. */
  EXPI = "EXPI",
  /** The mandate is put on hold. */
  SUSP = "SUSP",
}