/**
 * Specifies the reason for the rejection of a claim non receipt, as published in an external claim non receipt rejection code set.
 * ISO20022 External Code
 * Original name: ExternalClaimNonReceiptRejection1Code
 */
export enum ClaimNonReceiptRejection {
  /** Already returned original SCT (SEPA Credit Transfer). */
  ARDT = "ARDT",
  /** Already rejected original SCT (SEPA Credit Transfer). */
  ARJT = "ARJT",
  /** Original credit transfer never received. */
  NOOR = "NOOR",
  /** Original credit transfer was received but is not processable. */
  RNPR = "RNPR",
  /** Regulatory reason. */
  RR04 = "RR04",
}