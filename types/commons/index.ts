import {Timestamp} from 'firebase';
import { BaseRecord, Currency } from '../index';

export * from './proposals';
export * from './rules';

export interface Common extends BaseRecord {

  _id: string;                // Immutable
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
    active: Members;           // (CF)
    pending: Members;          // (CF)
    rejected: Members;         // (CF)
  }
  financial: {
    type: string;             // oneTime | monthly - Is this mmmutable (UI)
    balance: number;          // The current balance (CF)
    totalRaised: number;      // Total raised (CF)
    currency: Currency;       // The currency for the Common
    subscriptions: number;    // Number of subscriptions
    minimums: {
      oneTime: number;        // TODO  - Is this mmmutable (UI)
      monthly: number;        // TODO  - Is this mmmutable (UI)
    }
  }
  fundingProposals: {
    pending: Totals;
    approved: Totals;
    rejected: Totals;
  }
  termsAndConditionsAccepted: boolean; // Immutable
  joinWithoutContribution?: boolean;
  safetyPeriodExpires: Timestamp;
}

interface Members {
  count: number;              // The number of members
  ids: string[];              // The IDs of the members
}

interface Totals {
  count: number;
  total: number;
}