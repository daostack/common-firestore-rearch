import { db } from "firebase";
import { UserRecord, UserBankAccount, ScreenContent } from "../types";

export const createUserRecord = (userDoc: UserRecord) => {
  return db.doc(`users/${userDoc.uid}`).set(userDoc);
};

export const saveBankAccount = (
  user: UserRecord,
  bankAccountDoc: UserBankAccount
) => {
  return db.doc(`users/${user.uid}/private/bankAccount`).set(bankAccountDoc);
};

export const viewBankAccount = (user: UserRecord): ScreenContent => {
  return {
    mainScreen: {
      name: "View Bank Account",
      components: [
        {
          name: "View bank account",
          ref: db.doc(`users/${user.uid}/private/bankAccount`),
        },
      ],
    },
  };
};

export const viewPaymentMethod = (user: UserRecord): ScreenContent => {
  // More research on Enums required ---- user.status =
  return {
    mainScreen: {
      name: "Billing",
    },
    sections: [
      {
        name: "Saved payment method",
        ref: db.doc(`users/${user.uid}/private/paymentMethod`),
        // This resource may also contain a tag of 'paymentFailed'
      },
      {
        name: "Monthly contributions",
        ref: db
          .collectionGroup("subscriptions")
          .where("user.uid", "==", user.uid)
          .where("status", "==", "active")
          .limit(10),
      },
    ],
  };
};

export const listNotifications = (user: UserRecord): ScreenContent => {
  return {
    mainScreen: {
      name: "Notifications",
      components: [
        {
          name: "Notifications",
          ref: db
            .collection(`users/${user.uid}/notifications`)
            .orderBy("created.utc", 'desc'),
          // Limit in the calling application, capture the last page token
          // and then fetch additional pages for infinite scroll
        },
      ],
    },
  };
};
