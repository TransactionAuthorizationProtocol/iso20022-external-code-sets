/**
 * Specifies the reversal reason, as published in an external reversal reason code list.
 * ISO20022 External Code
 * Original name: ExternalReversalReason1Code
 */
export enum ReversalReason {
  /** Wrong IBAN in SCT */
  AC03 = "AC03",
  /** Account number specified has been closed on the Receiver's books */
  AC04 = "AC04",
  /** Bank Operation code specified in the message is not valid for receiver */
  AG02 = "AG02",
  /** Duplication */
  AM05 = "AM05",
  /** Wrong amount in SCT */
  AM09 = "AM09",
  /** No Mandate */
  MD01 = "MD01",
  /** Creditor or creditor's agent should not have collected the direct debit */
  MD05 = "MD05",
  /** Reason has not been specified by end customer */
  MS02 = "MS02",
  /** Reason has not been specified by agent. */
  MS03 = "MS03",
  /** Wrong BIC in SCT */
  RC07 = "RC07",
  /** Associated message was received after agreed processing cut-off time. */
  TM01 = "TM01",
}