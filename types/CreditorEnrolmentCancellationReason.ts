/**
 * Specifies the creditor enrolment cancellation reason code, as published in an external creditor enrolment cancellation reason code set.
 * ISO20022 External Code
 * Original name: ExternalCreditorEnrolmentCancellationReason1Code
 */
export enum CreditorEnrolmentCancellationReason {
  /** Duplication. */
  AM05 = "AM05",
  /** Cancellation requested by the customer. */
  CUST = "CUST",
  /** Reference is not unique. */
  RF01 = "RF01",
  /** Regulatory Reason. */
  RR04 = "RR04",
  /** Technical rejection. */
  TRJT = "TRJT",
  /** Unknown creditor. */
  UCRD = "UCRD",
}