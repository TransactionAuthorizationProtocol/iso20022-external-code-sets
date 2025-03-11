/**
 * Specifies the garnishment type as published in an external document type code list.
 * ISO20022 External Code
 * Original name: ExternalGarnishmentType1Code
 */
export enum GarnishmentType {
  /** Garnishment from a third party payer for Child Support */
  GNCS = "GNCS",
  /** Garnishment from a direct payer for Child Support */
  GNDP = "GNDP",
  /** Garnishment from a third party payer to taxing agency */
  GTPP = "GTPP",
}