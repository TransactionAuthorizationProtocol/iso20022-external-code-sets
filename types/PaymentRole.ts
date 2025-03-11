/**
 * Specifies the role associated with a specific party in a payment instruction, as published in an external payment role code set.
 * ISO20022 External Code
 * Original name: ExternalPaymentRole1Code
 */
export enum PaymentRole {
  /** Party responsible for managing the recovery functions related to a system. */
  BKMG = "BKMG",
  /** Party in a financial institution responsible for the management of the limits. This party is responsible for fixing, modifying, or suspending limits as relevant for the management of counterpart risk or systemic risk containment. */
  LMMG = "LMMG",
  /** Party in a financial institution responsible for the management of liquidity for the financial institution. This party has access to some functions available on the system, such as the liquidity transfers or management of standing instructions for liquidity control. */
  LQMG = "LQMG",
  /** Party in a financial institution responsible for the management of payment processing for the financial institution. This includes authorising, recycling, and modification of payment transactions. */
  PYMG = "PYMG",
  /** Party in a financial institution entitled to obtain information from the system, but not act upon/alter this information. */
  REDR = "REDR",
  /** Party in a financial institution responsible for the management of settlement processing. */
  STMG = "STMG",
}