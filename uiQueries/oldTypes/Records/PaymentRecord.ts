import { BaseRecord } from './BaseRecord';

export type PaymentType = 'one-time' | 'subscription';
export type PaymentStatus = 'pending' | 'confirmed' | 'paid' | 'failed' | 'notAttempted';
export type PaymentMethod = 'card';
export type PaymentCurrency = 'USD';

export type PaymentFailureResponseCodes =
  | 'payment_failed'
  | 'card_not_honored'
  | 'payment_not_supported_by_issuer'
  | 'payment_not_funded'
  | 'card_invalid'
  | 'card_limit_violated'
  | 'payment_denied'
  | 'payment_fraud_detected'
  | 'credit_card_not_allowed'
  | 'payment_stopped_by_issuer'
  | 'card_account_ineligible';

interface PaymentRecordBase extends BaseRecord {
  /**
   * Whether the payment was one-time payment or result of
   * a subscription
   */
  type: PaymentType;

  /**
   * The current status of the payment
   */
  status: PaymentStatus;

  /**
   * The amount and currency of the payment
   */
  amount: PaymentAmount;

  /**
   * The amount and currency of the payment fees
   */
  fees: PaymentFees;

  /**
   * The source of the payment
   */
  source: PaymentMethodRecord;

  /**
   * The ID of the proposal, for which the payment was created
   */
  proposalId: string;

  /*
   *  The ID of the common that is the beneficiary of the payment
   */
  commonId: string;

  /**
   * The ID of the subscription, for which the payment was created
   * if created for subscription. Undefined otherwise
   */
  subscriptionId?: string;

  /**
   * The ID of the user that was charged. Useful for retrieving all
   * payments of one user
   */
  userId: string;

  /**
   * The ID of the payment on circle side
   */
  circlePaymentId: string;
}

export interface PaymentAmount {
  /**
   * The amount in cents of the currency
   */
  amount: number;

  /**
   * The currency of the payment
   */
  currency: PaymentCurrency;
}

export interface PaymentFees {
  /**
   * The amount of the fee in cents of the currency
   */
  amount: number;

  /**
   * The currency of the payment
   */
  currency: PaymentCurrency;
}

export interface PaymentMethodRecord {
  /**
   * The id of the payment source
   */
  id: string;

  /**
   * The type of the payment source
   */
  type: PaymentMethod;
}

export interface PaymentFailureReason {
  /**
   * The error code, returned from Circle
   */
  errorCode: PaymentFailureResponseCodes;

  /**
   * Short description about why the payment failure, taken
   * from the Circle documentation. Can be shown to the user
   */
  errorDescription: string;
}

// Payment divided by their type

export interface PendingPayment extends PaymentRecordBase {
  status: 'pending';
}

export interface FailedPayment extends PaymentRecordBase {
  status: 'failed';

  failure: PaymentFailureReason;
}

export interface ConfirmedPayment extends PaymentRecordBase {
  status: 'confirmed';
}

export interface SuccessfulPayment extends PaymentRecordBase {
  status: 'paid';
}

export type PaymentRecord = PaymentRecordBase | PendingPayment | ConfirmedPayment | SuccessfulPayment | FailedPayment;
