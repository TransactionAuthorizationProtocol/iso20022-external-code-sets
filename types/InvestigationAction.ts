/**
 * Specifies the requested action, as published in an external investigation action code set.
 * ISO20022 External Code
 * Original name: ExternalInvestigationAction1Code
 */
export enum InvestigationAction {
  /** Responder is requested to close the investigation. All investigation requests relating to the investigation may be disregarded. */
  RQCL = "RQCL",
  /** Responder is requested to review an earlier response as the requestor objects to it. */
  RQOB = "RQOB",
  /** Responder is requested to provide the status of the investigation. */
  RQST = "RQST",
}