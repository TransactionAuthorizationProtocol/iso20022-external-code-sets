/**
 * Specifies the external trade market code in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalTradeMarket1Code
 */
export enum TradeMarket {
  /** Factoring service provider, Factoring client and third party in the same country */
  FDMS = "FDMS",
  /** Factoring service provider, Factoring client in the same country, third party in another country */
  FEXP = "FEXP",
  /** Factoring client and third party in the same country, Factoring service provider in another country */
  FFDM = "FFDM",
  /** Factoring service provider, Factoring client and third party in the same country, but factoring client has an exceptional VAT ruling, for example if it’s overseas */
  FFDT = "FFDT",
  /** Factoring service provider and third party in the same country, Factoring client in another country */
  FIMP = "FIMP",
  /** Factoring service provider, Factoring client and third party in three different countries */
  FREX = "FREX",
}