/**
 * Specifies the return reason, as published in an external return reason code list.
 * ISO20022 External Code
 * Original name: ExternalReturnReason1Code
 */
export enum ReturnReason {
  /** Format of the account number specified is not correct */
  AC01 = "AC01",
  /** Debtor account number invalid or missing. */
  AC02 = "AC02",
  /** Wrong IBAN in SCT */
  AC03 = "AC03",
  /** Account number specified has been closed on the bank of account's books */
  AC04 = "AC04",
  /** Account specified is blocked, prohibiting posting of transactions against it. */
  AC06 = "AC06",
  /** Creditor account number closed. */
  AC07 = "AC07",
  /** Debtor account type is missing or invalid */
  AC13 = "AC13",
  /** An agent in the payment chain is invalid. */
  AC14 = "AC14",
  /** Account details have changed. */
  AC15 = "AC15",
  /** Account is in sequestration. */
  AC16 = "AC16",
  /** Account is in liquidation. */
  AC17 = "AC17",
  /** Transaction forbidden on this type of account (formerly NoAgreement) */
  AG01 = "AG01",
  /** Bank Operation code specified in the message is not valid for receiver */
  AG02 = "AG02",
  /** Debtor account cannot be debited for a generic reason. Usage: Code value may be used in general purposes and as a replacement for AM04 if debtor bank does not reveal its customer's insufficient funds for privacy reasons. */
  AG07 = "AG07",
  /** Agent in the payment workflow is incorrect. */
  AGNT = "AGNT",
  /** Specified message amount is equal to zero */
  AM01 = "AM01",
  /** Specific transaction/message amount is greater than allowed maximum */
  AM02 = "AM02",
  /** Specified message amount is an non processable currency outside of existing agreement */
  AM03 = "AM03",
  /** Amount of funds available to cover specified message amount is insufficient. */
  AM04 = "AM04",
  /** Duplication */
  AM05 = "AM05",
  /** Specified transaction amount is less than agreed minimum. */
  AM06 = "AM06",
  /** Amount specified in message has been blocked by regulatory authorities. */
  AM07 = "AM07",
  /** Amount received is not the amount agreed or expected */
  AM09 = "AM09",
  /** Sum of instructed amounts does not equal the control sum. */
  AM10 = "AM10",
  /** Already returned original SCT */
  ARDT = "ARDT",
  /** Identification of end customer is not consistent with associated account number, organisation ID or private ID. */
  BE01 = "BE01",
  /** Specification of creditor's address, which is required for payment, is missing/not correct (formerly IncorrectCreditorAddress). */
  BE04 = "BE04",
  /** Party who initiated the message is not recognised by the end customer */
  BE05 = "BE05",
  /** End customer specified is not known at associated Sort/National Bank Code or does no longer exist in the books */
  BE06 = "BE06",
  /** Specification of debtor's address, which is required for payment, is missing/not correct. */
  BE07 = "BE07",
  /** Returned as a result of a bank error. */
  BE08 = "BE08",
  /** Debtor country code is missing or invalid. */
  BE10 = "BE10",
  /** Creditor country code is missing or invalid. */
  BE11 = "BE11",
  /** Debtor or Ultimate Debtor identification code missing or invalid. */
  BE16 = "BE16",
  /** Creditor or Ultimate Creditor identification code missing or invalid. */
  BE17 = "BE17",
  /** Authorisation is cancelled. */
  CN01 = "CN01",
  /** Creditor bank is not registered under this BIC in the CSM */
  CNOR = "CNOR",
  /** Cash not picked up by Creditor or cash could not be delivered to Creditor */
  CNPC = "CNPC",
  /** Currency of the payment is incorrect */
  CURR = "CURR",
  /** Cancellation requested by the Debtor */
  CUST = "CUST",
  /** Return of Covering Settlement due to the underlying Credit Transfer details not being received. */
  DC04 = "DC04",
  /** Debtor bank is not registered under this BIC in the CSM */
  DNOR = "DNOR",
  /** Return following technical problems resulting in erroneous transaction. */
  DS28 = "DS28",
  /** Invalid date (eg, wrong settlement date) */
  DT01 = "DT01",
  /** Cheque has been issued but not deposited and is considered expired. */
  DT02 = "DT02",
  /** Future date not supported. */
  DT04 = "DT04",
  /** Payment is a duplicate of another payment. */
  DUPL = "DUPL",
  /** Correspondent bank not possible. */
  ED01 = "ED01",
  /** Balance of payments complementary info is requested */
  ED03 = "ED03",
  /** Settlement of the transaction has failed. */
  ED05 = "ED05",
  /** The card payment is fraudulent and was not processed with EMV technology for an EMV card. */
  EMVL = "EMVL",
  /** The Extended Remittance Information (ERI) option is not supported. */
  ERIN = "ERIN",
  /** Payment Type Information is missing or invalid. Generic usage if cannot specify Service Level or Local Instrument code. */
  FF03 = "FF03",
  /** Service Level code is missing or invalid. */
  FF04 = "FF04",
  /** Local Instrument code is missing or invalid */
  FF05 = "FF05",
  /** Category Purpose code is missing or invalid. */
  FF06 = "FF06",
  /** Purpose is missing or invalid. */
  FF07 = "FF07",
  /** Return following a cancellation request */
  FOCR = "FOCR",
  /** Returned as a result of fraud. */
  FR01 = "FR01",
  /** Final response/tracking is recalled as mandate is cancelled. */
  FRTR = "FRTR",
  /** In a FIToFI Customer Credit Transfer: Credit to the creditor’s account is pending, status Originator is waiting for funds provided via a cover. Update will follow from the Status Originator. */
  G004 = "G004",
  /** No Mandate */
  MD01 = "MD01",
  /** Mandate related information data required by the scheme is missing. */
  MD02 = "MD02",
  /** Creditor or creditor's agent should not have collected the direct debit. */
  MD05 = "MD05",
  /** Return of funds requested by end customer */
  MD06 = "MD06",
  /** End customer is deceased. */
  MD07 = "MD07",
  /** Reason has not been specified by end customer */
  MS02 = "MS02",
  /** Reason has not been specified by agent. */
  MS03 = "MS03",
  /** Reason is provided as narrative information in the additional reason information. */
  NARR = "NARR",
  /** No response from Beneficiary */
  NOAS = "NOAS",
  /** Customer account is not compliant with regulatory requirements, for example FICA (in South Africa) or any other regulatory requirements which render an account inactive for certain processing. */
  NOCM = "NOCM",
  /** Original SCT never received */
  NOOR = "NOOR",
  /** The card payment is fraudulent (lost and stolen fraud) and was processed as EMV transaction without PIN verification. */
  PINL = "PINL",
  /** Bank Identifier code specified in the message has an incorrect format (formerly IncorrectFormatForRoutingCode). */
  RC01 = "RC01",
  /** Debtor bank identifier is invalid or missing. */
  RC03 = "RC03",
  /** Creditor bank identifier is invalid or missing. */
  RC04 = "RC04",
  /** Incorrrect BIC of the beneficiary Bank in the SCTR */
  RC07 = "RC07",
  /** ClearingSystemMemberidentifier is invalid or missing. Generic usage if cannot specify between debit or credit account. */
  RC08 = "RC08",
  /** Intermediary Agent is invalid or missing. */
  RC11 = "RC11",
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
  /** Regulatory or Central Bank Reporting information missing, incomplete or invalid. */
  RR05 = "RR05",
  /** Tax information missing, incomplete or invalid. */
  RR06 = "RR06",
  /** Remittance information structure does not comply with rules for payment type. */
  RR07 = "RR07",
  /** Remittance information truncated to comply with rules for payment type. */
  RR08 = "RR08",
  /** Structured creditor reference invalid or missing. */
  RR09 = "RR09",
  /** Invalid or missing identification of a bank proprietary service. */
  RR11 = "RR11",
  /** Invalid or missing identification required within a particular country or payment type. */
  RR12 = "RR12",
  /** Return following investigation request and no remediation possible. */
  RUTA = "RUTA",
  /** Due to specific service offered by the Debtor Agent */
  SL01 = "SL01",
  /** Due to specific service offered by the Creditor Agent */
  SL02 = "SL02",
  /** Whitelisting service offered by the Debtor Agent; Debtor has not included the Creditor on its “Whitelist” (yet). In the Whitelist the Debtor may list all allowed Creditors to debit Debtor bank account. */
  SL11 = "SL11",
  /** Blacklisting service offered by the Debtor Agent; Debtor included the Creditor on his “Blacklist”. In the Blacklist the Debtor may list all Creditors not allowed to debit Debtor bank account. */
  SL12 = "SL12",
  /** Due to Maximum allowed Direct Debit Transactions per period service offered by the Debtor Agent. */
  SL13 = "SL13",
  /** Due to Maximum allowed Direct Debit Transaction amount service offered by the Debtor Agent. */
  SL14 = "SL14",
  /** Payment is stopped by account holder. */
  SP01 = "SP01",
  /** Previously stopped by means of a stop payment advise. */
  SP02 = "SP02",
  /** The card payment is returned since a cash amount rendered was not correct or goods or a service was not rendered to the customer, e.g. in an e-commerce situation. */
  SVNR = "SVNR",
  /** Associated message was received after agreed processing cut-off time. */
  TM01 = "TM01",
  /** Return following direct debit being removed from tracking process. */
  TRAC = "TRAC",
  /** Payment is not justified. */
  UPAY = "UPAY",
}