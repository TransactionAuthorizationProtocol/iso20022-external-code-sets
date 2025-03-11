/**
 * Specifies the external benchmark curve name code in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalBenchmarkCurveName1Code
 */
export enum BenchmarkCurveName {
  /** Australian Financial Markets Association (AFMA) Bank-Bill Reference Rate (BBSW). */
  BBSW = "BBSW",
  /** Bank of Canada Overnight Lending Rate (CABROVER). */
  BCOL = "BCOL",
  /** Bank of Japan Uncollateralized Overnight Call Rate (MUTSCALM). */
  BJUO = "BJUO",
  /** Budapest Interbank Offered Rate. */
  BUBO = "BUBO",
  /** Canadian Dollar Offered Rate. */
  CDOR = "CDOR",
  /** Copenhagen Interbank Offered Rate. */
  CIBO = "CIBO",
  /** Canadian Overnight Repo Rate Average (CAONREPO). */
  CORA = "CORA",
  /** Czech National Bank Reference Interest Rate */
  CZNA = "CZNA",
  /** Effective Federal Funds Rate (FEDL01). */
  EFFR = "EFFR",
  /** Euro OverNight Index Average rate. */
  EONA = "EONA",
  /** Euro OverNight Index Average swap rate. */
  EONS = "EONS",
  /** Euro Short Term Rate */
  ESTR = "ESTR",
  /** Euroyen Tokyo Interbank Offered Rate (EUYN03M). */
  ETIO = "ETIO",
  /** Swiss Franc LIBOR rate. */
  EUCH = "EUCH",
  /** Euro Interbank Offer Rate is the rate at which Euro inter-bank term deposits within the Euro zone are offered by one prime bank to another prime bank. */
  EURI = "EURI",
  /** Rate for the eurodollars, time deposits denominated in U.S. dollars at banks outside the United States, and thus are not under the jurisdiction of the Federal Reserve. */
  EUUS = "EUUS",
  /** Portion of a synthetic curve that is composed of Eurodollar or Treasury or similar Futures and Swap rates. The term usually begins at 3 months to 2 years for the futures strip component with the Swaps filling in the points to 10 years and beyond. */
  FUSW = "FUSW",
  /** GCF Repo Index, the Depository Trust & Clearing Corporation (DTCC) general collateral finance repurchase agreements index. */
  GCFR = "GCFR",
  /** Hong Kong Interbank Offered Rate (HIHD01M). */
  HKIO = "HKIO",
  /** Worldwide common reference rate value for fixed interest rate swap rates, as defined by the International Swaps and Derivatives Association (ISDA). */
  ISDA = "ISDA",
  /** Johannesburg Interbank Agreed Rate. */
  JIBA = "JIBA",
  /** Rate at which major international banks are willing to take deposits from one another, is normally 1/8 percent below LIBOR. London InterBank Bid Rate, the rate bid by banks on Eurocurrency deposits; the international rate that banks lend to other banks. */
  LIBI = "LIBI",
  /** London Interbank Offered Rate, the interest rate that major international banks in London charge each other for borrowing. */
  LIBO = "LIBO",
  /** Benchmark curve used for municipals based on the best credit rating for municipal market debt. */
  MAAA = "MAAA",
  /** Moscow Prime Offered Rate. */
  MOSP = "MOSP",
  /** Norwegian Interbank Offered Rate. */
  NIBO = "NIBO",
  /** Overnight Bank Funding Rate (OBFR01). */
  OBFR = "OBFR",
  /** Pfandbriefe security is a collateralised bullet bond backed by either mortgage loans or loans to the public sector. Pfandbriefe differ from traditional asset-backed securities in significant ways. The most important difference is that Pfandbriefe carry no pre-payment risk since they remain on the balance sheet of the issuing institution. Therefore, their spreads over sovereign bonds are attributable to liquidity and credit quality alone. New indices have been created and existing indices have been modified in response to the growing importance of the Pfandbriefe market. The Deutsche Borse has three synthetic indices called REX, JEX, and PEX. The Pfandbriefe curve is used as a reference for credit as well as mortgage market. */
  PFAN = "PFAN",
  /** Czech Fixing of Interest Rates on Interbank Deposits. */
  PRBO = "PRBO",
  /** RBA Cash Rate Target (RBATCTR). */
  RCTR = "RCTR",
  /** Singapore Interbank Offered Rate. */
  SIBO = "SIBO",
  /** Secured Overnight Financing Rate. */
  SOFR = "SOFR",
  /** Sterling Over Night Index Average. */
  SONA = "SONA",
  /** Singapore Overnight Rate Average */
  SORA = "SORA",
  /** Singapore Dollar Swap Offer Rate. */
  SSOR = "SSOR",
  /** Stockholm Interbank Offered Rate. */
  STBO = "STBO",
  /** In curve construction, Swap is the long portion of the curve constituting about 3 years to 30 years term. The exchange of one security, currency or interest rate for another to change the maturity (bonds), or quality of issues (stocks or bonds), or because investment objectives have changed. */
  SWAP = "SWAP",
  /** Tokyo Interbank Offered Rate. */
  TIBO = "TIBO",
  /** Tel Aviv Interbank Offered Rate. */
  TLBO = "TLBO",
  /** Tokyo Overnight Average Rate: Interest rate benchmark - also known as a reference rate or a benchmark rate. It is a measure of the cost of borrowing in the Japanese yen unsecured overnight money market and is the near risk-free rate (RFR) for Japanese yen markets, administered and published by the Bank of Japan. It is sometimes referred to as “TONAR”. Bloomberg ticker is MUTKCALM, and ISDA ISDA FpML Floating rate index code is JPY-TONA. */
  TONA = "TONA",
  /** Tokyo Term Risk Free Rate: Interest rate Benchmark based on the uncollateralized overnight call rate which involves almost no credit risk of financial institutions, based on the Japanese Yen "Risk-Free-Rate" (RFR), administered and published by QUICK Benchmarks, Inc. */
  TORF = "TORF",
  /** Treasury benchmark that comes in three types: the yield curve, the par curve, and the spot curve. All curves also have a constituent time series. */
  TREA = "TREA",
  /** Warsaw Interbank Offered Rate. */
  WIBO = "WIBO",
}