/**
 * Specifies the notification type, as published in an external notification type code set.
 * ISO20022 External Code
 * Original name: ExternalNotificationType1Code
 */
export enum NotificationType {
  /** Notification of a change of address. */
  ADDR = "ADDR",
  /** Notification of new or amended terms and conditions for an account. */
  ATAC = "ATAC",
  /** Notification of new or amended contact details. */
  COUP = "COUP",
  /** Notification of a currency holiday. */
  CUHO = "CUHO",
  /** Notification of any pertinent industry or market changes. */
  INCH = "INCH",
  /** Sharing of information. */
  INFO = "INFO",
  /** Notification of a merger and any associated changes. */
  MERG = "MERG",
  /** Notification of a change to opening hours. */
  OPEN = "OPEN",
  /** Other notification type. */
  OTHR = "OTHR",
  /** Notification of a change to Standing Settlement Instructions (SSIs). */
  SSIS = "SSIS",
  /** Notification of a process suspension due to an incident. */
  SUSP = "SUSP",
  /** Request for access to a system. */
  SYST = "SYST",
  /** Notification of termination of a service, such as an account closure. */
  TERM = "TERM",
}