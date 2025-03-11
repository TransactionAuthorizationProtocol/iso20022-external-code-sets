/**
 * Specifies the detailed sub products types allowed for emission allowances and associated derivatives.
 * ISO20022 External Code
 * Original name: ExternalEmissionAllowanceSubProductType1Code
 */
export enum EmissionAllowanceSubProductType {
  /** Commodity attribute of type emissions allowance CER (Certified Emission Reduction). */
  CERE = "CERE",
  /** Commodity attribute of type emissions allowance ERU (European Reduction Unit). */
  ERUE = "ERUE",
  /** Commodity attribute of type emissions allowance EUAA (European Union Aviation Allowance). */
  EUAA = "EUAA",
  /** Commodity attribute of type emissions allowance EUA (European Union Allowance). */
  EUAE = "EUAE",
  /** Commodity attribute of other type. */
  OTHR = "OTHR",
}