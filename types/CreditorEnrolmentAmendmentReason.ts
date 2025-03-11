/**
 * Specifies the creditor enrolment amendment reason code, as published in an external creditor enrolment amendment reason code set.
 * ISO20022 External Code
 * Original name: ExternalCreditorEnrolmentAmendmentReason1Code
 */
export enum CreditorEnrolmentAmendmentReason {
  /** Duplication. */
  AM05 = "AM05",
  /** Amendment requested by the customer. */
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