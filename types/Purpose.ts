/**
 * Specifies the external purpose code in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalPurpose1Code
 */
export enum Purpose {
  /** Transaction moves funds between 2 accounts of same account holder at the same bank. */
  ACCT = "ACCT",
  /** Payments for donation, sponsorship, advisory, intellectual and other copyright services. */
  ADCS = "ADCS",
  /** Transaction is related to a payment associated with administrative management. */
  ADMG = "ADMG",
  /** Transaction is an advance payment. */
  ADVA = "ADVA",
  /** Payment concerning active employment policy. */
  AEMP = "AEMP",
  /** Transaction is related to the agricultural domain. */
  AGRT = "AGRT",
  /** Transaction is a payment for air transport related business. */
  AIRB = "AIRB",
  /** Transaction is the payment of allowances. */
  ALLW = "ALLW",
  /** Transaction is the payment of alimony. */
  ALMY = "ALMY",
  /** Card Settlement-Settlement of AMEX transactions. */
  AMEX = "AMEX",
  /** Transaction settles annuity related to credit, insurance, investments, other.n */
  ANNI = "ANNI",
  /** Transaction is a payment for anesthesia services. */
  ANTS = "ANTS",
  /** Transaction is related to a payment associated with an Account Receivable Entry */
  AREN = "AREN",
  /** Utilities-Settlement of Authenticated Collections transactions. */
  AUCO = "AUCO",
  /** US mutual fund trailer fee (12b-1) payment */
  B112 = "B112",
  /** Transaction is related to a payment made as incentive to encourage parents to have more children */
  BBSC = "BBSC",
  /** Transaction is the payment of a domestic bearer cheque. */
  BCDM = "BCDM",
  /** Transaction is the payment of a foreign bearer cheque. */
  BCFG = "BCFG",
  /** Transaction is related to a payment made to assist parent/guardian to maintain child. */
  BECH = "BECH",
  /** Transaction is related to a payment to a person who is unemployed/disabled. */
  BENE = "BENE",
  /** Transaction is related to a payment of business expenses. */
  BEXP = "BEXP",
  /** Cash collateral related to any securities traded out beyond 3 days which include treasury notes, JGBs and Gilts. */
  BFWD = "BFWD",
  /** Delayed draw funding. Certain issuers may utilize delayed draw loans whereby the lender is committed to fund cash within a specified period once a call is made by the issuer. The lender receives a fee for entering into such a commitment */
  BKDF = "BKDF",
  /** Bank loan fees. Cash activity related to specific bank loan fees, including (a) agent / assignment fees; (b) amendment fees; (c) commitment fees; (d) consent fees; (e) cost of carry fees; (f) delayed compensation fees; (g) facility fees; (h) fronting fees; (i) funding fees; (j) letter of credit assignment fees */
  BKFE = "BKFE",
  /** Bank loan funding memo. Net cash movement for the loan contract final notification when sent separately from the loan contract final notification instruction. */
  BKFM = "BKFM",
  /** Accrued interest payments. Specific to bank loans. */
  BKIP = "BKIP",
  /** Principal paydowns. Specific to bank loans */
  BKPP = "BKPP",
  /** Transaction is related to a payment associated with building maintenance. */
  BLDM = "BLDM",
  /** Bond Forward pair-off cash net movement */
  BNET = "BNET",
  /** Transaction is related to a payment associated with a Back Office Conversion Entry */
  BOCE = "BOCE",
  /** Securities Lending-Settlement of Bond transaction. */
  BOND = "BOND",
  /** Transaction is related to payment of a bonus. */
  BONU = "BONU",
  /** US mutual fund trailer fee (12b-1) rebate payment */
  BR12 = "BR12",
  /** Transaction is a payment for bus transport related business. */
  BUSB = "BUSB",
  /** Securities Lending-Settlement of Corporate Actions: Bonds transactions. */
  CABD = "CABD",
  /** Securities Lending-Settlement of Corporate Actions: Equities transactions. */
  CAEQ = "CAEQ",
  /** Transaction is the payment of custodian account management fee where custodian bank and current account servicing bank coincide */
  CAFI = "CAFI",
  /** Transaction is a general cash management instruction. */
  CASH = "CASH",
  /** Card Settlement-Settlement of Credit Card transactions. */
  CBCR = "CBCR",
  /** Transaction is related to capital building fringe fortune, ie capital building in general */
  CBFF = "CBFF",
  /** Transaction is related to capital building fringe fortune for retirement */
  CBFR = "CBFR",
  /** A Service that is settling money for a bulk of card transactions, while referring to a specific transaction file or other information like terminal ID, card acceptor ID or other transaction details. */
  CBLK = "CBLK",
  /** Transaction is related to a payment of cable TV bill. */
  CBTV = "CBTV",
  /** Payments made by Government institute related to cash compensation, helplessness, disability. These payments are made by the Government institution as a social benefit in addition to regularly paid salary or pension. */
  CCHD = "CCHD",
  /** Cash Collateral related to a Cross Currency Interest Rate Swap, indicating the exchange of fixed interest payments in one currency for those in another. */
  CCIR = "CCIR",
  /** Cash Collateral associated with an ISDA or Central Clearing Agreement that is covering the initial margin requirements for OTC trades clearing through a CCP. */
  CCPC = "CCPC",
  /** Cash Collateral associated with an ISDA or Central Clearing Agreement that is covering the variation margin requirements for OTC trades clearing through a CCP. */
  CCPM = "CCPM",
  /** Transaction is related to a payment of credit card account. */
  CCRD = "CCRD",
  /** CCP Segregated initial margin: Initial margin on OTC Derivatives cleared through a CCP that requires segregation */
  CCSM = "CCSM",
  /** Transaction is related to a payment of credit card bill. */
  CDBL = "CDBL",
  /** Purchase of Goods and Services with additional Cash disbursement at the POI (Cashback) */
  CDCB = "CDCB",
  /** ATM Cash Withdrawal in an unattended or Cash Advance in an attended environment (POI or bank counter) */
  CDCD = "CDCD",
  /** ATM Cash Withdrawal in an unattended or Cash Advance in an attended environment (POI or bank counter) with surcharging. */
  CDCS = "CDCS",
  /** A combined service which enables the card acceptor to perform an authorisation for a temporary amount and a completion for the final amount within a limited time frame. Deferred Payment is only available in the unattended environment. Examples where this service is widely used are unattended petrol pumps and phone booths */
  CDDP = "CDDP",
  /** Payment related to a credit default event */
  CDEP = "CDEP",
  /** A service which allows the card acceptor to effect a credit to a cardholder' account. Unlike a Merchant Refund, an Original Credit is not preceded by a card payment. This service is used for example for crediting winnings from gaming. */
  CDOC = "CDOC",
  /** Purchase of Goods which are equivalent to cash like coupons in casinos. */
  CDQC = "CDQC",
  /** Transaction is the payment of capital falling due where custodian bank and current account servicing bank coincide */
  CFDI = "CFDI",
  /** Transaction is related to a payment of cancellation fee. */
  CFEE = "CFEE",
  /** Transaction is related to a direct debit where the mandate was generated by using data from a payment card at the point of sale. */
  CGDD = "CGDD",
  /** Transaction is a payment for charity reasons. */
  CHAR = "CHAR",
  /** Transaction is a payment of car loan principal payment. */
  CLPR = "CLPR",
  /** Transaction is payment of commodities. */
  CMDT = "CMDT",
  /** Transaction is a collection of funds initiated via a credit transfer or direct debit. */
  COLL = "COLL",
  /** Transaction is related to a payment of commercial credit or debit. (formerly CommercialCredit) */
  COMC = "COMC",
  /** Transaction is payment of commission. */
  COMM = "COMM",
  /** Transaction is related to the payment of a compensation relating to interest loss/value date adjustment and can include fees. */
  COMP = "COMP",
  /** Transaction is a payment used by a third party who can collect funds to pay on behalf of consumers, ie credit counseling or bill payment companies. */
  COMT = "COMT",
  /** Transaction is related to settlement of a trade, e.g. a foreign exchange deal or a securities transaction. */
  CORT = "CORT",
  /** Transaction is related to payment of costs. */
  COST = "COST",
  /** Cash penalties related to securities transaction, including CSDR Settlement Discipline Regime. */
  CPEN = "CPEN",
  /** Transaction is related to carpark charges. */
  CPKC = "CPKC",
  /** Transaction is payment of copyright. */
  CPYR = "CPYR",
  /** Cash collateral related to trading of credit default swap. */
  CRDS = "CRDS",
  /** Cash collateral related to a combination of various types of trades. */
  CRPR = "CRPR",
  /** Cash collateral related to cash lending/borrowing; letter of Credit; signing of master agreement. */
  CRSP = "CRSP",
  /** Cash collateral related to opening of a credit line before trading. */
  CRTL = "CRTL",
  /** Transaction is related to cash disbursement. */
  CSDB = "CSDB",
  /** Transaction is a payment by a company to a bank for financing social loans to employees. */
  CSLP = "CSLP",
  /** Transaction is a payment for convalescence care facility services. */
  CVCF = "CVCF",
  /** Card Settlement-Settlement of Debit Card transactions. */
  DBCR = "DBCR",
  /** Collection of funds initiated via a debit transfer. */
  DBTC = "DBTC",
  /** Transaction is related to a debit card payment. */
  DCRD = "DCRD",
  /** Purpose of payment is the settlement of charges payable by the debtor in relation to an underlying customer credit transfer. */
  DEBT = "DEBT",
  /** Transaction is related to a payment concerning dependent support, for example child support or support for a person substantially financially dependent on the support provider. */
  DEPD = "DEPD",
  /** Transaction is releted to a payment of deposit. */
  DEPT = "DEPT",
  /** Transaction is related to a derivatives transaction */
  DERI = "DERI",
  /** Card Settlement-Settlement of Diners transactions. */
  DICL = "DICL",
  /** Transaction is payment of dividends. */
  DIVD = "DIVD",
  /** Transaction is a payment is for use of durable medical equipment. */
  DMEQ = "DMEQ",
  /** Transaction is a payment for dental services. */
  DNTS = "DNTS",
  /** Transaction is the payment of a disbursement due to a specific type of printed order for a payment of a specified sum, issued by a bank or a post office (Zahlungsanweisung zur Verrechnung) */
  DSMT = "DSMT",
  /** Code used to pre-advise the account servicer of a forthcoming deliver against payment instruction. */
  DVPM = "DVPM",
  /** E-Commerce payment with payment guarantee of the issuing bank. */
  ECPG = "ECPG",
  /** E-Commerce payment return. */
  ECPR = "ECPR",
  /** E-Commerce payment without payment guarantee of the issuing bank. */
  ECPU = "ECPU",
  /** Transaction is related to a payment of study/tuition fees. */
  EDUC = "EDUC",
  /** Utilities-Settlement of Low value Credit transactions. */
  EFTC = "EFTC",
  /** Utilities-Settlement of Low value Debit transactions. */
  EFTD = "EFTD",
  /** Transaction is related to a payment of electricity bill. */
  ELEC = "ELEC",
  /** Transaction is related to a utility operation. */
  ENRG = "ENRG",
  /** Transaction is related to ePayment. */
  EPAY = "EPAY",
  /** Cash collateral related to trading of equity option (Also known as stock options). */
  EQPT = "EQPT",
  /** Securities Lending-Settlement of Equities transactions. */
  EQTS = "EQTS",
  /** Cash collateral related to equity swap trades where the return of an equity is exchanged for either a fixed or a floating rate of interest. */
  EQUS = "EQUS",
  /** Transaction is related to a payment of estate tax. */
  ESTX = "ESTX",
  /** Transaction is related to a Service that is first reserving money from a card account and then is loading an e-purse application by this amount. */
  ETUP = "ETUP",
  /** Cash collateral related to trading of an exotic option for example a non-standard option. */
  EXPT = "EXPT",
  /** Cash collateral related to trading of exchanged traded derivatives in general (Opposite to Over the Counter (OTC)). */
  EXTD = "EXTD",
  /** Payment related to a factor update */
  FACT = "FACT",
  /** Financial aid by State authorities for abolition of consequences of natural disasters. */
  FAND = "FAND",
  /** A Service that is settling card transaction related fees between two parties. */
  FCOL = "FCOL",
  /** Transaction is the payment for late fees & charges. E.g Credit card charges */
  FCPM = "FCPM",
  /** Payment of fees/charges. */
  FEES = "FEES",
  /** Transaction is a payment for ferry related business. */
  FERB = "FERB",
  /** Cash collateral related to a fixed income instrument */
  FIXI = "FIXI",
  /** Card Settlement-Settlement of Fleet transactions. */
  FLCR = "FLCR",
  /** Cash associated with a netting of futures payments. Refer to CCPM codeword for netting of initial and variation margin through a CCP */
  FNET = "FNET",
  /** FX trades with a value date in the future. */
  FORW = "FORW",
  /** Transaction is related to a foreign exchange operation. */
  FREX = "FREX",
  /** Cash related to futures trading activity. */
  FUTR = "FUTR",
  /** Cash collateral payment against a Master Forward Agreement (MFA) where the cash is held in a segregated account and is not available for use by the client. Includes any instruments with a forward settling date such TBAs, repurchase agreements and bond forwards */
  FWBC = "FWBC",
  /** Cash collateral payment against a Master Forward Agreement (MFA) where the cash is owned and may be used by the client when returned. Includes any instruments with a forward settling date such TBAs, repurchase agreements and bond forwards */
  FWCC = "FWCC",
  /** Transaction is related to a payment of Foreign Worker Levy */
  FWLV = "FWLV",
  /** Any cash payment related to the collateral for a Master Agreement forward, which is segregated, and not available for use by the client. Example master agreement forwards include TBA, repo and Bond Forwards. */
  FWSB = "FWSB",
  /** Any cash payment related to the collateral for a Master agreement forward, which is owned by the client and is available for use by the client when it is returned to them from the segregated account. Example master agreement forwards include TBA, repo and Bond Forwards. */
  FWSC = "FWSC",
  /** FX netting if cash is moved by separate wire instead of within the closing FX instruction */
  FXNT = "FXNT",
  /** Salary and Benefits-Allowance from government to support family. */
  GAFA = "GAFA",
  /** Salary and Benefits-Allowance from government to individuals to support payments of housing. */
  GAHO = "GAHO",
  /** General-Payments towards a purchase or winnings received from gambling, betting or other wagering activities. */
  GAMB = "GAMB",
  /** Transaction is related to a payment of gas bill. */
  GASB = "GASB",
  /** Transaction is related to purchase and sale of goods. */
  GDDS = "GDDS",
  /** Transaction is related to purchase and sale of goods and services. */
  GDSV = "GDSV",
  /** Compensation to unemployed persons during insolvency procedures. */
  GFRP = "GFRP",
  /** Payment with no commercial or statutory purpose. */
  GIFT = "GIFT",
  /** Transaction is related to a payment of government insurance. */
  GOVI = "GOVI",
  /** Transaction is a payment to or from a government department. */
  GOVT = "GOVT",
  /** Transaction is related to purchase and sale of goods and services with cash back. */
  GSCB = "GSCB",
  /** Transaction is the payment of Goods & Services Tax */
  GSTX = "GSTX",
  /** Transaction is payment to category A Austrian government employees. */
  GVEA = "GVEA",
  /** Transaction is payment to category B Austrian government employees. */
  GVEB = "GVEB",
  /** Transaction is payment to category C Austrian government employees. */
  GVEC = "GVEC",
  /** Transaction is payment to category D Austrian government employees. */
  GVED = "GVED",
  /** Payment to victims of war violence and to disabled soldiers. */
  GWLT = "GWLT",
  /** Transaction is related to a hedging operation. */
  HEDG = "HEDG",
  /** Transaction is related to a payment of property loan. */
  HLRP = "HLRP",
  /** Transaction is related to the settlement of a property loan. */
  HLST = "HLST",
  /** Transaction is a payment for home health care services. */
  HLTC = "HLTC",
  /** Transaction is a payment of health insurance. */
  HLTI = "HLTI",
  /** Transaction is a contribution by an employer to the housing expenditures (purchase, construction, renovation) of the employees within a tax free fringe benefit system */
  HREC = "HREC",
  /** Transaction is a payment for hospital care services. */
  HSPC = "HSPC",
  /** Transaction is related to a payment of housing tax. */
  HSTX = "HSTX",
  /** Transaction is reimbursement of credit card payment. */
  ICCP = "ICCP",
  /** Transaction is a payment for intermediate care facility services. */
  ICRF = "ICRF",
  /** Transaction is reimbursement of debit card payment. */
  IDCP = "IDCP",
  /** Transaction is payment for an installment/hire-purchase agreement. */
  IHRP = "IHRP",
  /** Transaction is a payment of car insurance premium. */
  INPC = "INPC",
  /** Transaction is related to an insurance premium refund. */
  INPR = "INPR",
  /** Transaction is related to the payment of an insurance claim. */
  INSC = "INSC",
  /** Transaction is related to a payment of an installment. */
  INSM = "INSM",
  /** Transaction is payment of an insurance premium. */
  INSU = "INSU",
  /** Transaction is an intra-company payment, ie, a payment between two companies belonging to the same group. */
  INTC = "INTC",
  /** Transaction is payment of interest. */
  INTE = "INTE",
  /** Transaction is a payment between two accounts belonging to the same party (intra-party payment), where party is a natural person (identified by a private ID, not organisation ID). */
  INTP = "INTP",
  /** Transaction is related to a payment of income tax. */
  INTX = "INTX",
  /** Transaction is for the payment of mutual funds, investment products and shares */
  INVS = "INVS",
  /** Transaction in which the amount is available to the payee immediately. */
  IPAY = "IPAY",
  /** Transaction in which the Return of the amount is fully returned. */
  IPCA = "IPCA",
  /** Transaction in which the amount is available to the payee immediately, done for donations, with sending the address data of the payer. */
  IPDO = "IPDO",
  /** Transaction in which the amount is available to the payee immediately, done in E-commerce, without sending the address data of the payer. */
  IPEA = "IPEA",
  /** Transaction in which the amount is available to the payee immediately, done in E-commerce, with sending the address data of the payer. */
  IPEC = "IPEC",
  /** Transaction in which the amount is available to the payee immediately, done in E-commerce. */
  IPEW = "IPEW",
  /** Transaction in which the amount is available to the payee immediately, done at POS. */
  IPPS = "IPPS",
  /** Transaction in which the Return of the amount is fully or partial returned. */
  IPRT = "IPRT",
  /** Transaction is made via an unattending vending machine by using 2-factor-authentification. */
  IPU2 = "IPU2",
  /** Transaction is made via an unattending vending machine by without using 2-factor-authentification. */
  IPUW = "IPUW",
  /** Transaction is the payment for invoices. */
  IVPT = "IVPT",
  /** Net payment related to a buy-in. When an investment manager is bought in on a sell trade that fails due to a failed securities lending recall, the IM may seize the underlying collateral to pay for the buy-in. Any difference between the value of the collateral and the sell proceeds would be paid or received under this code */
  LBIN = "LBIN",
  /** Transaction is a payment of labor insurance. */
  LBRI = "LBRI",
  /** Free movement of cash collateral. Cash collateral paid by the borrower is done separately from the delivery of the shares at loan opening or return of collateral done separately from return of the loaned security. Note: common when the currency of the security is different the currency of the cash collateral. */
  LCOL = "LCOL",
  /** Fee payments, other than rebates, for securities lending. Includes (a) exclusive fees; (b) transaction fees; (c) custodian fees; (d) minimum balance fees */
  LFEE = "LFEE",
  /** Transaction is payment of a license fee. */
  LICF = "LICF",
  /** Transaction is a payment of life insurance. */
  LIFI = "LIFI",
  /** Bank initiated account transfer to support zero target balance management, pooling or sweeping. */
  LIMA = "LIMA",
  /** Cash collateral payments resulting from the marked-to-market of a portfolio of loaned equity securities */
  LMEQ = "LMEQ",
  /** Cash collateral payments resulting from the marked-to-market of a portfolio of loaned fixed income securities */
  LMFI = "LMFI",
  /** Cash collateral payments resulting from the marked-to-market of a portfolio of loaned securities where the instrument types are not specified */
  LMRK = "LMRK",
  /** Transaction is related to transfer of loan to borrower. */
  LOAN = "LOAN",
  /** Transaction is related to repayment of loan to lender. */
  LOAR = "LOAR",
  /** General-Payment towards a purchase or winnings received from lottery activities. */
  LOTT = "LOTT",
  /** Securities lending rebate payments */
  LREB = "LREB",
  /** Revenue payments made by the lending agent to the client */
  LREV = "LREV",
  /** Payments made by a borrower to a lending agent to satisfy claims made by the investment manager related to sell fails from late loan recall deliveries */
  LSFL = "LSFL",
  /** Transaction is a payment for long-term care facility services. */
  LTCF = "LTCF",
  /** Transaction is contribution to medical aid fund. */
  MAFC = "MAFC",
  /** Transaction is related to a medical aid refund. */
  MARF = "MARF",
  /** Daily margin on listed derivatives – not segregated as collateral associated with an FCM agreement. Examples include listed futures and options margin payments; premiums for listed options not covered in the MT54X message */
  MARG = "MARG",
  /** MBS Broker Owned Segregated (40Act/Dodd Frank) Cash Collateral - Any cash payment related to the collateral for a Mortgage Back Security, which is segregated, and not available for use by the client. */
  MBSB = "MBSB",
  /** MBS Client Owned Cash Segregated (40Act/Dodd Frank) Cash Collateral - Any cash payment related to the collateral for a Mortgage Back Security, which is owned by the client and is available for use by the client when it is returned to them from the segregated account */
  MBSC = "MBSC",
  /** Transaction is the payment of a domestic multi-currency cheque */
  MCDM = "MCDM",
  /** Transaction is the payment of a foreign multi-currency cheque */
  MCFG = "MCFG",
  /** Transaction is a payment for medical care services. */
  MDCS = "MDCS",
  /** Initial futures margin. Where such payment is owned by the client and is available for use by them on return */
  MGCC = "MGCC",
  /** Margin Client Owned Segregated Cash Collateral - Any cash payment related to the collateral for initial futures margin, which is owned by the client and is available for use by the client when it is returned to them from the segregated account. */
  MGSC = "MGSC",
  /** Securities Lending-ettlement of Money Market PCH. */
  MOMA = "MOMA",
  /** A service which enables a user to use an app on its mobile to pay a merchant or other business payees by initiating a payment message. Within this context, the account information or an alias of the payee might be transported through different channels to the app, for example QR Code, NFC, Bluetooth, other Networks. */
  MP2B = "MP2B",
  /** A service which enables a user to use an app on its mobile to initiate moving funds from his/her bank account to another person’s bank account while not using the account number but an alias information like an MSISDN as account addressing information in his/her app. */
  MP2P = "MP2P",
  /** Transaction is related to a payment for multiple service types. */
  MSVC = "MSVC",
  /** A Service that is first reserving money from a card account and then is loading a prepaid mobile phone amount by this amount. */
  MTUP = "MTUP",
  /** Transaction is related to a netting operation. */
  NETT = "NETT",
  /** Transaction is related to a payment of net income tax. */
  NITX = "NITX",
  /** Transaction is related to a payment for type of services not specified elsewhere. */
  NOWS = "NOWS",
  /** Transaction is related to a payment of network charges. */
  NWCH = "NWCH",
  /** Transaction is related to a payment of network communication. */
  NWCM = "NWCM",
  /** Client owned collateral identified as eligible for OCC pledging */
  OCCC = "OCCC",
  /** Transaction is the payment of a domestic order cheque */
  OCDM = "OCDM",
  /** Transaction is the payment of a foreign order cheque */
  OCFG = "OCFG",
  /** Transaction is related to a payment of opening fee. */
  OFEE = "OFEE",
  /** Cash collateral payment for OTC options associated with an FCM agreement. Where such payment is segregated and not available for use by the client */
  OPBC = "OPBC",
  /** Cash collateral payment for OTC options associated with an FCM agreement. Where such payment is not segregated and is available for use by the client upon return */
  OPCC = "OPCC",
  /** Option Broker Owned Segregated Cash Collateral - Any cash payment related to the collateral for an OTC option, which is segregated, and not available for use by the client. */
  OPSB = "OPSB",
  /** Option Client Owned Cash Segregated Cash Collateral - Any cash payment related to the collateral for an OTC option, which is owned by the client and is available for use by the client when it is returned to them from the segregated account */
  OPSC = "OPSC",
  /** Cash collateral related to trading of option on Foreign Exchange. */
  OPTN = "OPTN",
  /** Cash collateral related to Over-the-counter (OTC) Derivatives in general for example contracts which are traded and privately negotiated. */
  OTCD = "OTCD",
  /** Other payment purpose. */
  OTHR = "OTHR",
  /** Transaction is related to a payment of other telecom related bill. */
  OTLC = "OTLC",
  /** Transaction is related to a pre-authorized debit origination */
  PADD = "PADD",
  /** Transaction is related to the payment of payroll. */
  PAYR = "PAYR",
  /** Final payment to complete the purchase of a property. */
  PCOM = "PCOM",
  /** Payment of the deposit required towards purchase of a property. */
  PDEP = "PDEP",
  /** Transaction is contribution to pension fund. */
  PEFC = "PEFC",
  /** Payment based on enforcement orders except those arising from judicial alimony decrees. */
  PENO = "PENO",
  /** Transaction is the payment of pension. */
  PENS = "PENS",
  /** Transaction is related to a payment of telephone bill. */
  PHON = "PHON",
  /** Payment of funds from a lender as part of the issuance of a property loan. */
  PLDS = "PLDS",
  /** Transfer or extension of a property financing arrangement to a new deal or loan provider, without change of ownership of property. */
  PLRF = "PLRF",
  /** Transaction is related to a payment associated with a Point of Purchase Entry. */
  POPE = "POPE",
  /** Transaction is a payment of property insurance. */
  PPTI = "PPTI",
  /** Transaction is related to a payment of a price. */
  PRCP = "PRCP",
  /** Transaction is related to a precious metal operation. */
  PRME = "PRME",
  /** Transaction is related to payment terms specifications */
  PTSP = "PTSP",
  /** Transaction is related to a payment of property tax. */
  PTXP = "PTXP",
  /** Instant Payments-Settlement of Rapid Payment Instruction (RPI) transactions. */
  RAPI = "RAPI",
  /** Transaction is related to a payment associated with a re-presented check entry */
  RCKE = "RCKE",
  /** Transaction is related to a payment of receipt. */
  RCPT = "RCPT",
  /** Transaction is related to a payment of road tax. */
  RDTX = "RDTX",
  /** Transaction is the payment of a rebate. */
  REBT = "REBT",
  /** Transaction is the payment of a refund. */
  REFU = "REFU",
  /** Transaction is for general rental/lease. */
  RELG = "RELG",
  /** Transaction is the payment of rent. */
  RENT = "RENT",
  /** Transaction is for account overdraft repayment */
  REOD = "REOD",
  /** Cash collateral related to a repurchase agreement transaction. */
  REPO = "REPO",
  /** Retail payment including e-commerce and online shopping. */
  RETL = "RETL",
  /** Benefit for the duration of occupational rehabilitation. */
  RHBS = "RHBS",
  /** Transaction is related to a reimbursement of a previous erroneous transaction. */
  RIMB = "RIMB",
  /** Transaction is related to a payment of a recurring installment made at regular intervals. */
  RINP = "RINP",
  /** Transaction is a payment for railway transport related business. */
  RLWY = "RLWY",
  /** Utilities-Settlement of Unauthenticated Collections transactions. */
  RMCO = "RMCO",
  /** Transaction is the payment of royalties. */
  ROYA = "ROYA",
  /** Bi-lateral repo broker owned collateral associated with a repo master agreement – GMRA or MRA Master Repo Agreements */
  RPBC = "RPBC",
  /** Repo client owned collateral associated with a repo master agreement – GMRA or MRA Master Repo Agreements */
  RPCC = "RPCC",
  /** Bi-lateral repo interest net/bulk payment at rollover/pair-off or other closing scenarios where applicable */
  RPNT = "RPNT",
  /** Bi-lateral repo broker owned segregated cash collateral associated with a repo master agreement */
  RPSB = "RPSB",
  /** Repo client owned segregated collateral associated with a repo master agreement */
  RPSC = "RPSC",
  /** Cash payment resulting from a Round Robin */
  RRBN = "RRBN",
  /** Transaction is related to a reimbursement for commercial reasons of a correctly received credit transfer. */
  RRCT = "RRCT",
  /** Transaction is related to a Request to Pay. */
  RRTP = "RRTP",
  /** Code used to pre-advise the account servicer of a forthcoming receive against payment instruction. */
  RVPM = "RVPM",
  /** Cash collateral related to a reverse repurchase agreement transaction. */
  RVPO = "RVPO",
  /** Transaction is the payment of salaries. */
  SALA = "SALA",
  /** Card Settlement-Settlement of ATM transactions. */
  SASW = "SASW",
  /** Transfer to / from savings or to retirement account. */
  SAVG = "SAVG",
  /** Cash collateral related to a Securities Buy Sell Sell Buy Back */
  SBSC = "SBSC",
  /** Cash collateral related to Exotic single currency interest rate swap. */
  SCIE = "SCIE",
  /** Cash collateral related to Single Currency Interest Rate Swap. */
  SCIR = "SCIR",
  /** Cash collateral related to Combination of securities-related exposure types. */
  SCRP = "SCRP",
  /** Transaction is related to purchase and sale of services. */
  SCVE = "SCVE",
  /** Transaction is the payment of securities. */
  SECU = "SECU",
  /** Transaction is the payment of a purchase of securities where custodian bank and current account servicing bank coincide */
  SEPI = "SEPI",
  /** Transaction is related to service charges charged by a service provider. */
  SERV = "SERV",
  /** Short Sale broker owned collateral associated with a prime broker agreement */
  SHBC = "SHBC",
  /** Short Sale client owned collateral associated with a prime brokerage agreement */
  SHCC = "SHCC",
  /** Cash Collateral related to a Short Sell */
  SHSL = "SHSL",
  /** Cash collateral related to Securities lending and borrowing. */
  SLEB = "SLEB",
  /** Cash collateral related to a Secured loan. */
  SLOA = "SLOA",
  /** Transaction is payment of a well formatted payment slip. */
  SLPI = "SLPI",
  /** Split payments. To be used when cash and security movements for a security trade settlement are instructed separately. */
  SPLT = "SPLT",
  /** Salary or pension payment for more months in one amount or a delayed payment of salaries or pensions. */
  SPSP = "SPSP",
  /** Transaction is a social security benefit, ie payment made by a government to support individuals. */
  SSBE = "SSBE",
  /** Transaction is related to a payment of study/tuition costs. */
  STDY = "STDY",
  /** Transaction is related to a payment of information or entertainment services either in printed or electronic form. */
  SUBS = "SUBS",
  /** Transaction is related to a payment to a supplier. */
  SUPP = "SUPP",
  /** Cash collateral payment for swaps associated with an ISDA agreement. . Where such payment is segregated and not available for use by the client. Includes any cash collateral payments made under the terms of a CSA agreement for instruments such as swaps and FX forwards. */
  SWBC = "SWBC",
  /** Cash collateral payment for swaps associated with an ISDA agreement. Where such payment is not segregated and is available for use by the client upon return. Includes any cash collateral payments made under the terms of a CSA agreement for instruments such as swaps and FX forwards. */
  SWCC = "SWCC",
  /** Final payments for a swap contract */
  SWFP = "SWFP",
  /** Partial payment for a swap contract */
  SWPP = "SWPP",
  /** Cash collateral related to an option on interest rate swap. */
  SWPT = "SWPT",
  /** Reset payment for a swap contract */
  SWRS = "SWRS",
  /** Swaps Broker Owned Segregated Cash Collateral - Any cash payment related to the collateral for Swap margin , which is segregated, and not available for use by the client. This includes any collateral identified in a CSA agreement such as Swap or FX Forward collateral. */
  SWSB = "SWSB",
  /** Swaps Client Owned Segregated Cash Collateral - Any cash payment related to the collateral for Swap margin, which is owned by the client and is available for use by the client when returned from the segregated account. This includes any collateral identified in a CSA agreement such as Swap or FX Forward collateral. */
  SWSC = "SWSC",
  /** Upfront payment for a swap contract */
  SWUF = "SWUF",
  /** Transaction is the refund of a tax payment or obligation. */
  TAXR = "TAXR",
  /** Transaction is the payment of taxes. */
  TAXS = "TAXS",
  /** TBA pair-off cash wire net movement */
  TBAN = "TBAN",
  /** Cash collateral related to a To Be Announced (TBA) */
  TBAS = "TBAS",
  /** Cash collateral payment (segregated) for TBA securities associated with a TBA Master Agreement. Where such payment is segregated and not available for use by the client. */
  TBBC = "TBBC",
  /** Cash collateral payment (for use by client)for TBA securities associated with a TBA Master Agreement. Where such payment is not segregated and is available for use by the client upon return. */
  TBCC = "TBCC",
  /** Transaction is related to a payment of telecommunications related bill. */
  TBIL = "TBIL",
  /** Transaction is related to a payment associated with charges levied by a town council. */
  TCSC = "TCSC",
  /** Transaction is related to a payment initiated via telephone. */
  TELI = "TELI",
  /** Any non-US mutual fund trailer fee (retrocession) payment (use ISIN to determine onshore versus offshore designation) */
  TLRF = "TLRF",
  /** Any non-US mutual fund trailer fee (retrocession) rebate payment (use ISIN to determine onshore versus offshore designation) */
  TLRR = "TLRR",
  /** Cash payment resulting from a TMPG Claim */
  TMPG = "TMPG",
  /** Tri-Party Repo related interest */
  TPRI = "TPRI",
  /** Tri-party Repo related net gain/loss cash movement */
  TPRP = "TPRP",
  /** Transaction is related to a trade services operation. */
  TRAD = "TRAD",
  /** Cash collateral related to a combination of treasury-related exposure types. */
  TRCP = "TRCP",
  /** Transaction is related to treasury operations. */
  TREA = "TREA",
  /** Transaction is related to a payment of a trust fund. */
  TRFD = "TRFD",
  /** Transaction is payment of a beneficiary prefilled payment slip where beneficiary to payer information is truncated. */
  TRNC = "TRNC",
  /** Transaction is for the payment to top-up pre-paid card and electronic road pricing for the purpose of transportation */
  TRPT = "TRPT",
  /** Transaction is the payment of a travellers cheque */
  TRVC = "TRVC",
  /** Transaction is for the payment to common utility provider that provide gas, water and/or electricity. */
  UBIL = "UBIL",
  /** Transaction is purchase of Unit Trust */
  UNIT = "UNIT",
  /** Transaction is the payment of value added tax. */
  VATX = "VATX",
  /** Transaction is a payment for vision care services. */
  VIEW = "VIEW",
  /** Transaction is related to a payment initiated via internet. */
  WEBI = "WEBI",
  /** Transaction is related to a payment of withholding tax. */
  WHLD = "WHLD",
  /** Transaction is related to a payment of water bill. */
  WTER = "WTER",
}