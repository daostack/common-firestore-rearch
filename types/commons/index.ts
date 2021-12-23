import { BaseRecord } from '../index';

export * from './proposals';
export * from './subscriptions';

export interface Common extends BaseRecord {

  _id: string;                // The ID of the Common
  // name: string             // The Common Name
  // intro: string;           // The Tagline field
  about: string;              // The long text field
  links: [
    {
      name: string;            // The title of the link
      url: string;             // The URL
    }
  ],
  members: {
    active: Members;
    pending: Members;
    rejected: Members;
  }
  financial: {
    type: string;             // oneTime | monthly
    balance: number;          // The current balance
    currency: string;         // The currency for the Common
    totals: {
      raised: number;         // The total raised so far
      proposals: number;      // The total of proposals
      contributed: number;    // The total contributed
    }
  }
  termsAndConditionsAccepted: boolean;
}

interface Members {
  count: number;              // The number of members
  ids: string[];              // The IDs of the members
}