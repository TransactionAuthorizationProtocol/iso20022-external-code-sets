/**
 * Specifies the calculation agent, as published in an external calculation agent code list.
 * ISO20022 External Code
 * Original name: ExternalCalculationAgent1Code
 */
export enum CalculationAgent {
  /** Counterparty side will act. */
  CNTP = "CNTP",
  /** As defined in the ISDA Master Agreement. */
  ISDA = "ISDA",
  /** Trading side and counterparty side will jointly act. */
  JOIN = "JOIN",
  /** Trading side will act. */
  TRAD = "TRAD",
}