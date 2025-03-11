/**
 * Specifies the external proxy account type code, as published in the proxy account type external code set.
 * ISO20022 External Code
 * Original name: ExternalProxyAccountType1Code
 */
export enum ProxyAccountType {
  /** Billers of specific utilities could register for a Biller Identification as supported in the clearing scheme, and use this identification for collections (applied for corporate account proxy). */
  BIID = "BIID",
  /** Unique government-issued Identification used as account proxy to identify the individual (for example for government charges, road taxes, vaccination charges) and typically linked to the individual's bank account (applied for individual account proxy). */
  CCPT = "CCPT",
  /** Corporate Identification issued by a national institution or regulator, used as account proxy. (applied for corporate account proxy). */
  CINC = "CINC",
  /** Identification issued by a national institution or regulator (different from a national scheme like a clearing provider), used as account proxy (applied for corporate or individual account proxy). */
  COID = "COID",
  /** Unique government-issued tax Identification used as account proxy to identify the corporate (for example for government tax) and typically linked to the corporate bank account (applied for corporate account proxy). */
  COTX = "COTX",
  /** Any other customer identification number issued by a corporate, bank or other organization, used as account proxy. (applied for corporate or individual account proxy). */
  CUST = "CUST",
  /** Internationalised internet domain name. */
  DNAM = "DNAM",
  /** Unique government-issued Identification used as account proxy to identify the individual (for example for government charges, road taxes and tolls,vaccination charges) and typically linked to the individual's bank account (applied for individual account proxy). */
  DRLC = "DRLC",
  /** Government-issued Identification (different from a passport Identification or a national Identification). Used as account proxy to identify the individual (for example for public benefits) and typically linked to the individual's bank account (applied for individual account proxy). */
  EIDN = "EIDN",
  /** Internationalised address of an electronic mail box for internet messages. */
  EMAL = "EMAL",
  /** Market-adopted prepaid instruments like e-Wallets, payments to / from e-wallets from / to bank accounts (applied for corporate or individual account proxy). */
  EWAL = "EWAL",
  /** Legal Entity Identifier used as account proxy (applied for corporate account proxy). Use cases: Can be used by corporates as a "government-issued" Identification for registration with payment schemes as a proxy. The proxy may be further used for payments and collections using the underlying instant payment rails for a variety of corporate use cases. */
  LEIC = "LEIC",
  /** Mobile phone number in the format specified by the “The international public telecommunication numbering plan ITU- T E 164" (applied for corporate or individual account proxy). */
  MBNO = "MBNO",
  /** Unique government-issued Identification used as account proxy to identify the individual or corporate for example for public benefits, government subsidies) and typically linked to the individual's / corporate bank account. (applied for corporate or individual account proxy). */
  NIDN = "NIDN",
  /** Unique government-issued tax Identification used as account proxy to identify the individual for example for government tax) and typically linked to the individual's bank account (applied for individual account proxy). */
  PVTX = "PVTX",
  /** Account proxy issued by a payment scheme (applied for corporate or individual account proxy). Use cases: Any proxies issued by clearing systems, for example VPA (India), FPS Identifier (Hong Kong), Jompay (Malaysia) CCIN (Canada). */
  SHID = "SHID",
  /** Unique government-issued Identification used as account proxy to identify the individual (for example for public benefits) and typically linked to the individual's bank account (applied for individual account proxy). */
  SOSE = "SOSE",
  /** A telephone number in the format specified by the 'The international public telecommunication numbering plan ITU-T E.164. */
  TELE = "TELE",
  /** Electronic Identification used, for example, to mask an account number as a means of data secrecy. (applied for corporate or individual account proxy). */
  TOKN = "TOKN",
  /** Subscriber Identification for utilities and services. As opposed to a biller Identification, this identification is used for the subscriber of the service (applied for corporate or individual account proxy). */
  UBIL = "UBIL",
  /** Account proxy for receiving insurance claims, pay insurance premium, road tax payments, traffic tickets etc.(applied for corporate or individual account proxy). */
  VIPN = "VIPN",
}