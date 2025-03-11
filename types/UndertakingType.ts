/**
 * Specifies the external undertaking type code in the format of a character string with a maximum length of 4 characters. The list of valid codes is an external code list published separately.
 * ISO20022 External Code
 * Original name: ExternalUndertakingType1Code
 */
export enum UndertakingType {
  /** Undertaking in support of an advance payment obligation. */
  APAY = "APAY",
  /** Undertaking in support of a commercial obligation. */
  COMM = "COMM",
  /** Undertaking in support of a customs duty obligation. */
  CUST = "CUST",
  /** Undertaking representing the primary means of payment. */
  DPAY = "DPAY",
  /** Undertaking in support of a financial obligation. */
  FINC = "FINC",
  /** Undertaking in support of a insurance obligation. */
  INSU = "INSU",
  /** Undertaking in support of an Industrial Revenue Board (IRB) obligation. */
  IRBO = "IRBO",
  /** Undertaking in support of a maintenance obligation. */
  MAIN = "MAIN",
  /** Undertaking in support of a payment obligation. */
  PAYM = "PAYM",
  /** Undertaking in support of a performance obligation. */
  PERF = "PERF",
  /** Undertaking in support of a monetary retention obligation. */
  RETN = "RETN",
  /** Undertaking in support of a sea transportation obligation. */
  SHIP = "SHIP",
  /** Undertaking in support of a tender or bid obligation. */
  TEND = "TEND",
  /** Undertaking in support of a warranty obligation. */
  WARR = "WARR",
}