/**
 * Specifies the packaging type as published in an external packaging type code list.
 * ISO20022 External Code
 * Original name: ExternalPackagingType1Code
 */
export enum PackagingType {
  /** Packaging is high density polyethylene. */
  HDPE = "HDPE",
  /** Packaging is low density polyethylene. */
  LDPE = "LDPE",
  /** Packaging is linear low density polyethylene. */
  LLDP = "LLDP",
  /** Other packaging type not otherwise specified. */
  OTHR = "OTHR",
}