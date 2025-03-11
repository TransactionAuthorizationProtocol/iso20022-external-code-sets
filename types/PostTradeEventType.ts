/**
 * Specifies the type of post trade event, as published in an external post trade event type code set.
 * ISO20022 External Code
 * Original name: ExternalPostTradeEventType1Code
 */
export enum PostTradeEventType {
  /** Trade will be settled early. */
  EAMT = "EAMT",
  /** Trade will be partially settled early. */
  PEAM = "PEAM",
  /** Part of the trade will be settled on its original date and the remainder will rollover. */
  PRUR = "PRUR",
  /** Part of the trade will not be settled. */
  PRUW = "PRUW",
  /** Rollover of a previous trade. */
  ROLL = "ROLL",
  /** Trade will not be settled. */
  UNWD = "UNWD",
  /** Original trade will not settle on its original date, but will be rolled over. */
  UNWR = "UNWR",
}