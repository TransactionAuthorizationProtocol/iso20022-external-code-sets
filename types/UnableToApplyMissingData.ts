/**
 * Specifies the reason of an unable to apply due to missing data, as published in an external unable to apply missing data code set.
 * ISO20022 External Code
 * Original name: ExternalUnableToApplyMissingData1Code
 */
export enum UnableToApplyMissingData {
  /** RemittanceInformation is missing. */
  MS01 = "MS01",
  /** Instruction for next agent is missing (former MissingSenderToReceiverInformation split into debtor, credit and next agent information). */
  MS02 = "MS02",
  /** Debtor is missing. */
  MS03 = "MS03",
  /** DebtorAccount is missing. */
  MS04 = "MS04",
  /** DebtorAgent is missing (former MissingFirstAgent for credit transfers). */
  MS05 = "MS05",
  /** Amount is missing. */
  MS06 = "MS06",
  /** SettlementAccount is missing. (former MissingNostroVostroAccount). */
  MS07 = "MS07",
  /** Intermediary is missing. */
  MS08 = "MS08",
  /** InstructingReimbursementAgent is missing (former MissingReimbursementAgent1). */
  MS09 = "MS09",
  /** InstructedReimbursementAgent is missing (former MissingReimbursementAgent2). */
  MS10 = "MS10",
  /** Third reimbursement agent is missing (former MissingReimbursementAgent). */
  MS11 = "MS11",
  /** Creditor is missing. */
  MS12 = "MS12",
  /** CreditorAccount is missing. */
  MS13 = "MS13",
  /** Payment instruction is missing. */
  MS14 = "MS14",
  /** Creditor agent is missing (former MissingFirstAgent for direct debits). */
  MS15 = "MS15",
  /** Instruction for creditor agent is missing (former MissingSenderToReceiverInformation split into debtor, credit and next agent information). */
  MS16 = "MS16",
  /** Instruction for debtor agent is missing (former MissingSenderToReceiverInformation split into debtor, credit and next agent information). */
  MS17 = "MS17",
  /** RelatedRemittanceInformation is missing. */
  MS18 = "MS18",
  /** See narrative field for additional information. */
  NARR = "NARR",
}