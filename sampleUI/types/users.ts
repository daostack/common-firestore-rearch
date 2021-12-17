import { BaseRecord } from './index';

export interface UserRecord extends BaseRecord {

  uid: string;               // The Firebase Authentication User ID
  firstName?: string;        // The user's first name
  lastName?: string;         // The user's last name
  profilePic?: string;       // A Base64 encoded image
  country?: {
    code: string;           // The ISO-3166-1 alpha-3 code
    name: string;           // The display name for the country
  }
}

export interface UserMetadata {

  counts: {
    commons: number;        // The number of commons the user is a member of
    proposals: number;      // The number of proposals the user has submitted
  }
  recents: {
    commonIds: string[];    // An array of the recently viewed Common IDs
    proposalIds: string[];  // An array of the recently viewed Proposal IDs 
  }
}

export interface UserPaymentMethod extends BaseRecord {

  cardholderName: string;   // The cardholder's name
  cardLast4Digits: number;  // The last 4 digits of the card
  expiry: {
    month: number;          // The month of the card expiry (MM)
    year: number;           // The year of the card expiry (YYYY)
  }
}