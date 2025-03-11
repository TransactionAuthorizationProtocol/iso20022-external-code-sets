/**
 * Specifies the type of reservation, as published in an external reservation type code set.
 * ISO20022 External Code
 * Original name: ExternalReservationType1Code
 */
export enum ReservationType {
  /** Amount blocked or frozen due to external circumstances such as a court order, death of beneficiary or account owner, or bankruptcy. */
  BLKD = "BLKD",
  /** Amount set aside by a participant to reserve liquidity from its own account, exclusively or executing cash withdrawals. */
  CARE = "CARE",
  /** Amount set aside by a participant to reserve liquidity from its own account, exclusively for executing highly urgent payments. */
  HPAR = "HPAR",
  /** Amount set aside by a participant to reserve liquidity from its own account, exclusively for the settlement of the multilateral cash balance stemming from the Net Security Settlement System. */
  NSSR = "NSSR",
  /** Amount above which funds will be destined for investment. */
  THRE = "THRE",
  /** Amount set aside by a participant to reserve liquidity from its own account, exclusively for executing critical payments called urgent payments. */
  UPAR = "UPAR",
}