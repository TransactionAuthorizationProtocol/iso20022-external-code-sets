/**
 * Specifies the investigation type, as published in an external investigation type code set.
 * ISO20022 External Code
 * Original name: ExternalInvestigationType1Code
 */
export enum InvestigationType {
  /** Investigation relating to an account. */
  ACCT = "ACCT",
  /** Creditor claims non-receipt of payment. */
  CCNR = "CCNR",
  /** Creditor agent claims non-receipt of cover or settlement. */
  CONR = "CONR",
  /** Other request type. */
  OTHR = "OTHR",
  /** Payment initiation has not been settled or confirmed. */
  PINC = "PINC",
  /** Request from International Monetary Fund. */
  RIMF = "RIMF",
  /** Investigation relating to charges that have been taken or are requested. */
  RQCH = "RQCH",
  /** Debit authorisation on an entry is requested. */
  RQDA = "RQDA",
  /** Further information is required on a payment, entry, message or instruction. */
  RQFI = "RQFI",
  /** Use of funds on an entry is requested. */
  RQUF = "RQUF",
  /** Revaluation of an entry is requested. */
  RQVA = "RQVA",
  /** A booked entry cannot be applied by the creditor. */
  UTAP = "UTAP",
}