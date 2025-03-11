/**
 * Specifies the external validation rule identification scheme name code in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalValidationRuleIdentification1Code
 */
export enum ValidationRuleIdentification {
  /** Identifies the validation rules related to the Russian Cross-border Transactions Currency Control Reporting */
  CCTR = "CCTR",
  /** Identifies the validation rules related to the invoice tax reporting */
  ITRP = "ITRP",
  /** Identifies the validation rule scheme related to the ECB Euro Money Market Statistical Reporting */
  MMSR = "MMSR",
  /** Identifies the validation rules related to the Bank Of England Sterling Money Market Daily Reporting */
  SMMD = "SMMD",
}