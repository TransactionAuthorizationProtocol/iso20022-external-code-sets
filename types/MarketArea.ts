/**
 * Specifies the external market code, to which the instruction, operation or report relates, in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalMarketArea1Code
 */
export enum MarketArea {
  /** Any market area. */
  ANYY = "ANYY",
  /** Bank to bank cash movements. */
  CASH = "CASH",
  /** Collections. */
  COLL = "COLL",
  /** Precious metals and other commodities such as palm oil. */
  COMM = "COMM",
  /** Payment in which one of the parties is not a financial institution. */
  COPA = "COPA",
  /** Futures contracts, options, forward contracts, swaps, etc... */
  DERI = "DERI",
  /** Documentary credits. */
  DOCC = "DOCC",
  /** Foreign exchange. */
  FOEX = "FOEX",
  /** Guarantees. */
  GUAR = "GUAR",
  /** Letters of credit. */
  LETT = "LETT",
  /** Loans and deposits. */
  LOAN = "LOAN",
  /** Money markets. */
  MMKT = "MMKT",
  /** FX forward trade for which only balance is settled. */
  NDLF = "NDLF",
  /** Offshore settlement. */
  OFFS = "OFFS",
  /** Onshore settlement. */
  ONSH = "ONSH",
  /** FX Options, swap options, etc... */
  OPTI = "OPTI",
  /** Bonds, equities, futures... */
  SECU = "SECU",
  /** Documentary credits, collections, guarantees, letters of credit. */
  TFIN = "TFIN",
  /** Cash management activities. */
  TREA = "TREA",
}