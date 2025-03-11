/**
 * Specifies the document type as published in an external document type code list.
 * ISO20022 External Code
 * Original name: ExternalDocumentType1Code
 */
export enum DocumentType {
  /** Document is a payment that applies to a specific source document. */
  AROI = "AROI",
  /** Document is a shipping notice. */
  BOLD = "BOLD",
  /** Document is an invoice. */
  CINV = "CINV",
  /** Document is an agreement between the parties, stipulating the terms and conditions of the delivery of goods or services. */
  CMCN = "CMCN",
  /** Document is a credit note for the final amount settled for a commercial transaction. */
  CNFA = "CNFA",
  /** Document is a contract evidencing an agreement between the seller and buyer for the supply of goods and/or services. */
  CONT = "CONT",
  /** Document is a credit note. */
  CREN = "CREN",
  /** Document is a debit note. */
  DEBN = "DEBN",
  /** Document is an advice of dispatch of the goods. */
  DISP = "DISP",
  /** Document is a debit note for the final amount settled for a commercial transaction. */
  DNFA = "DNFA",
  /** Document is an invoice for the hiring of human resources or renting goods or equipment. */
  HIRI = "HIRI",
  /** Document is a signed invoice. */
  INVS = "INVS",
  /** Document is an invoice claiming payment for the supply of metered services, eg. Gas or electricity, supplied to a fixed meter. */
  MSIN = "MSIN",
  /** In trade transactions, a pro forma invoice is a document that states a commitment from the seller to sell goods to the buyer at specified prices and terms. It is used to declare the value of the trade. It is not a true invoice, because it is not used to record accounts receivable for the seller and accounts payable for the buyer. */
  PROF = "PROF",
  /** Document is a purchase order. */
  PUOR = "PUOR",
  /** Document is a quotation setting out the conditions under which the goods and/or services are offered. */
  QUOT = "QUOT",
  /** Document is a statement of the transactions posted to the debtor's account at the supplier. */
  SBIN = "SBIN",
  /** Document is a statement of the transactions posted to the debtor's account at the supplier. */
  SOAC = "SOAC",
  /** Document is a document presented by the seller in support of the procurement of goods and/or services. */
  SPRR = "SPRR",
  /** Document is a timesheet recording times for the provision of services and/or delivery of goods. */
  TISH = "TISH",
  /** Document is a transaction identifier as assigned by the Trade Services Utility. */
  TSUT = "TSUT",
  /** Document is a usage report indicating the consumption pattern for designated goods and/or services. */
  USAR = "USAR",
  /** Document is an electronic payment document. */
  VCHR = "VCHR",
}