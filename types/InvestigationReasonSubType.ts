/**
 * Specifies the investigation reason sub type, as published in an external investigation reason code sub type set.
 * ISO20022 External Code
 * Original name: ExternalInvestigationReasonSubType1Code
 */
export enum InvestigationReasonSubType {
  /** Alien Registration Number is requested. */
  ARNU = "ARNU",
  /** Bank party identification is requested. This is a unique and unambiguous assignment made by a specific bank or similar financial institution to identify a relationship as defined between the bank and its client. */
  BANK = "BANK",
  /** Identifier of the business domain in which the organisation is active is requested. */
  BDID = "BDID",
  /** Other identification of the organisation is requested. */
  BOID = "BOID",
  /** Central bank identification number is requested. This is a unique identification number assigned by a central bank to identify an organisation. */
  CBID = "CBID",
  /** Passport Number is requested. */
  CCPT = "CCPT",
  /** Clearing identification number is requested. This is a unique identification number assigned by a clearing house to identify an organisation */
  CHID = "CHID",
  /** Certificate of incorporation number is requested. This is a unique identification number assigned by a designated authority to a certificate of incorporation and used to identify an organisation. */
  CINC = "CINC",
  /** Country identification code is requested. This is a country authority given organisation identification (e.g., corporate registration number) */
  COID = "COID",
  /** Customer number is requested. This is a number assigned by an issuer to identify a customer or a number assigned by a party to identify a creditor or debtor relationship. */
  CUST = "CUST",
  /** Drivers License Number is requested. */
  DRLC = "DRLC",
  /** Data universal number is requested. This is a unique identification number provided by Dun & Bradstreet to identify an organisation. */
  DUNS = "DUNS",
  /** Employee Identification Number is requested. */
  EMPL = "EMPL",
  /** GS1GLN (Global location number) identifier is requested. This is a non-significant reference number used to identify legal entities, functional entities, or physical entities according to GS1 numbering scheme rules.The number is used to retrieve detailed information that is linked to it. */
  GS1G = "GS1G",
  /** Name and account are not matching. */
  MMNA = "MMNA",
  /** National Identity Number is requested. */
  NIDN = "NIDN",
  /** Person Commercial Identification is requested. */
  POID = "POID",
  /** Countries of all business/operations locations are requested. */
  RCBL = "RCBL",
  /** Country of origination is requested. */
  RCOO = "RCOO",
  /** Incorporation country/country of registration is requested. */
  RICC = "RICC",
  /** Incorporation date is requested. */
  RICD = "RICD",
  /** Ports of call are requested. */
  RPOC = "RPOC",
  /** Airway bill is requested. */
  RQAB = "RQAB",
  /** Account is requested. */
  RQAC = "RQAC",
  /** Postal address line is requested. */
  RQAL = "RQAL",
  /** Postal address sub department is requested. */
  RQAS = "RQAS",
  /** Postal address type is requested. */
  RQAT = "RQAT",
  /** Postal address building number is requested. */
  RQB1 = "RQB1",
  /** Bill of lading is requested. */
  RQBL = "RQBL",
  /** Postal address building name is requested. */
  RQBN = "RQBN",
  /** City of birth is requested. */
  RQCB = "RQCB",
  /** Postal address country is requested. */
  RQCC = "RQCC",
  /** Customs declaration is requested. */
  RQCD = "RQCD",
  /** Details of all countries involved in the transaction are requested. */
  RQCI = "RQCI",
  /** Confirmation of whether transaction is civil or military in nature is requested. */
  RQCM = "RQCM",
  /** Country of birth is requested. */
  RQCO = "RQCO",
  /** Postal address country sub division is requested. */
  RQCS = "RQCS",
  /** Countries of transit between the debtor and creditor are requested. */
  RQCT = "RQCT",
  /** Citizenship is requested. */
  RQCZ = "RQCZ",
  /** Date of birth is requested. */
  RQDB = "RQDB",
  /** Postal address department is requested. */
  RQDE = "RQDE",
  /** Details of goods are requested. */
  RQDG = "RQDG",
  /** Postal address district name is requested. */
  RQDN = "RQDN",
  /** Details of services are requested. */
  RQDS = "RQDS",
  /** Dates of voyage for goods or services are requested. */
  RQDV = "RQDV",
  /** Postal address floor is requested. */
  RQFL = "RQFL",
  /** Date upon which goods officially change ownership is requested. */
  RQGD = "RQGD",
  /** Final destination of goods is requested. */
  RQGF = "RQGF",
  /** General license copy is requested. */
  RQGL = "RQGL",
  /** HS code of goods is requested. */
  RQHS = "RQHS",
  /** Confirmation of whether charitable sector is involved with transaction is requested. */
  RQIC = "RQIC",
  /** Industry is requested. */
  RQID = "RQID",
  /** Vessel IMO is requested. */
  RQIM = "RQIM",
  /** Copy of invoice is requested. */
  RQIN = "RQIN",
  /** Kimberley certification is requested. */
  RQKC = "RQKC",
  /** Line of business is requested. */
  RQLB = "RQLB",
  /** Legal entity identifier is requested. */
  RQLE = "RQLE",
  /** Licence applicable or required for payment is requested. */
  RQLP = "RQLP",
  /** Location of where services are carried out is requested. */
  RQLS = "RQLS",
  /** Nationality is requested. */
  RQNA = "RQNA",
  /** Full name is requested. */
  RQNM = "RQNM",
  /** Occupation is requested. */
  RQOC = "RQOC",
  /** Location of any onward trade of goods or services is requested. */
  RQON = "RQON",
  /** Confirmation of ownership is requested. */
  RQOW = "RQOW",
  /** Full postal address is requested. */
  RQPA = "RQPA",
  /** Postal address post box is requested. */
  RQPB = "RQPB",
  /** Postal address post code is requested. */
  RQPC = "RQPC",
  /** Province of birth is requested. */
  RQPO = "RQPO",
  /** Copy of passport is requested. */
  RQPP = "RQPP",
  /** Relationship between Debtor and Creditor is requested. */
  RQRE = "RQRE",
  /** Postal address room is requested. */
  RQRO = "RQRO",
  /** Date upon which services are carried out is requested. */
  RQSD = "RQSD",
  /** Specific license copy is requested. */
  RQSL = "RQSL",
  /** Postal address street name is requested. */
  RQSN = "RQSN",
  /** Aircraft tail number is requested. */
  RQTA = "RQTA",
  /** Transport documentation is requested. */
  RQTD = "RQTD",
  /** Postal address town location name is requested. */
  RQTL = "RQTL",
  /** Postal address town name is requested. */
  RQTN = "RQTN",
  /** Underlying owner is requested. */
  RQUO = "RQUO",
  /** Ultimate parties and source of funds are requested. */
  RQUP = "RQUP",
  /** Confirmation of whether US is nexus to transaction is requested. */
  RQUS = "RQUS",
  /** Social Security Number is requested. */
  SOSE = "SOSE",
  /** SIREN number is requested. This is a 9 digit code assigned by INSEE, the French National Institute for Statistics and Economic Studies, to identify an organisation in France. */
  SREN = "SREN",
  /** SIRET number is requested. This is a 14 digit code assigned by INSEE, the French National Institute for Statistics and Economic Studies, to identify an organisation unit in France. It consists of the SIREN number, followed by a five digit classification number, to identify the local geographical unit of that entity */
  SRET = "SRET",
  /** Telephone Number is requested. */
  TELE = "TELE",
  /** Tax Identification Number is requested. */
  TXID = "TXID",
}