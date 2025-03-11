/**
 * Specifies the status of an individual payment instructions, as published in an external payment transaction status code set.
 * ISO20022 External Code
 * Original name: ExternalPaymentTransactionStatus1Code
 */
export enum PaymentTransactionStatus {
  /** Settlement on the creditor's account has been completed. */
  ACCC = "ACCC",
  /** Preceding check of technical validation was successful. Customer profile check was also successful. */
  ACCP = "ACCP",
  /** Preceding check of technical validation and customer profile was successful and an automatic funds check was positive. */
  ACFC = "ACFC",
  /** Preceding check of technical validation and customer profile was successful, and an automatic funds check was positive, but an explicit confirmation by the initiating party is outstanding. */
  ACFW = "ACFW",
  /** Payment instruction to issue a cheque has been accepted, and the cheque has been issued but not yet been deposited or cleared. */
  ACIS = "ACIS",
  /** Status of transaction released from the Debtor Agent and accepted by the clearing. */
  ACPD = "ACPD",
  /** Settlement completed. Usage : this can be used by a Market Infrastructure reporting to Infrastructure Participant or an Account Servicer to Account Owner to report that the transaction account entry has been completed. Warning : this status is provided for transaction status reasons, not for financial information. It can only be used after bilateral agreement */
  ACSC = "ACSC",
  /** All preceding checks such as technical validation and customer profile were successful and therefore the payment instruction has been accepted for execution. */
  ACSP = "ACSP",
  /** Authentication and syntactical and semantical validation are successful */
  ACTC = "ACTC",
  /** Instruction is accepted but a change will be made, such as date or remittance not sent. */
  ACWC = "ACWC",
  /** Payment instruction included in the credit transfer is accepted without being posted to the creditor customer’s account. */
  ACWP = "ACWP",
  /** Payment transaction previously reported with status 'ACWP' is blocked, for example, funds will neither be posted to the Creditor's account, nor be returned to the Debtor. */
  BLCK = "BLCK",
  /** Payment initiation has been successfully cancelled after having received a request for cancellation. Usage: code to be used in the context of APIs only. */
  CANC = "CANC",
  /** Cash has been picked up by the Creditor. */
  CPUC = "CPUC",
  /** Payment initiation needs multiple authentications, where some but not yet all have been performed. Syntactical and semantical validations are successful. */
  PATC = "PATC",
  /** Payment instruction is pending. Further checks and status update will be performed. */
  PDNG = "PDNG",
  /** Request for Payment has been presented to the Debtor. */
  PRES = "PRES",
  /** Verification of Payee check has been applied to received transaction stating to be complete without mismatching data. */
  RCVC = "RCVC",
  /** Payment instruction has been received. */
  RCVD = "RCVD",
  /** Payment instruction has been rejected. */
  RJCT = "RJCT",
  /** Verification of Payee checks have been applied to received transaction stating to be completed containing mismatching data. */
  RVCM = "RVCM",
  /** Verification of Payee check has been applied to received transaction stating to be complete with data matching closely. */
  RVMC = "RVMC",
  /** Verification of Payee check has been applied to received transaction stating to be complete with not applicable data. */
  RVNA = "RVNA",
  /** Verification of party check on the transaction is not yet completed. */
  RVNC = "RVNC",
  /** Verification of Payee check has been applied to received transaction stating to be complete with mismatching data. */
  RVNM = "RVNM",
}