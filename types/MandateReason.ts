/**
 * Specifies the external mandate processing reason code in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalMandateReason1Code
 */
export enum MandateReason {
  /** Format of the account number specified is not correct */
  AC01 = "AC01",
  /** Account number specified has been closed on the Receiver's books */
  AC04 = "AC04",
  /** Account specified is blocked, prohibiting posting of transactions against it. */
  AC06 = "AC06",
  /** Transaction forbidden on this type of account (formerly NoAgreement) */
  AG01 = "AG01",
  /** Bank Operation code specified in the message is not valid for receiver */
  AG02 = "AG02",
  /** Specific transaction/message amount is greater than allowed maximum */
  AM02 = "AM02",
  /** Specified message amount is a non processable currency outside of existing agreement */
  AM03 = "AM03",
  /** Duplication */
  AM05 = "AM05",
  /** Identification of end customer is not consistent with associated account number. (formerly CreditorConsistency). */
  BE01 = "BE01",
  /** Specification of creditor's address, which is required for payment, is missing/not correct (formerly IncorrectCreditorAddress). */
  BE04 = "BE04",
  /** Party who initiated the message is not recognised by the end customer */
  BE05 = "BE05",
  /** End customer specified is not known at associated Sort/National Bank Code or does no longer exist in the books */
  BE06 = "BE06",
  /** Specification of debtor's address, which is required for payment, is missing/not correct. */
  BE07 = "BE07",
  /** Invalid date (eg, wrong settlement date) */
  DT01 = "DT01",
  /** File format incomplete or invalid */
  FF01 = "FF01",
  /** No Mandate */
  MD01 = "MD01",
  /** Mandate related information data required by the scheme is missing. */
  MD02 = "MD02",
  /** End customer is deceased. */
  MD07 = "MD07",
  /** Receiving agent does not offer specified Mandate services */
  MD08 = "MD08",
  /** Account is not open to specified Mandates services */
  MD09 = "MD09",
  /** Account is not open to specified Mandates services for this particular creditor */
  MD10 = "MD10",
  /** Agent to whom the message needs to be forwarded cannot be located */
  MD11 = "MD11",
  /** Mandate identification is not unique to the creditor */
  MD12 = "MD12",
  /** There is a problem with the customer authentication */
  MD13 = "MD13",
  /** Agent in the payment workflow is incorrect */
  MD14 = "MD14",
  /** Currency of the transaction is incorrect */
  MD15 = "MD15",
  /** Cancellation/amendment requested by the debtor */
  MD16 = "MD16",
  /** Cancellation/amendment requested by the creditor */
  MD17 = "MD17",
  /** Cancellation/amendment requested by the creditor and the debtor */
  MD18 = "MD18",
  /** Mandate cancellation following early reimbursement of the debit by the debtor */
  MD19 = "MD19",
  /** Mandate cancellation following validity expiration */
  MD20 = "MD20",
  /** Mandate cancellation due to suspected fraud */
  MD21 = "MD21",
  /** Mandate cancellation following mandate initiation cancellation */
  MD22 = "MD22",
  /** Mandate cancellation following mandate amendment cancellation */
  MD23 = "MD23",
  /** Reason has not been specified by end customer */
  MS02 = "MS02",
  /** Reason has not been specified by agent. */
  MS03 = "MS03",
  /** Reason is provided as narrative information in the additional reason information. */
  NARR = "NARR",
  /** Bank Identifier code specified in the message has an incorrect format (formerly IncorrectFormatForRoutingCode). */
  RC01 = "RC01",
  /** Transaction reference is not unique within the message. */
  RF01 = "RF01",
  /** Specification of the debtor’s account or unique identification needed for reasons of regulatory requirements is insufficient or missing */
  RR01 = "RR01",
  /** Specification of the debtor’s name and/or address needed for regulatory requirements is insufficient or missing. */
  RR02 = "RR02",
  /** Specification of the creditor’s name and/or address needed for regulatory requirements is insufficient or missing. */
  RR03 = "RR03",
  /** Regulatory Reason */
  RR04 = "RR04",
  /** Due to specific service offered by the Debtor Agent */
  SL01 = "SL01",
  /** Whitelisting service offered by the Debtor Agent; Debtor has not included the Creditor on its “Whitelist” (yet). In the Whitelist the Debtor may list all allowed Creditors to debit Debtor bank account. */
  SL11 = "SL11",
  /** Blacklisting service offered by the Debtor Agent; Debtor included the Creditor on his “Blacklist”. In the Blacklist the Debtor may list all Creditors not allowed to debit Debtor bank account. */
  SL12 = "SL12",
  /** Due to Maximum allowed Direct Debit Transactions per period service offered by the Debtor Agent. */
  SL13 = "SL13",
  /** Due to Maximum allowed Direct Debit Transaction amount service offered by the Debtor Agent. */
  SL14 = "SL14",
}