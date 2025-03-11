/**
 * Specifies the external Trade Transaction Condition code in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalTradeTransactionCondition1Code
 */
export enum TradeTransactionCondition {
  /** Board lots, not set for odd lots (UK specific). */
  BCBL = "BCBL",
  /** Bad names, not set for good names (UK specific). */
  BCBN = "BCBN",
  /** Form of delivery, not for foreign registration when unset (UK specific). */
  BCFD = "BCFD",
  /** Place of delivery, in country of incorporation when unset (UK specific). */
  BCPD = "BCPD",
  /** Result of option when set (UK specific). */
  BCRO = "BCRO",
  /** Result of repo when set (UK specific). */
  BCRP = "BCRP",
  /** The trade is a block trade or not, ie, whether allocation instruction will follow or not. */
  BLKO = "BLKO",
  /** Trade to be executed done at best execution. */
  BTEX = "BTEX",
  /** Bought minus indicator. */
  BTMI = "BTMI",
  /** Trade to be executed following the exercise of a call option on the security. */
  CALL = "CALL",
  /** The trade is executed cum bonus. */
  CBNS = "CBNS",
  /** The trade is executed cum coupon. */
  CCPN = "CCPN",
  /** The trade is executed cum dividend. */
  CDIV = "CDIV",
  /** Trade to be executed for closure of a previous position before the rollover of a position (Deferred Settlement Service). */
  CLBR = "CLBR",
  /** The trade is executed clean, ie government tax must not be paid on the accrued interest on the bond. */
  CLEN = "CLEN",
  /** Cross trades are allowed whereby buy and sell orders are offset without recording the trade on the exchange */
  CRST = "CRST",
  /** The trade is executed cum rights. */
  CRTS = "CRTS",
  /** The trade is executed cum warrant. */
  CWAR = "CWAR",
  /** A customer order where the customer gives specific instructions to the broker concerning the orders routing destination. */
  DIOR = "DIOR",
  /** The trade is executed dirty, ie government tax must be paid on the accrued interest on the bond. */
  DIRT = "DIRT",
  /** The order is to be executed by a trading party other than the trading party to which the order is sent. In this case, the instructing party has traded with another broker which will subsequently send an advice of execution to the executing party who received the order and which is acting as clearing broker. */
  DORD = "DORD",
  /** The order is based on a forward price. */
  FORW = "FORW",
  /** Fractional parts are allowed. */
  FRAC = "FRAC",
  /** The delivery of the financial instrument on settlement date is guaranteed. */
  GTDL = "GTDL",
  /** The order is based on a historic price. */
  HIST = "HIST",
  /** Trade was executed at market price. */
  MAPR = "MAPR",
  /** Trade to be executed for month-end settlement (Deferred Settlement Service). */
  MONT = "MONT",
  /** Trade to be executed for a new trade position on the next month following the roll-over of a position (Deferred Settlement Service). */
  NBFR = "NBFR",
  /** Cross trades, whereby buy and sell orders are offset without recording the trade on the exchange, are not allowed. */
  NCRS = "NCRS",
  /** Trade for which the price is not the one quoted but an improved one, that is, the negotiated price. */
  NEGO = "NEGO",
  /** Trade was executed outside of normal market conditions, for example, in the case of an iceberg order. */
  NMPR = "NMPR",
  /** Allows trader to explicitly request anonymity or disclosure in pre-trade market data feeds. Anonymity is relevant in markets where counterparties are regularly disclosed in order depth feeds. Disclosure is relevant when counterparties are not normally visible. */
  PETA = "PETA",
  /** Trade to be executed following the exercise of a put option on the security. */
  PUTT = "PUTT",
  /** Trade is exempt from short-sale rules. */
  SETI = "SETI",
  /** The trade is executed with a special cum dividend, ie, buying after the ex date and getting the dividend. */
  SPCU = "SPCU",
  /** The trade is executed with a special ex dividend, ie, selling before the ex date without the coupon. */
  SPEX = "SPEX",
  /** Sold plus indication. */
  SPSI = "SPSI",
  /** The trade is sold short. When the seller does not have the financial instrument, the delivery is effected by borrowing the financial instrument by or for the account of the seller. */
  SSTI = "SSTI",
  /** Trade executed this month following the rollover of positions. */
  TEFR = "TEFR",
  /** Trade to be executed on the next month following the roll-over of positions. */
  TRFR = "TRFR",
  /** Transaction is before the issue date after announcement of the auction. */
  WIBC = "WIBC",
  /** Transaction is after the issue date after announcement of the auction. */
  WICD = "WICD",
  /** The trade is executed ex bonus. */
  XBNS = "XBNS",
  /** The trade is executed ex coupon. */
  XCPN = "XCPN",
  /** The trade is executed ex dividend. */
  XDIV = "XDIV",
  /** The trade is executed ex rights. */
  XRTS = "XRTS",
  /** The trade is executed ex warrant. */
  XWAR = "XWAR",
}