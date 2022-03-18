import { db, DocumentReference } from 'firebase';
import { UserMetadata, UserRecord, ScreenContent, UserMembership } from '../types';

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

export const create = (membershipRef: DocumentReference, membershipDoc: UserMembership) => {
  membershipDoc.status = "pending";
  return membershipRef.set(membershipDoc);
};

export const save = (membershipRef: DocumentReference, membershipDoc: UserMembership) => {
  return membershipRef.set(membershipDoc);
};

export const remove = (membershipRef: DocumentReference) => {
  return membershipRef.delete();
};

export const view = (user: UserRecord, commonId: string, membershipId: string): ScreenContent => {
  // More research on Enums required ---- user.status =
  return {
    mainScreen: {
      name: 'Billing',
      components: [
        {
          name: 'Membership',
          ref: db.doc(`commons/${commonId}/memberships/${membershipId}`)
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
      {
        name: 'Monthly contributions',
        ref: db
          .collectionGroup('memberships')
          .where('user.uid', '==', userRef.id)
          .where('status', '==', 'active')
          .limit(10)
      }
    ]
  };
};
