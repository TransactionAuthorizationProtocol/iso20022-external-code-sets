/**
 * Specifies the reason of an unable to apply due to incorrect data, as published in an external unable to apply incorrect data code set.
 * ISO20022 External Code
 * Original name: ExternalUnableToApplyIncorrectData1Code
 */
export enum UnableToApplyIncorrectData {
  /** Related transaction reference is incorrect. */
  IN01 = "IN01",
  /** Payment type service level is incorrect (former IncorrectBankOperationCode). */
  IN02 = "IN02",
  /** Payment type category purpose is incorrect (former IncorrectInstructionCode). */
  IN03 = "IN03",
  /** RequestedExecutionDate is incorrect. */
  IN04 = "IN04",
  /** Interbank settlement date is incorrect (former IncorrectValueDate). */
  IN05 = "IN05",
  /** Interbank settlement amount is incorrect (former IncorrectSettledAmount). */
  IN06 = "IN06",
  /** Debtor is incorrect. */
  IN07 = "IN07",
  /** DebtorAccount is incorrect. */
  IN08 = "IN08",
  /** InstructedReimbursementAgent is incorrect (former IncorrectReceiverCorrespondent). */
  IN09 = "IN09",
  /** ThirdReimbursementAgent is incorrect (former IncorrectThirdReimbursementInstitution). */
  IN10 = "IN10",
  /** Payment type clearing channel is incorrect (former PaymentScheme). */
  IN11 = "IN11",
  /** CreditorAgentAccount is incorrect (former IncorrectAccountOfBeneficiaryInstitution). */
  IN12 = "IN12",
  /** Creditor is incorrect. */
  IN13 = "IN13",
  /** Creditor account is incorrect. */
  IN14 = "IN14",
  /** RemittanceInformation is incorrect. */
  IN15 = "IN15",
  /** Transaction payment purpose is incorrect. */
  IN16 = "IN16",
  /** ChargeBearer is incorrect (former IncorrectDetailsOfCharges). */
  IN17 = "IN17",
  /** Instruction for next agent is incorrect (former IncorrectSenderToReceiverInformation). */
  IN18 = "IN18",
  /** Instruction for creditor agent is incorrect (former IncorrectInstructionForFinalAgent). */
  IN19 = "IN19",
  /** Amount in statement entry is incorrect. */
  IN33 = "IN33",
  /** SettlementAccount is incorrect. */
  IN36 = "IN36",
  /** Instructing reimbursement agent is incorrect. */
  IN37 = "IN37",
  /** Debtor's address is incorrect. */
  IN38 = "IN38",
  /** Creditor's address is incorrect. */
  IN39 = "IN39",
  /** RelatedRemittanceInformation is incorrect. */
  IN40 = "IN40",
  /** Name and account of creditor are not matching. */
  MM20 = "MM20",
  /** Name and account of debtor are not matching. */
  MM21 = "MM21",
  /** Name and account of creditor agent (former FinalAgent) are not matching. */
  MM22 = "MM22",
  /** Insufficient or incoherent details about the debtor with respect to regulatory requirements. */
  MM23 = "MM23",
  /** Insufficient or incoherent details about the creditor with respect to regulatory requirements. */
  MM24 = "MM24",
  /** Payment is pending execution. For reasons of regulatory requirements we request further information on the account number or unique identification of the debtor. */
  MM25 = "MM25",
  /** Payment is pending execution. For reasons of regulatory requirements we request further information on the name and/or address of the debtor. */
  MM26 = "MM26",
  /** Payment has been executed. For reasons of regulatory requirements we request further information on the account number or unique identification of the debtor. */
  MM27 = "MM27",
  /** Payment has been executed. For reasons of regulatory requirements we request further information on the name and/or address of the debtor. */
  MM28 = "MM28",
  /** Payment is pending execution. For reasons of regulatory requirements we request further information on the account number or unique identification of the creditor. */
  MM29 = "MM29",
  /** Payment is pending execution. For reasons of regulatory requirements we request further information on the name and/or address of the creditor. */
  MM30 = "MM30",
  /** Payment has been executed. For reasons of regulatory requirements we request further information on the account number or unique identification of the creditor. */
  MM31 = "MM31",
  /** Payment has been executed. For reasons of regulatory requirements we request further information on the name and/or address of the creditor. */
  MM32 = "MM32",
  /** Insufficient charges details provided. */
  MM34 = "MM34",
  /** Payment purpose needs to be further specified. */
  MM35 = "MM35",
  /** See narrative field for additional information. */
  NARR = "NARR",
}