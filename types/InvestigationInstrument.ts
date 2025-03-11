/**
 * Specifies the type of instrument or product to which the investigation refers, as published in an external investigation instrument code set.
 * ISO20022 External Code
 * Original name: ExternalInvestigationInstrument1Code
 */
export enum InvestigationInstrument {
  /** Investigation is related to an ACH or mass payment. */
  ACHP = "ACHP",
  /** Investigation is related to a card transaction. */
  CARD = "CARD",
  /** Investigation is related to a cheque. */
  CHQB = "CHQB",
  /** Investigation is related to a direct debit. */
  DDTP = "DDTP",
  /** Investigation is related to a draft. */
  DRFT = "DRFT",
  /** Investigation is related to an instant credit transfer. */
  INST = "INST",
  /** Other underlying instrument. */
  OTHR = "OTHR",
  /** Investigation is related to a request to pay. */
  SRTP = "SRTP",
  /** Investigation is related to a statement entry. */
  STAT = "STAT",
  /** Investigation is related to a wire/high value payment. */
  URGP = "URGP",
  /** Investigation is related to a cross border payment. */
  XBCT = "XBCT",
}