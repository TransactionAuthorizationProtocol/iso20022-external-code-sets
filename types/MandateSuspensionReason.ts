/**
 * Specifies the external mandate suspension reason code in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalMandateSuspensionReason1Code
 */
export enum MandateSuspensionReason {
  /** Mandate suspended due to amendment of the contract. */
  CTAM = "CTAM",
  /** Mandate suspended due to cancellation of the contract, requested by the debtor. */
  CTCA = "CTCA",
  /** Mandate suspended due to the contract that expired. */
  CTEX = "CTEX",
  /** Mandate suspended as final collection took place. */
  MCFC = "MCFC",
  /** Mandate suspended as the once off collection took place. */
  MCOC = "MCOC",
  /** Mandate suspended after 7 consecutive unsuccessful collections. */
  MSUC = "MSUC",
}