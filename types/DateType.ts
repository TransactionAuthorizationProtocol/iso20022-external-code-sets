/**
 * Defines the type of date, as published in an external date type code list.
 * ISO20022 External Code
 * Original name: ExternalDateType1Code
 */
export enum DateType {
  /** Relates to the invoice date. */
  INDA = "INDA",
  /** Date type is not available. */
  NTAV = "NTAV",
  /** Relates to the next billing date. */
  NXBD = "NXBD",
  /** Relates to the payment due date. */
  PADD = "PADD",
}