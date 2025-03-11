/**
 * Specifies the system balance type, as published in an external system balance type code set.
 * ISO20022 External Code
 * Original name: ExternalSystemBalanceType1Code
 */
export enum SystemBalanceType {
  /** Average balance to be held in the settlement account at the end of each day in order to fulfil the reserve due. The approximation will be always made rounding up. */
  ADJT = "ADJT",
  /** Balance represents the available discounted market value for discount window repo. */
  ADWR = "ADWR",
  /** Balance represents the available discounted market value for intraday repo. */
  AIDR = "AIDR",
  /** Balance of money or securities that is at the disposal of the account owner on the date specified. */
  AVLB = "AVLB",
  /** Balance representing the regulatory reserve that a financial institution must have with the account servicing institution, such as the minimum credit balance a financial institution is to keep with its Central Bank for mandatory reserve purposes. In some countries, a blocked balance is known as a 'reserve' balance. */
  BLCK = "BLCK",
  /** Balance representing the projected total of all cash legs for trades settling via a central securities depository that have been matched but blocked in order to not settle. These blocked trades are included in the calculation for settlement (for example to avoid overdrafts). Usage rule: Blocking can be done by account owner or its counterparties. Usually this is done to chain transactions or to prioritise other trades. Blocked trades have an indicator that prevents the transactions from settling. Once matched, they can settle whenever the freeze is lifted. In this case they will move to FSET. Lifting the freeze can happen anytime during the day and the transaction will be settling in the next settlement cycle which can be the same day if the (international) central securities depository's operates several settlements cycles per day. */
  BLOC = "BLOC",
  /** Balance that is registered in the books of the account servicer. */
  BOOK = "BOOK",
  /** Balance represents the total of the bulk settlement and central moneymarkets unit processor credit. */
  BSCC = "BSCC",
  /** Balance represents the total of the bulk settlement and central moneymarkets unit processor debit. */
  BSCD = "BSCD",
  /** Balance representing the forecast of the total of all cash legs of transactions traded in exchanges that operate a central counterparty functionality. */
  CCPS = "CCPS",
  /** Balance of the account at the end of the account servicer's business day. It is the sum of the opening balance at the beginning of the day and all entries booked to the account during the account servicer's business day. */
  CLSG = "CLSG",
  /** Balance representing the total incoming payments that were put on hold because the credit limit has been exceeded. */
  COHB = "COHB",
  /** Balance representing the projected total amount of all payment obligations to the participant (bank), based on their role as main paying agent. */
  COLC = "COLC",
  /** Balance representing the total incoming payments that have been processed and are waiting for settlement. */
  CPBL = "CPBL",
  /** Balance representing the sum of all credit entries booked to an account. */
  CRDT = "CRDT",
  /** Balance of the account at a precise moment in time. */
  CRRT = "CRRT",
  /** Balance representing the actual total of all asset servicing transactions such as dividends, income corporate actions equivalents, tax returns, redemptions, etc. */
  CUSA = "CUSA",
  /** Balance representing the projected total of all asset servicing transactions such as dividends, income corporate actions equivalents, tax returns, etc. */
  CUST = "CUST",
  /** Balance representing the sum of all debit entries booked to an account. */
  DBIT = "DBIT",
  /** Balance representing the intra day overdraft granted by the central bank to financial institutions participating in a RTGS system. This balance may vary over time and shall be offset at the end of the day. */
  DLOD = "DLOD",
  /** Balance representing the total outgoing payments that were put on hold because the debit limit has been exceeded. */
  DOHB = "DOHB",
  /** Balance representing the total outgoing payments that have been processed and are waiting for settlement. */
  DPBL = "DPBL",
  /** Balance representing the cash equivalent of all settled securities transactions. */
  DSET = "DSET",
  /** Balance represents the discount window repo drawings. */
  DWRD = "DWRD",
  /** Balance representing the potential loan a Central Bank would make in cash if the collateral is pledged, such as securities available and eligible as collateral with the central bank. */
  EAST = "EAST",
  /** The code defines the threshold to the value excess reserve exemption balance between the exempt and non-exempt tiers of excess reserve. */
  EXRE = "EXRE",
  /** The code defines the balance beyond excess reserve exemption threshold within the periodic average balance for minimum reserve. Thus, this part of the excess reserve is still to be remunerated. */
  EXRR = "EXRR",
  /** Balance representing the forecast of the cash-equivalent resulting from evaluation of existing holdings at central securities depositary that are qualified to serve as collateral. */
  FCOL = "FCOL",
  /** Balance representing the cash equivalent resulting from evaluation of existing holdings at CSD that are qualified to serve as collateral and have been used as collateral. */
  FCOU = "FCOU",
  /** Balance representing the total of all balance types representing transactions to settle, blocked items and custody transactions. */
  FORC = "FORC",
  /** Balance representing the forecast of total of all cash legs for trades that are ready to settle via a central securities depository. Amounts shown are still subject to processing of the securities settlement. */
  FSET = "FSET",
  /** Balance representing the net amount to be funded resulting from all transactions which have an impact on the funding requirement. */
  FUND = "FUND",
  /** Balance representing the total of the payments with a processing date in the future. */
  FUTB = "FUTB",
  /** Balance calculated in the course of the account servicer's business day, at the time specified, and subject to further changes during the business day. The interim balance is calculated on the basis of booked credit and debit items during the calculation time/period specified. */
  INTM = "INTM",
  /** Balance represents the intraday repo drawings. */
  IRDR = "IRDR",
  /** Balance represents the intraday repo limit. */
  IRLT = "IRLT",
  /** Balance representing the cash equivalent of transactions with a lack of holdings. */
  LACK = "LACK",
  /** Balance of a specific limit value, such as a bilateral balance is calculated in relation to a given bilateral limit. */
  LRLD = "LRLD",
  /** Balance composed of the sum of all liquidity transfers made to or from an account. */
  LTSF = "LTSF",
  /** Balance of the identified account plus the balance of all of its subaccounts. */
  MSTR = "MSTR",
  /** Balance representing the amount that a financial institution has set aside for a specific reason and which is therefore not available. */
  NOTE = "NOTE",
  /** Balance representing the cash equivalent of all non-settled securities transactions. */
  NSET = "NSET",
  /** Book balance of the account at the beginning of the account servicer's business day. It always equals the closing book balance from the previous business day. Note: the available balance at the beginning of the account servicer's business day may be different from the closing book balance from the previous business day. */
  OPNG = "OPNG",
  /** Balance representing the Forecast of the total of all cash-legs of transactions 'over the counter' (OTC), going through central counter party (CCP) functions. */
  OTCC = "OTCC",
  /** Balance representing the forecast of the total of all cash legs of transactions traded 'over the counter' (OTC). */
  OTCG = "OTCG",
  /** Balance representing the forecast of the total of all cash legs of transactions traded 'over the counter' (OTC) not going through central counter party (CCP) functions. */
  OTCN = "OTCN",
  /** Balance representing the projected total of all cash legs for trades settling via a central securities depository that have been matched but blocked in order to not settle. These blocked transactions are not included in the calculation for settlement. */
  OTHB = "OTHB",
  /** Balance of securities pending delivery, such as the orders to sell securities have been executed but settlement of the open transactions has not been confirmed. */
  PDNG = "PDNG",
  /** Balance representing the fictive forecast of automated direct debits or payment based on standing arrangements between a central securities depository and the user. Usage: Pay-Ins and Pay-Outs can be different based on individual payment instructions or available funds. */
  PIPO = "PIPO",
  /** Average of the daily balances on the account used to fulfil the reserve requirements calculated from the beginning of the maintenance period. */
  PRAV = "PRAV",
  /** Balance representing the sum of entries as a result of payments processing. Entries relating to fees, interest, or other movements not a result of payments sent or received by the account owner are not included. */
  PYMT = "PYMT",
  /** Balance representing the total of the payments that have been rejected. */
  REJB = "REJB",
  /** Balance represents the total of the central moneymarkets unit processor repo credits. */
  REPC = "REPC",
  /** Balance represents the total of the central moneymarkets unit processor repo debits. */
  REPD = "REPD",
  /** Balance of cash that may only be used under certain conditions. Balance type is used to block securities/cash in the client account for example, when related to specific corporate actions, the holding is under the direct control of the system paying agent, who is the only one who can transfer securities out of this balance type. Also known as the "escrow balance" or "sequestered balance". */
  REST = "REST",
  /** Balance represents the settlement account processor direct credit amount. */
  SAPC = "SAPC",
  /** Balance represents the settlement account processor direct debit amount. */
  SAPD = "SAPD",
  /** Balance represents the settlement account processor queue amount. */
  SAPP = "SAPP",
  /** Balance representing the forecast of the cash-equivalent resulting from evaluation of the net incoming balance of securities qualified to serve as collateral for which settlement instructions are held at. */
  SCOL = "SCOL",
  /** Balance representing the cash-equivalent resulting from evaluation of incoming securities, qualified to serve as collateral and actually used as collateral, which have been settled during the settlement process. */
  SCOU = "SCOU",
  /** Balance of the account identified (as opposed to Master Balance). */
  SELF = "SELF",
  /** Balance representing the amount that will be destined for investment. Difference between available balance and threshold for investment limit. */
  THRE = "THRE",
  /** Balance representing the total of the payments that were put on hold because the limits have been exceeded. */
  TOHB = "TOHB",
  /** Balance representing the total of the payments that have been processed and are waiting for settlement during the day. */
  TPBL = "TPBL",
  /** Balance representing the forecast of the total of all cash legs of transactions in exchanges, going through CCP functions. */
  XCHC = "XCHC",
  /** Balance representing the forecast of the total of all cash legs of transactions traded in exchanges. */
  XCHG = "XCHG",
  /** Balance representing the forecast of the total of all cash legs of transactions traded in exchanges not going through central counter party (CCP) functions. */
  XCHN = "XCHN",
  /** Balance, composed of booked entries and pending items known at the time of calculation, which projects the end of day credit balance if everything books to the account and no other credit entry is posted. */
  XCRD = "XCRD",
  /** Balance, composed of booked entries and pending items known at the time of calculation, which projects the end of day debit balance if everything books to the account and no other debit entry is posted. */
  XDBT = "XDBT",
  /** Balance, composed of booked entries and pending items known at the time of calculation, which projects the end of day balance if everything is booked on the account and no other entry is posted. */
  XPCD = "XPCD",
}