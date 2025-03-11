/**
 * Specifies the type an event generated within a system, as published in an system event type code list.
 * ISO20022 External Code
 * Original name: ExternalSystemEventType1Code
 */
export enum SystemEventType {
  /** Event is the cutoff for the cash reservation window. */
  CRCO = "CRCO",
  /** Event is the cutoff for customer payments. */
  CUSC = "CUSC",
  /** Event is the cut off for the standing facilities. */
  ESTF = "ESTF",
  /** Event is the cutoff time for the Euro1 system, that is, the deadline for processing Euro1 transactions. */
  EUCO = "EUCO",
  /** Event is the opening of the Euro 1 system operation. */
  EUSU = "EUSU",
  /** Event is the report after all operations have ceased in the system. */
  FIRE = "FIRE",
  /** Event is the cutoff for interbank payments. */
  IBKC = "IBKC",
  /** Event is the cutoff for the settlement of the cash multilateral balances resulting from the daylight cycle of the securities settlement system. */
  LTDC = "LTDC",
  /** Event is the cutoff for the daytime cycle of the securities settlement system. */
  LTGC = "LTGC",
  /** Event is the cutoff for the settlement of the cash multilateral balances resulting from the overnight cycle of the securities settlement system. */
  LTNC = "LTNC",
  /** Event is the cutoff time after which low value payments can no longer be cancelled. */
  LVCC = "LVCC",
  /** Event is the cutoff time for low value payments processed by the system. */
  LVCO = "LVCO",
  /** Event is the time at which the members will be provided with the report corresponding to the processing of low value payments. */
  LVRT = "LVRT",
  /** Event is the start of the limit warning period. */
  LWSU = "LWSU",
  /** Event is the cutoff time for the receipt of new commercial payments. */
  NPCT = "NPCT",
  /** Event is the cutoff time for the processing of payments. */
  PCOT = "PCOT",
  /** Event is the cutoff for the settlement of the multilateral balances stemming from the retail clearing system. */
  RECC = "RECC",
  /** Event is the expected resume time for a TARGET component. */
  REOP = "REOP",
  /** Event is the cutoff for the securities settlement system cash reservation window. */
  SSSC = "SSSC",
  /** Event is the start of the operating day. */
  STDY = "STDY",
  /** Event is the start of the Step 1 system operation. */
  STSU = "STSU",
  /** Event is the cutoff for the system. */
  SYSC = "SYSC",
}