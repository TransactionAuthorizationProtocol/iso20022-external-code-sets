/**
 * Specifies the reason for the investigation status, as published in an external investigation status reason code set.
 * ISO20022 External Code
 * Original name: ExternalInvestigationStatusReason1Code
 */
export enum InvestigationStatusReason {
  /** Awaiting debit authorisation from customer. */
  ADAC = "ADAC",
  /** Request message has been directed at an incorrect agent or party. */
  AGNT = "AGNT",
  /** Investigation request not accepted as the transaction has already been returned. */
  ARDT = "ARDT",
  /** Underlying transaction already rejected. */
  ARJT = "ARJT",
  /** Awaiting reply from customer. */
  ARPL = "ARPL",
  /** Investigation closed as cancellation request for underlying transaction has been sent. */
  CACR = "CACR",
  /** Investigation closed as per the request message. */
  CAPR = "CAPR",
  /** Request message is duplicate, duplicate request message is rejected. */
  DU01 = "DU01",
  /** Special follow-up is taking place. */
  ESCA = "ESCA",
  /** Request message forwarded to another agent or party, these may be indicated in NextResponder element. */
  FTNA = "FTNA",
  /** Indicates that the credit claim non receipt investigation is pending as the cover creditor is waiting for the credit of the cover. */
  G004 = "G004",
  /** Incorrect investigation type used in request message. */
  INIT = "INIT",
  /** Collation of response data is still ongoing. */
  INPO = "INPO",
  /** Reported when the request cannot be accepted because of regulatory rules. */
  LEGL = "LEGL",
  /** See ResponseData element for additional information. */
  NARR = "NARR",
  /** No additional information in relation to the request can be provided. */
  NOAD = "NOAD",
  /** No reply from customer. */
  NOAS = "NOAS",
  /** Underlying transaction never received. */
  NOOR = "NOOR",
  /** Response message partially addresses the request, a further response message will follow. */
  PARE = "PARE",
  /** Regulatory Reason. */
  RR04 = "RR04",
}