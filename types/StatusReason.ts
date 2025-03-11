/**
 * Specifies the status reason, as published in an external status reason code list.
 * ISO20022 External Code
 * Original name: ExternalStatusReason1Code
 */
export enum StatusReason {
  /** Clearing process aborted due to timeout. */
  AB01 = "AB01",
  /** Clearing process aborted due to a fatal error. */
  AB02 = "AB02",
  /** Settlement aborted due to timeout. */
  AB03 = "AB03",
  /** Settlement process aborted due to a fatal error. */
  AB04 = "AB04",
  /** Transaction stopped due to timeout at the Creditor Agent. */
  AB05 = "AB05",
  /** Transaction stopped due to timeout at the Instructed Agent. */
  AB06 = "AB06",
  /** Agent of message is not online. Generic usage if it cannot be determined who exactly is not online. */
  AB07 = "AB07",
  /** Creditor Agent is not online. */
  AB08 = "AB08",
  /** Transaction stopped due to error at the Creditor Agent. */
  AB09 = "AB09",
  /** Transaction stopped due to error at the Instructed Agent. */
  AB10 = "AB10",
  /** Transaction stopped due to timeout at the Debtor Agent. */
  AB11 = "AB11",
  /** Duplicate Concurrent Batch Sequence number– for Settlement Instructions. */
  AB12 = "AB12",
  /** Wrong Message Routing Type for Return-of-Funds. */
  AB13 = "AB13",
  /** Instruction may not be placed on the Continuous Processing Line settlement processor. */
  AB15 = "AB15",
  /** Agreement number not valid (beneficiary). */
  AB21 = "AB21",
  /** Settlement Instruction does not exist. */
  AB26 = "AB26",
  /** Account number is invalid or missing. */
  AC01 = "AC01",
  /** Debtor account number invalid or missing */
  AC02 = "AC02",
  /** Creditor account number invalid or missing */
  AC03 = "AC03",
  /** Account number specified has been closed on the bank of account's books. */
  AC04 = "AC04",
  /** Debtor account number closed */
  AC05 = "AC05",
  /** Account specified is blocked, prohibiting posting of transactions against it. */
  AC06 = "AC06",
  /** Creditor account number closed */
  AC07 = "AC07",
  /** Branch code is invalid or missing */
  AC08 = "AC08",
  /** Account currency is invalid or missing */
  AC09 = "AC09",
  /** Debtor account currency is invalid or missing */
  AC10 = "AC10",
  /** Creditor account currency is invalid or missing */
  AC11 = "AC11",
  /** Account type missing or invalid. Generic usage if cannot specify between group and payment information levels */
  AC12 = "AC12",
  /** Debtor account type missing or invalid */
  AC13 = "AC13",
  /** Creditor account type missing or invalid */
  AC14 = "AC14",
  /** The account details for the counterparty have changed. */
  AC15 = "AC15",
  /** Credit or debit card number is invalid. */
  AC16 = "AC16",
  /** Request-to-pay Expiry Date and Time has already passed. */
  AEXR = "AEXR",
  /** Transaction forbidden on this type of account (formerly NoAgreement) */
  AG01 = "AG01",
  /** Bank Operation code specified in the message is not valid for receiver */
  AG02 = "AG02",
  /** Transaction type not supported/authorized on this account */
  AG03 = "AG03",
  /** Agent country code is missing or invalid. Generic usage if cannot specify between group and payment information levels. */
  AG04 = "AG04",
  /** Debtor agent country code is missing or invalid */
  AG05 = "AG05",
  /** Creditor agent country code is missing or invalid */
  AG06 = "AG06",
  /** Debtor account cannot be debited for a generic reason. Code value may be used in general purposes and as a replacement for AM04 if debtor bank does not reveal its customer's insufficient funds for privacy reasons */
  AG07 = "AG07",
  /** Transaction failed due to invalid or missing user or access right */
  AG08 = "AG08",
  /** Original payment never received. */
  AG09 = "AG09",
  /** Agent of message is suspended from the Real Time Payment system. Generic usage if it cannot be determined who exactly is suspended. */
  AG10 = "AG10",
  /** Creditor Agent of message is suspended from the Real Time Payment system. */
  AG11 = "AG11",
  /** Payment orders made by transferring funds from one account to another at the same financial institution (bank or payment institution) are not allowed. */
  AG12 = "AG12",
  /** Returned payments derived from previously returned transactions are not allowed. */
  AG13 = "AG13",
  /** Agent in the payment workflow is incorrect */
  AGNT = "AGNT",
  /** Request-to-pay has already been accepted by the Debtor. */
  ALAC = "ALAC",
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
  /** Transaction currency is invalid or missing */
  AM11 = "AM11",
  /** Amount is invalid or missing */
  AM12 = "AM12",
  /** Transaction amount exceeds limits set by clearing system */
  AM13 = "AM13",
  /** Transaction amount exceeds limits agreed between bank and client */
  AM14 = "AM14",
  /** Transaction amount below minimum set by clearing system */
  AM15 = "AM15",
  /** Control Sum at the Group level is invalid */
  AM16 = "AM16",
  /** Control Sum at the Payment Information level is invalid */
  AM17 = "AM17",
  /** Number of transactions is invalid or missing. Generic usage if cannot specify between group and payment information levels. */
  AM18 = "AM18",
  /** Number of transactions at the Group level is invalid or missing */
  AM19 = "AM19",
  /** Number of transactions at the Payment Information level is invalid */
  AM20 = "AM20",
  /** Transaction amount exceeds limits agreed between bank and client. */
  AM21 = "AM21",
  /** Unable to apply zero amount to designated account. For example, where the rules of a service allow the use of zero amount payments, however the back-office system is unable to apply the funds to the account. If the rules of a service prohibit the use of zero amount payments, then code AM01 is used to report the error condition. */
  AM22 = "AM22",
  /** Transaction amount exceeds settlement limit. */
  AM23 = "AM23",
  /** Size of the attachment exceeds the allowed maximum. */
  AMSE = "AMSE",
  /** Request To Pay has already been paid by the Debtor. */
  APAR = "APAR",
  /** Request-to-pay has already been refused by the Debtor. */
  ARFR = "ARFR",
  /** Request-to-pay has already been rejected. */
  ARJR = "ARJR",
  /** Attachments to the request-to-pay are not supported. */
  ATNS = "ATNS",
  /** Settlement Cycle Day and Calendar day should be the same. */
  BDAY = "BDAY",
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
  /** Debtor name is missing */
  BE08 = "BE08",
  /** Country code is missing or Invalid. Generic usage if cannot specifically identify debtor or creditor */
  BE09 = "BE09",
  /** Debtor country code is missing or invalid */
  BE10 = "BE10",
  /** Creditor country code is missing or invalid */
  BE11 = "BE11",
  /** Country code of residence is missing or Invalid. Generic usage if cannot specifically identify debtor or creditor */
  BE12 = "BE12",
  /** Country code of debtor's residence is missing or Invalid */
  BE13 = "BE13",
  /** Country code of creditor's residence is missing or Invalid */
  BE14 = "BE14",
  /** Identification code missing or invalid. Generic usage if cannot specifically identify debtor or creditor. */
  BE15 = "BE15",
  /** Debtor or Ultimate Debtor identification code missing or invalid */
  BE16 = "BE16",
  /** Creditor or Ultimate Creditor identification code missing or invalid */
  BE17 = "BE17",
  /** Contact details missing or invalid */
  BE18 = "BE18",
  /** Charge bearer code for transaction type is invalid */
  BE19 = "BE19",
  /** Name length exceeds local rules for payment type. */
  BE20 = "BE20",
  /** Name missing or invalid. Generic usage if cannot specifically identify debtor or creditor. */
  BE21 = "BE21",
  /** Creditor name is missing */
  BE22 = "BE22",
  /** Phone number or email address, or any other proxy, used as the account proxy is unknown or invalid. */
  BE23 = "BE23",
  /** Credit transfer is not tagged as an Extended Remittance Information (ERI) transaction but contains ERI. */
  CERI = "CERI",
  /** Value in Requested Execution Date or Requested Collection Date is too far in the future */
  CH03 = "CH03",
  /** Value in Requested Execution Date or Requested Collection Date is too far in the past */
  CH04 = "CH04",
  /** Element is not to be used at B- and C-Level */
  CH07 = "CH07",
  /** Mandate changes are not allowed */
  CH09 = "CH09",
  /** Information on mandate changes are missing */
  CH10 = "CH10",
  /** Value in Creditor Identifier is incorrect */
  CH11 = "CH11",
  /** Creditor Identifier is ambiguous at Transaction Level */
  CH12 = "CH12",
  /** Original Debtor Account is not to be used */
  CH13 = "CH13",
  /** Original Debtor Agent is not to be used */
  CH14 = "CH14",
  /** Content Remittance Information/Structured includes more than 140 characters */
  CH15 = "CH15",
  /** Content is incorrect */
  CH16 = "CH16",
  /** Element is not allowed */
  CH17 = "CH17",
  /** Values in Interbank Settlement Date or Requested Collection Date will be set to the next TARGET day */
  CH19 = "CH19",
  /** Number of decimal points not compatible with the currency */
  CH20 = "CH20",
  /** Mandatory element is missing */
  CH21 = "CH21",
  /** SDD CORE and B2B not permitted within one message */
  CH22 = "CH22",
  /** Related to a Charge message to convey that the code in Charge Breakdown / Type / Code is not accepted by the receiving party. */
  CHCO = "CHCO",
  /** Cheque has been presented in cheque clearing and settled on the creditor’s account. */
  CHQC = "CHQC",
  /** Related to a Charge message to convey that the charge bearer code used in the corresponding Payment message was not debt. */
  CHRG = "CHRG",
  /** Authorisation is cancelled. */
  CN01 = "CN01",
  /** Credit notes are not supported. */
  CNNS = "CNNS",
  /** Creditor bank is not registered under this BIC in the CSM */
  CNOR = "CNOR",
  /** Currency of the payment is incorrect */
  CURR = "CURR",
  /** Cancellation requested by the Debtor */
  CUST = "CUST",
  /** Rejection of a payment due to covering FI settlement not being received. */
  DC02 = "DC02",
  /** Debtor bank is not registered under this BIC in the CSM */
  DNOR = "DNOR",
  /** The electronic signature(s) is/are correct */
  DS01 = "DS01",
  /** An authorized user has cancelled the order */
  DS02 = "DS02",
  /** The user’s attempt to cancel the order was not successful */
  DS03 = "DS03",
  /** The order was rejected by the bank side (for reasons concerning content) */
  DS04 = "DS04",
  /** The order was correct and could be forwarded for postprocessing */
  DS05 = "DS05",
  /** The order was transferred to VEU */
  DS06 = "DS06",
  /** All actions concerning the order could be done by the EBICS bank server */
  DS07 = "DS07",
  /** The decompression of the file was not successful */
  DS08 = "DS08",
  /** The decryption of the file was not successful */
  DS09 = "DS09",
  /** Data signature is required. */
  DS0A = "DS0A",
  /** Data signature for the format is not available or invalid. */
  DS0B = "DS0B",
  /** The signer certificate is revoked. */
  DS0C = "DS0C",
  /** The signer certificate is not valid (revoked or not active). */
  DS0D = "DS0D",
  /** The signer certificate is not present. */
  DS0E = "DS0E",
  /** The authority of the signer certification sending the certificate is unknown. */
  DS0F = "DS0F",
  /** Signer is not allowed to sign this operation type. */
  DS0G = "DS0G",
  /** Signer is not allowed to sign for this account. */
  DS0H = "DS0H",
  /** The number of transaction is over the number allowed for this signer. */
  DS0K = "DS0K",
  /** The certificate is revoked for the first signer. */
  DS10 = "DS10",
  /** The certificate is not valid (revoked or not active) for the first signer. */
  DS11 = "DS11",
  /** The certificate is not present for the first signer. */
  DS12 = "DS12",
  /** The authority of signer certification sending the certificate is unknown for the first signer. */
  DS13 = "DS13",
  /** The user is unknown on the server */
  DS14 = "DS14",
  /** The same signature has already been sent to the bank */
  DS15 = "DS15",
  /** The public key version is not correct. This code is returned when a customer sends signature files to the financial institution after conversion from an older program version (old ES format) to a new program version (new ES format) without having carried out re-initialisation with regard to a public key change. */
  DS16 = "DS16",
  /** Order data and signatures don’t match */
  DS17 = "DS17",
  /** File cannot be tested, the complete order has to be repeated. This code is returned in the event of a malfunction during the signature check, e.g. not enough storage space. */
  DS18 = "DS18",
  /** The user’s rights (concerning his signature) are insufficient to execute the order */
  DS19 = "DS19",
  /** The certificate is revoked for the second signer. */
  DS20 = "DS20",
  /** The certificate is not valid (revoked or not active) for the second signer. */
  DS21 = "DS21",
  /** The certificate is not present for the second signer. */
  DS22 = "DS22",
  /** The authority of signer certification sending the certificate is unknown for the second signer. */
  DS23 = "DS23",
  /** Waiting time expired due to incomplete order */
  DS24 = "DS24",
  /** The order file was deleted by the bank server (for multiple reasons) */
  DS25 = "DS25",
  /** The same user has signed multiple times */
  DS26 = "DS26",
  /** The user is not yet activated (technically) */
  DS27 = "DS27",
  /** Message routed to the wrong environment. */
  DS28 = "DS28",
  /** Invalid date (eg, wrong or missing settlement date) */
  DT01 = "DT01",
  /** Invalid creation date and time in Group Header (eg, historic date) */
  DT02 = "DT02",
  /** Invalid non bank processing date (eg, weekend or local public holiday) */
  DT03 = "DT03",
  /** Future date not supported */
  DT04 = "DT04",
  /** Associated message, payment information block or transaction was received after agreed processing cut-off date, i.e., date in the past. */
  DT05 = "DT05",
  /** Execution Date has been modified in order for transaction to be processed */
  DT06 = "DT06",
  /** Message Identification is not unique. */
  DU01 = "DU01",
  /** Payment Information Block is not unique. */
  DU02 = "DU02",
  /** Transaction is not unique. */
  DU03 = "DU03",
  /** End To End ID is not unique. */
  DU04 = "DU04",
  /** Instruction ID is not unique. */
  DU05 = "DU05",
  /** Payment or charge is a duplicate of another payment or charge. */
  DUPL = "DUPL",
  /** Correspondent bank not possible. */
  ED01 = "ED01",
  /** Balance of payments complementary info is requested */
  ED03 = "ED03",
  /** Settlement of the transaction has failed. */
  ED05 = "ED05",
  /** Interbank settlement system not available. */
  ED06 = "ED06",
  /** Requested execution date of the payment is not accepted. */
  EDNA = "EDNA",
  /** Expiry date time of the request-to-pay is too far in the future. */
  EDTL = "EDTL",
  /** Expiry date time of the request-to-pay is already reached. */
  EDTR = "EDTR",
  /** Expiration of the payment authorisation due to no use for too long. */
  EOL1 = "EOL1",
  /** Extended Remittance Information (ERI) option is not supported. */
  ERIN = "ERIN",
  /** File Format incomplete or invalid */
  FF01 = "FF01",
  /** Syntax error reason is provided as narrative information in the additional reason information. */
  FF02 = "FF02",
  /** Payment Type Information is missing or invalid. Generic usage if cannot specify Service Level or Local Instrument code */
  FF03 = "FF03",
  /** Service Level code is missing or invalid */
  FF04 = "FF04",
  /** Local Instrument code is missing or invalid */
  FF05 = "FF05",
  /** Category Purpose code is missing or invalid */
  FF06 = "FF06",
  /** Purpose is missing or invalid */
  FF07 = "FF07",
  /** End to End Id missing or invalid */
  FF08 = "FF08",
  /** Cheque number missing or invalid */
  FF09 = "FF09",
  /** File or transaction cannot be processed due to technical issues at the bank side */
  FF10 = "FF10",
  /** Clearing request rejected due it being subject to an abort operation. */
  FF11 = "FF11",
  /** Original payment is not eligible to be returned given its current status. */
  FF12 = "FF12",
  /** No record of request for cancellation found. */
  FF13 = "FF13",
  /** Return following a cancellation request. */
  FOCR = "FOCR",
  /** Returned as a result of fraud. */
  FR01 = "FR01",
  /** Cancellation requested following a transaction that was originated fraudulently. The use of the FraudulentOrigin code should be governed by jurisdictions. */
  FRAD = "FRAD",
  /** In an FI To FI Customer Credit Transfer: The Status Originator transferred the payment to the next Agent or to a Market Infrastructure. The payment transfer is tracked. No further updates will follow from the Status Originator. In a Financial Institution Credit Transfer with cover: The Status Originator performed the account booking and transferred the cover transaction to the next Reimbursement Agent or to a Market Infrastructure. The payment transfer is tracked. No further updates will follow from the Status Originator. */
  G000 = "G000",
  /** In an FI To FI Customer Credit Transfer: The Status Originator transferred the payment to the next Agent or to a Market Infrastructure. The payment transfer is not tracked. No further updates will follow from the Status Originator. In a Financial Institution Credit Transfer with cover: The Status Originator performed the account booking and transferred the cover transaction to the next Reimbursement Agent or to a Market Infrastructure. The payment transfer is not tracked. No further updates will follow from the Status Originator. */
  G001 = "G001",
  /** In a FIToFI Customer Credit Transfer: Credit to the creditor’s account may not be confirmed same day. Update will follow from the Status Originator. In a Financial Institution Credit Transfer with cover: Debit/credit to nostro account may not be confirmed same day or Financial Institution Credit Transfer may not be transferred same day. Update will follow from the Status Originator. */
  G002 = "G002",
  /** In a FIToFI Customer Credit Transfer: Credit to creditor’s account is pending receipt of required documents. The Status Originator has requested creditor to provide additional documentation. Update will follow from the Status Originator. In a Financial Institution Credit Transfer with cover: Status Originator has requested a previous Agent to provide additional information/correct information. Update will follow from the Status Originator. */
  G003 = "G003",
  /** In a FIToFI Customer Credit Transfer: Credit to the creditor’s account is pending, status Originator is waiting for funds provided via a cover. Update will follow from the Status Originator. */
  G004 = "G004",
  /** Payment has been delivered to creditor agent with service level. */
  G005 = "G005",
  /** Payment has been delivered to creditor agent without service level. */
  G006 = "G006",
  /** Signature file was sent to the bank but the corresponding original file has not been sent yet. */
  ID01 = "ID01",
  /** Expiry date time of the request-to-pay is incorrect. */
  IEDT = "IEDT",
  /** Payer’s activation reference is invalid. */
  INAR = "INAR",
  /** Details not valid for this field. */
  INDT = "INDT",
  /** Payments in instalments are not supported. */
  IPNS = "IPNS",
  /** No initial request-to-pay has been received. */
  IRNR = "IRNR",
  /** Cannot schedule instruction for Night Window. */
  ISWS = "ISWS",
  /** No Mandate */
  MD01 = "MD01",
  /** Mandate related information data required by the scheme is missing. */
  MD02 = "MD02",
  /** Creditor or creditor's agent should not have collected the direct debit */
  MD05 = "MD05",
  /** Return of funds requested by end customer */
  MD06 = "MD06",
  /** End customer is deceased. */
  MD07 = "MD07",
  /** Information missing for the field or cannot be empty. */
  MINF = "MINF",
  /** Reason has not been specified by end customer */
  MS02 = "MS02",
  /** Reason has not been specified by agent. */
  MS03 = "MS03",
  /** Reason is provided as narrative information in the additional reason information. */
  NARR = "NARR",
  /** Credit transfer is tagged as an Extended Remittance Information (ERI) transaction but does not contain ERI. */
  NERI = "NERI",
  /** No existing agreement for receiving request-to-pay messages. */
  NOAR = "NOAR",
  /** No response from Beneficiary. */
  NOAS = "NOAS",
  /** Customer account is not compliant with regulatory requirements, for example FICA (in South Africa) or any other regulatory requirements which render an account inactive for certain processing. */
  NOCM = "NOCM",
  /** Continuous Processing Line on Hold Instruction. */
  NOFR = "NOFR",
  /** Requested payment guarantee (by Creditor) related to a request-to-pay cannot be provided. */
  NOPG = "NOPG",
  /** Recipient side of the request-to-pay (payer or its request-to-pay service provider) is not reachable. */
  NRCH = "NRCH",
  /** Requested optional service (for example instalment payments) is not supported. */
  OSNS = "OSNS",
  /** Type of payment requested in the request-to-pay is not supported by the payer. */
  PINS = "PINS",
  /** Bank identifier code specified in the message has an incorrect format (formerly IncorrectFormatForRoutingCode). */
  RC01 = "RC01",
  /** Bank identifier is invalid or missing. Generic usage if cannot specify between debit or credit account */
  RC02 = "RC02",
  /** Debtor bank identifier is invalid or missing */
  RC03 = "RC03",
  /** Creditor bank identifier is invalid or missing */
  RC04 = "RC04",
  /** BIC identifier is invalid or missing. Generic usage if cannot specify between debit or credit account. */
  RC05 = "RC05",
  /** Debtor BIC identifier is invalid or missing */
  RC06 = "RC06",
  /** Creditor BIC identifier is invalid or missing */
  RC07 = "RC07",
  /** ClearingSystemMemberidentifier is invalid or missing. Generic usage if cannot specify between debit or credit account */
  RC08 = "RC08",
  /** Debtor ClearingSystemMember identifier is invalid or missing */
  RC09 = "RC09",
  /** Creditor ClearingSystemMember identifier is invalid or missing */
  RC10 = "RC10",
  /** Intermediary Agent is invalid or missing */
  RC11 = "RC11",
  /** Creditor Scheme Id is invalid or missing */
  RC12 = "RC12",
  /** Originator not active any more. */
  RC13 = "RC13",
  /** Settlement agreement required. */
  RC15 = "RC15",
  /** Participant blocked from SADC-RTGS. */
  RC16 = "RC16",
  /** Conflict with R-Message */
  RCON = "RCON",
  /** Further information regarding the intended recipient. */
  RECI = "RECI",
  /** Request-to-pay has been received and can be processed further. */
  REPR = "REPR",
  /** Transaction reference is not unique within the message. */
  RF01 = "RF01",
  /** Payer did not recognize the request from Payee Participant, */
  RQNR = "RQNR",
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
  /** Character set supplied not valid for the country and payment type. */
  RR10 = "RR10",
  /** Invalid or missing identification of a bank proprietary service. */
  RR11 = "RR11",
  /** Invalid or missing identification required within a particular country or payment type. */
  RR12 = "RR12",
  /** Debtor does not support request-to-pay transactions. */
  RTNS = "RTNS",
  /** Return following investigation request and no remediation possible. */
  RUTA = "RUTA",
  /** Request for Cancellation is acknowledged following validation. */
  S000 = "S000",
  /** Unique End-to-end Transaction Reference (UETR) relating to a payment has been identified as being associated with a Request for Cancellation. */
  S001 = "S001",
  /** Unique End-to-end Transaction Reference (UETR) relating to a payment has been prevent from traveling across a messaging network. */
  S002 = "S002",
  /** Request for Cancellation has been forwarded to the payment processing/last payment processing agent. */
  S003 = "S003",
  /** Request for Cancellation has been acknowledged as delivered to payment processing/last payment processing agent. */
  S004 = "S004",
  /** Remove Concurrent Batch Processing Line on hold instruction. */
  SBRN = "SBRN",
  /** Due to specific service offered by the Debtor Agent. */
  SL01 = "SL01",
  /** Due to specific service offered by the Creditor Agent. */
  SL02 = "SL02",
  /** Due to a specific service offered by the clearing system. */
  SL03 = "SL03",
  /** Whitelisting service offered by the Debtor Agent; Debtor has not included the Creditor on its “Whitelist” (yet). In the Whitelist the Debtor may list all allowed Creditors to debit Debtor bank account. */
  SL11 = "SL11",
  /** Blacklisting service offered by the Debtor Agent; Debtor included the Creditor on his “Blacklist”. In the Blacklist the Debtor may list all Creditors not allowed to debit Debtor bank account. */
  SL12 = "SL12",
  /** Due to Maximum allowed Direct Debit Transactions per period service offered by the Debtor Agent. */
  SL13 = "SL13",
  /** Due to Maximum allowed Direct Debit Transaction amount service offered by the Debtor Agent. */
  SL14 = "SL14",
  /** Maximum number of credit transactions allowed by the account servicer per service period exceeded. */
  SL15 = "SL15",
  /** Maximum total credit amount allowed by the account servicer per service period exceeded. */
  SL16 = "SL16",
  /** Whitelisting service offered by payment system operator or financial institution. Debtor is not included on the Creditor side whitelist. */
  SL17 = "SL17",
  /** Blacklisting service offered by payment system operator or financial institution. Debtor included on the Creditor side blacklist. */
  SL18 = "SL18",
  /** Services are not yet rendered by the Payee Participant (Creditor). */
  SNRD = "SNRD",
  /** Identifier of the request-to-pay service provider is incorrect. */
  SPII = "SPII",
  /** The transmission of the file was not successful – it had to be aborted (for technical reasons) */
  TA01 = "TA01",
  /** There is no data available (for download) */
  TD01 = "TD01",
  /** The file cannot be read (e.g. unknown format) */
  TD02 = "TD02",
  /** The file format is incomplete or invalid */
  TD03 = "TD03",
  /** Token is invalid. */
  TK01 = "TK01",
  /** Token used for the sender does not exist. */
  TK02 = "TK02",
  /** Token used for the receiver does not exist. */
  TK03 = "TK03",
  /** Token required for request is missing. */
  TK09 = "TK09",
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
  /** Associated message, payment information block, or transaction was received after agreed processing cut-off time. */
  TM01 = "TM01",
  /** The (technical) transmission of the file was successful. */
  TS01 = "TS01",
  /** The order was transferred to pass by accompanying note signed by hand */
  TS04 = "TS04",
  /** Unknown Creditor. */
  UCRD = "UCRD",
  /** Payment is not justified. */
  UPAY = "UPAY",
}