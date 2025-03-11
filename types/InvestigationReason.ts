/**
 * Specifies the investigation reason, as published in an external investigation reason code set.
 * ISO20022 External Code
 * Original name: ExternalInvestigationReason1Code
 */
export enum InvestigationReason {
  /** Investigation relating to an account. */
  ACCT = "ACCT",
  /** Request message relates to anti-money laundering. */
  AMLI = "AMLI",
  /** An amount element has triggered the investigation. */
  AMNT = "AMNT",
  /** Payment type category purpose is incorrect, incomplete or missing. */
  CAPU = "CAPU",
  /** Creditor claims non-receipt of payment. */
  CCNR = "CCNR",
  /** Further information pertaining to the charge bearer is requested. */
  CHBE = "CHBE",
  /** Copy of cheque is requested. */
  CHCO = "CHCO",
  /** Further information pertaining to the charges information is requested. */
  CHIN = "CHIN",
  /** Cheque not yet paid despite being sent to agent. */
  CHNP = "CHNP",
  /** Creditor agent claims non-receipt of cover or settlement. */
  CONR = "CONR",
  /** Further information pertaining to the creditor agent is requested. */
  CTAG = "CTAG",
  /** Further information pertaining to the creditor is requested. */
  CTOR = "CTOR",
  /** Copy of draft is requested. */
  DRCO = "DRCO",
  /** Further information pertaining to the debtor agent is requested. */
  DTAG = "DTAG",
  /** Further information pertaining to the debtor is requested. */
  DTOR = "DTOR",
  /** Investigation relates to financial crimes compliance. */
  FCCI = "FCCI",
  /** Instrument is confirmed as fraudulent. */
  FRAD = "FRAD",
  /** Investigation relates to funds transfer regulation or wire transfer regulation. */
  FWTR = "FWTR",
  /** Incorrect accrued interest balance. */
  IAIB = "IAIB",
  /** Incorrect daily accrued interest amount. */
  IDAI = "IDAI",
  /** Further information pertaining to the instructed reimbursement agent is requested. */
  IDRA = "IDRA",
  /** Further information pertaining to the instructing reimbursement agent is requested. */
  IGRA = "IGRA",
  /** Invalid interest rate. */
  IIRT = "IIRT",
  /** Further information pertaining to an intermediary agent is requested. */
  INAG = "INAG",
  /** Further information pertaining to the instruction for creditor agent is requested. */
  INCA = "INCA",
  /** Incorrect closing balance. */
  INCB = "INCB",
  /** Further information pertaining to the instruction for next agent is requested. */
  INNA = "INNA",
  /** Further information pertaining to the initiating party is requested. */
  INPA = "INPA",
  /** Incorrect transaction amount. */
  INTA = "INTA",
  /** Interbank settlement amount is incorrect. */
  ISAM = "ISAM",
  /** Interbank settlement date is incorrect. */
  ISDT = "ISDT",
  /** Missing credit amount on statement. */
  MCAT = "MCAT",
  /** Missing debit amount on statement. */
  MDAT = "MDAT",
  /** See AdditionalRequestData element for additional information */
  NARR = "NARR",
  /** Payment initiation has not been settled or confirmed. */
  PINC = "PINC",
  /** Further information pertaining to the purpose is requested. */
  PURP = "PURP",
  /** Payment type clearing channel is incorrect, incomplete or missing. */
  PYCC = "PYCC",
  /** Transaction payment purpose is incorrect, incomplete or missing. */
  PYPU = "PYPU",
  /** Requested execution date is incorrect or missing. */
  REDT = "REDT",
  /** Regulatory reporting is incomplete or missing. */
  REGR = "REGR",
  /** Remittance information is incorrect, incomplete or missing. */
  REIN = "REIN",
  /** Related transaction reference is incorrect, incomplete or missing. */
  RERE = "RERE",
  /** Request from International Monetary Fund. */
  RIMF = "RIMF",
  /** Account closure date is requested. */
  RQCD = "RQCD",
  /** Investigation relating to charges that have been taken or are unpaid. */
  RQCH = "RQCH",
  /** Debit authorisation on an entry is requested. */
  RQDA = "RQDA",
  /** Documentation relating to the transaction is requested. */
  RQDO = "RQDO",
  /** Clarification over when goods or services were exchanged is requested. */
  RQED = "RQED",
  /** Clarification over location details is requested. */
  RQLD = "RQLD",
  /** Clarification over a party relationship is requested. */
  RQPR = "RQPR",
  /** Clarification over goods or services involved is requested. */
  RQSG = "RQSG",
  /** Use of funds on an entry is requested. */
  RQUF = "RQUF",
  /** Revaluation of an entry is requested. */
  RQVA = "RQVA",
  /** Clarification over a vessel or aircraft is requested. */
  RQVD = "RQVD",
  /** Further information pertaining to the settlement account is requested. */
  SEAC = "SEAC",
  /** Further information pertaining to a statement entry is requested. */
  STET = "STET",
  /** Payment type service level is incorrect, incomplete or missing. */
  SVLV = "SVLV",
  /** Tax data is incomplete or missing. */
  TAXD = "TAXD",
  /** Further information pertaining to the third reimbursement agent is requested. */
  TDRA = "TDRA",
  /** Further information pertaining to the ultimate creditor is requested. */
  ULTC = "ULTC",
  /** Further information pertaining to the ultimate debtor is requested. */
  ULTD = "ULTD",
  /** A booked entry cannot be applied by the creditor. */
  UTAP = "UTAP",
}