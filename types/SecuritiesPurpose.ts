/**
 * Specifies the underlying reason code for an SSI instruction, in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalSecuritiesPurpose1Code
 */
export enum SecuritiesPurpose {
  /** Relates to collateral management. */
  COLL = "COLL",
  /** Relates to securities lending. */
  SECL = "SECL",
  /** Relates to settlements. */
  STMT = "STMT",
}