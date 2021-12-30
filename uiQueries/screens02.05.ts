import { db } from "firebase"
import { Common, UserRecord } from "../types"

export const createUserRecord (userDoc: UserRecord) => {
  return db.doc(`users/${userDoc.uid}`).set(commonDoc);
}