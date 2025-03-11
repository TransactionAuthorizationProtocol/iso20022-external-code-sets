/**
 * Specifies the external cheque cancellation reason code in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalChequeCancellationReason1Code
 */
export enum ChequeCancellationReason {
  /** Customer requested to stop/cancel the cheque. */
  CUST = "CUST",
  /** Cheque has been issued in duplication of another cheque. */
  DUPL = "DUPL",
  /** Cheque has been issued fraudulently. */
  FRAD = "FRAD",
  /** Cheque has been stolen/lost. */
  LOST = "LOST",
  /** Reason is provided as narrative information in the additional reason information. */
  NARR = "NARR",
}