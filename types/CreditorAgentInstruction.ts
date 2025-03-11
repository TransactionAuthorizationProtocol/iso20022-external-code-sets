/**
 * Specifies further instructions concerning the processing of a payment instruction, as provided to the creditor agent.
 * ISO20022 External Code
 * Original name: ExternalCreditorAgentInstruction1Code
 */
export enum CreditorAgentInstruction {
  /** (Ultimate) creditor must be paid by cheque. */
  CHQB = "CHQB",
  /** Amount of money must be held for the (ultimate) creditor, who will call. Pay on identification. */
  HOLD = "HOLD",
  /** Please advise/contact (ultimate) creditor/claimant by phone. */
  PHOB = "PHOB",
  /** Indicates that a payer token is requested/used. */
  PRTK = "PRTK",
  /** Further information regarding the intended recipient. */
  RECI = "RECI",
  /** Use of Secondary Identification of Creditor Account (which may relate to Head Office Collection Account, Building Society Roll Number or Credit Card Primary Account Number). */
  SEID = "SEID",
  /** Please advise/contact (ultimate) creditor/claimant by the most efficient means of telecommunication. */
  TELB = "TELB",
  /** Token found with counterparty mismatch. */
  TKCM = "TKCM",
  /** Single Use Token already used. */
  TKSG = "TKSG",
  /** Token found with suspended status. */
  TKSP = "TKSP",
  /** Token found with value limit rule violation. */
  TKVE = "TKVE",
  /** Token expired. */
  TKXP = "TKXP",
  /** Token information. */
  TOKN = "TOKN",
  /** Additional validation information to be used in conjunction with the token. */
  VLTK = "VLTK",
}