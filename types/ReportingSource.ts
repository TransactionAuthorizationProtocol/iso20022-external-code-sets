/**
 * Specifies the reporting source, as published in an external reporting source code list.
 * ISO20022 External Code
 * Original name: ExternalReportingSource1Code
 */
export enum ReportingSource {
  /** Statement or Report is based on accounting data. */
  ACCT = "ACCT",
  /** An account reconciliation system that provides full reconciliation that usually addresses checks */
  ARPF = "ARPF",
  /** An account reconciliation system that provides partial reconciliation that usually addresses checks */
  ARPP = "ARPP",
  /** A sub-application that reports presentment totals */
  CTDB = "CTDB",
  /** Statement or Report is based on custody data. */
  CUST = "CUST",
  /** Cash or deposit accounting system */
  DEPT = "DEPT",
  /** Deposit system that reports what has been collected from various financial institutions */
  DPCS = "DPCS",
  /** Processing system that captures and reports check data in a lockbox environment. */
  LKBX = "LKBX",
  /** Transaction submitted directly from PMI (Payment Market Infrastructure back-office system). */
  MIBO = "MIBO",
  /** Transactions submitted directly from participant / PSO (Payment System Operator) applications. */
  PFRE = "PFRE",
  /** A system that reports consolidated remittance information obtained from various , i.e., ACH, wires, lockbox, etc. */
  RCPT = "RCPT",
}