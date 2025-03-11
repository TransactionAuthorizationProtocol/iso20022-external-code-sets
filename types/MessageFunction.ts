/**
 * Code to identify the type of process related to the message, as published separately in a message function external code set.
 * ISO20022 External Code
 * Original name: ExternalMessageFunction1Code
 */
export enum MessageFunction {
  /** Advice indicates where the sender informs the receiver of an activity that has been taken that requires a response. */
  ADVC = "ADVC",
  /** Notification to initiate the transfer of a batch (no response expected). */
  BNTF = "BNTF",
  /** Request to initiate the transfer of a batch (response expected). */
  BTRQ = "BTRQ",
  /** Advice about the capture of an activity already performed (response expected). */
  CAAD = "CAAD",
  /** Notification about the capture of an activity already performed (no response expected). */
  CANO = "CANO",
  /** Notification to initiate the transfer of a collection (no response expected). */
  CLNF = "CLNF",
  /** Request to initiate the transfer of a collection (response expected). */
  CLRQ = "CLRQ",
  /** Notification of a message containing errors. */
  ERNO = "ERNO",
  /** Informs of an action to be taken. */
  INSN = "INSN",
  /** Message function is notification. */
  NOTI = "NOTI",
  /** Notification of a rejected message. */
  RENO = "RENO",
  /** Message function is request. */
  REQU = "REQU",
  /** Advice about the status of a transaction. */
  STAD = "STAD",
  /** Notification about the status of a transaction. */
  STNO = "STNO",
}