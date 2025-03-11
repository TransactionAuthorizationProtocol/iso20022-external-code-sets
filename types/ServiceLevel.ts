/**
 * Specifies the external service level code in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalServiceLevel1Code
 */
export enum ServiceLevel {
  /** Payment through internal book transfer. */
  BKTR = "BKTR",
  /** Payment is executed following a Euro One-Leg Out Scheme. */
  EOLO = "EOLO",
  /** Tracked Customer Credit Transfer. */
  G001 = "G001",
  /** Tracked Stop and Recall */
  G002 = "G002",
  /** Tracked Outbound Corporate Transfer. */
  G003 = "G003",
  /** Tracked Financial Institution Transfer. */
  G004 = "G004",
  /** Tracked Instant Customer Credit Transfer. */
  G005 = "G005",
  /** Specifies the service conditions applicable to a tracked exceptions and investigations case. */
  G006 = "G006",
  /** Specifies the service level for a tracked inbound customer credit transfer. */
  G007 = "G007",
  /** Specifies the service level for a tracked low-value cross-border customer credit transfer. */
  G009 = "G009",
  /** Used for payment initiation to identify that a Payment or Direct Debit initiation must be executed as an instant or real-time payment instrument. */
  INST = "INST",
  /** Payments must be executed following the NPC Area Payment scheme. */
  NPCA = "NPCA",
  /** Payment must be executed as a non-urgent transaction with priority settlement. */
  NUGP = "NUGP",
  /** Payment must be executed as a non-urgent transaction, which is typically identified as an ACH or low value transaction. */
  NURG = "NURG",
  /** Transaction must be processed according to the EBA Priority Service. */
  PRPT = "PRPT",
  /** Payment must be executed with same day value to the creditor. */
  SDVA = "SDVA",
  /** Payment must be executed following the Single Euro Payments Area scheme. */
  SEPA = "SEPA",
  /** A split payment is a payment that is split into several payments of lower value, namely with the purpose to comply with maximum amount thresholds applicable to some domestic Payment Market Infrastructures or to reduce counterparty liquidity risk. */
  SPLI = "SPLI",
  /** Request to Pay (RTP) transaction refers to an RTP scheme (such as for example the SEPA Request to Pay (SRTP) scheme). */
  SRTP = "SRTP",
  /** Scheck Verarbeitung Austria (Cheque Processing). */
  SVAT = "SVAT",
  /** Payment execution following the cheque agreement and traveller cheque agreement of the German Banking Industry Committee (Die Deutsche Kreditwirtschaft - DK) and Deutsche Bundesbank – Scheck Verrechnung Deutschland */
  SVDE = "SVDE",
  /** Payment must be executed as an urgent transaction cleared through a real-time gross settlement system, which is typically identified as a wire or high value transaction. */
  URGP = "URGP",
  /** Payment must be executed as an urgent transaction cleared through a real-time net settlement system, which is typically identified as a wire or high value transaction. */
  URNS = "URNS",
  /** Transaction is to be treated as an advice and only applied to the account of the creditor or next agent after settlement of the cover has been confirmed. */
  WFSM = "WFSM",
}