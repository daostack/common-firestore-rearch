import {Timestamp} from 'firebase';
import {BaseRecord} from './BaseRecord';
import {PaymentStatus} from './PaymentRecord';

export interface SubscriptionRecord extends BaseRecord {
  /**
   * Link to the current funding card
   */
  cardId: string;

  /**
   * The Id of the user, from whom the subscription was
   * created
   */
  userId: string;

  /**
   * The id of the proposal, from witch the subscription
   * was created
   */
  proposalId: string;

  /**
   * When the next payment is going to be created
   */
  dueDate: Timestamp;

  /**
   * The currents status of the subscription
   */
  status: SubscriptionStatus;

  /**
   * The amount, that we are going to charge monthly
   */
  amount: number;

  /**
   * Some metadata related to the subscription (for example data about the common)
   */
  metadata: SubscriptionMetadata;

  /**
   * List of the failed payment only for the current due payment
   */
  paymentFailures?: SubscriptionPayment[];

  /**
   * Whether the membership for the user in the common was revoked
   */
  revoked: boolean;

  /**
   * The number of charges made for the subscription
   */
  charges: number;

  /**
   * The last time the subscription was successfully charged
   */
  lastChargedAt: Timestamp;
}

export interface SubscriptionPayment {
  /**
   * The id of the payment in the payments collection
   */
  paymentId: string;

  /**
   * The current status of the payment
   */
  paymentStatus: PaymentStatus;
}

export interface SubscriptionPaymentFailure {
  /**
   * The id of the payment in the payments collection
   */
  paymentId: string;

  /**
   * When did the payment failure occur
   */
  paymentFailedOn: Timestamp;
}

export interface SubscriptionMetadata {
  /**
   * The common that the subscription grants membership to
   */
  common: {
    name: string;
    id: string;
  };
}

/**
 * Active - The subscription is still active and will be charge on due date
 *
 * PaymentFailed - The subscription is still active, but the payment for this due date failed. It will be
 * retried couple of times and if not successful the membership will be revoked
 *
 * CanceledByPaymentFailure - The subscription is not active, because the payment failed multiple times.
 * Membership is revoked
 *
 * CanceledByUser - The subscription is not active, because the user has canceled it. The membership may
 * still be active, but it will be revoked on the next due date
 */
export type SubscriptionStatus =
  | 'Pending'
  | 'Active'
  | 'CanceledByUser'
  | 'CanceledByPaymentFailure'
  | 'PaymentFailed';
