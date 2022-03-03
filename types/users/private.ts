import { Timestamp } from 'firebase/firestore';
import { BaseRecord, Currency } from 'types';

export interface UserMetadata {
  counts: {
    commons: number; // The number of commons the user is a member of
    proposals: number; // The number of proposals the user has submitted
  };
  recent: {
    commonIds: string[]; // An array of the recently viewed Common IDs
    proposalIds: string[]; // An array of the recently viewed Proposal IDs
  };
  localCurrency?: Currency; // The user's local currency code
  newbieFlags: {
    createdFirstCommon?: boolean    // Has this user created their first common?
  }
}

// TODO test

export interface UserPaymentMethod extends BaseRecord {
  cardholderName: string; // The cardholder's name
  cardLast4Digits: number; // The last 4 digits of the card
  expiry: {
    month: number; // The month of the card expiry (MM)
    year: number; // The year of the card expiry (YYYY)
  };
}

export interface UserPersonalRecord extends BaseRecord {
  idReference: string;
  issueDate: string;          // YYYY-MM-DD
  dateOfBirth: string;        // YYYY-MM-DD
  gender: string;             // TODO: This could pose some issues to allow inclusivity
  phone: string;              // e.164 formatted phone number
  email: string;
}

// TODO: review what financial information we are storing, in terms of regulation and simplicity.
export interface UserBankAccount extends BaseRecord {
  sortCode: number;
  accountNumber: number;
}
