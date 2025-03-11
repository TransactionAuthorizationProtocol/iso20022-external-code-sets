/**
 * Specifies how the SSI update effective date is to be applied.
 * ISO20022 External Code
 * Original name: ExternalEffectiveDateParameter1Code
 */
export enum EffectiveDateParameter {
  /** Relates to the settlement date. */
  SETT = "SETT",
  /** Relates to the trade date. */
  TRAD = "TRAD",
}