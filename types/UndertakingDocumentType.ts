/**
 * Specifies the external undertaking document type code in the format of a character string with a maximum length of 4 characters. The list of valid codes is an external code list published separately.
 * ISO20022 External Code
 * Original name: ExternalUndertakingDocumentType1Code
 */
export enum UndertakingDocumentType {
  /** Document is a beneficiary statement. */
  BENS = "BENS",
  /** Document is an invoice. */
  CINV = "CINV",
  /** Document is a claim form. */
  CLAF = "CLAF",
  /** Document is an undertaking demand. */
  DEMD = "DEMD",
  /** Document is a transfer form. */
  TRAF = "TRAF",
}