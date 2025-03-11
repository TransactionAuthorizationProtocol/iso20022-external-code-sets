/**
 * Specifies the error code as generated by the system in the response, as published in an external balance type code set.
 * ISO20022 External Code
 * Original name: ExternalSystemErrorHandling1Code
 */
export enum SystemErrorHandling {
  /** Specifies the error code when the data requested are not yet available. */
  X020 = "X020",
  /** Specifies the error code when the data requested generates a message size that exceed the processing capacity. */
  X030 = "X030",
  /** Specifies the error code when the data requested have not been found. */
  X050 = "X050",
}