/**
 * Specifies the document line type as published in an external document type code list.
 * ISO20022 External Code
 * Original name: ExternalDocumentLineType1Code
 */
export enum DocumentLineType {
  /** Line item reference is an additional product identification assigned by the manufacturer. */
  ADPI = "ADPI",
  /** Line item reference is an alternate International Standard Book Number (ISBN). */
  AISB = "AISB",
  /** Line item reference is an asset number. */
  ASNB = "ASNB",
  /** Line item reference is a catalog number. */
  CTNB = "CTNB",
  /** Line item reference is Dun & Bradstreet Standard Product and Service code. */
  DBSP = "DBSP",
  /** Line item reference is an European Article Number (EAN). */
  EANN = "EANN",
  /** Line item reference is an equipment identification number. */
  EINB = "EINB",
  /** Line item reference is a general specification number. */
  GSNB = "GSNB",
  /** Line item reference is a Health Care Industry Bar Code (HIBC) */
  HIBC = "HIBC",
  /** Line item reference is an International Standard Book Number (ISBN). */
  ISBN = "ISBN",
  /** Line item reference is a lot number. */
  LTNB = "LTNB",
  /** Line item reference is a model number */
  MDNB = "MDNB",
  /** Line item reference is a part reference number. */
  PRNB = "PRNB",
  /** Line item reference is a product type code. */
  PTCD = "PTCD",
  /** Line item reference is a stock number. */
  SKNB = "SKNB",
  /** Line item reference is a style number. */
  STNB = "STNB",
  /** Line item reference is a technical order number. */
  TONB = "TONB",
  /** Line item reference is an UPC consumer package code. */
  UPCC = "UPCC",
  /** Line item reference is an Universal Product Number. */
  UPNB = "UPNB",
}