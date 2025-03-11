/**
 * Specifies the external submission or presentation channel code in the format of a character string with a maximum length of 4 characters. The list of valid codes is an external code list published separately.
 * ISO20022 External Code
 * Original name: ExternalChannel1Code
 */
export enum Channel {
  /** Delivery by courier. */
  COUR = "COUR",
  /** Transmission by e-mail. */
  EMAL = "EMAL",
  /** Transmission by fax. */
  FAXI = "FAXI",
  /** Delivery by messenger. */
  MESS = "MESS",
  /** Delivery by postal service. */
  POST = "POST",
  /** Delivery by registered mail services. */
  REGM = "REGM",
  /** Transfer via secure e-mail. */
  SEMA = "SEMA",
  /** Transmission by SWIFTNet FileAct. */
  SWFA = "SWFA",
  /** Transmission by SWIFTNet InterAct. */
  SWIA = "SWIA",
  /** Transmission by SWIFT (FIN). */
  SWMT = "SWMT",
  /** Transmission by SWIFTNet. */
  SWMX = "SWMX",
  /** Transmission by telecommunications service. */
  TELE = "TELE",
  /** Available via Web upload/download */
  WEBM = "WEBM",
}