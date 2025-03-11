/**
 * Specifies the status of a group of payment instructions, as published in an external payment group status code set.
 * ISO20022 External Code
 * Original name: ExternalPaymentGroupStatus1Code
 */
export enum PaymentGroupStatus {
  /** Settlement on the creditor's account has been completed. */
  ACCC = "ACCC",
  /** Preceding check of technical validation was successful. Customer profile check was also successful. */
  ACCP = "ACCP",
  /** Settlement on the debtor's account has been completed. Usage : this can be used by the first agent to report to the debtor that the transaction has been completed. Warning : this status is provided for transaction status reasons, not for financial information. It can only be used after bilateral agreement */
  ACSC = "ACSC",
  /** All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution. */
  ACSP = "ACSP",
  /** Authentication and syntactical and semantical validation are successful */
  ACTC = "ACTC",
  /** Instruction is accepted but a change will be made, such as date or remittance not sent. */
  ACWC = "ACWC",
  /** A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status. */
  PART = "PART",
  /** Payment initiation or individual transaction included in the payment initiation is pending. Further checks and status update will be performed. */
  PDNG = "PDNG",
  /** Verification of Payee check have been applied to received transactions stating to be complete without mismatching data. */
  RCVC = "RCVC",
  /** Payment initiation has been received by the receiving agent */
  RCVD = "RCVD",
  /** Payment initiation or individual transaction included in the payment initiation has been rejected. */
  RJCT = "RJCT",
  /** Verification of Payee checks have been applied to received transactions stating to be complete containing mismatching data. */
  RVCM = "RVCM",
  /** Verification of party check on transactions received is not yet completed. */
  RVNC = "RVNC",
}