/**
 * Specifies the status of an entry on the books of the account servicer, as published in an external code set.
 * ISO20022 External Code
 * Original name: ExternalEntryStatus1Code
 */
export enum EntryStatus {
  /** Booked means that the transfer of money has been completed between account servicer and account owner. Usage: Status Booked does not necessarily imply finality of money as this depends on other factors such as the payment system used, the completion of the end-to-end transaction and the terms agreed between account servicer and owner. Status Booked is the only status that can be reversed. */
  BOOK = "BOOK",
  /** Entry is on the books of the account servicer and value will be applied to the account owner at a future date and time. */
  FUTR = "FUTR",
  /** Entry is only provided for information, and no booking on the account owner's account in the account servicer's ledger has been performed. */
  INFO = "INFO",
  /** Booking on the account owner's account in the account servicer's ledger has not been completed. Usage: this can be used for expected items, or for items for which some conditions still need to be fulfilled before they can be booked. If booking takes place, the entry will be included with status Booked in subsequent account report or statement. Status Pending cannot be reversed. */
  PDNG = "PDNG",
}