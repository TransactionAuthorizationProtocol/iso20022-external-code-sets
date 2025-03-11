/**
 * Specifies the external request type code for a payment control command in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalPaymentControlRequestType1Code
 */
export enum PaymentControlRequestType {
  /** Type is a request to release the pending transactions. */
  RT01 = "RT01",
  /** Type is a request to hold normal transactions. */
  RT02 = "RT02",
  /** Type is a request to cancel a transaction. */
  RT03 = "RT03",
  /** Type is a request to change the sequence of the transactions. */
  RT04 = "RT04",
  /** Type is a request to release the suspicious transactions. */
  RT05 = "RT05",
}