/**
 * Specifies the external type of party code in the format of a character string with a maximum length of 4 characters. The list of valid codes is an external code list published separately.
 * ISO20022 External Code
 * Original name: ExternalTypeOfParty1Code
 */
export enum TypeOfParty {
  /** Party advising the undertaking. */
  ADVP = "ADVP",
  /** Any bank. */
  ANYB = "ANYB",
  /** Party named in the undertaking as the “applicant”. */
  APPL = "APPL",
  /** Party in whose favour the undertaking (or counter-undertaking) is issued. */
  BENE = "BENE",
  /** Party that adds its undertaking to honour the undertaking. */
  CONF = "CONF",
  /** Beneficiary of the second counter-undertaking. */
  CUB2 = "CUB2",
  /** Beneficiary of the third counter-undertaking. */
  CUB3 = "CUB3",
  /** Party that issues the undertaking (or counter-undertaking). */
  ISSU = "ISSU",
  /** Party obligated to reimburse the issuer. */
  OBLG = "OBLG",
  /** Party requested to issue an undertaking on behalf of the applicant. Also known as the ordering institution or applicant's bank. */
  ORDR = "ORDR",
  /** Party nominated to receive presentation. */
  PRES = "PRES",
  /** Second advising party. */
  SADV = "SADV",
  /** Party located at specified address. */
  SPEC = "SPEC",
}