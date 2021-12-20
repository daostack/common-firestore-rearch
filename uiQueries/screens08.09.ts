import { db } from "firebase";
import { UserRecord, UserBankAccount } from '../types'

// 08.09.2 - Receive funds - Add Bank Account details
// 08.09.4 - Receive funds - Edit Bank Account details
export const saveBankAccount = (user: UserRecord, bankAccountDoc: UserBankAccount) => {
  return db.doc(`users/${user.uid}/private/bankAccount`).set(bankAccountDoc);
}

// 08.09.3 - Receive funds - View Bank Account details
// 08.09.4 - Receive funds - Edit Bank Account details
export const viewBankAccount = (user: UserRecord) => {
  return db.doc(`users/${user.uid}/private/bankAccount`);
}

// 08.09.1 is shown twice.  The second version is to add a bank account with a bank list name.
// Further clarification needed