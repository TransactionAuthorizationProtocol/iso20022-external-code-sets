/**
 * Specifies the type of asset class a non-equity financial instrument can be classified as.
 * ISO20022 External Code
 * Original name: ExternalProductType1Code
 */
export enum ProductType {
  /** Identifies categories of instruments that are commodities. */
  COMM = "COMM",
  /** Identifies categories of instruments that are credits. */
  CRDT = "CRDT",
  /** Identifies categories of currency instruments. */
  CURR = "CURR",
  /** Identifies categories of instruments related to emission allowance. */
  EMAL = "EMAL",
  /** Identifies categories of instruments related to an equity. */
  EQUI = "EQUI",
  /** Identifies categories of instruments that are interest rates based. */
  INTR = "INTR",
  /** Identifies categories of instruments classified as other C10. */
  OCTN = "OCTN",
}