import { db, DocumentReference } from 'firebase';
import { UserRecord, UserBankAccount, ScreenContent, UserPersonalRecord, File } from '../types';

export const createUserRecord = (userDoc: UserRecord) => {
  return db.doc(`users/${userDoc.uid}`).set(userDoc);
};

export const saveBankAccount = (userRef: DocumentReference, personalDoc: UserPersonalRecord, bankAccountDoc: UserBankAccount) => {
  const addBankAccount = [];
  addBankAccount.push(userRef.collection("private").doc("bankAccount").set(bankAccountDoc));
  addBankAccount.push(userRef.collection("private").doc("personalRecord").set(bankAccountDoc));
  return Promise.all(addBankAccount);
};

export const addFile = (userRef: DocumentReference, fileDoc: File) => {
  return userRef.collection("files").add(fileDoc);
}

export const viewBankAccount = (userRef: DocumentReference): ScreenContent => {
  return {
    mainScreen: {
      name: 'View Bank Account',
      components: [
        {
          name: 'View bank account',
          ref: userRef.collection("private").doc("bankAccount")
        }
      ]
    }
  };
};

export const listNotifications = (userRef: DocumentReference): ScreenContent => {
  return {
    mainScreen: {
      name: 'Notifications',
      components: [
        {
          name: 'Notifications',
          ref: userRef.collection("notifications").orderBy('created.utc', 'desc')
          // Limit in the calling application, capture the last page token
          // and then fetch additional pages for infinite scroll
        }
      ]
    }
  };
};
