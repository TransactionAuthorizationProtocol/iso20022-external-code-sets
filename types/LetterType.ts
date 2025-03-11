/**
 * Specifies the letter type as published in an external letter type code list.
 * ISO20022 External Code
 * Original name: ExternalLetterType1Code
 */
export enum LetterType {
  /** Document is a letter from the bank. */
  LFBK = "LFBK",
  /** Document is a letter to the bank. */
  LTBK = "LTBK",
  /** Document is a supporting document. */
  SUPP = "SUPP",
}