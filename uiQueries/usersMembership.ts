import { db, DocumentReference } from 'firebase';
import { UserMetadata, UserRecord, ScreenContent, CommonSubscription } from '../types';

// TODO: resolve unused _userMetadata
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const listMyMembershipRequests = (user: UserRecord, _userMetadata: UserMetadata): ScreenContent => {
  return {
    mainScreen: {
      name: 'Membership requests'
    },
    tabs: [
      {
        // Tab 1 - Pending
        name: 'Pending',
        ref: db
          .collection('commons')
          .where('members.pending.ids', 'array-contains', user.uid)
          .where('status', '==', 'active')
          .limit(10)
      },
      {
        // Tab 2 - Approved
        name: 'Approved',
        ref: db
          .collection('commons')
          .where('members.active.ids', 'array-contains', user.uid)
          .where('status', '==', 'active')
          .limit(10)
      },
      {
        // Tab 3 - Rejected
        name: 'Rejected',
        ref: db
          .collection('members.rejected.ids')
          .where('rejectedMembers', 'array-contains', user.uid)
          .where('status', '==', 'active')
          .limit(10)
      }
    ]
  };
};

export const saveSubscription = (subscriptionRef: DocumentReference, subscriptionDoc: CommonSubscription) => {
  return subscriptionRef.set(subscriptionDoc);
};

export const deleteSubscription = (subscriptionRef: DocumentReference) => {
  return subscriptionRef.delete();
};

export const viewSubscription = (user: UserRecord, commonId: string, subscriptionId: string): ScreenContent => {
  // More research on Enums required ---- user.status =
  return {
    mainScreen: {
      name: 'Billing',
      components: [
        {
          name: 'Subscription',
          ref: db.doc(`commons/${commonId}/subscriptions/${subscriptionId}`)
        }
      ]
    }
  };
};

export const viewPaymentMethod = (userRef: DocumentReference): ScreenContent => {
  // More research on Enums required ---- user.status =
  return {
    mainScreen: {
      name: 'Billing'
    },
    sections: [
      {
        name: 'Saved payment method',
        ref: userRef.collection("private").doc("paymentMethod")
        // This resource may also contain a tag of 'paymentFailed'
      },
      // TODO: Remove and create a new file userSubscriptions.ts for viewing the payment method and subscriptions
      {
        name: 'Monthly contributions',
        ref: db
          .collectionGroup('subscriptions')
          .where('user.uid', '==', userRef.id)
          .where('status', '==', 'active')
          .limit(10)
      }
    ]
  };
};
