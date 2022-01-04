import { db } from "firebase"
import { Common, CommonRule } from "../types"

export const createCommonRule (commonId: string, commonRuleDoc: CommonRule) => {
  return db.collection('commons').add(commonRuleDoc);
}

export const saveCommonRule (commonRuleRef: any; commonRuleDoc: CommonRule) => {
  return commonRuleRef.set(commonRuleDoc);
}

