/**
 * Specifies the external cheque cancellation status code in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalChequeCancellationStatus1Code
 */
export enum ChequeCancellationStatus {
  /** Cheque cancellation request or request to stop the cheque is accepted. */
  ACCR = "ACCR",
  /** Cheque cancellation request or request to stop the cheque is rejected. */
  RJCR = "RJCR",
}