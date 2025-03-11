/**
 * Specifies the external request type code for the enquiry on a position in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalEnquiryRequestType1Code
 */
export enum EnquiryRequestType {
  /** Type is an enquiry on the bank's position. */
  RT11 = "RT11",
  /** Type is an enquiry on a specific transaction. */
  RT12 = "RT12",
  /** Type is an enquiry on a queued transaction. */
  RT13 = "RT13",
  /** Type is an enquiry on a suspicious transaction. */
  RT14 = "RT14",
  /** Type is an enquiry on pending inward credits. */
  RT15 = "RT15",
  /** Type is an enquiry on the system date and/or time. */
  RT16 = "RT16",
}