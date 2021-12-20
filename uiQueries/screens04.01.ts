import { db } from "firebase"
import { Common } from "../types"

export const createCommon (commonDoc: Common) => {
  return db.collection('commons').add(commonDoc);
}

export const saveCommon (commonRef: any; commonDoc: Common) => {
  return commonRef.set(commonDoc);
}

