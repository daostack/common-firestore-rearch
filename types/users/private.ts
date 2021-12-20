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

export interface UserBankAccount extends BaseRecord {
  bankIDNumber?: number,
  sortCode: number;
  accountNumber: number;

}