/**
 * Specifies the result of an investigation, as published in an external investigation execution confirmation code set.
 * ISO20022 External Code
 * Original name: ExternalInvestigationExecutionConfirmation1Code
 */
export enum InvestigationExecutionConfirmation {
  /** Used when a creditor accepts the debit authorisation. */
  ACDA = "ACDA",
  /** The claim for non-receipt of a payment instruction is accepted. */
  ACNR = "ACNR",
  /** The claim for value date correction is accepted. */
  ACVA = "ACVA",
  /** Process a cancellation request but batch already settled. */
  BIAS = "BIAS",
  /** Further charges details are provided to resolve the case. */
  CHRG = "CHRG",
  /** Used when a requested cancellation is successful. */
  CNCL = "CNCL",
  /** Used when a payment has been checked and was correctly executed without any intervention. */
  CONF = "CONF",
  /** The original value date was correct. */
  CVAA = "CVAA",
  /** Used when a payment will be cancelled to solve an investigation case. */
  CWFW = "CWFW",
  /** The cancellation request has been forwarded to the next agent for execution. Usage: This code should only be utilised where a Case Id is not present. */
  FTNA = "FTNA",
  /** Used when a transfer of funds has been initiated (a cover payment) to resolve a case. */
  ICOV = "ICOV",
  /** Process a Batch Cancellation "using an incorrect batch sequence number”. */
  IDNE = "IDNE",
  /** Used when the requested check for a possible duplicate instruction is confirmed. */
  IDUP = "IDUP",
  /** Used when additional information has been sent to the beneficiary of a payment. */
  INFO = "INFO",
  /** Used when the result of an investigation is, or will be, the initiation of a payment instruction. */
  IPAY = "IPAY",
  /** Used when a payment instruction (eg. MT103) has been initiated to resolve a case. */
  IPYI = "IPYI",
  /** Process a cancellation request with incorrect reference to original batch. */
  IVCR = "IVCR",
  /** Used when a transfer of funds has been modified (a cover payment) to resolve a case. */
  MCOV = "MCOV",
  /** Used when a requested modification is successful. */
  MODI = "MODI",
  /** Used when the payment will be modified to solve an investigation case. */
  MWFW = "MWFW",
  /** Used when no additional information is available. */
  NINF = "NINF",
  /** Used when a requested cancellation is pending. */
  PDCR = "PDCR",
  /** Used to inform that a response to an investigation is pending. */
  PDNG = "PDNG",
  /** Used when a requested cancellation has been partially executed. */
  PECR = "PECR",
  /** Further purpose details are provided to resolve the case. */
  PURP = "PURP",
  /** Used when a requested cancellation has been rejected. */
  RJCR = "RJCR",
  /** The claim for non-receipt of a payment instruction is rejected. */
  RJNR = "RJNR",
  /** The claim for value date correction is rejected. */
  RJVA = "RJVA",
  /** Used when the entry in the statement is correct. */
  SMTC = "SMTC",
  /** Used when the entry in the statement is incorrect and further information is provided with the resolution. */
  SMTI = "SMTI",
  /** Used when sender wants to respond to an assignment with an Unable To Apply workflow. */
  UWFW = "UWFW",
}