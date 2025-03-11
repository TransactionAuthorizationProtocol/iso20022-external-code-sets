/**
 * Specifies the reason for a rejected status
 * ISO20022 External Code
 * Original name: ExternalRejectedReason1Code
 */
export enum RejectedReason {
  /** Process a Batch Removal Instruction with an incorrect Batch Concurrent Sequence. */
  AB12 = "AB12",
  /** Invalid routing code send by participant to settlement operator. */
  AB13 = "AB13",
  /** Settlement Instruction with invalid account number or specific settlement type. */
  AB15 = "AB15",
  /** Processing interbank batch settlement instruction with invalid agreement number for settlement type. */
  AB21 = "AB21",
  /** Invalid batch Settlement Instruction received. */
  AB26 = "AB26",
  /** Received after the servicer's deadline */
  ADEA = "ADEA",
  /** Acknowledgement of settlement batch received from PSO for settlement. */
  ASBR = "ASBR",
  /** Date is not a business day */
  BDAY = "BDAY",
  /** Unrecognised or invalid client */
  CTRC = "CTRC",
  /** Request has been rejected because the instruction process is in progress or has been processed */
  DPRG = "DPRG",
  /** Process a Batch Removal Instruction with an incorrect "Original Creation Date and Time" for the batch. */
  DT07 = "DT07",
  /** Some message details specified in the instruction/request are inconsistent with those that expected */
  INDT = "INDT",
  /** Invalid settlement window for settlement instruction. */
  ISWS = "ISWS",
  /** The request cannot be executed. The message requested is not valid */
  MISM = "MISM",
  /** Missing ISIN on settlement instruction. */
  MISN = "MISN",
  /** Permission to be processed is not granted */
  NAUT = "NAUT",
  /** Referred instrument does not exist */
  NINS = "NINS",
  /** Client has no access to the service */
  NOAC = "NOAC",
  /** Warning messages that is send to participants when settlement account must be funded. */
  NOFR = "NOFR",
  /** Originator of the instruction is not an active participant in RTGS. */
  RC13 = "RC13",
  /** Participant is in BCP no settlement instruction for CLS. */
  RC14 = "RC14",
  /** Participant is not an active member of a specific settlement type. */
  RC15 = "RC15",
  /** Originator of the instruction is not an active participant in SADC RTGS. */
  RC16 = "RC16",
  /** Settlement batch removal notification due to batch not funded at window closure by participants. */
  SBRN = "SBRN",
  /** Unrecognised or invalid effective date/time */
  TERM = "TERM",
}