/**
 * Specifies the balance sub-type, as published in an external balance sub-type code list.
 * ISO20022 External Code
 * Original name: ExternalBalanceSubType1Code
 */
export enum BalanceSubType {
  /** Balance to be held in the settlement account in order to comply with the average reserve due, in the event that the bank's balance is equal to the reserve due during the remaining days of the maintenance period. */
  ADJT = "ADJT",
  /** Balance representing the amount in the domestic or base accounting currency. */
  BCUR = "BCUR",
  /** Balance representing the regulatory reserve that a financial institution must have with the account servicing institution, eg, the minimum credit balance a financial institution is to keep with its Central Bank for mandatory reserve purposes. In some countries, a blocked balance is known as a 'reserve' balance. */
  BLCK = "BLCK",
  /** Balance representing funds that cannot be touched by the account owner. */
  BLKD = "BLKD",
  /** Balance representing the intra day overdraft granted by the Central Bank to financial institutions participating in a RTGS system. This balance may vary over time and shall be offset at the end of the day. */
  DLOD = "DLOD",
  /** Balance representing the potential loan a Central Bank would make in cash if the collateral is pledged, eg, securities available and eligible as collateral with the Central Bank. */
  EAST = "EAST",
  /** Balance representing the forecast of the cash-equivalent resulting from evaluation of existing holdings at CSD that are qualified to serve as collateral. */
  FCOL = "FCOL",
  /** Balance representing the cash equivalent resulting from evaluation of existing holdings at CSD that are qualified to serve as collateral and have been used as collateral. */
  FCOU = "FCOU",
  /** Balance representing the total of all balance types representing the forecast of transactions to settle, blocked items, custody transactions and corporate actions cash disbursements. */
  FORC = "FORC",
  /** Balance representing the net amount to be funded resulting from the difference between the total of all transactions with a cash impact and the existing cash coverage. */
  FUND = "FUND",
  /** Balance representing an intermediate amount such as the opening or closing balance incrementally carried forward from one page to the next in a multi-page statement or report. */
  INTM = "INTM",
  /** Balance representing the amount in the local market currency for which the asset is held. */
  LCUR = "LCUR",
  /** Balance of a specific limit value, eg, a bilateral balance is calculated in relation to a given bilateral limit. */
  LRLD = "LRLD",
  /** Balance representing the amount that a financial institution has set aside for a specific reason and which is therefore not available. In the context of CSDs, reservation of liquidity made to meet settlement obligations. */
  NOTE = "NOTE",
  /** Balance of securities pending delivery, such as orders to sell securities have been executed but settlement of the open transactions has not been confirmed. */
  PDNG = "PDNG",
  /** Balance representing the fictive amount of automated direct debits or payment based on standing arrangements between the CSD and the user. Usage: Pay-Ins and Pay-Outs can be different based on individual payment instructions or available funds. */
  PIPO = "PIPO",
  /** Average of the daily balances on the account used to fulfil the reserve requirements calculated from the beginning of the maintenance period. */
  PRAV = "PRAV",
  /** Balance representing the regulatory reserve that a financial institution must have with the account servicing institution, eg, the minimum credit balance a financial institution is to keep with its Central Bank for mandatory reserve purposes. */
  RESV = "RESV",
  /** Balance representing the forecast of the cash-equivalent resulting from evaluation of the net incoming balance of securities qualified to serve as collateral for which settlement instructions are held at. */
  SCOL = "SCOL",
  /** Balance representing the cash-equivalent resulting from evaluation of incoming securities, qualified to serve as collateral and actually used as collateral, which have been settled during the settlement process. */
  SCOU = "SCOU",
  /** Balance representing the amount that will be destined for investment. Difference between available balance and threshold for investment limit. */
  THRE = "THRE",
}