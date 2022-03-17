import { BaseRecord } from '../BaseRecord';
import { UserProfile } from '../UserProfile';

export interface UserMembership extends BaseRecord {
  user: UserProfile;
  common: {
    id: string; // The ID of the parent common
    name: string; // The name of the parent common
  };
  amount: number; // The monthly amount paid
  currency: string; // The code for the currency
  nextPaymentDate: string; // YYYY-MM-DD
  cancelDate: string; // YYYY-MM-DD
  startDate: string; // YYYY-MM-DD
}

export type CommonSubscriptionTransaction = BaseRecord;
