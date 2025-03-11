/**
 * Specifies the investigation status, as published in an external investigation status code set.
 * ISO20022 External Code
 * Original name: ExternalInvestigationStatus1Code
 */
export enum InvestigationStatus {
  /** Investigation is closed. */
  CLSD = "CLSD",
  /** Investigation is opened/pending. */
  PDNG = "PDNG",
  /** Investigation is rejected. */
  RJCT = "RJCT",
}