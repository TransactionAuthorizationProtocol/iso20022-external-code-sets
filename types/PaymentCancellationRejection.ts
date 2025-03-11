/**
 * Specifies the reason for the rejection of a cancellation, as published in an external payment cancellation rejection code set.
 * ISO20022 External Code
 * Original name: ExternalPaymentCancellationRejection1Code
 */
export enum PaymentCancellationRejection {
  /** Request-to-pay (RTP) has already been accepted. */
  AACR = "AACR",
  /** Account number specified has been closed on the receiver’s books. */
  AC04 = "AC04",
  /** Request-to-pay has already been cancelled. */
  ACLR = "ACLR",
  /** Reported when the cancellation request cannot be processed because customer has not yet provided the debit authority on its account. */
  ADAC = "ADAC",
  /** Request-to-pay Expiry Date and Time has already passed. */
  AEXR = "AEXR",
  /** Reported when the cancellation cannot be accepted because of an agent refuses to cancel. */
  AGNT = "AGNT",
  /** Amount of funds available to cover specified message amount is insufficient. */
  AM04 = "AM04",
  /** Cancellation not accepted as the transaction has already been returned. */
  ARDT = "ARDT",
  /** Request-to-pay has already been refused by the Debtor. */
  ARFR = "ARFR",
  /** Request-to-pay has already been rejected. */
  ARJR = "ARJR",
  /** Reported when the cancellation request cannot be processed because no reply has been received yet from the receiver of the request message. */
  ARPL = "ARPL",
  /** Reported when the cancellation cannot be accepted because of a customer decision (Creditor). */
  CUST = "CUST",
  /** Complementing a Pending or Reject Status. Payment cancellation request cannot be accepted until an indemnity agreement is established. */
  IDMN = "IDMN",
  /** Reported when the cancellation cannot be accepted because of regulatory rules. */
  LEGL = "LEGL",
  /** Reason is provided as narrative information in the additional reason information. */
  NARR = "NARR",
  /** No response from beneficiary (to the cancellation request). */
  NOAS = "NOAS",
  /** Original transaction (subject to cancellation) never received. */
  NOOR = "NOOR",
  /** Payment related to the request-to-pay has already been transmitted for execution. */
  PATE = "PATE",
  /** Reported when the cancellation request cannot be accepted because the payment instruction has been passed to the next agent. */
  PTNA = "PTNA",
  /** Request for cancellation of the request-to-pay has already been rejected. */
  RCAR = "RCAR",
  /** Request for cancellation of the request-to-pay has never been received. */
  RCNR = "RCNR",
  /** Request for cancellation of the request-to-pay has already been received and processed. */
  RCPR = "RCPR",
  /** Reported when authority is required by the Creditor to return the payment. */
  RQDA = "RQDA",
  /** Regulatory Reason. */
  RR04 = "RR04",
  /** Request-to-pay is unknown. */
  URTP = "URTP",
  /** Reported when the cancellation request cannot be processed because the sequence referred to in the request is not valid. */
  WSEQ = "WSEQ",
}