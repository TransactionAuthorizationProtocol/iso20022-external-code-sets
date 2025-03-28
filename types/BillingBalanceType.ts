/**
 * Defines the balance of the billing service, as published in an external billing balance code list.
 * ISO20022 External Code
 * Original name: ExternalBillingBalanceType1Code
 */
export enum BillingBalanceType {
  /** The difference between the excess/(deficit) investable balance and the excess/(deficit) collected balance due to the reserve requirement. This balance is not used if the account’s Earnings Credit Rate is net of reserves. This may be used when the earnings allowance rate is not adjusted for reserves. It may be that reserves have been subtracted from the collected balance to determine the investable balance. Therefore, they must be added back to the excess/(deficit) investable balance to determine the collected balance position. The presentation of this calculation is optional. AFP code=00 04 21 */
  ABRR = "ABRR",
  /** Balance required to offset the current analysis period’s balance compensable service charges. The balance equivalent can be calculated in two different ways. The first simply multiplies the balance compensable service charge total by the multiplier. The second calculation incorporates all of the elements of the multiplier calculation. Note that this calculation may result in a slightly different value due to the decimal precision and rounding used in the calculation: AFP code=00 04 00 */
  BEQU = "BEQU",
  /** The sum of only the daily ending NEGATIVE collected balances divided by the number of days in the statement period. The average negative balance, if present, is always positively signed. Balances are net of current period adjustments. Note that a NEGATIVE balance is equal to the POSITIVE balance less the NET balance. Note that a NEGATIVE Collected Balance Interest Rate can be applied to this balance to develop an OD interest charge. AFP code=00 00 13 */
  CBAM = "CBAM",
  /** The sum of the daily ending collected balances (both positive and negative) divided by the number of days in the statement period. A negative-signed value indicates a negative average NET balance. If a reserve-adjusted earnings allowance/credit rate is used, this balance may be the same as the investable balance (00 00 40). Balances are net of current period adjustments. Collected balances represent deposit money that has been collected and excludes any money in float. Note that a NET balance is equal to the POSITIVE balance less the NEGATIVE balance. Note that a NET Collected Balance OD Interest Rate (00 01 43) can be applied to this balance, if negative, to develop an OD interest charge. AFP code=00 00 10 */
  CBAN = "CBAN",
  /** The sum of only the daily ending POSITIVE collected balances divided by the number of days in the statement period. Balances are net of current period adjustments. Collected balances represent deposit money that has been collected and excludes any money in float. Note that a POSITIVE balance is equal to the NET balance plus the NEGATIVE balance. AFP code=00 00 11 */
  CBAP = "CBAP",
  /** That portion of the demand deposit account balance that must be set aside by the bank to meet reserve requirements. AFP code=00 04 20 */
  DABR = "DABR",
  /** Collected balance remaining after the balance required to offset the current analysis period’s balance compensable service charges has been deducted. If negative (deficit), this represents the additional collected balance required to fully offset balance compensable service charges for the current period. If positive (excess), this represents the collected balance surplus after offsetting balance compensable service charges for the current period. AFP code=00 04 12 */
  EDCB = "EDCB",
  /** Investable balance remaining after the balance required to offset the current analysis period’s balance compensable service charges has been deducted. If negative (deficit), this represents the additional investable balance required to fully offset balance compensable service charges for the current period. If positive (excess), this represents the investable balance surplus after offsetting balance compensable service charges for the current period. Depending on the type of underlying account, a hard interest rate may be applied to a balance excess resulting in a hard interest credit to the underlying account. AFP code=00 04 10 */
  EDIB = "EDIB",
  /** That account balance used to calculate the FDIC assessment charge. AFP code=00 00 50 */
  FDIC = "FDIC",
  /** The sum of the daily dollar amount of items in the process of collection divided by the number of days in the statement period. AFP code=00 00 30 */
  FLBA = "FLBA",
  /** Sum of the adjustments to the average float in a prior period(s). A negative-signed value indicates a balance reduction. This balance can also be used to adjust the average collected balances since money in float has a direct effect on collected balances. AFP code=00 00 61 */
  FLPP = "FLPP",
  /** Balance on which the earnings allowance/credit rate is applied. This value can be signed either positive or negative. A negative-signed balance indicates a shortage of investable funds.and may result in a charge. AFP code=00 00 40 */
  IBAL = "IBAL",
  /** The average investable balance that can be used to show the base balance for the calculation of a hard interest credited. This is a hard interest credit as opposed to an earnings credit. AFP code=00 00 75 */
  IBIB = "IBIB",
  /** The average ledger balance that can be used to show the base balance for the calculation of a hard interest credited. This is a hard interest credit as opposed to an earnings credit. AFP code=00 00 70 */
  IBLB = "IBLB",
  /** The average net collected balance that can be used to show the base balance for the calculation of a hard interest credited. This is a hard interest credit as opposed to an earnings credit. AFP code=00 00 71 */
  IBNC = "IBNC",
  /** The average negatve collected balance that can be used to show the base balance for the calculation of a hard interest debit. This is a hard interest debit as opposed to an earnings credit debit. AFP code=00 00 73 */
  IBNG = "IBNG",
  /** The average positive collected balance that can be used to show the base balance for the calculation of a hard interest credited. This is a hard interest credit as opposed to an earnings credit. AFP code=00 00 72 */
  IBPC = "IBPC",
  /** The average reserve requirement balance that can be used to show the base balance for the calculation of a hard interest credited. This is a hard interest credit as opposed to an earnings credit. AFP code=00 00 74 */
  IBRR = "IBRR",
  /** The sum of the daily ending ledger balances (both positive and negative) divided by the number of days in the statement period. A negative-signed value indicates a negative average NET balance. Balances are net of current period adjustments. The ledger balance includes any deposit money that has not been collected, ie, money in float.Note that a NET balance is equal to the POSITIVE balance less the NEGATIVE balance.Note that a NET Ledger Balance OD Interest Rate can be applied to this balance, if negative, to develop an OD interest charge. AFP code=00 00 00 */
  LBAN = "LBAN",
  /** The sum of only the daily ending POSITIVE ledger balances divided by the number of days in the statement period. Balances are net of current period adjustments. The ledger balance includes any deposit money that has not been collected, ie, money in float. Note that a POSITIVE balance is equal to the NET balance plus the NEGATIVE balance. AFP code=00 00 01 */
  LBAP = "LBAP",
  /** Value of the book or ledger balance at the end of the calendar month. AFP code=00 00 05 */
  LBME = "LBME",
  /** The sum of only the daily ending NEGATIVE ledger balances divided by the number of days in the statement period. The average negative balance, if present, is always positively signed. Balances are net of current period adjustments. Note that a NEGATIVE balance is equal to the POSITIVE balance less the NET balance. Note that a NEGATIVE Ledger Balance Interest Rate can be applied to this balance to develop an OD interest charge. AFP code=00 00 03 */
  LBNM = "LBNM",
  /** That portion of the balance that is the difference between the average negative collected balance and the average negative ledger balance. This is used to isolate that portion of the negative collected balance that represents the use of uncollected funds. Balances are net of current period adjustments. Note that the Uncollected Funds Usage Rate can be applied to this balance to develop an Uncollected Funds OD interest charge. AFP code=00 00 15 */
  UCFU = "UCFU",
}