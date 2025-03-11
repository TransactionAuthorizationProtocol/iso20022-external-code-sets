/**
 * Specifies the external local instrument code in the format of character string with a maximum length of 35 characters.
 * ISO20022 External Code
 * Original name: ExternalLocalInstrument1Code
 */
export enum LocalInstrument {
  /** Transaction is related to a direct debit that is pre authorised (Abbuchungsauftrag). */
  _04 = "04",
  /** Transaction is related to a direct debit that is not pre authorised (Einzugsermächtigung). */
  _05 = "05",
  /** Transaction is related to a direct debit that is pre authorised (Avis de Prélèvement). */
  _08 = "08",
  /** Transaction is related to a business-to-customer direct debit (CSB19). */
  _19 = "19",
  /** Transaction is related to a business-to-business direct debit (CSB58). */
  _58 = "58",
  /** LCR - Lettre de Change Relevé (Recovered Bill of Exchange) and BOR - Billet à Orde Relevé (Promissory Note) */
  _60 = "60",
  /** Transaction is related to a direct debit that is not pre authorised (Einzugsermächtigung). */
  _82 = "82",
  /** Transaction is related to a direct debit that is pre authorised (Abbuchungsauftrag). */
  _83 = "83",
  /** Transaction is related to an urgent direct debit that is pre authorised (Avis de Prélèvement accéléré). */
  _85 = "85",
  /** Transaction is related to an urgent direct debit that is pre authorised (Avis de Prélèvement vérifié). */
  _89 = "89",
  /** Transaction is related to payments via Acceptgiro owned by Currence. */
  ACCEPT = "ACCEPT",
  /** Transaction is authenticated direct debit for domestic use. */
  ADD = "ADD",
  /** Transaction is related to accounts receivable check. */
  ARC = "ARC",
  /** Indicates that the payment is sent by an authorized third party on behalf of the participant. */
  ASTI = "ASTI",
  /** Transaction is related to SEPA business to business direct debit. */
  B2B = "B2B",
  /** SEPA B2B Direct Debit AMI based on a paper mandate */
  B2BAMIPM = "B2BAMIPM",
  /** Indicates that the payment was initiated manually using a GUI (Graphical User Interface). */
  BACP = "BACP",
  /** Transaction is related to an Instant Credit Transfer under the rules of the Centrale Bank van Aruba, based on the EPC SCT Inst scheme, with a specific batch time-out delay. */
  BPA = "BPA",
  /** Transaction is related to the German Paperless Cheque Collection procedure “Belegloser Scheckeinzug - BSE” */
  BSE = "BSE",
  /** Transaction is related to card clearing. */
  CARD = "CARD",
  /** Transaction is related to cash concentration or disbursement corporate counterparty. */
  CCD = "CCD",
  /** Transaction is related to an intra-group bank initiated cash management payment */
  CCI = "CCI",
  /** Transaction is related to truncated checks. Conversion of physical instrument to electonric form for transmission to the paying bank and where the original paper document does not continue in the clearing process..The original instrument rules are retained throughout the life of the instrument. */
  CHN = "CHN",
  /** A credit entry initiated by or on behalf of the holder of a consumer account */
  CIE = "CIE",
  /** Transaction is related to the CLSClearedFX service for Eurex. Usage: The code is mandatory for all pacs.009 payments to this service. */
  CLSCCPERX = "CLSCCPERX",
  /** Transaction is related to the CLSClearedFX service for London Exchange Clearing House. Usage: The code is mandatory for all pacs.009 payments to this service. */
  CLSCCPLCH = "CLSCCPLCH",
  /** Optional shorter time cycle (D-1) for SEPA Core Direct Debit */
  COR1 = "COR1",
  /** SEPA Core Direct Debit AMI based on a paper mandate */
  CORAMIPM = "CORAMIPM",
  /** Transaction is related to SEPA direct debit -core. */
  CORE = "CORE",
  /** Transaction is related to cash per post. Transaction to ultimate recipient having no bank account. Primary beneficiary is a postal service provider. Funds are paid out by cash. Additional necessary information for address and delivery options need to be attached. */
  CPP = "CPP",
  /** Optional shorter time cycle (D-1) for SEPA Core Direct Debit AMI based on a paper mandate */
  CR1AMIPM = "CR1AMIPM",
  /** Payment via Credit Transfer but Instant Credit Transfer is also possible. */
  CTP = "CTP",
  /** Transaction is related to corporate trade exchange. */
  CTX = "CTX",
  /** SEPA Fixed Amount Direct Debit */
  DDFA = "DDFA",
  /** Transaction is related to a direct debit instruction authorized under a confirmed electronic mandate. */
  DDMC = "DDMC",
  /** Transaction is related to a direct debit instruction authorized under a paper based mandate, supported by paper authorization signed by the debtor. */
  DDMP = "DDMP",
  /** Transaction is related to a direct debit instruction authorized under an unconfirmed electronic mandate requiring confirmation by the debtor. */
  DDMU = "DDMU",
  /** SEPA Core Direct Debit with ‘no refund’ option */
  DDNR = "DDNR",
  /** Transaction is related to direct debits. */
  DDT = "DDT",
  /** SEPA Fixed Amount Direct Debit AMI based on a paper mandate */
  FADAMIPM = "FADAMIPM",
  /** Type of Payment used within the New Payments Architecture (UK). Forward-dated payments are one-off payments sent and received on a pre-arranged date, set-up by the customer in advance, for example, to pay a bill. */
  FDP = "FDP",
  /** Transaction is related to truncated credit transfers. Conversion of physical instrument to electonric form for transmission to the paying bank and where the original paper document does not continue in the clearing process..The original instrument rules are retained throughout the life of the instrument. Transaction triggered by specific marked and populated paper slip. Reconciliation reference is secured by check digits supporting secure optical recognition. All other remittance information is truncated prior transmission. */
  GST = "GST",
  /** Transaction is related to international ACH. */
  IAT = "IAT",
  /** Transaction is related to an Incident Management Correction procedure based on the DD infrastructure. */
  ICMC = "ICMC",
  /** Transaction is related to payments via internet owned by Currence. */
  IDEAL = "IDEAL",
  /** Type of Payment used within the New Payments Architecture (UK). Immediate Payments are used for payments initiated by customers using channels such as internet, mobile or telephone banking, where the customer wants the payment to be effected immediately. */
  IMD = "IMD",
  /** Transaction is related to cross border customer credit transfer. */
  IN = "IN",
  /** Transaction is related to an Instant Credit Transfer. Use case example: SEPA Instant Credit Transfer (SCT Inst) */
  INST = "INST",
  /** Transaction is related to payments via internet owned by Currence which uses an Instant Credit Transfer. */
  INSTIDEAL = "INSTIDEAL",
  /** The transaction is related to a regular Credit Transfer and will be instantly processed under the Dutch AOS on top of the EPC SCT scheme. */
  INSTNT01 = "INSTNT01",
  /** Transaction is related to payments via internet owned by Currence which uses a regular Credit Transfer and will be instantly processed under the Dutch AOS on top of the EPC SCT scheme. */
  INSTNT01IDEAL = "INSTNT01IDEAL",
  /** The transaction is related to an Instant Credit Transfer under the rules of the Dutch AOS on top of the EPC SCT Inst scheme. */
  INSTTC01 = "INSTTC01",
  /** Transaction is related to payments via internet owned by Currence which uses an Instant Credit Transfer under the rules of the Dutch AOS on top of the EPC SCT Inst scheme. */
  INSTTC01IDEAL = "INSTTC01IDEAL",
  /** Transaction is related to an Instant Credit Transfer under the rules of the Centrale Bank van Aruba, based on the EPC SCT Inst scheme. */
  IPA = "IPA",
  /** Transaction is related to the German Image-based Cheque Collection Procedure “Imagegestützter Scheckeinzug - ISE” */
  ISE = "ISE",
  /** Payment via Instant Credit Transfer but Credit Transfer is also possible. */
  ITP = "ITP",
  /** Indicates that the payment is sent by responsible Central Bank on behalf of the participant in case of contingency. */
  MANP = "MANP",
  /** Type of New Payments Architecture (NPA) payment. Payments are processed over a three-day cycle and available to customers early in the morning of Day 3. */
  MDP = "MDP",
  /** Transaction is related to a Domestic payment initiated by PAIN.001 */
  NLDO = "NLDO",
  /** Transaction is related to direct debit scheme owned by the NVB. */
  NLGOV = "NLGOV",
  /** Transaction is related to a Domestic payment initiated by PAIN.001 */
  NLUP = "NLUP",
  /** Transaction is related to overnight clearing. */
  ONCL = "ONCL",
  /** Credit transfer contains Extended Remittance Information (ERI) as defined within the applicable scheme. */
  PERI = "PERI",
  /** Transaction is related to point-of-purchase. */
  POP = "POP",
  /** Transaction is related to point-of-sale. */
  POS = "POS",
  /** Transaction is related to prearranged payment or deposit consumer counterparty. */
  PPD = "PPD",
  /** Transaction is related to re-presented check entry. */
  RCK = "RCK",
  /** Transaction is related to returned direct debits. */
  RDD = "RDD",
  /** Transaction is related to a non-pre authorised collection (RIBA). */
  RIBA = "RIBA",
  /** Transaction is related to a direct debit that is pre authorised and revocable (RID Ordinario). */
  RIDO = "RIDO",
  /** Transaction is related to an urgent direct debit that is pre authorised and revocable (RID Veloce). */
  RIDV = "RIDV",
  /** Transaction is related to returned credit transfers. */
  RTR = "RTR",
  /** Indicates that the payment is submitted to move liquidity to the technical account - dedicated to real-time settlement in an external system (for example ancillary system) . The payment is processed in a separate payment queue besides the normal processing. */
  SBTI = "SBTI",
  /** Transaction is related to revoked truncated checks. */
  SCN = "SCN",
  /** Transaction is related to New Zealand High Value Clearing System (HVCS) same day clearing payments. */
  SDCL = "SDCL",
  /** Transaction is related to revoked direct debits. */
  SDD = "SDD",
  /** Transaction is related to payments via a ‘Standaard Digitale Nota’ InvoiceAcceptgiro payment. */
  SDN = "SDN",
  /** Transaction is related to revoked truncated credit transfers. */
  SGT = "SGT",
  /** Standing Orders are regular payments of a fixed amount paid to the same recipient on a specified date, for example, to pay rent. */
  SOP = "SOP",
  /** Transaction is related to revoked returned direct debits. */
  SRD = "SRD",
  /** Transaction is related to revoked returned credit transfers */
  SRT = "SRT",
  /** Transaction is related to revoked credit transfers */
  STR = "STR",
  /** Transaction is related to telephone initiated entry. */
  TEL = "TEL",
  /** Transaction is related to credit transfers */
  TRF = "TRF",
  /** Transaction is unauthenticated direct debit for domestic use. */
  UDD = "UDD",
  /** Transaction is related to internet initiated entry. */
  WEB = "WEB",
}