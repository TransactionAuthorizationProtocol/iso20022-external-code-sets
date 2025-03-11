/**
 * Specifies the external status stage code in the format of a character string with a maximum length of 4 characters. The list of valid codes is an external code list published separately.
 * ISO20022 External Code
 * Original name: ExternalUndertakingStatusCategory1Code
 */
export enum UndertakingStatusCategory {
  /** Status is related to an undertaking amendment. */
  AMND = "AMND",
  /** Status is related to a counter-undertaking amount. */
  AMTC = "AMTC",
  /** Status is related to an undertaking amount. */
  AMTU = "AMTU",
  /** Status is related to an undertaking application. */
  APPL = "APPL",
  /** Status is related to an undertaking amendment requested by the beneficiary. */
  BAMD = "BAMD",
  /** Status is related to an undertaking confirmation. */
  CONF = "CONF",
  /** Status is related to an undertaking demand. */
  DEMD = "DEMD",
  /** Status is related to an undertaking non-extension request. */
  NEXT = "NEXT",
  /** Status is related to an undertaking termination. */
  TERM = "TERM",
}