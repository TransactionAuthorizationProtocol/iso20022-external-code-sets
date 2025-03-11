/**
 * Specifies the creditor enrolment status reason code, as published in an external creditor enrolment status reason code set.
 * ISO20022 External Code
 * Original name: ExternalCreditorEnrolmentStatusReason1Code
 */
export enum CreditorEnrolmentStatusReason {
  /** Already existing creditor. */
  ACRD = "ACRD",
  /** Duplication. */
  AM05 = "AM05",
  /** Invalid file format. */
  FF01 = "FF01",
  /** Reference is not unique. */
  RF01 = "RF01",
  /** Regulatory Reason. */
  RR04 = "RR04",
  /** Invalid character set. */
  RR10 = "RR10",
  /** Technical rejection. */
  TRJT = "TRJT",
}