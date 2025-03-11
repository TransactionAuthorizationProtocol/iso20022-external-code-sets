/**
 * Specifies the investigation service level, as published in an external investigation service level code set.
 * ISO20022 External Code
 * Original name: ExternalInvestigationServiceLevel1Code
 */
export enum InvestigationServiceLevel {
  /** Response expected within one business day. */
  R01D = "R01D",
  /** Response expected within three business days. */
  R03D = "R03D",
  /** Response expected within five business days. */
  R05D = "R05D",
  /** Response expected within ten business days. */
  R10D = "R10D",
  /** Response expected within fifteen business days. */
  R15D = "R15D",
}