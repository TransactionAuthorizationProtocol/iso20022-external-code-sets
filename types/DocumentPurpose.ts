/**
 * Specifies the document purpose as published in an external document purpose code list.
 * ISO20022 External Code
 * Original name: ExternalDocumentPurpose1Code
 */
export enum DocumentPurpose {
  /** The document represents a document that has been confirmed, for example an invoice that has been confirmed by the buyer for payment. */
  CONF = "CONF",
  /** The document represents an invoice submitted under a factoring arrangment. */
  FINV = "FINV",
}