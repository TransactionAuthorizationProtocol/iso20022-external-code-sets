/**
 * Specifies the external date frequency code in the format of a character string with a maximum length of 4 characters. The list of valid codes is an external code list published separately.
 * ISO20022 External Code
 * Original name: ExternalDateFrequency1Code
 */
export enum DateFrequency {
  /** Frequency is monthly. */
  MNTH = "MNTH",
  /** Frequency is quarterly (every three months). */
  QUTR = "QUTR",
  /** Frequency is semi-annual (every six months). */
  SEMI = "SEMI",
  /** Frequency is two-monthly (every two months). */
  TOMN = "TOMN",
  /** Frequency is annual. */
  YEAR = "YEAR",
}