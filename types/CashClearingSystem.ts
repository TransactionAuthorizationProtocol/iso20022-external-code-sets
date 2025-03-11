/**
 * Specifies the cash clearing system, as published in an external cash clearing system code list.
 * ISO20022 External Code
 * Original name: ExternalCashClearingSystem1Code
 */
export enum CashClearingSystem {
  /** EBA Euro1/Step1. */
  ABE = "ABE",
  /** Automated Clearing House. Payment system that clears cash transfers and settles the proceeds in a lump sum, usually on a multilateral netting basis. */
  ACH = "ACH",
  /** Canadian Dollar (CAD) - Automated Clearing Settlement System (ACSS) */
  ACS = "ACS",
  /** AL (Albania) - Albania Interbank Payment System. */
  AIP = "AIP",
  /** AT (Austria) - Austrian RTGS. */
  ART = "ART",
  /** NZ (New Zealand) - New Zealand Assured Value Payments. */
  AVP = "AVP",
  /** AZ (Azerbaijan) - Azerbaijan Interbank Payment System (AZIPS). */
  AZM = "AZM",
  /** P27 Clearing – Batch Payment Platform. */
  B27 = "B27",
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
  /** KR (South Korea) – Korean Won RTGS (BOK-Wire+). */
  BOK = "BOK",
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
  /** CW (Curaçao), SX (Sint Maarten) Central Bank of Curaçao and Sint Maarten CSM */
  CBC = "CBC",
  /** IE (Ireland) - Irish RTGS (IRIS). */
  CBJ = "CBJ",
  /** Real-Time Payment System Peru */
  CCE = "CCE",
  /** US - The Clearing House CHIPS */
  CHI = "CHI",
  /** GB (UK) - British Euro RTGS (CHAPS). */
  CHP = "CHP",
  /** Cross-border Interbank Payment System (CIPS) */
  CIP = "CIP",
  /** Central Interoperability Service of the EACHA Clearing Cooperative, for exchanging SEPA payments between Automated Clearing Houses in the EEA. */
  CIS = "CIS",
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
  /** Elektronischer Massenzahlungsverkehr (EMZ) DE (Germany) – retail payment system operated by the Deutsche Bundesbank */
  EMZ = "EMZ",
  /** ECB (European Central Bank) - ECB Payment Mechanism. */
  EPM = "EPM",
  /** US - The Clearing House EPN */
  EPN = "EPN",
  /** EBA step 1 (members). */
  ERP = "ERP",
  /** US (United States) - Federal Reserve Banks Automated Clearing House Service. */
  FDA = "FDA",
  /** US (United States) - Federal Reserve Banks FedNow Service. */
  FDN = "FDN",
  /** US (United States) - Federal Reserve Banks Fedwire Funds Service. */
  FDW = "FDW",
  /** JP (Japan) the Foreign Exchange Yen Clearing system (FEYCS). It is the Japanese electronic interbank system for sending guaranteed and unconditional yen payments of FX deals for same day settlement from one settlement bank, on behalf of itself or its customers, to another settlement bank. */
  FEY = "FEY",
  /** Faster Payments Service in UK. */
  FPS = "FPS",
  /** GH (Ghana) - Ghana Interbank Settlement System (GISS). */
  GIS = "GIS",
  /** Hong Kong Clearing House Automated Transfer System (CHATS). */
  HKL = "HKL",
  /** Hong Kong Faster Payment System or FPS. A system owned and operated by the HKICL, to provide instant clearing and settlement payment services. */
  HKS = "HKS",
  /** HR (Croatia) - HSVP. */
  HRK = "HRK",
  /** GR (Greece) - Greek RTGS (HERMES). */
  HRM = "HRM",
  /** HU (Hungary) - VIBER. */
  HUF = "HUF",
  /** P27 Clearing – Instant Payment Platform. */
  I27 = "I27",
  /** MY (Malaysia) - Interbank GIRO. */
  IBG = "IBG",
  /** ES - Spain - Iberpay Instant Payments */
  IBP = "IBP",
  /** India Immediate Payment Service */
  IMP = "IMP",
  /** DE and NL - Equens */
  INC = "INC",
  /** IS (Iceland) – Icelandic krona RTGS (MBK). */
  ISG = "ISG",
  /** IL- Bank of Israel RTGS System Code. */
  ISR = "ISR",
  /** NG (Nigeria) - Interswitch. */
  ISW = "ISW",
  /** JO (Jordan) - Jordan RTGS. */
  JOD = "JOD",
  /** KE (Kenya) - Kenyan Electronic Payment Settlement System. */
  KPS = "KPS",
  /** PG (Papua New Guinea) – Kina Automated Transfer System RTGS (KATS RTGS). */
  KTS = "KTS",
  /** LU (Luxemburg) - Luxembourg RTGS (LIPS). */
  LGS = "LGS",
  /** LK (Sri Lanka) - Sri Lanka (Lankasettle). */
  LKB = "LKB",
  /** LS (Lesotho) - RTGS (Wire). */
  LSW = "LSW",
  /** LV (Latvia). */
  LVL = "LVL",
  /** CA (Canada) - Large Value Transfer System (LVTS). */
  LVT = "LVT",
  /** CA (Canada) Lynx High Value Payment System. */
  LYX = "LYX",
  /** SG (Singapore) - Singapore RTGS (MEPS+). */
  MEP = "MEP",
  /** Banco de Mocambique RTGS system. */
  MOC = "MOC",
  /** ZA (South Africa) - South-African Multiple Option Settlement. */
  MOS = "MOS",
  /** Macao Real Time Gross Settlement System */
  MQQ = "MQQ",
  /** MT (Malta) - Malta Realtime Interbank Settlement System. */
  MRS = "MRS",
  /** MU (Mauritius). */
  MUP = "MUP",
  /** NA (Namibian) - Namibian Interbank Settlement System. */
  NAM = "NAM",
  /** NO - Norway NOK RTGS Norges Bank */
  NBO = "NBO",
  /** Provides information to the remitter when incoming cross border transactions are routed through NEFT in the Indian domestic leg. */
  NFT = "NFT",
  /** NO (Norway). */
  NOC = "NOC",
  /** NICS Real (Norway) */
  NOR = "NOR",
  /** AU (Australia) - New Payments Platform (NPP). */
  NPP = "NPP",
  /** US (United States) - Federal Reserve Banks National Settlement Service. */
  NSS = "NSS",
  /** NZ (New Zealand) – New Zealand Dollar RTGS (ESAS) */
  NZE = "NZE",
  /** CH (Switzerland). */
  PCH = "PCH",
  /** AU (Australia). */
  PDS = "PDS",
  /** EG (Egypt). */
  PEG = "PEG",
  /** FR (France). */
  PNS = "PNS",
  /** AT (Austria) – Austrian CSM. */
  PSA = "PSA",
  /** AO (Angola) - Angola RTGS. */
  PTR = "PTR",
  /** Ve (Venezuela). */
  PVE = "PVE",
  /** Malawi – Malawi Interbank Transfer and Settlement System. */
  RBM = "RBM",
  /** MY (Malaysia) - RENTAS, Real Time Electronic Transfer of Funds and Securities in Ringgit denomination. */
  REN = "REN",
  /** Provides information to the remitter when incoming cross border transactions are routed through RTGS in the Indian domestic leg. */
  RGS = "RGS",
  /** SE (Sweden) – SEK RTGS (RIX). */
  RIX = "RIX",
  /** RO (Romania) - Romanian Electronic Payment Operations RT. */
  ROL = "ROL",
  /** RO- Romania RON RTGS National Bank of Romania. */
  RON = "RON",
  /** RO (Romania) - Romanian GSRS. */
  ROS = "ROS",
  /** Real Time Gross Settlement System. Payment system that simultaneously clears individual transfers and settles them in central bank money. */
  RTG = "RTG",
  /** DE (Germany). */
  RTP = "RTP",
  /** CA (Canada) Real Time Rail Payment System. */
  RTR = "RTR",
  /** DE – SEPA-Clearer of the Retail Payment System operated by Deutsche Bundesbank */
  SCL = "SCL",
  /** CL (Chile) - Chilean Interbank Payment System. */
  SCP = "SCP",
  /** SE (Sweden) - Swedish Euro RTGS (SEC). */
  SEC = "SEC",
  /** CH (Switzerland) – Swiss EUR RTGS named euroSIC. */
  SEU = "SEU",
  /** BEAC (Bank of the Central African States) RTGS (SYGMA) */
  SGA = "SGA",
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
  /** Narodowy Bank Polski RTGS System. */
  SRB = "SRB",
  /** SE (Sweden) - SEK RTGS (RIX). */
  SSK = "SSK",
  /** EBA Clearing STEP 2. */
  ST2 = "ST2",
  /** UK (United Kingdom) - CHAPS Sterling RTGS. */
  STG = "STG",
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
  /** Taiwan Real-Time Gross Settlement System. */
  TWP = "TWP",
  /** United States Dollar (USD) – US Bulk Exchange Clearing System (USBE) */
  UBE = "UBE",
  /** UG (Uganda) - Uganda National Interbank Settlement System. */
  UIS = "UIS",
  /** UK (United Kingdom) – Pay.UK Sterling Domestic. */
  UKD = "UKD",
  /** India Unified Payments Interface. */
  UPI = "UPI",
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