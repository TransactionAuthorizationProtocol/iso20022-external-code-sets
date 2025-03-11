/**
 * Specifies the external document format code in the format of a character string with a maximum length of 4 characters. The list of valid codes is an external code list published separately.
 * ISO20022 External Code
 * Original name: ExternalDocumentFormat1Code
 */
export enum DocumentFormat {
  /** Document format is PDF. */
  DPDF = "DPDF",
  /** Document format is XML. */
  DXML = "DXML",
  /** Document format is a spreadsheet. */
  SDSH = "SDSH",
  /** Document format is Word. */
  WORD = "WORD",
  /** Document format is XSLT. */
  XSLT = "XSLT",
}