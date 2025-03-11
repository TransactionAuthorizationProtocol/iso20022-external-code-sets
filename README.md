# ISO20022 External Code Sets

This package provides a collection of ISO20022 external code sets used in financial messaging, converted to both JSON format and TypeScript enums for easy integration into modern applications.

It is designed to make it easy to map the [Transaction Authorization Protocol](https://tap.rsvp) into usecases where swift is currently working.

[![npm version](https://img.shields.io/npm/v/@taprsvp/iso20022_external_codes.svg)](https://www.npmjs.com/package/@taprsvp/iso20022_external_codes)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

ISO20022 financial messaging defines numerous external code sets that are maintained outside the schema itself. These code sets define standardized values for various elements within financial messages, such as purpose codes, party types, and other categorization schemes.

This package:
1. Extracts all the external code sets from the ISO20022 specifications
2. Structures them as individual, well-formatted JSON files
3. Generates corresponding TypeScript enum definitions
4. Includes descriptions for each code value where available

## Data Source

The data is based on the official [ISO20022 External Code Sets](https://www.iso20022.org/catalogue-messages/additional-content-messages/external-code-sets) publication.

## Installation

```bash
npm install @taprsvp/iso20022_external_codes
```

## Usage

### TypeScript

```typescript
import { Purpose, ServiceLevel, CategoryPurpose } from '@taprsvp/iso20022_external_codes';

// Use the enums in your code
const purpose = Purpose.CASH;  // "CASH"
const serviceLevel = ServiceLevel.SDVA; // "SDVA"

// Access descriptions via JSDoc in your IDE
// Purpose.CASH will show: "Transaction is a general cash management instruction."
```

### JSON Files

The package also includes JSON files for each code set, which you can use if you need the raw data:

```json
{
  "description": "Specifies the external purpose code in the format of character string with a maximum length of 4 characters.",
  "name": "ExternalPurpose1Code",
  "codes": {
    "ACCT": "Transaction moves funds between 2 accounts of same account holder at the same bank.",
    "CASH": "Transaction is a general cash management instruction.",
    ...
  }
}
```

## Available Code Sets

The package includes 128 code sets from ISO20022, including:

- Purpose (ExternalPurpose1Code) - Purpose codes for payments
- CategoryPurpose (ExternalCategoryPurpose1Code) - Category purpose codes
- ServiceLevel (ExternalServiceLevel1Code) - Service level codes
- DocumentType (ExternalDocumentType1Code) - Document type codes
- And many more...

Each code set is available both as a TypeScript enum and as a JSON file.

## Full List of Supported Code Sets

Below is a complete list of all supported ISO20022 external code sets. For each code set, links to both the JSON file and TypeScript enum are provided.

| Code Set | JSON | TypeScript | Original ISO20022 Name |
|----------|------|------------|------------------------|
| AcceptedReason | [JSON](./code_sets/external_accepted_reason_code.json) | [TypeScript](./types/AcceptedReason.ts) | ExternalAcceptedReason1Code |
| AccountIdentification | [JSON](./code_sets/external_account_identification_code.json) | [TypeScript](./types/AccountIdentification.ts) | ExternalAccountIdentification1Code |
| AgentInstruction | [JSON](./code_sets/external_agent_instruction_code.json) | [TypeScript](./types/AgentInstruction.ts) | ExternalAgentInstruction1Code |
| AgreementType | [JSON](./code_sets/external_agreement_type_code.json) | [TypeScript](./types/AgreementType.ts) | ExternalAgreementType1Code |
| AuthenticationChannel | [JSON](./code_sets/external_authentication_channel_code.json) | [TypeScript](./types/AuthenticationChannel.ts) | ExternalAuthenticationChannel1Code |
| AuthenticationMethod | [JSON](./code_sets/external_authentication_method_code.json) | [TypeScript](./types/AuthenticationMethod.ts) | ExternalAuthenticationMethod1Code |
| AuthorityExchangeReason | [JSON](./code_sets/external_authority_exchange_reason_code.json) | [TypeScript](./types/AuthorityExchangeReason.ts) | ExternalAuthorityExchangeReason1Code |
| AuthorityIdentification | [JSON](./code_sets/external_authority_identification_code.json) | [TypeScript](./types/AuthorityIdentification.ts) | ExternalAuthorityIdentification1Code |
| BalanceSubType | [JSON](./code_sets/external_balance_sub_type_code.json) | [TypeScript](./types/BalanceSubType.ts) | ExternalBalanceSubType1Code |
| BalanceType | [JSON](./code_sets/external_balance_type_code.json) | [TypeScript](./types/BalanceType.ts) | ExternalBalanceType1Code |
| BenchmarkCurveName | [JSON](./code_sets/external_benchmark_curve_name_code.json) | [TypeScript](./types/BenchmarkCurveName.ts) | ExternalBenchmarkCurveName1Code |
| BillingBalanceType | [JSON](./code_sets/external_billing_balance_type_code.json) | [TypeScript](./types/BillingBalanceType.ts) | ExternalBillingBalanceType1Code |
| BillingCompensationType | [JSON](./code_sets/external_billing_compensation_type_code.json) | [TypeScript](./types/BillingCompensationType.ts) | ExternalBillingCompensationType1Code |
| BillingRateIdentification | [JSON](./code_sets/external_billing_rate_identification_code.json) | [TypeScript](./types/BillingRateIdentification.ts) | ExternalBillingRateIdentification1Code |
| CalculationAgent | [JSON](./code_sets/external_calculation_agent_code.json) | [TypeScript](./types/CalculationAgent.ts) | ExternalCalculationAgent1Code |
| CancellationReason | [JSON](./code_sets/external_cancellation_reason_code.json) | [TypeScript](./types/CancellationReason.ts) | ExternalCancellationReason1Code |
| CashAccountType | [JSON](./code_sets/external_cash_account_type_code.json) | [TypeScript](./types/CashAccountType.ts) | ExternalCashAccountType1Code |
| CashClearingSystem | [JSON](./code_sets/external_cash_clearing_system_code.json) | [TypeScript](./types/CashClearingSystem.ts) | ExternalCashClearingSystem1Code |
| CategoryPurpose | [JSON](./code_sets/external_category_purpose_code.json) | [TypeScript](./types/CategoryPurpose.ts) | ExternalCategoryPurpose1Code |
| Channel | [JSON](./code_sets/external_channel_code.json) | [TypeScript](./types/Channel.ts) | ExternalChannel1Code |
| ChargeType | [JSON](./code_sets/external_charge_type_code.json) | [TypeScript](./types/ChargeType.ts) | ExternalChargeType1Code |
| ChequeCancellationReason | [JSON](./code_sets/external_cheque_cancellation_reason_code.json) | [TypeScript](./types/ChequeCancellationReason.ts) | ExternalChequeCancellationReason1Code |
| ChequeCancellationStatus | [JSON](./code_sets/external_cheque_cancellation_status_code.json) | [TypeScript](./types/ChequeCancellationStatus.ts) | ExternalChequeCancellationStatus1Code |
| ClaimNonReceiptRejection | [JSON](./code_sets/external_claim_non_receipt_rejection_code.json) | [TypeScript](./types/ClaimNonReceiptRejection.ts) | ExternalClaimNonReceiptRejection1Code |
| ClearingSystemIdentification | [JSON](./code_sets/external_clearing_system_identification_code.json) | [TypeScript](./types/ClearingSystemIdentification.ts) | ExternalClearingSystemIdentification1Code |
| ContractBalanceType | [JSON](./code_sets/external_contract_balance_type_code.json) | [TypeScript](./types/ContractBalanceType.ts) | ExternalContractBalanceType1Code |
| ContractClosureReason | [JSON](./code_sets/external_contract_closure_reason_code.json) | [TypeScript](./types/ContractClosureReason.ts) | ExternalContractClosureReason1Code |
| CorporateActionEventType | [JSON](./code_sets/external_corporate_action_event_type_code.json) | [TypeScript](./types/CorporateActionEventType.ts) | ExternalCorporateActionEventType1Code |
| CreditorAgentInstruction | [JSON](./code_sets/external_creditor_agent_instruction_code.json) | [TypeScript](./types/CreditorAgentInstruction.ts) | ExternalCreditorAgentInstruction1Code |
| CreditorEnrolmentAmendmentReason | [JSON](./code_sets/external_creditor_enrolment_amendment_reason_code.json) | [TypeScript](./types/CreditorEnrolmentAmendmentReason.ts) | ExternalCreditorEnrolmentAmendmentReason1Code |
| CreditorEnrolmentCancellationReason | [JSON](./code_sets/external_creditor_enrolment_cancellation_reason_code.json) | [TypeScript](./types/CreditorEnrolmentCancellationReason.ts) | ExternalCreditorEnrolmentCancellationReason1Code |
| CreditorEnrolmentStatusReason | [JSON](./code_sets/external_creditor_enrolment_status_reason_code.json) | [TypeScript](./types/CreditorEnrolmentStatusReason.ts) | ExternalCreditorEnrolmentStatusReason1Code |
| CreditorReferenceType | [JSON](./code_sets/external_creditor_reference_type_code.json) | [TypeScript](./types/CreditorReferenceType.ts) | ExternalCreditorReferenceType1Code |
| DateFrequency | [JSON](./code_sets/external_date_frequency_code.json) | [TypeScript](./types/DateFrequency.ts) | ExternalDateFrequency1Code |
| DateType | [JSON](./code_sets/external_date_type_code.json) | [TypeScript](./types/DateType.ts) | ExternalDateType1Code |
| DebtorActivationAmendmentReason | [JSON](./code_sets/external_debtor_activation_amendment_reason_code.json) | [TypeScript](./types/DebtorActivationAmendmentReason.ts) | ExternalDebtorActivationAmendmentReason1Code |
| DebtorActivationCancellationReason | [JSON](./code_sets/external_debtor_activation_cancellation_reason_code.json) | [TypeScript](./types/DebtorActivationCancellationReason.ts) | ExternalDebtorActivationCancellationReason1Code |
| DebtorActivationStatusReason | [JSON](./code_sets/external_debtor_activation_status_reason_code.json) | [TypeScript](./types/DebtorActivationStatusReason.ts) | ExternalDebtorActivationStatusReason1Code |
| DebtorAgentInstruction | [JSON](./code_sets/external_debtor_agent_instruction_code.json) | [TypeScript](./types/DebtorAgentInstruction.ts) | ExternalDebtorAgentInstruction1Code |
| DeviceOperatingSystemType | [JSON](./code_sets/external_device_operating_system_type_code.json) | [TypeScript](./types/DeviceOperatingSystemType.ts) | ExternalDeviceOperatingSystemType1Code |
| DiscountAmountType | [JSON](./code_sets/external_discount_amount_type_code.json) | [TypeScript](./types/DiscountAmountType.ts) | ExternalDiscountAmountType1Code |
| DocumentAmountType | [JSON](./code_sets/external_document_amount_type_code.json) | [TypeScript](./types/DocumentAmountType.ts) | ExternalDocumentAmountType1Code |
| DocumentFormat | [JSON](./code_sets/external_document_format_code.json) | [TypeScript](./types/DocumentFormat.ts) | ExternalDocumentFormat1Code |
| DocumentLineType | [JSON](./code_sets/external_document_line_type_code.json) | [TypeScript](./types/DocumentLineType.ts) | ExternalDocumentLineType1Code |
| DocumentPurpose | [JSON](./code_sets/external_document_purpose_code.json) | [TypeScript](./types/DocumentPurpose.ts) | ExternalDocumentPurpose1Code |
| DocumentType | [JSON](./code_sets/external_document_type_code.json) | [TypeScript](./types/DocumentType.ts) | ExternalDocumentType1Code |
| EffectiveDateParameter | [JSON](./code_sets/external_effective_date_parameter_code.json) | [TypeScript](./types/EffectiveDateParameter.ts) | ExternalEffectiveDateParameter1Code |
| EmissionAllowanceSubProductType | [JSON](./code_sets/external_emission_allowance_sub_product_type_code.json) | [TypeScript](./types/EmissionAllowanceSubProductType.ts) | ExternalEmissionAllowanceSubProductType1Code |
| EncryptedElementIdentification | [JSON](./code_sets/external_encrypted_element_identification_code.json) | [TypeScript](./types/EncryptedElementIdentification.ts) | ExternalEncryptedElementIdentification1Code |
| EnquiryRequestType | [JSON](./code_sets/external_enquiry_request_type_code.json) | [TypeScript](./types/EnquiryRequestType.ts) | ExternalEnquiryRequestType1Code |
| EntryStatus | [JSON](./code_sets/external_entry_status_code.json) | [TypeScript](./types/EntryStatus.ts) | ExternalEntryStatus1Code |
| FinancialInstrumentIdentificationType | [JSON](./code_sets/external_financial_instrument_identification_type_code.json) | [TypeScript](./types/FinancialInstrumentIdentificationType.ts) | ExternalFinancialInstrumentIdentificationType1Code |
| GarnishmentType | [JSON](./code_sets/external_garnishment_type_code.json) | [TypeScript](./types/GarnishmentType.ts) | ExternalGarnishmentType1Code |
| Incoterms | [JSON](./code_sets/external_incoterms_code.json) | [TypeScript](./types/Incoterms.ts) | ExternalIncoterms1Code |
| InformationType | [JSON](./code_sets/external_information_type_code.json) | [TypeScript](./types/InformationType.ts) | ExternalInformationType1Code |
| InstructedAgentInstruction | [JSON](./code_sets/external_instructed_agent_instruction_code.json) | [TypeScript](./types/InstructedAgentInstruction.ts) | ExternalInstructedAgentInstruction1Code |
| InvestigationAction | [JSON](./code_sets/external_investigation_action_code.json) | [TypeScript](./types/InvestigationAction.ts) | ExternalInvestigationAction1Code |
| InvestigationActionReason | [JSON](./code_sets/external_investigation_action_reason_code.json) | [TypeScript](./types/InvestigationActionReason.ts) | ExternalInvestigationActionReason1Code |
| InvestigationExecutionConfirmation | [JSON](./code_sets/external_investigation_execution_confirmation_code.json) | [TypeScript](./types/InvestigationExecutionConfirmation.ts) | ExternalInvestigationExecutionConfirmation1Code |
| InvestigationInstrument | [JSON](./code_sets/external_investigation_instrument_code.json) | [TypeScript](./types/InvestigationInstrument.ts) | ExternalInvestigationInstrument1Code |
| InvestigationReason | [JSON](./code_sets/external_investigation_reason_code.json) | [TypeScript](./types/InvestigationReason.ts) | ExternalInvestigationReason1Code |
| InvestigationReasonSubType | [JSON](./code_sets/external_investigation_reason_sub_type_code.json) | [TypeScript](./types/InvestigationReasonSubType.ts) | ExternalInvestigationReasonSubType1Code |
| InvestigationServiceLevel | [JSON](./code_sets/external_investigation_service_level_code.json) | [TypeScript](./types/InvestigationServiceLevel.ts) | ExternalInvestigationServiceLevel1Code |
| InvestigationStatus | [JSON](./code_sets/external_investigation_status_code.json) | [TypeScript](./types/InvestigationStatus.ts) | ExternalInvestigationStatus1Code |
| InvestigationStatusReason | [JSON](./code_sets/external_investigation_status_reason_code.json) | [TypeScript](./types/InvestigationStatusReason.ts) | ExternalInvestigationStatusReason1Code |
| InvestigationSubType | [JSON](./code_sets/external_investigation_sub_type_code.json) | [TypeScript](./types/InvestigationSubType.ts) | ExternalInvestigationSubType1Code |
| InvestigationType | [JSON](./code_sets/external_investigation_type_code.json) | [TypeScript](./types/InvestigationType.ts) | ExternalInvestigationType1Code |
| LetterType | [JSON](./code_sets/external_letter_type_code.json) | [TypeScript](./types/LetterType.ts) | ExternalLetterType1Code |
| LocalInstrument | [JSON](./code_sets/external_local_instrument_code.json) | [TypeScript](./types/LocalInstrument.ts) | ExternalLocalInstrument1Code |
| MandateReason | [JSON](./code_sets/external_mandate_reason_code.json) | [TypeScript](./types/MandateReason.ts) | ExternalMandateReason1Code |
| MandateStatus | [JSON](./code_sets/external_mandate_status_code.json) | [TypeScript](./types/MandateStatus.ts) | ExternalMandateStatus1Code |
| MandateSuspensionReason | [JSON](./code_sets/external_mandate_suspension_reason_code.json) | [TypeScript](./types/MandateSuspensionReason.ts) | ExternalMandateSuspensionReason1Code |
| MarketArea | [JSON](./code_sets/external_market_area_code.json) | [TypeScript](./types/MarketArea.ts) | ExternalMarketArea1Code |
| MarketInfrastructure | [JSON](./code_sets/external_market_infrastructure_code.json) | [TypeScript](./types/MarketInfrastructure.ts) | ExternalMarketInfrastructure1Code |
| MessageFunction | [JSON](./code_sets/external_message_function_code.json) | [TypeScript](./types/MessageFunction.ts) | ExternalMessageFunction1Code |
| ModelFormIdentification | [JSON](./code_sets/external_model_form_identification_code.json) | [TypeScript](./types/ModelFormIdentification.ts) | ExternalModelFormIdentification1Code |
| NarrativeType | [JSON](./code_sets/external_narrative_type_code.json) | [TypeScript](./types/NarrativeType.ts) | ExternalNarrativeType1Code |
| NotificationSubType | [JSON](./code_sets/external_notification_sub_type_code.json) | [TypeScript](./types/NotificationSubType.ts) | ExternalNotificationSubType1Code |
| NotificationType | [JSON](./code_sets/external_notification_type_code.json) | [TypeScript](./types/NotificationType.ts) | ExternalNotificationType1Code |
| OrganisationIdentification | [JSON](./code_sets/external_organisation_identification_code.json) | [TypeScript](./types/OrganisationIdentification.ts) | ExternalOrganisationIdentification1Code |
| PackagingType | [JSON](./code_sets/external_packaging_type_code.json) | [TypeScript](./types/PackagingType.ts) | ExternalPackagingType1Code |
| PaymentCancellationRejection | [JSON](./code_sets/external_payment_cancellation_rejection_code.json) | [TypeScript](./types/PaymentCancellationRejection.ts) | ExternalPaymentCancellationRejection1Code |
| PaymentCompensationReason | [JSON](./code_sets/external_payment_compensation_reason_code.json) | [TypeScript](./types/PaymentCompensationReason.ts) | ExternalPaymentCompensationReason1Code |
| PaymentControlRequestType | [JSON](./code_sets/external_payment_control_request_type_code.json) | [TypeScript](./types/PaymentControlRequestType.ts) | ExternalPaymentControlRequestType1Code |
| PaymentGroupStatus | [JSON](./code_sets/external_payment_group_status_code.json) | [TypeScript](./types/PaymentGroupStatus.ts) | ExternalPaymentGroupStatus1Code |
| PaymentModificationRejection | [JSON](./code_sets/external_payment_modification_rejection_code.json) | [TypeScript](./types/PaymentModificationRejection.ts) | ExternalPaymentModificationRejection1Code |
| PaymentRole | [JSON](./code_sets/external_payment_role_code.json) | [TypeScript](./types/PaymentRole.ts) | ExternalPaymentRole1Code |
| PaymentTransactionStatus | [JSON](./code_sets/external_payment_transaction_status_code.json) | [TypeScript](./types/PaymentTransactionStatus.ts) | ExternalPaymentTransactionStatus1Code |
| PendingProcessingReason | [JSON](./code_sets/external_pending_processing_reason_code.json) | [TypeScript](./types/PendingProcessingReason.ts) | ExternalPendingProcessingReason1Code |
| PersonIdentification | [JSON](./code_sets/external_person_identification_code.json) | [TypeScript](./types/PersonIdentification.ts) | ExternalPersonIdentification1Code |
| PostTradeEventType | [JSON](./code_sets/external_post_trade_event_type_code.json) | [TypeScript](./types/PostTradeEventType.ts) | ExternalPostTradeEventType1Code |
| ProductType | [JSON](./code_sets/external_product_type_code.json) | [TypeScript](./types/ProductType.ts) | ExternalProductType1Code |
| ProxyAccountType | [JSON](./code_sets/external_proxy_account_type_code.json) | [TypeScript](./types/ProxyAccountType.ts) | ExternalProxyAccountType1Code |
| Purpose | [JSON](./code_sets/external_purpose_code.json) | [TypeScript](./types/Purpose.ts) | ExternalPurpose1Code |
| RatesAndTenors | [JSON](./code_sets/external_rates_and_tenors_code.json) | [TypeScript](./types/RatesAndTenors.ts) | ExternalRatesAndTenors1Code |
| RePresentmentReason | [JSON](./code_sets/external_re_presentment_reason_code.json) | [TypeScript](./types/RePresentmentReason.ts) | ExternalRePresentmentReason1Code |
| ReceivedReason | [JSON](./code_sets/external_received_reason_code.json) | [TypeScript](./types/ReceivedReason.ts) | ExternalReceivedReason1Code |
| RejectedReason | [JSON](./code_sets/external_rejected_reason_code.json) | [TypeScript](./types/RejectedReason.ts) | ExternalRejectedReason1Code |
| RelativeTo | [JSON](./code_sets/external_relative_to_code.json) | [TypeScript](./types/RelativeTo.ts) | ExternalRelativeTo1Code |
| ReportingSource | [JSON](./code_sets/external_reporting_source_code.json) | [TypeScript](./types/ReportingSource.ts) | ExternalReportingSource1Code |
| RequestStatus | [JSON](./code_sets/external_request_status_code.json) | [TypeScript](./types/RequestStatus.ts) | ExternalRequestStatus1Code |
| ReservationType | [JSON](./code_sets/external_reservation_type_code.json) | [TypeScript](./types/ReservationType.ts) | ExternalReservationType1Code |
| ReturnReason | [JSON](./code_sets/external_return_reason_code.json) | [TypeScript](./types/ReturnReason.ts) | ExternalReturnReason1Code |
| ReversalReason | [JSON](./code_sets/external_reversal_reason_code.json) | [TypeScript](./types/ReversalReason.ts) | ExternalReversalReason1Code |
| SecuritiesPurpose | [JSON](./code_sets/external_securities_purpose_code.json) | [TypeScript](./types/SecuritiesPurpose.ts) | ExternalSecuritiesPurpose1Code |
| ServiceLevel | [JSON](./code_sets/external_service_level_code.json) | [TypeScript](./types/ServiceLevel.ts) | ExternalServiceLevel1Code |
| ShipmentCondition | [JSON](./code_sets/external_shipment_condition_code.json) | [TypeScript](./types/ShipmentCondition.ts) | ExternalShipmentCondition1Code |
| StatusReason | [JSON](./code_sets/external_status_reason_code.json) | [TypeScript](./types/StatusReason.ts) | ExternalStatusReason1Code |
| SystemBalanceType | [JSON](./code_sets/external_system_balance_type_code.json) | [TypeScript](./types/SystemBalanceType.ts) | ExternalSystemBalanceType1Code |
| SystemErrorHandling | [JSON](./code_sets/external_system_error_handling_code.json) | [TypeScript](./types/SystemErrorHandling.ts) | ExternalSystemErrorHandling1Code |
| SystemEventType | [JSON](./code_sets/external_system_event_type_code.json) | [TypeScript](./types/SystemEventType.ts) | ExternalSystemEventType1Code |
| SystemMemberType | [JSON](./code_sets/external_system_member_type_code.json) | [TypeScript](./types/SystemMemberType.ts) | ExternalSystemMemberType1Code |
| SystemPartyType | [JSON](./code_sets/external_system_party_type_code.json) | [TypeScript](./types/SystemPartyType.ts) | ExternalSystemPartyType1Code |
| TaxAmountType | [JSON](./code_sets/external_tax_amount_type_code.json) | [TypeScript](./types/TaxAmountType.ts) | ExternalTaxAmountType1Code |
| TechnicalInputChannel | [JSON](./code_sets/external_technical_input_channel_code.json) | [TypeScript](./types/TechnicalInputChannel.ts) | ExternalTechnicalInputChannel1Code |
| TradeMarket | [JSON](./code_sets/external_trade_market_code.json) | [TypeScript](./types/TradeMarket.ts) | ExternalTradeMarket1Code |
| TradeTransactionCondition | [JSON](./code_sets/external_trade_transaction_condition_code.json) | [TypeScript](./types/TradeTransactionCondition.ts) | ExternalTradeTransactionCondition1Code |
| TypeOfParty | [JSON](./code_sets/external_type_of_party_code.json) | [TypeScript](./types/TypeOfParty.ts) | ExternalTypeOfParty1Code |
| UnableToApplyIncorrectData | [JSON](./code_sets/external_unable_to_apply_incorrect_data_code.json) | [TypeScript](./types/UnableToApplyIncorrectData.ts) | ExternalUnableToApplyIncorrectData1Code |
| UnableToApplyMissingData | [JSON](./code_sets/external_unable_to_apply_missing_data_code.json) | [TypeScript](./types/UnableToApplyMissingData.ts) | ExternalUnableToApplyMissingData1Code |
| UnderlyingTradeTransactionType | [JSON](./code_sets/external_underlying_trade_transaction_type_code.json) | [TypeScript](./types/UnderlyingTradeTransactionType.ts) | ExternalUnderlyingTradeTransactionType1Code |
| UndertakingAmountType | [JSON](./code_sets/external_undertaking_amount_type_code.json) | [TypeScript](./types/UndertakingAmountType.ts) | ExternalUndertakingAmountType1Code |
| UndertakingDocumentType | [JSON](./code_sets/external_undertaking_document_type_code.json) | [TypeScript](./types/UndertakingDocumentType.ts) | ExternalUndertakingDocumentType1Code |
| UndertakingStatusCategory | [JSON](./code_sets/external_undertaking_status_category_code.json) | [TypeScript](./types/UndertakingStatusCategory.ts) | ExternalUndertakingStatusCategory1Code |
| UndertakingType | [JSON](./code_sets/external_undertaking_type_code.json) | [TypeScript](./types/UndertakingType.ts) | ExternalUndertakingType1Code |
| UnitOfMeasure | [JSON](./code_sets/external_unit_of_measure_code.json) | [TypeScript](./types/UnitOfMeasure.ts) | ExternalUnitOfMeasure1Code |
| ValidationRuleIdentification | [JSON](./code_sets/external_validation_rule_identification_code.json) | [TypeScript](./types/ValidationRuleIdentification.ts) | ExternalValidationRuleIdentification1Code |
| VerificationReason | [JSON](./code_sets/external_verification_reason_code.json) | [TypeScript](./types/VerificationReason.ts) | ExternalVerificationReason1Code |

## Benefits

- **Type Safety**: Use TypeScript enums for compile-time validation
- **Documentation**: Each code includes its official description as JSDoc comments
- **Consistency**: Ensures your application uses ISO20022-compliant codes
- **Easy Integration**: Simple import and use in your TypeScript/JavaScript applications

## Development

The code sets are generated from the ISO20022 external code sets using Python scripts:

- `process_code_sets.py` - Processes the ISO20022 external code sets and generates JSON files
- `generate_ts_enums.py` - Generates TypeScript enums from the JSON files

To regenerate the code sets (if you have updated source data):

```bash
python3 process_code_sets.py
python3 generate_ts_enums.py
npm run build
```

## License

This package is MIT licensed. The ISO20022 data is published by ISO and is used in accordance with their terms.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Related

- [ISO20022 Official Website](https://www.iso20022.org/)
- [ISO20022 Message Definitions](https://www.iso20022.org/catalogue-messages)
