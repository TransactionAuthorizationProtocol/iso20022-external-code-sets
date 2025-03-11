/**
 * Specifies the external model form identification code in the format of a character string with a maximum length of 4 characters. The list of valid codes is an external code list published separately.
 * ISO20022 External Code
 * Original name: ExternalModelFormIdentification1Code
 */
export enum ModelFormIdentification {
  /** ISP98 model form for standby incorporating annexed form of payment demand with statement. */
  ISP1 = "ISP1",
  /** ISP98 model form or standby providing for extension and incorporating annexed form of payment demand with alternative non-extension statement. */
  ISP2 = "ISP2",
  /** ISP98 model form or standby providing for reduction and incorporating annexed form of reduction demand. */
  ISP3 = "ISP3",
  /** ISP98 model form for standby providing for transfer and incorporating annexed form of transfer demand. */
  ISP4 = "ISP4",
  /** ISP98 model form for simplified demand only standby. */
  ISP5 = "ISP5",
  /** ISP98 model form for counter standby with annexed form of local bank undertaking. */
  ISP6 = "ISP6",
  /** ISP98 model form for standby requiring confirmation. */
  ISP7 = "ISP7",
  /** ISP98 model form for confirmation of standby. */
  ISP8 = "ISP8",
  /** Model form for demand guarantee defined in the latest version of the ICC Uniform Rules For Demand Guarantees (URDG). */
  UDG1 = "UDG1",
  /** Model form for counter-guarantee defined in the latest version of the ICC Uniform Rules For Demand Guarantees (URDG). */
  UDG2 = "UDG2",
}