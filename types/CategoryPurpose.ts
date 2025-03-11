/**
 * Specifies the category purpose, as published in an external category purpose code list.
 * ISO20022 External Code
 * Original name: ExternalCategoryPurpose1Code
 */
export enum CategoryPurpose {
  /** Transaction is the payment of a bonus. */
  BONU = "BONU",
  /** Transaction is a general cash management instruction. */
  CASH = "CASH",
  /** A service that is settling money for a bulk of card transactions, while referring to a specific transaction file or other information like terminal ID, card acceptor ID or other transaction details. */
  CBLK = "CBLK",
  /** Transaction is related to a payment of credit card. */
  CCRD = "CCRD",
  /** Transaction is a payment towards a Party for the collection of cash by the Cash in Transit company. */
  CGWV = "CGWV",
  /** Transaction is a direct debit for a cash order of notes and/or coins. */
  CIPC = "CIPC",
  /** Transaction is a direct debit for a cash order of notes and/or coins. */
  CONC = "CONC",
  /** Transaction is related to settlement of a trade, eg a foreign exchange deal or a securities transaction. */
  CORT = "CORT",
  /** Cross border transaction initiated by US natural person that is subject to compliance with Dodd Frank 1073. */
  CTDF = "CTDF",
  /** Transaction is related to a payment of debit card. */
  DCRD = "DCRD",
  /** Transaction is the payment of dividends. */
  DIVI = "DIVI",
  /** Code used to pre-advise the account servicer of a forthcoming deliver against payment instruction. */
  DVPM = "DVPM",
  /** Transaction is related to ePayment. */
  EPAY = "EPAY",
  /** Foreign Currency Transaction that is processed between two domestic financial institutions. */
  FCDT = "FCDT",
  /** Transaction is related to the payment of a fee and interest. */
  FCIN = "FCIN",
  /** A service that is settling card transaction related fees between two parties. */
  FCOL = "FCOL",
  /** Transaction is a payment to or from a government department. */
  GOVT = "GOVT",
  /** General Person-to-Person Payment. Debtor and Creditor are natural persons. */
  GP2P = "GP2P",
  /** Transaction is related to the payment of a hedging operation. */
  HEDG = "HEDG",
  /** Transaction is reimbursement of credit card payment. */
  ICCP = "ICCP",
  /** Transaction is reimbursement of debit card payment. */
  IDCP = "IDCP",
  /** Transaction is an intra-company payment, ie, a payment between two companies belonging to the same group. */
  INTC = "INTC",
  /** Transaction is the payment of interest. */
  INTE = "INTE",
  /** Transaction is related to identify cash handling via Night Safe or Lockbox by bank or vendor on behalf of a physical store. */
  LBOX = "LBOX",
  /** Transaction is related to the transfer of a loan to a borrower. */
  LOAN = "LOAN",
  /** Mobile P2B Payment */
  MP2B = "MP2B",
  /** Mobile P2P Payment */
  MP2P = "MP2P",
  /** Other payment purpose. */
  OTHR = "OTHR",
  /** Transaction is the payment of pension. */
  PENS = "PENS",
  /** Collection used to re-present previously reversed or returned direct debit transactions. */
  RPRE = "RPRE",
  /** Transaction is related to a reimbursement for commercial reasons of a correctly received credit transfer. */
  RRCT = "RRCT",
  /** Code used to pre-advise the account servicer of a forthcoming receive against payment instruction. */
  RVPM = "RVPM",
  /** Transaction is the payment of salaries. */
  SALA = "SALA",
  /** Transfer to / from savings or to retirement account. */
  SAVG = "SAVG",
  /** Transaction is the payment of securities. */
  SECU = "SECU",
  /** Transaction is a social security benefit, ie payment made by a government to support individuals. */
  SSBE = "SSBE",
  /** Transaction is related to a payment to a supplier. */
  SUPP = "SUPP",
  /** Classification: Cash Management. Transaction relates to a cash management instruction, requesting a sweep of the account of the Debtor above an agreed floor amount, up to a target or zero balance. The purpose is to move the funds from multiple accounts to a single bank account. Funds can move domestically or across border and more than one bank can be used. */
  SWEP = "SWEP",
  /** Transaction is the payment of taxes. */
  TAXS = "TAXS",
  /** Classification: Cash Management. Transaction relates to a cash management instruction, requesting to top the account of the Creditor above a certain floor amount, up to a target or zero balance. The floor amount, if not pre-agreed by the parties involved, may be specified. */
  TOPG = "TOPG",
  /** Transaction is related to the payment of a trade finance transaction. */
  TRAD = "TRAD",
  /** Transaction is related to treasury operations. E.g. financial contract settlement. */
  TREA = "TREA",
  /** Transaction is the payment of value added tax. */
  VATX = "VATX",
  /** Transaction to be processed as a domestic payment instruction originated from a foreign bank. */
  VOST = "VOST",
  /** Transaction is the payment of withholding tax. */
  WHLD = "WHLD",
  /** Transaction relates to a cash management instruction, requesting to zero balance the account of the Debtor. Zero Balance Accounts empty or fill the balances in accounts at the same bank, in the same country into or out of a main account each day. */
  ZABA = "ZABA",
}