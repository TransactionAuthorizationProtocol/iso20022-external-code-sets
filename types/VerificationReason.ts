/**
 * Specifies the external verification reason code, as published in an external verification code set.
 * ISO20022 External Code
 * Original name: ExternalVerificationReason1Code
 */
export enum VerificationReason {
  /** Account number provided in the request is invalid or missing. */
  AC01 = "AC01",
  /** Transaction forbidden on this type of account (Payment cannot be made to this account for example not open for deposits, blocked, closed). */
  AG01 = "AG01",
  /** Agent identification provided in the request is incorrect */
  AGNT = "AGNT",
  /** PSP is not registered under this Scheme. */
  BNOR = "BNOR",
  /** Return following technical problems resulting in erroneous transaction. */
  DS28 = "DS28",
  /** Request is a duplicate of another request */
  DUPL = "DUPL",
  /** File format incomplete or invalid. */
  FF01 = "FF01",
  /** Reason has not been specified by agent. */
  MS03 = "MS03",
  /** No response on request within timeframe. */
  NORR = "NORR",
  /** PSP not able to confirm details and no reason is stated. */
  NR01 = "NR01",
  /** Account Owner Identification and Payment Account number do not match. */
  PI01 = "PI01",
  /** Account Owner name and Payment Account number do not match. */
  PN01 = "PN01",
  /** Account Owner name and Payment Account number is a close match. */
  PN02 = "PN02",
  /** Debtor bank identifier is invalid or missing. */
  RC03 = "RC03",
  /** Creditor bank identifier is invalid or missing. */
  RC04 = "RC04",
  /** Associated message was received after agreed processing cut-off time. */
  TM01 = "TM01",
}