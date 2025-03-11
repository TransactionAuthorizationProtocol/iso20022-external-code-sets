/**
 * Specifies the external organisation identification scheme name code in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalOrganisationIdentification1Code
 */
export enum OrganisationIdentification {
  /** Unique and unambiguous assignment made by a specific bank or similar financial institution to identify a relationship as defined between the bank and its client. */
  BANK = "BANK",
  /** Identifier of the business domain in which the organisation is active. */
  BDID = "BDID",
  /** Other identification of the organisation. */
  BOID = "BOID",
  /** A unique identification number assigned by a central bank to identify an organisation. */
  CBID = "CBID",
  /** A unique identification number assigned by a clearing house to identify an organisation */
  CHID = "CHID",
  /** A unique identification number assigned by a designated authority to a certificate of incorporation and used to identify an organisation. */
  CINC = "CINC",
  /** Country authority given organisation identification (e.g., corporate registration number) */
  COID = "COID",
  /** Number assigned by an issuer to identify a customer. Number assigned by a party to identify a creditor or debtor relationship. */
  CUST = "CUST",
  /** A unique identification number provided by Dun & Bradstreet to identify an organisation. */
  DUNS = "DUNS",
  /** Number assigned by a registration authority to an employer. */
  EMPL = "EMPL",
  /** Global Location Number. A non-significant reference number used to identify legal entities, functional entities, or physical entities according to GS1 numbering scheme rules.The number is used to retrieve detailed information that is linked to it. */
  GS1G = "GS1G",
  /** The SIREN number is a 9 digit code assigned by INSEE, the French National Institute for Statistics and Economic Studies, to identify an organisation in France. */
  SREN = "SREN",
  /** The SIRET number is a 14 digit code assigned by INSEE, the French National Institute for Statistics and Economic Studies, to identify an organisation unit in France. It consists of the SIREN number, followed by a five digit classification number, to identify the local geographical unit of that entity */
  SRET = "SRET",
  /** Number assigned by a tax authority to identify an organisation. */
  TXID = "TXID",
}