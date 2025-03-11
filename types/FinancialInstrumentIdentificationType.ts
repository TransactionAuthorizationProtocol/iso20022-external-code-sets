/**
 * Specifies the external financial instrument identification type scheme name code in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalFinancialInstrumentIdentificationType1Code
 */
export enum FinancialInstrumentIdentificationType {
  /** National securities identification number for BE issued by the National Numbering Association SIX Telekurs Belgium. */
  BELC = "BELC",
  /** Ticker-like code assigned by Bloomberg to identify financial instruments. */
  BLOM = "BLOM",
  /** National Securities Identification Number issued by the National Numbering Association for a country for which no specific financial instrument identification type code already yet. The first two letters of the code represents the country code (for example, EGDC for Egyptian NSIN). To be used only until the code is added to the ISO ExternalFinancialInstrumentIdentificationType1Code list. */
  CCCD = "CCCD",
  /** National Bond identification number for China issued by CHINA CENTRAL DEPOSITORY & CLEARING CO., Limited. */
  CCDC = "CCDC",
  /** Ticker-like code assigned by the Chicago Mercantile Exchange to identify listed-derivatives instruments. */
  CMED = "CMED",
  /** National securities identification number for ICSDs issued by the National Numbering Association Clearstream and Euroclear. */
  COMM = "COMM",
  /** Ticker-like code assigned by the Consolidated Tape Association to identify financial instruments. */
  CTAC = "CTAC",
  /** National securities identification number for US and CA issued by the National Numbering Association Standard & Poor´s - CUSIP Global Services. */
  CUSP = "CUSP",
  /** Digital Token Identifier, as defined in ISO 24165. */
  DTID = "DTID",
  /** A Financial Instrument Global Identifier Composite (FIGC) is a unique, persistent twelve character string that serves to identify financial instruments across asset classes at the composite level, is associated with one or more FIGI venue level ID’s and a single Share Class level ID. */
  FIGC = "FIGC",
  /** A Financial Instrument Global Identifier Share Class (FIGG) is a unique, persistent twelve character string that serves to identify financial instruments across asset classes at the global share class level, and is associated with one or more Composite level ID’s. */
  FIGG = "FIGG",
  /** A Financial Instrument Global Identifier (FIGI) is a unique, persistent twelve character string that serves to identify financial instruments across asset classes at the venue level. It is associated with one Composite ID. */
  FIGI = "FIGI",
  /** URL in Description to identify OTC derivatives instruments. */
  ISDU = "ISDU",
  /** XML in Description to identify OTC derivatives instruments. */
  ISDX = "ISDX",
  /** Ticker-like code assigned by LCH to identify listed-derivatives instruments. */
  LCHD = "LCHD",
  /** Ticker-like code assigned by the Options Clearing Corporation to identify financial instruments. */
  OCCS = "OCCS",
  /** Ticker-like code assigned by the Options Price Reporting Authority to identify financial instruments. */
  OPRA = "OPRA",
  /** Ticker-like code assigned by Markit to identify listed-derivatives instruments. */
  RCMD = "RCMD",
  /** Ticker-like code assigned by Thomson Reuters to identify financial instruments. */
  RICC = "RICC",
  /** National securities identification number for GB issued by the National Numbering Association London Stock Exchange. */
  SEDL = "SEDL",
  /** National securities identification number for JP issued by the National Numbering Association 6 Stock Exchanges and JASDEC (Securities Identification Ticker-like code Committee) */
  SICC = "SICC",
  /** Ticker Code assigned by an exchange to identify financial instruments. */
  TIKR = "TIKR",
  /** National securities identification number for CH and LI issued by the National Numbering Association SIX Telekurs Ltd. */
  VALO = "VALO",
  /** National securities identification number for DE issued by the National Numbering Association WM Datenservice. */
  WKNR = "WKNR",
}