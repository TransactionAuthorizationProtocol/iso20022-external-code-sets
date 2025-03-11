/**
 * Specifies the nature, or use, of the amount in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalDiscountAmountType1Code
 */
export enum DiscountAmountType {
  /** Addition discount based on third-party agreed business promotional activity, i.e., extra 10 percent discount for 15 days) */
  APDS = "APDS",
  /** Discount based on volume purchased. */
  STDS = "STDS",
  /** Discount based on terms negotiated for payment within a specified time period, i.e., 2/10 Net 30 (2 percent discount if paid in 10 days; otherwise, net amount is due in 30 days). */
  TMDS = "TMDS",
}