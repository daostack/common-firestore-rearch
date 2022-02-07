import { Timestamp } from 'firebase';
import { BaseRecord } from '../BaseRecord';
import { UserProfile } from '../UserProfile';
import { Currency } from '../Currency';

export interface Transaction extends BaseRecord {
  common: UserProfile;
  member: UserProfile;
  proposal?: UserProfile;
  currency: Currency;
  amountNett: number; // TODO: strip out tax.
  taxRate: number;
  amountTax: number;
  amountTotal: number;
  // description = 'Joined this common', 'Monthly charge', 'One time contribution', etc.
  accounting: {
    type: string; // type to include: oneTimeContribution | subscription | payment | expense
    ref: string; // The accounting code reference
    name: string; // The display name
    fullyAllocated: boolean; // Has this transaction been fully allocated?
    allocations: Allocation[];
  };
}

interface Allocation {
  date: Timestamp;
  amount: number;
  transactionRef: string;
}

/*

*** Example transactions - Monthly subscription and payment ***

  Monthly subscription with ID "Foo12345"
  {
    "name": "Monthly subscription from John Smith",
    "member": { "id": "123456789", "name": "John Smith", "profilePic": "123456789" },
    "common": { "id": "123456789", "name": "Save the trees", "profilePic": "123456789" },
    "currency": { "code": "GBP", "name": "GB Pound", "symbol": "£" },
    "amountNett": 10,
    "taxRate": 20,
    "amountTax": 2,
    "amountTotal": 12,
    "accounting": {
      "type": "income",
      "ref": "subscription",
      "name": "Income - Subscription",
      "fullyAllocated": True
      "allocations": [
        {
          "date": 123456789,
          "amount": -12,
          "transactionRef": "Bar12345"
        }
      ]
    }
  }

    Subscription payment with ID "Bar12345"
  {
    "name": "Payment received from John Smith",
    "member": { "id": "123456789", "name": "John Smith", "profilePic": "123456789" },
    "common": { "id": "123456789", "name": "Save the trees", "profilePic": "123456789" },
    "currency": { "code": "GBP", "name": "GB Pound", "symbol": "£" },
    "amountNett": -12,
    "taxRate": -1,
    "amountTax": 0,
    "amountTotal": -12,
    "accounting": {
      "type": "currentAssets",
      "ref": "bankUS",
      "name": "US dollar account",
      "fullyAllocated": True,
      "allocations": [
        {
          "date": 123456789,
          "amount": 12,
          "transactionRef": "Foo12345"
        }
      ]
    }
  }

*** Proposal with part payment ***

  Proposal with ID "Baz12345"
  {
    "name": "Proposal for Travel expenses",
    "member": { "id": "123456789", "name": "John Smith", "profilePic": "123456789" },
    "common": { "id": "123456789", "name": "Save the trees", "profilePic": "123456789" },
    "proposal": { "id": "123456789", "name": "Travel expenses", "profilePic": "123456789" },
    "currency": { "code": "GBP", "name": "GB Pound", "symbol": "£" },
    "amountNett": -20,
    "taxRate": 20,
    "amountTax": -4,
    "amountTotal": -24,
    "accounting": {
      "type": "expenditure",
      "ref": "proposal",
      "name": "Expenditure - Proposal",
      "fullyAllocated": False,
      "allocations": [
        {
          "date": 123456789,
          "amount": 10,
          "transactionRef": "Qux12345"
        }
      ]
      }
  }

  Proposal payment with ID "Qux12345"
  {
    "name": "Payment received from John Smith",
    "member": { "id": "123456789", "name": "John Smith", "profilePic": "123456789" },
    "common": { "id": "123456789", "name": "Save the trees", "profilePic": "123456789" },
    "proposal": { "id": "123456789", "name": "Travel expenses", "profilePic": "123456789" },
    "currency": { "code": "GBP", "name": "GB Pound", "symbol": "£" },
    "amountNett": 10,
    "taxRate": -1,
    "amountTax": 0,
    "amountTotal": 10,
    "accounting": {
      "type": "currentAssets",
      "ref": "bankUS",
      "name": "US dollar account",
      "fullyAllocated": True,
      "allocations": [
        {
          "date": 123456789,
          "amount": 10,
          "transactionRef": "Baz12345"
        }
      ]
    }
  }


*/
