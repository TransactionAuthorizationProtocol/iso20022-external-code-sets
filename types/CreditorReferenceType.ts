/**
 * Specifies the type of creditor reference as published in an external creditor reference type code set.
 * ISO20022 External Code
 * Original name: ExternalCreditorReferenceType1Code
 */
export enum CreditorReferenceType {
  /** Document is a dispatch advice. */
  DISP = "DISP",
  /** Document is a pre-agreed or pre-arranged foreign exchange transaction to which the payment transaction refers. */
  FXDR = "FXDR",
  /** Document is a purchase order. */
  PUOR = "PUOR",
  /** Document is a remittance advice sent separately from the current transaction. */
  RADM = "RADM",
  /** Document is a linked payment instruction to which the current payment instruction is related, for example, in a cover scenario. */
  RPIN = "RPIN",
  /** Document is a structured communication reference provided by the creditor to identify the referred transaction. */
  SCOR = "SCOR",
}