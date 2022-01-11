import { db, DocumentReference } from "firebase"
import { CommonRule } from "types"

// Common rules
export const createCommonRule = (commonId: string, commonRuleDoc: CommonRule) => {
  return db.collection('commons').add(commonRuleDoc);
}

export const saveCommonRule = (commonRuleRef: DocumentReference, commonRuleDoc: CommonRule) => {
  return commonRuleRef.set(commonRuleDoc);
}