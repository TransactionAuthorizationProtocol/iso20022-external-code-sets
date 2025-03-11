/**
 * Specifies the nature of the membership of a party in a system, as published in an external system member type code set.
 * ISO20022 External Code
 * Original name: ExternalSystemMemberType1Code
 */
export enum SystemMemberType {
  /** Member has full rights in the system. In principle, this membership status entails financial responsibility for its own operations and sponsored members' operations submitted to the system. */
  DRCT = "DRCT",
  /** Member is entitled to access the Euro1 system of the Euro Banking Association (EBA). */
  EURO = "EURO",
  /** Member has limited rights in the system specifications. In principle, this membership status entails no financial responsibility for its operations submitted to the system. */
  IDRT = "IDRT",
  /** Member has access to the system from a remote location or through remote technical means. */
  RMTE = "RMTE",
  /** Member is entitled to access the Step1 system of the Euro Banking Association (EBA). */
  STEP = "STEP",
}