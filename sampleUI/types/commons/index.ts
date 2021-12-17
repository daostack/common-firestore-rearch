import { BaseRecord } from '../index';

export * from './proposals';
export * from './subscriptions';

export interface Common extends BaseRecord {

  _id: string;              // The ID of the Common
  members: {
    active: Members;
    pending: Members;
    rejected: Members;
  }
  financial: {
    balance: number;        // The current balance
    currency: string;         // The currency for the Common
    totals: {
      raised: number;         // The total raised so far
      proposals: number;      // The total of proposals
    }
  }
}

interface Members {
  count: number;              // The number of members
  ids: string[];              // The IDs of the members
}