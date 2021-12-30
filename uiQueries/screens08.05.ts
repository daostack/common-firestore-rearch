import { db } from "firebase";
import { UserRecord, ScreenContent } from "../types";
  
// 08.05.00 - saved payment method empty
// 08.05.01 - Recurring payments
// 08.05.02 - saved payment method
// 08.05.03 - saved payment method - payment failed
export const viewPaymentMethod = (user: UserRecord): ScreenContent => {
  // More research on Enums required ---- user.status =
  return {
    mainScreen: {
      name: 'Billing'
    },
    sections: [
      {
        name: 'Saved payment method',
        ref: db.doc(`users/${user.uid}/private/paymentMethod`)
        // This resource may also contain a tag of 'paymentFailed'
      },
      {
        name: 'Monthly contributions',
        ref: db
          .collectionGroup('subscriptions')
          .where('user.uid', '==', user.uid)
          .where('status', '==', 'active')
          .limit(10),
      }
    ]
  }
}
