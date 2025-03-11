/**
 * Specifies the reason for the rejection of a modification, as published in an external payment modification rejection code set.
 * ISO20022 External Code
 * Original name: ExternalPaymentModificationRejection1Code
 */
export enum PaymentModificationRejection {
  /** Related transaction reference cannot be modified. */
  UM01 = "UM01",
  /** Service level element of payment type cannot be modified(former UnableToModifyBankOperationCode). */
  UM02 = "UM02",
  /** Category purpose element of payment type cannot be modified (former UnableToModifyInstructionCode). */
  UM03 = "UM03",
  /** RequestedExecutionDate cannot be modified. */
  UM04 = "UM04",
  /** InterbankSettlementDate cannot be modified (former UnableToModifyValueDate). */
  UM05 = "UM05",
  /** SettlementAccount cannot be modified (former UnableToModifyInterbankSettlementAccount). */
  UM06 = "UM06",
  /** Debtor cannot be modified. */
  UM07 = "UM07",
  /** DebtorAccount cannot be modified. */
  UM08 = "UM08",
  /** InstructedReimbursementAgent cannot be modified (former UnableToModifyReceiverCorrespondent). */
  UM09 = "UM09",
  /** ThirdReimbursementAgent cannot be modified (former UnableToModifyThirdReimbursementInstitution). */
  UM10 = "UM10",
  /** Clearing Channel element of payment type cannot be modified (former UnableToModifyPaymentScheme) */
  UM11 = "UM11",
  /** Creditor agent account cannot be modified (former UnableToModifyAccountOfBeneficiaryInstitution) */
  UM12 = "UM12",
  /** Creditor cannot be modified. */
  UM13 = "UM13",
  /** Creditor account cannot be modified. */
  UM14 = "UM14",
  /** Remittance information cannot be modified. */
  UM15 = "UM15",
  /** PaymentPurpose cannot be modified. */
  UM16 = "UM16",
  /** Charge bearer cannot be modified (former UnableToModifyDetailsOfCharges). */
  UM17 = "UM17",
  /** Instruction for next agent cannot be modified (former UnableToModifySenderToReceiver). */
  UM18 = "UM18",
  /** Instruction for creditor agent cannot be modified. (former UnableToModifyInstructionForFinalAgent). */
  UM19 = "UM19",
  /** Used to inform of cancellation and request a new payment instruction. This should only be used if an agent does not want to modify a pending payment. */
  UM20 = "UM20",
  /** Modification is not possible and the cancellation is requested. */
  UM21 = "UM21",
  /** Debtor agent account cannot be modified (applicable for direct debits). */
  UM22 = "UM22",
  /** Interbank settlement amount cannot be modified. */
  UM23 = "UM23",
  /** Instruction for debtor agent cannot be modified (applicable for direct debits) */
  UM24 = "UM24",
  /** Requested collection date cannot be modified (applicable for direct debits) */
  UM25 = "UM25",
  /** Payment type cannot be modified. */
  UM26 = "UM26",
  /** Instructed or equivalent amount cannot be modified. */
  UM27 = "UM27",
  /** Priority of payment message cannot be modified. */
  UM28 = "UM28",
}