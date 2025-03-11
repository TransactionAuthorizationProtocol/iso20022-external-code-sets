/**
 * Specifies the nature, or use, of the cash account in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalCashAccountType1Code
 */
export enum CashAccountType {
  /** Account used to post debits and credits when no specific account has been nominated. */
  CACC = "CACC",
  /** Account used for credit card payments. */
  CARD = "CARD",
  /** Account used for the payment of cash. */
  CASH = "CASH",
  /** Account used for charges if different from the account for payment. */
  CHAR = "CHAR",
  /** Account used for payment of income if different from the current cash account */
  CISH = "CISH",
  /** Account used for commission if different from the account for payment. */
  COMM = "COMM",
  /** Account used to post settlement debit and credit entries on behalf of a designated Clearing Participant. */
  CPAC = "CPAC",
  /** Account used for savings with special interest and withdrawal terms. */
  LLSV = "LLSV",
  /** Account used for loans. */
  LOAN = "LOAN",
  /** Account used for a marginal lending facility. */
  MGLD = "MGLD",
  /** Account used for money markets if different from the cash account. */
  MOMA = "MOMA",
  /** Non-Resident Individual / Entity Foreign Current held domestically. */
  NFCA = "NFCA",
  /** Account used for non-resident external. */
  NREX = "NREX",
  /** Account is used for overdrafts. */
  ODFT = "ODFT",
  /** Account used for overnight deposits. */
  ONDP = "ONDP",
  /** Account not otherwise specified. */
  OTHR = "OTHR",
  /** Account used to post debit and credit entries, as a result of transactions cleared and settled through a specific clearing and settlement system. */
  SACC = "SACC",
  /** Accounts used for salary payments. */
  SLRY = "SLRY",
  /** Account used for savings. */
  SVGS = "SVGS",
  /** Account used for taxes if different from the account for payment. */
  TAXE = "TAXE",
  /** A transacting account is the most basic type of bank account that you can get. The main difference between transaction and cheque accounts is that you usually do not get a cheque book with your transacting account and neither are you offered an overdraft facility. */
  TRAN = "TRAN",
  /** Account used for trading if different from the current cash account. */
  TRAS = "TRAS",
  /** Account created virtually to facilitate collection and reconciliation. */
  VACC = "VACC",
}