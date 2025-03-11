/**
 * Specifies the market infrastructure identification, as published in an external market infrastructure code list.
 * ISO20022 External Code
 * Original name: ExternalMarketInfrastructure1Code
 */
export enum MarketInfrastructure {
  /** EBA Euro1/Step1. */
  ABE = "ABE",
  /** Automated Clearing House. Payment system that clears cash transfers and settles the proceeds in a lump sum, usually on a multilateral netting basis. */
  ACH = "ACH",
  /** Canadian Dollar (CAD) - Automated Clearing Settlement System (ACSS) */
  ACS = "ACS",
  /** AL (Albania) - Albania Interbank Payment System. */
  AIP = "AIP",
  /** AT (Austria) - Austrian RTGS (ARTIS). */
  ART = "ART",
  /** NZ (New Zealand) - New Zealand Assured Value Payments. */
  AVP = "AVP",
  /** AZ (Azerbaijan) - Azerbaijan Interbank Payment System (AZIPS). */
  AZM = "AZM",
  /** BA (Bosnia and Herzegovina). */
  BAP = "BAP",
  /** SE (Sweden) - Sweden BGC Clearing CUG. */
  BCC = "BCC",
  /** EC (Ecuador) - Ecuadorian Central Payment System (Sistema Central de Pagos Ecuatoriano) */
  BCE = "BCE",
  /** BB (Barbados) - Barbados RTGS (CBRTGS). */
  BDS = "BDS",
  /** BE (Belgium) - Belgium RTGS (ELLIPS). */
  BEL = "BEL",
  /** BG (Bulgaria) - Bulgaria RTGS. */
  BGN = "BGN",
  /** BS (Bahamas) - Bahamas RTGS. */
  BHS = "BHS",
  /** BW (Botswana) - Botswana Interbank Settlement System. */
  BIS = "BIS",
  /** FI (Finland) - RTGS (BOF). */
  BOF = "BOF",
  /** the Bank of Japan clearing system. */
  BOJ = "BOJ",
  /** IT (Italy) - Italy RTGS (BIREL). */
  BRL = "BRL",
  /** PH (Philippines) - Philippines Payment System. */
  BSP = "BSP",
  /** CA (Canada) - Canadian Large Value Transfer System (LVTS) */
  CAD = "CAD",
  /** ES (Spain). */
  CAM = "CAM",
  /** AW (Aruba) - Central Bank of Aruba CSM */
  CBA = "CBA",
  /** IE (Ireland) - Irish RTGS (IRIS). */
  CBJ = "CBJ",
  /** US - The Clearing House CHIPS */
  CHI = "CHI",
  /** GB (UK) - British Euro RTGS (CHAPS). */
  CHP = "CHP",
  /** Central Interoperability Service of the EACHA Clearing Cooperative, for exchanging SEPA payments between Automated Clearing Houses in the EEA. */
  CIS = "CIS",
  /** Payments and cash management system that settles individual payments and cash transfers in central bank money. */
  CLM = "CLM",
  /** CO (Columbia) - Colombian Electronic Cheque System named CEDEC (Compensación Electrónica De Cheques). */
  COE = "COE",
  /** CO (Columbia) - Colombian Central Bank´s ACH named CENIT (Compensación Electrónica Nacional Interbancaria). */
  COI = "COI",
  /** CO (Columbia) - Colombian RTGS System named CUD (Cuentas de Depósito). */
  COU = "COU",
  /** DK (Denmark) - Danish Krone RTGS (KRONOS) */
  DDK = "DDK",
  /** DK (Denmark) - Danish Euro RTGS (KRONOS) */
  DKC = "DKC",
  /** EBA Euro1. */
  EBA = "EBA",
  /** DE (Germany). */
  ELS = "ELS",
  /** Elektronischer Massenzahlungsverkehr (EMZ) */
  EMZ = "EMZ",
  /** ECB (European Central Bank) - ECB Payment Mechanism. */
  EPM = "EPM",
  /** US - The Clearing House EPN */
  EPN = "EPN",
  /** EBA step 1 (members). */
  ERP = "ERP",
  /** US (United States) - FED-ACH */
  FDA = "FDA",
  /** FedNet is a link to a Federal Bank account via the internet. FedNet enables checking of account balance, transactions, take print outs of account statement, transfer funds to third party accounts, E-shopping, BSNL Payments, Deposit opening, Deposit Renewal, Request for Demand Draft, Cheque Book etc. */
  FDN = "FDN",
  /** US (United States) – FEDWIRE */
  FDW = "FDW",
  /** JP (Japan) the Foreign Exchange Yen Clearing system (FEYCS). It is the Japanese electronic interbank system for sending guaranteed and unconditional yen payments of FX deals for same day settlement from one settlement bank, on behalf of itself or its customers, to another settlement bank. */
  FEY = "FEY",
  /** GH (Ghana) - Ghana Interbank Settlement System (GISS). */
  GIS = "GIS",
  /** HR (Croatia) - HSVP. */
  HRK = "HRK",
  /** GR (Greece) - Greek RTGS (HERMES). */
  HRM = "HRM",
  /** HU (Hungary) - VIBER. */
  HUF = "HUF",
  /** DE and NL - Equens */
  INC = "INC",
  /** JO (Jordan) - Jordan RTGS. */
  JOD = "JOD",
  /** KE (Kenya) - Kenyan Electronic Payment Settlement System. */
  KPS = "KPS",
  /** LU (Luxemburg) - Luxembourg RTGS (LIPS). */
  LGS = "LGS",
  /** LK (Sri Lanka) - Sri Lanka (Lankasettle). */
  LKB = "LKB",
  /** LV (Latvia). */
  LVL = "LVL",
  /** CA (Canada) - Large Value Transfer System (LVTS). Replaces CAD. */
  LVT = "LVT",
  /** SG (Singapore) - Singapore RTGS (MEPS+). */
  MEP = "MEP",
  /** ZA (South Africa) - South-African Multiple Option Settlement. */
  MOS = "MOS",
  /** MT (Malta) - Malta Realtime Interbank Settlement System. */
  MRS = "MRS",
  /** MU (Mauritius). */
  MUP = "MUP",
  /** NA (Namibian) - Namibian Interbank Settlement System. */
  NAM = "NAM",
  /** NO (Norway). */
  NOC = "NOC",
  /** AU (Australia) - New Payments Platform (NPP) */
  NPP = "NPP",
  /** CH (Switzerland). */
  PCH = "PCH",
  /** AU (Australia). */
  PDS = "PDS",
  /** EG (Egypt). */
  PEG = "PEG",
  /** FR (France). */
  PNS = "PNS",
  /** AO (Angola) - Angola RTGS. */
  PTR = "PTR",
  /** Ve (Venezuela). */
  PVE = "PVE",
  /** RO (Romania) - Romanian Electronic Payment Operations RT. */
  ROL = "ROL",
  /** RO (Romania) - Romanian GSRS. */
  ROS = "ROS",
  /** Real Time Gross Settlement System. Payment system that simultaneously clears individual transfers and settles them in central bank money. */
  RTG = "RTG",
  /** DE (Germany). */
  RTP = "RTP",
  /** DE – SEPA-Clearer of the Retail Payment System operated by Deutsche Bundesbank */
  SCL = "SCL",
  /** CL (Chile) - Chilean Interbank Payment System. */
  SCP = "SCP",
  /** SE (Sweden) - Swedish Euro RTGS (SEC). */
  SEC = "SEC",
  /** CH (Switzerland) – Swiss EUR RTGS named euroSIC. */
  SEU = "SEU",
  /** CH (Switzerland) – Swiss CHF RTGS named SIC. */
  SIC = "SIC",
  /** CH (Switzerland) – Swiss Instant Payment service in CHF operated by SIX Interbank Clearing. */
  SIP = "SIP",
  /** SI (Slovenia). */
  SIT = "SIT",
  /** ES (Spain) - Spanish RTGS (SLBE). */
  SLB = "SLB",
  /** PT (Portugal) - Portuguese RTGS (SPGT). */
  SPG = "SPG",
  /** SE (Sweden) - SEK RTGS (RIX). */
  SSK = "SSK",
  /** EBA Clearing STEP 2. */
  ST2 = "ST2",
  /** UK (United Kingdom) - CHAPS Sterling RTGS. */
  STG = "STG",
  /** T2S. */
  T2S = "T2S",
  /** FR (France) - French RTGS (TBF). */
  TBF = "TBF",
  /** US - The Clearing House Real-TimePayment System */
  TCH = "TCH",
  /** Target. */
  TGT = "TGT",
  /** TH (Thailand) - Thailand Payment System (BAHTNET). */
  THB = "THB",
  /** TH (Thailand) - National ITMX Payment System */
  THN = "THN",
  /** TZ (Tanzania) - Tanzania Interbank Settlement System (TISS). */
  TIS = "TIS",
  /** NL (Netherlands) - Dutch RTGS (TOP) */
  TOP = "TOP",
  /** TT (Trinidad and Tobago ) - Trinidad and Tobago SAFE-TT. */
  TTD = "TTD",
  /** United States Dollar (USD) */
  UBE = "UBE",
  /** UG (Uganda) - Uganda National Interbank Settlement System. */
  UIS = "UIS",
  /** VocaLink Clearing System */
  VCS = "VCS",
  /** EBA step 2. */
  XCT = "XCT",
  /** JP (Japan) the Zengin system. The electronic payment system for domestic third party transfers managed by the Tokyo Bankers Association. */
  ZEN = "ZEN",
  /** ZW (Zimbabwe) - Zimbabwe Electronic Transfer & Settlement System. */
  ZET = "ZET",
  /** ZM (Zambia) - Zambian Interbank Payment &Settlement System. */
  ZIS = "ZIS",
}