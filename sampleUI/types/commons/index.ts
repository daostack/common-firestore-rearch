import { Timestamp } from 'firebase';

export * from './proposals';
export * from './subscriptions';

export interface Common {

  _id: string;              // The ID of the Common
  name: string;             // The name of the Common
  intro: string;            // An introduction to the Common
  image: string;            // The URL of the background image
  members: {
    active: {
      count: number;        // The number of active members
      ids: string[];        // The IDs of active members
    }
    pending: {
      count: number;        // The number of pending members
      ids: string[];        // The IDs of pending members
    }
    rejected: {
      count: number;        // The number of rejected members
      ids: string[];        // The IDs of rejected members
    }
  }
  financial: {
    balance: number;        // The current balance
    currency: string;         // The currency for the Common
    totals: {
      raised: number;         // The total raised so far
      proposals: number;      // The total of proposals
    }
  }
  createdAt: Timestamp;
  updatedAt: Timestamp;

}