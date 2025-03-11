/**
 * Specifies the requested action, as published in an external investigation action code set.
 * ISO20022 External Code
 * Original name: ExternalInvestigationActionReason1Code
 */
export enum InvestigationActionReason {
  /** Objection is raised as the compensation amount quoted on the investigation response appears incorrect. */
  IRCD = "IRCD",
  /** Objection is raised as the data provided on the investigation response is insufficent to address the original request. */
  IRIC = "IRIC",
  /** Closure is requested as the investigation request has been resolved by requestor. */
  IRRR = "IRRR",
  /** Closure is requested as the investigation request was sent in error. */
  IRSI = "IRSI",
  /** See AdditionalInformation element for action reason. */
  NARR = "NARR",
}