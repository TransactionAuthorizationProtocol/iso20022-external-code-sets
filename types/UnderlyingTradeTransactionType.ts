/**
 * Specifies the external commercial reference type code in the format of a character string with a maximum length of 4 characters. The list of valid codes is an external code list published separately.
 * ISO20022 External Code
 * Original name: ExternalUnderlyingTradeTransactionType1Code
 */
export enum UnderlyingTradeTransactionType {
  /** Underlying transaction is a contract. */
  CONT = "CONT",
  /** Underlying transaction is a delivery order. */
  DELV = "DELV",
  /** Underlying transaction is a proforma invoice. */
  PROF = "PROF",
  /** Underlying transaction is a project. */
  PROJ = "PROJ",
  /** Underlying transaction is a purchase order. */
  PUOR = "PUOR",
  /** Underlying transaction is a quotation. */
  QUOT = "QUOT",
  /** Underlying transaction is a tender. */
  TEND = "TEND",
}