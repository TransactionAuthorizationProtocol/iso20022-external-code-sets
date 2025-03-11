/**
 * Specifies the external rates and tenors code in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalRatesAndTenors1Code
 */
export enum RatesAndTenors {
  /** Euro Overnight Index Swap (ESTROIS) 1 day, 1 week, other tenors. */
  ESOI = "ESOI",
  /** Euro short-term rate. */
  ESTR = "ESTR",
  /** Euro interbank offered rate (3 months, 6 months and other tenors). */
  EURI = "EURI",
  /** Pound sterling London inter-bank offered rate (3 months, 6 months, other tenors) and the respective successor rate. */
  GBPO = "GBPO",
  /** Other floating rates and tenors. */
  OTHR = "OTHR",
  /** Secured overnight financing rate (1 months, 3 months, other tenors). */
  SOFR = "SOFR",
  /** US dollar overnight index swap (1 day, 1 week, other tenors), USDOIS. */
  USOI = "USOI",
  /** US dollar London inter-bank offered rate (3 months, 6 months, other tenors) and the respective successor rate. */
  USPO = "USPO",
}