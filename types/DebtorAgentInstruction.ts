/**
 * Specifies further instructions concerning the processing of a payment instruction, as provided to the creditor agent.
 * ISO20022 External Code
 * Original name: ExternalDebtorAgentInstruction1Code
 */
export enum DebtorAgentInstruction {
  /** (Ultimate) creditor must be paid by cheque. */
  CHQB = "CHQB",
  /** Amount of money must be held for the (ultimate) creditor, who will call. Pay on identification. */
  HOLD = "HOLD",
  /** Please advise/contact (ultimate) creditor/claimant by phone. */
  PHOB = "PHOB",
  /** Indicates that a payer token is requested/used. */
  PRTK = "PRTK",
  /** Please advise/contact (ultimate) creditor/claimant by the most efficient means of telecommunication. */
  TELB = "TELB",
  /** Token information. */
  TOKN = "TOKN",
  /** Additional validation information to be used in conjunction with the token. */
  VLTK = "VLTK",
}