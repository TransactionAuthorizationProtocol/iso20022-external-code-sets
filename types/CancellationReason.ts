/**
 * Specifies the cancellation reason, as published in an external cancellation reason code set.
 * ISO20022 External Code
 * Original name: ExternalCancellationReason1Code
 */
export enum CancellationReason {
  /** Debtor account number invalid or missing. */
  AC02 = "AC02",
  /** Wrong account number in Credit Transfer. */
  AC03 = "AC03",
  /** Agent in the payment workflow is incorrect. */
  AGNT = "AGNT",
  /** Amount is not the amount agreed or expected. */
  AM09 = "AM09",
  /** Debtor or Ultimate Debtor identification code missing or invalid. */
  BE16 = "BE16",
  /** Process a cancellation request but batch already settled. */
  BIAS = "BIAS",
  /** Cover payments has either been returned or cancelled. */
  COVR = "COVR",
  /** Currency of the payment is incorrect. */
  CURR = "CURR",
  /** Cancellation requested by the Debtor. */
  CUST = "CUST",
  /** Cancellation requested because an investigation request has been received and no remediation is possible. */
  CUTA = "CUTA",
  /** Duplication of a request-to-pay message. */
  DRTP = "DRTP",
  /** Cancellation requested because the original payment order expired due to time-out. */
  DS24 = "DS24",
  /** Invalid date (for example, wrong or missing settlement date). */
  DT01 = "DT01",
  /** Payment is a duplicate of another payment. */
  DUPL = "DUPL",
  /** Payee (Creditor) cancels the Request To Pay (RTP) request due to error or adjustment agreement with Payer/Debtor. */
  ECAG = "ECAG",
  /** Cancellation or request for return requested by the Debtor specifically due to one or more errors by debtor in the original Credit Transfer. Usage: This code can be used for any error in the original Credit Transfer made by the Debtor. Can also be used if multiple errors were made in the original Credit Transfer. */
  ENUE = "ENUE",
  /** Cancellation requested following a transaction that was originated fraudulently. The use of the FraudulentOrigin code should be governed by jurisdictions. */
  FRAD = "FRAD",
  /** To complement a rejection response, suggesting the request for cancelation should be forwarded to the next agent in the payment transaction chain. */
  FRNA = "FRNA",
  /** Direct Debit Tracking recalled as Mandate Cancelled */
  FRTR = "FRTR",
  /** Process a cancellation request with incorrect reference to original batch. */
  INCR = "INCR",
  /** To express the wish to establish a bilateral indemnity agreement. */
  INDM = "INDM",
  /** Return of funds requested by end customer. */
  MD06 = "MD06",
  /** The underlying transaction in relation to an RTP was modified. */
  MODT = "MODT",
  /** Reason is provided as narrative information in the additional reason information. */
  NARR = "NARR",
  /** To complement a cancellation request, instructing the market infrastructure that the request for cancelation should not be forwarded to the next agent in the payment transaction chain. */
  NFNA = "NFNA",
  /** The underlying transaction in relation to an RTP was already paid (via other means). */
  PAID = "PAID",
  /** Request to Pay cancellation initiated because the Payee is not in good standing. */
  PPRC = "PPRC",
  /** The payment is cancelled since a cash amount rendered was not correct or goods or a service was not rendered to the customer, e.g. in an e-commerce situation. */
  SVNR = "SVNR",
  /** Cancellation requested by System Member to Settlement System Administrator to indicate that the cancellation request must not be forwarded further in the chain. */
  SYAD = "SYAD",
  /** Cancellation requested following technical problems resulting in an erroneous transaction. */
  TECH = "TECH",
  /** The Debtor is requesting a return of the payment because the payment was not properly authorized. Usage: This code can be used in the case where a Credit Transfer was made without proper authorization from the Debtor. This could be due to compromised end user credentials. */
  UAPA = "UAPA",
  /** Payment is not justified. */
  UPAY = "UPAY",
  /** Breach of warranty provided in connection with a request for payment. */
  WNTB = "WNTB",
}