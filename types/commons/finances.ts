import { BaseRecord, Currency } from 'types';

export interface monthlyTotals {
  month: string;               // The month as ISO8601 to allow for i18n
  count: {
    members: number;           // The number of members who contributed (only for Raised tab.  Paid still to be viewed)
  },
  currency: Currency;
  amountTotal: number;         // The total amount for the month
}