/**
 * Defines the type of billing compensation to be applied, as published in an external billing compensation type code list.
 * ISO20022 External Code
 * Original name: ExternalBillingCompensationType1Code
 */
export enum BillingCompensationType {
  /** Total amount of service charges that can be offset by an earnings allowance credit. Such services carry a Payment Method code of ”Balance Compensable”. This amount is included in SettleChargeTtl-Current Period (AFP code 00 03 00). This value must be sent if the bank is providing an earnings credit based on deposit balances. AFP code=00 03 31 */
  BACS = "BACS",
  /** Amount due to the bank for the settlement period, after all adjustments and deductions. Includes both service and tax charges. If nothing is due this value must be sent as zero. AFP code=00 03 14 */
  CTND = "CTND",
  /** Amount due to the bank for balance compensable service charges which exceed the earnings allowance for the settlement period. This amount should be equal to the absolute value of the ExcessDeficitEarningsAllowance-Adjusted (AFP code 00 02 44). This value must be sent if the bank is providing an earnings credit based on deposit balances. AFP code=00 02 47 */
  DEAD = "DEAD",
  /** Value of balances maintained during the statement period which can be used to offset balance compensable service charges. This value must be sent if the bank is providing an earnings credit based on deposit balances. AFP code=00 02 40 */
  EALL = "EALL",
  /** Net value of balance and/or rate adjustments for prior periods to be applied to the current excess/(deficit) allowance. AFP code=00 02 43 */
  EANA = "EANA",
  /** Excess/(deficit) earnings allowance for the analysis period plus or minus any net earnings allowance and/or balance compensable service charge adjustments. Note that in the absence of any EarningsAllowance-NetAdjust (AFP code 00 02 43) this balance is preferred instead of the ExcessDeficitEarningsAllowance (AFP code 00 02 41). This value must be sent if the bank is providing an earnings credit based on deposit balances. AFP code=00 02 44 */
  EDAA = "EDAA",
  /** The difference between the earnings allowance and the balance compensable service charges. Excess allowance occurs when the earnings allowance exceeds the total balance compensable service charges. A Deficit allowance occurs when the total balance compensable service charges exceed the earnings allowance. Excess allowances may be carried forward into future statement periods at the bank’s discretion. Deficit allowances are typically reflected as charges due to the bank in the form of DeficitEarningsAllowanceDueThisStmt (AFP code 00 02 47). This value must be sent if the bank is providing an earnings credit based on deposit balances. AFP code=00 02 41 */
  EDAL = "EDAL",
  /** Charges from a prior billing period which have been paid. AFP code=00 03 22 */
  FESS = "FESS",
  /** Total amount of service charges as listed in the Service Sections that are provided free of charge. Such services carry a Payment Method code of "FREE" (Free). This amount is included in SettleChargetTL-Current Period (AFP code 00 03 00). Should be sent if there are any “Free” service charges in the Service Sections. It is assumed that “waived” and “free” services are not taxed. AFP code=00 03 36 */
  FREE = "FREE",
  /** Total amount of service charges due as of this statement that are not eligible to be offset by an earnings allowance credit. Such services carry a Payment Method code of “FLAT" (HardCharge). This amount is included in SettleChargeTtl-CurrentPeriod (AFP code 00 03 00 ). AFP code=00 03 00 */
  NBCS = "NBCS",
  /** Total amount of service charges as listed in the Service Sections but assessed previously and which, therefore, are not due. Such services carry a Payment Method code of "PVCH" (PreviouslyCharged). This amount is included in SettleChargetTL-CurrentPeriod (AFP code 00 03 00). Should be sent if there are any "Previously Charged" services in the Service Sections. AFP code=00 03 35 */
  PVCS = "PVCS",
  /** Net value of adjustments to balance compensable service charges for a prior period(s) to be applied to the current excess/(deficit) allowance. AFP cod=00 03 32 */
  SCAB = "SCAB",
  /** Total of all service charge adjustments that are not eligible to be offset by an earnings allowance credit. This can be a positive-signed or negative-signed number. AFP code=00 03 33 */
  SCAN = "SCAN",
  /** The total amount of service charges due exclusive of taxes due. AFP code=00 03 11 */
  SCBT = "SCBT",
  /** Total charges before credit for services provided during the current statement period. This total is the arithmetic sum of all charges listed in the Settlement Amount element of the Service Sections in the statement regardless of the Payment Method code . It includes all Balance Compensable charges, Hard charges, Previously Charged charges, Waived charges and Free charges. It does not include any tax charges related to the services. AFP code=00 03 00 */
  SCCP = "SCCP",
  /** Amount of ChargesAndTaxes-NetDueThisStmt (AFP code 00 03 14 ) that are directly debited from the customer’s account. AFP code=00 03 50 */
  SCDB = "SCDB",
  /** The total amount of any service charge discount. AFP code=00 03 41 */
  SCDI = "SCDI",
  /** Amount of ChargesAndTaxes-NetDueThisStmt (AFP code 00 03 14 ) that are invoiced. AFP code=00 03 A0 */
  SCIN = "SCIN",
  /** Total amount of hard interest credited to a designated account. The amount of hard interest credited, if any, is calculated by applying the Interest Credited rate against a negative balance as reported in the Balance Section with a Balance Identifier of ExcessDeficitCollectedBal (AFP code 00 04 12). AFP code=00 00 76 */
  TICD = "TICD",
  /** The total amount of service charges that were subject to taxes. AFP code=00 03 13 */
  TXSC = "TXSC",
  /** The Sum of all the individual tax values as contained in either the individual Service Sections or Tax Sections. AFP code=00 03 60 */
  TXTS = "TXTS",
  /** Amount of service charges otherwise due that are waived on this statement. Such services carry a Payment Method code of “WVED" (Waived). Note that this amount does not include line item free services (AFP code 00 03 36). This amount is included in SettleChargetTL-Current Period (AFP code 00 03 00). Any such line item waivers or free services are not brought forward into the Compensation calculations. It is assumed that “waived” and “free” services are not taxed. afp CODE=00 03 40 */
  WAIV = "WAIV",
}