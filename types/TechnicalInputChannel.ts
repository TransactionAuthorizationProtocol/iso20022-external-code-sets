/**
 * Specifies the technical input channel, as published in an external technical input channel code list.
 * ISO20022 External Code
 * Original name: ExternalTechnicalInputChannel1Code
 */
export enum TechnicalInputChannel {
  /** Technical Input Channel is fax or facsimile */
  FAXI = "FAXI",
  /** Technical Input Channel is paper */
  PAPR = "PAPR",
  /** Technical Input Channel is tape */
  TAPE = "TAPE",
  /** Technical Input Channel is internet */
  WEBI = "WEBI",
}