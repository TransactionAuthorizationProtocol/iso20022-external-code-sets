/**
 * Specifies the reason for pending status.
 * ISO20022 External Code
 * Original name: ExternalPendingProcessingReason1Code
 */
export enum PendingProcessingReason {
  /** Received after the servicer's deadline. Processed on best effort basis */
  ADEA = "ADEA",
  /** Exceptional closing of all financial institutions due to natural disaster, for example, earthquake */
  DISA = "DISA",
  /** Special follow-up is taking place */
  ESCA = "ESCA",
  /** Pending reason being investigated */
  IAAD = "IAAD",
  /** Longer processing timeframe for this type of SSI */
  LPRO = "LPRO",
  /** Information, for example, currency is missing */
  MINF = "MINF",
  /** Financial instrument is a new issue and not yet available/tradable */
  NEWI = "NEWI",
  /** Next process is launched. No processing pending problems to be reported */
  NEXT = "NEXT",
  /** Instruction was not straight through processing and had to be processed manually */
  NSTP = "NSTP",
  /** Transaction was put on hold/frozen by the system */
  PRSY = "PRSY",
}