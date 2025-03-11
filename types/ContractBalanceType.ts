/**
 * Specifies a contract balance type code, as published in the external ISO 20022 external code set.
 * ISO20022 External Code
 * Original name: ExternalContractBalanceType1Code
 */
export enum ContractBalanceType {
  /** Revolver loan current utilisation (applicable on loan contracts types) */
  EXPC = "EXPC",
  /** Total loan utilisation for loans with total loan limit (applicable on loan contracts types) */
  EXPT = "EXPT",
}