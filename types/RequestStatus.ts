/**
 * Specifies the request status, as published in an external request status code set.
 * ISO20022 External Code
 * Original name: ExternalRequestStatus1Code
 */
export enum RequestStatus {
  /** Message has been accepted. */
  ACPT = "ACPT",
  /** Message has been partially accepted. */
  PART = "PART",
  /** Message is pending further analysis and investigation. */
  PDNG = "PDNG",
  /** Message has been received. */
  RCVD = "RCVD",
  /** Message has been rejected. */
  RJCT = "RJCT",
}