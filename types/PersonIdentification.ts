/**
 * Specifies the external person identification scheme name code in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalPersonIdentification1Code
 */
export enum PersonIdentification {
  /** Number assigned by a social security agency to identify a non-resident person. */
  ARNU = "ARNU",
  /** Unique and unambiguous assignment made by a specific bank or similar financial institution to identify a relationship as defined between the bank and its client. */
  BANK = "BANK",
  /** Number assigned by an authority to identify the passport number of a person. */
  CCPT = "CCPT",
  /** Number assigned by an issuer to identify a customer. */
  CUST = "CUST",
  /** Number assigned by an authority to identify a driver's license. */
  DRLC = "DRLC",
  /** Number assigned by a registration authority to an employee. */
  EMPL = "EMPL",
  /** Number assigned by an authority to identify the national identity number of a person. */
  NIDN = "NIDN",
  /** Commercial identification of the person. */
  POID = "POID",
  /** Number assigned by an authority to identify the social security number of a person. */
  SOSE = "SOSE",
  /** Number assigned by a telephone or mobile phone operator to identify a person. A person may have multiple phone numbers. */
  TELE = "TELE",
  /** Number assigned by a tax authority to identify a person. */
  TXID = "TXID",
}