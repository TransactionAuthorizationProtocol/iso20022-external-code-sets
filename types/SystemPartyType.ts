/**
 * Specifies the system party type, as published in an external system party type code set.
 * ISO20022 External Code
 * Original name: ExternalSystemPartyType1Code
 */
export enum SystemPartyType {
  /** System in which payments and/or financial instruments are exchanged and/or cleared or recorded, while the ensuing monetary obligations are settled in another system, typically an RTGS system */
  ANSY = "ANSY",
  /** Legal entity or, as the case may be, an individual having a contractual relationship with the CSD for the processing of its securities settlement-related activities in T2S. */
  CSDP = "CSDP",
  /** Infrastructure that holds or controls the holding of physical or dematerialized financial instruments belonging to all, or a large portion of, the investors in a securities market. This effects the centralized transfer of ownership of such securities by entries on its books and records. */
  CSDY = "CSDY",
  /** Infrastructure that holds or controls the holding of physical or dematerialized financial instruments belonging to all, or a large portion of, the investors in a securities market. This effects the centralized transfer of ownership of such securities by entries on its books and records. The infrastructure is external to the system executing the instruction. */
  ECSD = "ECSD",
  /** As system participant, the national central bank is the principal monetary authority of a nation and performs several key functions, including issuing currency and regulating the supply of credit in the economy. */
  NCBK = "NCBK",
  /** Commercial bank used to effect money settlements. */
  PMBK = "PMBK",
  /** Party that owns an account in the system, but only supports a limited range of available use cases in interaction with counterparties. */
  STPR = "STPR",
  /** Party that owns an account in the system and can interact with the system or counterparties using all use cases available to standard participants. */
  STPU = "STPU",
  /** Party that defines the eligibility criteria of the system and is responsible for monitoring, controlling and, if necessary, operating the system. All authorizations are available to the system manager when interacting with the system. */
  SYMG = "SYMG",
  /** Party that operates the system on behalf of the system manager (if different from the system manager) and is provided with specific authorizations by the system manager for this purpose. */
  SYOP = "SYOP",
}