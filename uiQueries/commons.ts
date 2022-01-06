import { db, DocumentReference } from "firebase"
import { Common, CommonRule, UserRecord, UserMetadata, ScreenContent } from "types"

// *** TO DO ***
// Find Firestore types for DocumentSnapshot and Reference to import

// Commons
export const createCommon = (commonDoc: Common) => {
  return db.collection('commons').add(commonDoc);
}

export const saveCommon = (commonRef: DocumentReference, commonDoc: Common) => {
  return commonRef.set(commonDoc);
}

export const listMyCommons = (user: UserRecord, userMetadata: UserMetadata): ScreenContent => {
  return {
    mainScreen: {
      name: 'My commons',
      components: [
        {
          name: 'My Commons',
          ref: db
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
  return db.collection('commons').add(commonRuleDoc);
}

export const saveCommonRule = (commonRuleRef: any, commonRuleDoc: CommonRule) => {
  return commonRuleRef.set(commonRuleDoc);
}
