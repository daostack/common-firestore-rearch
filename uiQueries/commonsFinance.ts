import { DocumentReference } from 'firebase';
import { ScreenContent } from 'types';

export const viewAll = (commonRef: DocumentReference):ScreenContent => {
  return {
    mainScreen: {
      name: "Finance",
      components: [
        {
          name: "Finance",
          ref: commonRef
        }
      ]
    },
    tabs: [
      {
        name: "Paid",
        ref: commonRef // TODO: Awaiting UI mockup
      },
      {
        name: "Raised",
        ref: commonRef.collection('financeMonthlyTotals').where('type', '==', 'raised').orderBy('month', 'DESC')
      }
    ]
  }
}

// month = "YYYY-MM", type = "paid" | "raised"
export const viewMonth = (commonRef: DocumentReference, month: string, type: string): ScreenContent => {
  return {
    mainScreen: {
      name: "{mmm} {yyyy}",
      components: [
        {
          name: "Funds raised",
          ref: commonRef.collection('financeMonthlyTotals').doc(month)
        }
      ]
    },
    sections: [
      {
        name: "Membership",
        ref: commonRef.collection('transactions').where('type', '==', 'membership').where('month', '==', month).orderBy('member.name')
      }
    ]
  }
}