import { BaseRecord } from "..";

export interface CommonSubscription extends BaseRecord{
  user: {
    uid: string;              // The ID of the user who created the subscription
    name: string;             // The name of the user who created the subscription
  }
  common: {
    id: string;               // The ID of the parent common
    name: string;             // The name of the parent common
  }
  amount: number;             // The monthly amount paid
  currency: string;           // The code for the currency
  nextPaymentDate: string;    // YYYY-MM-DD
  cancelDate: string;         // YYYY-MM-DD
  startDate: string;          // YYYY-MM-DD
}

export interface CommonSunscriptionTransaction extends BaseRecord {
  
}