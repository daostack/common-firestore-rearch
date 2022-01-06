import { firestore } from "firebase"
import { UserMetadata, UserRecord, ScreenContent } from "../types"

export const listMyMembershipRequests = (user: UserRecord, userMetadata: UserMetadata):ScreenContent => {

  return {
    mainScreen: {
      name: 'Membership requests'
    },
    tabs: [
      {
        // Tab 1 - Pending
        name: 'Pending',
        ref: firestore
          .collection("commons")
          .where("members.pending.ids", "array-contains", user.uid)
          .where("status", "==", "active")
          .limit(10)
      },
      {
        // Tab 2 - Approved
        name: 'Approved',
        ref: firestore
          .collection("commons")
          .where("members.active.ids", "array-contains", user.uid)
          .where("status", "==", "active")
          .limit(10)
      },
      {
        // Tab 3 - Rejected
        name: 'Rejected',
        ref: firestore
          .collection("members.rejected.ids")
          .where("rejectedMembers", "array-contains", user.uid)
          .where("status", "==", "active")
          .limit(10)
      }
    ]
  }
}

export const viewSubscription = (user: UserRecord, commonId: string, subscriptionId: string): ScreenContent => {
  // More research on Enums required ---- user.status =
  return {
    mainScreen: {
      name: 'Billing',
      components: [
        {
          name: 'Subscription',
          ref: firestore.doc(`commons/${commonId}/subscriptions/${subscriptionId}`)
        }
      ]
    }
  }
}