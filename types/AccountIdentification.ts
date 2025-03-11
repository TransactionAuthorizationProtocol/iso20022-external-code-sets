/**
 * Specifies the external account identification scheme name code in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalAccountIdentification1Code
 */
export enum AccountIdentification {
  /** Issuer Identification Number (IIN) - identifies a card issuing institution in an international interchange environment. Issued by ABA (American Bankers Association). */
  AIIN = "AIIN",
  /** Basic Bank Account Number (BBAN) - identifier used nationally by financial institutions, ie, in individual countries, generally as part of a National Account Numbering Scheme(s), to uniquely identify the account of a customer. */
  BBAN = "BBAN",
  /** (United States) Clearing House Interbank Payments System (CHIPS) Universal Identification (UID) - identifies entities that own accounts at CHIPS participating financial institutions, through which CHIPS payments are effected. The CHIPS UID is assigned by the New York Clearing House. */
  CUID = "CUID",
  /** Universal Payment Identification Code (UPIC) - identifier used by the New York Clearing House to mask confidential data, such as bank accounts and bank routing numbers. UPIC numbers remain with business customers, regardless of banking relationship changes. */
  UPIC = "UPIC",
}