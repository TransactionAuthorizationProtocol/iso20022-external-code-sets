/**
 * Specifies the transaction authentication channel, as published in an external authentication channel code set.
 * ISO20022 External Code
 * Original name: ExternalAuthenticationChannel1Code
 */
export enum AuthenticationChannel {
  /** Authentication provided through ATM */
  ATMA = "ATMA",
  /** Authentication provided through Card */
  CARD = "CARD",
  /** Authentication provided through Internet Banking */
  INBA = "INBA",
  /** Authentication provided through Mobile */
  MOBI = "MOBI",
}