import { db } from "firebase";
import { UserRecord, UserBankAccount } from './types'

// 08.09.2 - Receive funds - Add Bank Account details
export const addBankAccount = (user: UserRecord, bankAccountDoc: UserBankAccount) => {
  return db.doc(`users/${user.uid}/private/bankAccount`).set(bankAccountDoc);
}