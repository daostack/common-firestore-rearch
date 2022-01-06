import { firestore } from "firebase"
import { Common, CommonRule, UserRecord, UserMetadata, ScreenContent } from "../types"

// *** TO DO ***
// Find Firestore types for DocumentSnapshot and Reference to import

// Commons
export const createCommon = (commonDoc: Common) => {
  return firestore.collection('commons').add(commonDoc);
}

export const saveCommon = (commonRef: any, commonDoc: Common) => {
  return commonRef.set(commonDoc);
}

export const listMyCommons = (user: UserRecord, userMetadata: UserMetadata): ScreenContent => {
  return {
    mainScreen: {
      name: 'My commons',
      components: [
        {
          name: 'My Commons',
          ref: firestore
            .collection("commons")
            .where("__name__", "in", userMetadata.recents.commonIds)
            .where("status", "==", "active")
            .limit(10)
        }
      ]
    }
  }
}

// Common rules
export const createCommonRule = (commonId: string, commonRuleDoc: CommonRule) => {
  return firestore.collection('commons').add(commonRuleDoc);
}

export const saveCommonRule = (commonRuleRef: any, commonRuleDoc: CommonRule) => {
  return commonRuleRef.set(commonRuleDoc);
}
