/**
 * Specifies a shipment conditions code, as published in the external ISO 20022 external code set.
 * ISO20022 External Code
 * Original name: ExternalShipmentCondition1Code
 */
export enum ShipmentCondition {
  /** Goods/service delivered after payment */
  ADVN = "ADVN",
  /** Goods/service delivered at the same time as payment. */
  PMNT = "PMNT",
  /** Goods/service delivered before payment */
  TRLN = "TRLN",
}