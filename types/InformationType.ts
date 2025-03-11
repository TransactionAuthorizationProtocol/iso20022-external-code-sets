/**
 * Specifies the information type, as published in an external information type code list.
 * ISO20022 External Code
 * Original name: ExternalInformationType1Code
 */
export enum InformationType {
  /** Instructions used to ease automatic request processing. */
  INST = "INST",
  /** Additional information not otherwise specified. */
  OTHR = "OTHR",
  /** Instructions used to ease automatic request relay. */
  RELY = "RELY",
  /** Additional shipping information not otherwise specified. */
  SHPG = "SHPG",
  /** Information concerning the letters, numbers or other symbols placed on the outside of cargo to facilitate identification. */
  SHPM = "SHPM",
  /** Information concerning the domicile location of the seller. */
  SLDC = "SLDC",
}