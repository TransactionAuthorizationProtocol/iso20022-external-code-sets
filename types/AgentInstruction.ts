/**
 * Specifies further instructions for the agent concerning the processing of an instruction.
 * ISO20022 External Code
 * Original name: ExternalAgentInstruction1Code
 */
export enum AgentInstruction {
  /** (Ultimate) creditor must be paid by cheque. */
  CHQB = "CHQB",
  /** Amount of money must be held for the (ultimate) creditor, who will call. Pay on identification. */
  HOLD = "HOLD",
  /** Additional Information to an inquiry reason must be provided. */
  INQR = "INQR",
  /** (Ultimate) creditor to be paid only after verification of identity. */
  PBEN = "PBEN",
  /** Please advise/contact next agent by phone. */
  PHOA = "PHOA",
  /** Please advise/contact (ultimate) creditor/claimant by phone. */
  PHOB = "PHOB",
  /** Please advise/contact next agent by the most efficient means of telecommunication. */
  TELA = "TELA",
  /** Please advise/contact (ultimate) creditor/claimant by the most efficient means of telecommunication. */
  TELB = "TELB",
  /** Payment instruction will be valid and eligible for execution from the date and time stipulated. */
  TFRO = "TFRO",
  /** Payment instruction is valid and eligible for execution until the date and time stipulated. Otherwise, the payment instruction will be rejected. */
  TTIL = "TTIL",
}