/**
 * Specifies the notification sub type, as published in an external notification sub type code set.
 * ISO20022 External Code
 * Original name: ExternalNotificationSubType1Code
 */
export enum NotificationSubType {
  /** Notification is for the credit department. */
  CRED = "CRED",
  /** Notification is for the liquidity department. */
  LIQI = "LIQI",
  /** Notification is for the loans department. */
  LOAN = "LOAN",
  /** Notification is for the payment operations department. */
  PAOP = "PAOP",
  /** Notification is for the sales department. */
  SALE = "SALE",
  /** Notification is for the servicing department. */
  SERV = "SERV",
}