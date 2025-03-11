/**
 * Specifies the nature, or use, of the charges in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalChargeType1Code
 */
export enum ChargeType {
  /** Account maintenance fee. */
  ACCM = "ACCM",
  /** Payment order was changed based on request to do so from the (original) sending bank or as a result of receiving amended information from the (original) sending bank. */
  AMND = "AMND",
  /** Fee paid to a broker for services provided. */
  BRKF = "BRKF",
  /** Fee paid for processing a batch of transactions. */
  BTCH = "BTCH",
  /** Used when fees are assessed for cancellation of a payment. */
  CFEE = "CFEE",
  /** Used when fees are assessed for standard processing of financial institution type transfers. */
  CLEF = "CLEF",
  /** Fee paid for services provided. */
  COMM = "COMM",
  /** Claim is being submitted in response to receiving a customer credit transfer with DEBT in Charge Bearer code. */
  DEBT = "DEBT",
  /** Interest related charges. */
  INTE = "INTE",
  /** Charges related to the processing of an investigation case/inquiry. */
  INVS = "INVS",
  /** Charge for a payment that required an intervention during processing. */
  NSTP = "NSTP",
  /** Charge for a reporting message (camt.05X). */
  RECH = "RECH",
  /** Summation of individual fees. */
  SUMM = "SUMM",
  /** Charges relating to the most appropriate and efficient means of telecommunications available, for example, SWIFT, telex, telephone, facsimile, as determined by the party executing the payment instruction. */
  TELE = "TELE",
}