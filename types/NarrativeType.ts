/**
 * Specifies the external narrative type code in the format of a character string with a maximum length of 4 characters. The list of valid codes is an external code list published separately.
 * ISO20022 External Code
 * Original name: ExternalNarrativeType1Code
 */
export enum NarrativeType {
  /** Narrative text describing the additional terms and conditions. */
  ADDI = "ADDI",
  /** Narrative text describing the charge details. */
  CHAR = "CHAR",
  /** Narrative text describing the drawing details. */
  DRAW = "DRAW",
  /** Narrative text describing the assignment of proceeds terms and conditions. */
  PRAS = "PRAS",
  /** Narrative text describing the terms of effectiveness. */
  TEFF = "TEFF",
  /** Narrative text describing the transfer terms and conditions. */
  TRNF = "TRNF",
  /** Narrative text describing the terms of variation. */
  TVAR = "TVAR",
}