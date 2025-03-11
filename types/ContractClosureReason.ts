/**
 * Specifies a contract closure reason code, as published in the external ISO 20022 external code set.
 * ISO20022 External Code
 * Original name: ExternalContractClosureReason1Code
 */
export enum ContractClosureReason {
  /** The parties have fulfilled all liabilities under the contract (loan agreement), including fulfillment of the liabilities by a resident third party (by another resident party). */
  PCED = "PCED",
  /** If the liabilities under the contract (loan agreement) are fulfilled (stopped) on other grounds, not mentioned in the currency control regulation. */
  POTR = "POTR",
  /** At the termination of the grounds (under the regulation) require the registered contract to be issued, including the cases resulting from making the appropriate changes and (or) additions to the contract (loan agreement), or if the registered contract has been wrongly issued in the absence in the contract (loan agreement) of any grounds for its issuance. */
  PRNR = "PRNR",
  /** The resident cedes a claim under the contract (loan agreement) to another resident party, or transfers a debt under the contract (loan agreement) to another resident party. */
  PSBT = "PSBT",
  /** The resident cedes a claim under the contract (loan agreement) to a non-resident. */
  PSNR = "PSNR",
  /** The registered contract has been transferred from the bank together with the transfer of the underlying contract (loan agreement) for servicing to another authorised bank (to another affiliate of this authorised bank, from the head office to an affiliate of this authorised bank, or from an affiliate to the head office of this authorised bank), as well as if the resident closes all settlement accounts in the bank of the registered contract. */
  PTAA = "PTAA",
  /** All customer's accounts are closed: In the case the resident closes all settlement accounts at the bank where the contract was registered without closing the registered contract according to the regulation, the bank shall be entitled to independently close the registered contract after the expiration of 30 working days following the date of closing of the settlement account (last settlement account) of the resident. */
  RACC = "RACC",
  /** If the bank has all information available for the closing of the registered contract, and all liabilities under the contract (loan agreement) have been fulfilled (terminated), while the resident has not filled an application for closing the registered contract. */
  RCED = "RCED",
  /** In case of failure (on the basis of the information available in the registered contracts data base at the bank) of all obligations under the contract (loan agreement), and failure to provide by a resident of the documents and information (under the regulation), based on which the registered agent conducts a statement of banking supervision, within 180 calendar days following the date specified in the specified section (for example column 6 of Section 3 for Russia) of the registered contract. In the case referred to in this paragraph, the bank informs (at its discretion) the resident about the closure of the registered contract not later than in two working days after the date of its closure. */
  REXP = "REXP",
}