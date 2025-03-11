/**
 * Specifies the investigation sub type, as published in an external investigation sub type code set.
 * ISO20022 External Code
 * Original name: ExternalInvestigationSubType1Code
 */
export enum InvestigationSubType {
  /** Investigation relates to anti-money laundering. */
  AMLI = "AMLI",
  /** Investigation relates to financial crimes compliance. */
  FCCI = "FCCI",
  /** Investigation relates to fraud. */
  FRAD = "FRAD",
  /** Investigation relates to funds/wire transfer regulation. */
  FWTR = "FWTR",
  /** Investigation relates to sanctions. */
  SANC = "SANC",
  /** Investigation relates to a transaction that cannot be executed. */
  UTEX = "UTEX",
}