/**
 * Specifies the external unit of measure by means of a code in the format of character string with a maximum length of 4 characters.
 * ISO20022 External Code
 * Original name: ExternalUnitOfMeasure1Code
 */
export enum UnitOfMeasure {
  /** Number of monetary units specified in a currency, where the unit of currency is explicit and compliant with ISO 4217. */
  ACCY = "ACCY",
  /** Unit of measure equal to 4, 840 square yards. */
  ACRE = "ACRE",
  /** Amount of money deducted from a price or an amount due. */
  ALOW = "ALOW",
  /** Unit of measure equal to a 100 square meters. */
  ARES = "ARES",
  /** Code for a bag. */
  BAGG = "BAGG",
  /** Code for a bale. */
  BALE = "BALE",
  /** Unit of volume that is equal to 42 US gallons. */
  BARL = "BARL",
  /** Unit of measure for large volumes of natural gas equivalent to 28316846 cubic meters. */
  BCUF = "BCUF",
  /** Measure of length equal to 144 cubic inches. */
  BDFT = "BDFT",
  /** Code for a bottle. */
  BOTL = "BOTL",
  /** Code for a box. */
  BOXX = "BOXX",
  /** Unit of measure of heat required to raise the temperature of one pound of water by one degree Fahrenheit. */
  BRTU = "BRTU",
  /** Unit of weight that is equal to 8 gallons. Mostly used for agricultural products with a specification of weight defined for each commodity differently. */
  BUSL = "BUSL",
  /** Measure of a volume, one inch by one inch by one inch. */
  CBIN = "CBIN",
  /** Unit of volume that is equal to one meter in length, breadth and height or also equal to 1000 liters. */
  CBME = "CBME",
  /** Unit of volume that is equal to one thousandth of a litre. */
  CBML = "CBML",
  /** Cooling degree day */
  CDDA = "CDDA",
  /** Unit of emissions type (or carbon credits) issued by the Clean Development Mechanism (CDM) Executive Board for emission reductions achieved by CDM projects and verified by a DOE (Designated Operational Entity) under the rules of the Kyoto Protocol. */
  CEER = "CEER",
  /** Unit of volume that is equal to one hundredth of a litre. */
  CELI = "CELI",
  /** Unit of offset credits used by the Climate Action Reserve. One Climate Reserve Tonne is equal to one metric ton of Greenhouse Gas (GHG) reduced/sequestered. */
  CLRT = "CLRT",
  /** Unit of measure that is equal to one hundredth of a metre. */
  CMET = "CMET",
  /** Code for a container. */
  CNTR = "CNTR",
  /** Critical precipitation day */
  CPDA = "CPDA",
  /** Code for a crate. */
  CRAT = "CRAT",
  /** Code for a carton. */
  CRTN = "CRTN",
  /** Unit of time that is equal to 24 hours. */
  DAYS = "DAYS",
  /** Amount of fuel alternative equal to one gallon of diesel. */
  DGEU = "DGEU",
  /** Unit of weight that is equal to the same mass value as a metric ton excluding moisture. */
  DMET = "DMET",
  /** Unit of measure for ownership of credit (or allowance) of carbon dioxide emission (in metric ton). */
  ENVC = "ENVC",
  /** Unit of measure for reduction of carbon dioxide emission (in metric ton) that may result in Environmental Credit. */
  ENVO = "ENVO",
  /** Unit of length equal to 1/3 yard. */
  FOOT = "FOOT",
  /** Exchange traded contract that defines an agreement to buy specific quantities of a commodity or financial instrument at an agreed time in the future. */
  FUTU = "FUTU",
  /** Unit of volume equal to 2, 841 306 centilitre. */
  GBFO = "GBFO",
  /** Unit of volume that is equal to 8 pints. */
  GBGA = "GBGA",
  /** Unit of weight equal to a sixteenth of a pound. */
  GBOU = "GBOU",
  /** Unit of volume that is equal to 568 cubic centimetres. */
  GBPI = "GBPI",
  /** Unit of volume that is equal to 2 pints. */
  GBQA = "GBQA",
  /** Measure of weight, in Britain 2240 lb (long ton). */
  GBTN = "GBTN",
  /** Amount of fuel alternative equal to one gallon of gasoline. */
  GGEU = "GGEU",
  /** Unit of energy equal to 1,000,000,000 joules (J). */
  GGJL = "GGJL",
  /** Unit of measure that is equal to a 1, 000th of a kilo. */
  GRAM = "GRAM",
  /** Unit of measure that is equal to the power consumption of one Gigawatt during one hour. */
  GWHO = "GWHO",
  /** Heating degree day */
  HDDA = "HDDA",
  /** Unit of measure that is equal to 10, 000 square meters. */
  HECT = "HECT",
  /** Unit of weight or mass of various values in the Imperial Unit System also known as quintal, cental or centum. */
  HUWG = "HUWG",
  /** Measure of length equal to 2.54 cm. */
  INCH = "INCH",
  /** Decimal number used to calculate an amount or a price. */
  IPNT = "IPNT",
  /** Unit of energy defined as amount of work done when a force of one newton displaces a mass through a distance of one meter in the direction of that force. */
  JOUL = "JOUL",
  /** Basic unit of mass in the SI system, 1000 grams. */
  KILO = "KILO",
  /** Unit of measure that is equal to 1, 000 meters. */
  KMET = "KMET",
  /** Unit of measure of the capacity of production of electric power equal to 1000 watt in one minute. */
  KMOC = "KMOC",
  /** Unit of measure of the capacity of production of electric power equal to 1000 watt in one day. */
  KWDC = "KWDC",
  /** Unit of measure of the capacity of production of electric power equal to 1000 watt in one hour. */
  KWHC = "KWHC",
  /** Unit of measure that is equal to the power consumption of one kilowatt during one hour. */
  KWHO = "KWHO",
  /** Unit of measure of the capacity of production of electric power equal to 1000 watt in one month. */
  KWMC = "KWMC",
  /** Unit of measure of the capacity of production of electric power equal to 1000 watt in one year. */
  KWYC = "KWYC",
  /** Unit of volume that is equal to a thousand cubic centimetres. */
  LITR = "LITR",
  /** Indication of the unit of measurement. */
  LOTS = "LOTS",
  /** Unit of measure of heat equal to one million British thermal unit (BTU). */
  MBTU = "MBTU",
  /** Unit of length in the metric system, equal to 39.37 inches. */
  METR = "METR",
  /** Unit of volume that is equal to 1 million barrels equivalent to 42.000.000 US gallons. */
  MIBA = "MIBA",
  /** Unit of length equal to 1, 760 yards. */
  MILE = "MILE",
  /** Unit of volume that is equal to one thousandth of a litre. */
  MILI = "MILI",
  /** Unit of measure that is a thousandth of one metre. */
  MMET = "MMET",
  /** Unit of measure of the capacity of production of electric power equal to 1000000 watt in one month. */
  MMOC = "MMOC",
  /** Unit of measure of the capacity of production of electric power equal to 1000000 watt in one day. */
  MWDC = "MWDC",
  /** Unit of measure of the capacity of production of electric power equal to 1000000 watt in one hour. */
  MWHC = "MWHC",
  /** Unit of measure that is equal to the power consumption of one megawatt during one hour. */
  MWHO = "MWHO",
  /** Unit of measure of the capacity of production of electric power equal to 1000000 watt in one minute. */
  MWMC = "MWMC",
  /** Unit of measure of the capacity of production of electric power equal to 1000000 watt in one year. */
  MWYC = "MWYC",
  /** Unit of weight equal to 31.1034768 grams. Used in precious metals. */
  OZTR = "OZTR",
  /** Standard length of cloth, wallpaper, as an item for sale or amount of a substance. */
  PIEC = "PIEC",
  /** Unit of weight equal to 0.454 kilograms. */
  PUND = "PUND",
  /** Amount of money borrowed, or part of that amount which remains unpaid (excluding interest). */
  PWRD = "PWRD",
  /** Measure of a surface, one centimetre by one centimetre. */
  SCMT = "SCMT",
  /** Financial instrument that gives the owner right to dividends paid by a company and the most junior claim on the companies assets in the event of a bankruptcy. */
  SHAS = "SHAS",
  /** Measure of a surface, one metre by one metre. */
  SMET = "SMET",
  /** Measure of a surface, one millimetre by one millimetre. */
  SMIL = "SMIL",
  /** Measure of a surface, one foot by one foot. */
  SQFO = "SQFO",
  /** Measure of a surface, one inch by one inch. */
  SQIN = "SQIN",
  /** Measure of a surface, one kilometre by one kilometre. */
  SQKI = "SQKI",
  /** Measure of a surface, one mile by one mile. */
  SQMI = "SQMI",
  /** Measure of a surface, one yard by one yard. */
  SQYA = "SQYA",
  /** Unit of heat, often used a unit of measure for natural gas in the UK. */
  THMS = "THMS",
  /** Tons of carbon dioxide. */
  TOCD = "TOCD",
  /** Unit of mass equal to 1000 kilograms; equivalent to approximately 2,204.6 pounds, 1.102 short tons (US) or 0.984 long tons (imperial). */
  TONE = "TONE",
  /** Measure of weight, in Britain 2240lb (long ton)and in the US 2000lb (short ton). */
  TONS = "TONS",
  /** Unit of weight or mass of various values in the US Customary System also known as quintal, cental or centum. Equal to 100 lbs. */
  UCWT = "UCWT",
  /** Unit of volume equal to 158, 9873 litre. */
  USBA = "USBA",
  /** Unit of volume equal to 2, 957353 centilitre. */
  USFO = "USFO",
  /** Unit of volume that is equal to 8 pints. */
  USGA = "USGA",
  /** Unit of weight equal to a sixteenth of a pound. */
  USOU = "USOU",
  /** Unit of volume that is equal to 473 cubic centimetres. */
  USPI = "USPI",
  /** Unit of volume that is equal to 2 pints. */
  USQA = "USQA",
  /** Measure of weight, in the US 2000 lb (short ton). */
  USTN = "USTN",
  /** Unit of length equal to 3 feet or 0.9144 metre. */
  YARD = "YARD",
}