/**
 * Specifies the nature, or use, of the amount, as published in an external document amount type code set.
 * ISO20022 External Code
 * Original name: ExternalDocumentAmountType1Code
 */
export enum DocumentAmountType {
  /** Addition discount based on third-party agreed business promotional activity, i.e., extra 10 percent discount for 15 days) */
  APDS = "APDS",
  /** Amount is new charges, for example new charges on a credit card. */
  CHAR = "CHAR",
  /** Tax accessed by city jurisdictions within a country. */
  CITY = "CITY",
  /** Tax accessed by county jurisdictions within a country. */
  CNTY = "CNTY",
  /** Amount is a credit note. */
  CREN = "CREN",
  /** Amount is available credit. */
  CRTL = "CRTL",
  /** Amount is due payable. */
  DUPA = "DUPA",
  /** Amount is in escrow. */
  ESCO = "ESCO",
  /** Amount is fees. */
  FEES = "FEES",
  /** Amount is insurance. */
  INSU = "INSU",
  /** Amount is interest charges, or example interest charges on a credit card. */
  INTC = "INTC",
  /** Amount is the interest. */
  INTE = "INTE",
  /** Tax accessed by local jurisdictions within a country. */
  LOCL = "LOCL",
  /** Amount is the minimum due. */
  MIDU = "MIDU",
  /** Amount is the outstanding balance. */
  OBAL = "OBAL",
  /** Amount is past due. */
  PADU = "PADU",
  /** Amount is the previous balance. */
  PBAL = "PBAL",
  /** Amount is the outstanding principal. */
  PRIN = "PRIN",
  /** Tax accessed by province jurisdictions within a country. */
  PROV = "PROV",
  /** Amount remitted. */
  REMI = "REMI",
  /** Amount is the statement balance. */
  SBAL = "SBAL",
  /** Tax accessed by state jurisdictions within a country. */
  STAT = "STAT",
  /** Discount based on volume purchased. */
  STDS = "STDS",
  /** Amount is tax. */
  TAXS = "TAXS",
  /** Discount based on terms negotiated for payment within a specified time period, i.e., 2/10 Net 30 (2 percent discount if paid in 10 days; otherwise, net amount is due in 30 days). */
  TMDS = "TMDS",
  /** Amount is the total. */
  TOTA = "TOTA",
}