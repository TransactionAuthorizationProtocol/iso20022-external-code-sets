/**
 * Specifies the type of billing rate or factor, as published in an external billing rate identification code list.
 * ISO20022 External Code
 * Original name: ExternalBillingRateIdentification1Code
 */
export enum BillingRateIdentification {
  /** Per annum earnings rate, adjusted for reserves, applied to the current analysis period’s investable balance for calculation of the earnings allowance credit. The ECR, Net of Reserves, is calculated as: ECR, Net of Reserves = ECR, Not Net (00 01 22) * (1 – Reserve Rate) */
  AEAR = "AEAR",
  /** The anticpated earnings allowance rate, as adjusted, to be used next month in the calculation of the earnings allowance. See AEAR AdjustedEarningsAllowance Rate */
  ANXE = "ANXE",
  /** The current CD (Certificate of Deposit) rate as published by the bank. */
  CDRA = "CDRA",
  /** The per annum rate used to calculate the Deficiency Interest amount to be paid to the bank. */
  DINR = "DINR",
  /** The per annum rate used to calculate a surcharge based on the Deficiency Interest amount to be paid to the bank. */
  DSCR = "DSCR",
  /** Per annum earnings rate applied to the current statement period’s investable balance for calculation of the earnings allowance credit. The earnings allowance credit is used to offset the charges for balance compensable services. This rate has NOT been adjusted for reserves. The ECR, Not Net of Reserves, is calculated as: ECR, Not Net = ECR, Net of Reserves (00 01 20) / (1 – Reserve Rate) */
  EALR = "EALR",
  /** The current FDIC rate used in the US to calculate the Federal Deposit Insurance premium paid by the banks to the FDIC. */
  FDIC = "FDIC",
  /** Per annum interest rate used to calculate the interest amount credited to a designated account. The amount of interest credited, if any, is reported in a Compensation Section with a Compensation Identifier of TtlInterestCredited */
  ICDR = "ICDR",
  /** The collected balance required to offset $1.00 of balance compensable service charges. This factor can be used to calculate the balance equivalent of balance compensable service charges. The multiplier is calculated in one of three different ways depending on whether the Earnings Allowance Rate (ECR) is adjusted for reserves or not (net of reserves or not) and, in the case where the ECR is not adjusted for reserves, whether the multiplier is adjusted for reserves or not. */
  MULT = "MULT",
  /** Per annum interest rate used to calculate overdraft compensation on an average net collected balance which is negative (AFP balance 00 00 10). An average NET balance is negative when the sum of the daily ending POSITIVE and NEGATIVE balances is negative. */
  NCBO = "NCBO",
  /** Per annum interest rate applied to NEGATIVE collected balances (AFP balance 00 00 13) for calculation of overdraft compensation. */
  NGCO = "NGCO",
  /** Per annum interest rate applied to NEGATIVE ledger balances (AFP balance 00 00 03) for calculation of overdraft compensation. */
  NGLO = "NGLO",
  /** Per annum interest rate used to calculate overdraft compensation on an average net ledger balance which is negative (AFP balance 00 00 00). An average NET balance is negative when the sum of the daily ending POSITIVE and NEGATIVE balances is negative. */
  NLBO = "NLBO",
  /** The anticpated earnings allowance rate to be used next month in the calculation of the earnings allowance. See EALR EarningsAllowance Rate */
  NXME = "NXME",
  /** The anticipated Multiplier to be used next month. See MULT Multiplier. */
  NXMU = "NXMU",
  /** The current per annum Prime rate as published by the bank. */
  PRIR = "PRIR",
  /** The per annum reserve rate as applied to non demand deposit accounts such as time deposit or CD accounts. */
  RRQR = "RRQR",
  /** Per annum interest rate used to calculate that portion of the CollectedBal-AvgPositive that US banks must keep on deposit at the US Federal Reserve. */
  RSRV = "RSRV",
  /** Per annum interest rate assessed on that portion of the account balance which is the difference between the average negative ledger and the average negative collected balance (AFP balance 00 00 15). This rate is used to assess compensation on the portion of the negative collected balance that represents the use of uncollected funds. */
  UFUR = "UFUR",
}