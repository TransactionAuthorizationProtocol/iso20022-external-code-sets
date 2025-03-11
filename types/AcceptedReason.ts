/**
 * Specifies the reason for an accepted status.
 * ISO20022 External Code
 * Original name: ExternalAcceptedReason1Code
 */
export enum AcceptedReason {
  /** Received after the servicer's deadline. Processed on best effort basis */
  ADEA = "ADEA",
  /** Instruction was not straight through processing and had to be processed manually */
  NSTP = "NSTP",
  /** Instruction is accepted but does not comply with the market practice rule published for the concerned market or process */
  SMPG = "SMPG",
}