import { db } from "firebase";
import { UserRecord, ScreenContent } from "../types";
  
// 08.06.02 - Subscription - Status active
// 08.06.03.01
// 08.06.03.02
// 08.06.03.03
// 08.06.03.04 - The document contains a `tag` 'paymentFailed'
// 08.06.04 - Trigger onCall => Request to join again
// 08.06.07 - Cancel payment - Set `cancelDate` and set a Cloud Task (with a Cloud Function)
// 08.06.11 - *** Amos *** Where are these values defined? In the common?

export const viewSubscription = (user: UserRecord, commonId: string, subscriptionId: string): ScreenContent => {
  // More research on Enums required ---- user.status =
  return {
    mainScreen: {
      name: 'Billing',
      components: [
        {
          name: 'Subscription',
          ref: db.doc(`commons/${commonId}/subscriptions/${subscriptionId}`);
        }
      ]
    }
  }
}
