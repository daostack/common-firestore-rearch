import { db, DocumentReference } from "firebase"
import { Common, CommonRule, UserRecord, UserMetadata, ScreenContent } from "types"

export const create = (commonDoc: Common) => {
  return db.collection('commons').add(commonDoc);
}

export const save = (commonRef: DocumentReference, commonDoc: Common) => {
  return commonRef.set(commonDoc);
}

export const view = (commonId: string): ScreenContent => {
  const commonRef = db.doc(`commons/${commonId}`);
  return {
    mainScreen: {
      name: 'common.name',
      components: [
        {
          name: 'common.name',
          ref: commonRef
            
        }
      ]
    },
    tabs: [
      {
        name: 'Discussions',
        ref: commonRef.collection('discussions')
      },
      {
        name: 'Proposals',
        ref: commonRef.collection('proposals')
      }
    ]
  }}

export const listRecent = (userMetadata: UserMetadata): ScreenContent => {
  return {
    mainScreen: {
      name: 'My commons',
      components: [
        {
          name: 'My Commons',
          ref: db
            .collection("commons")
            .where("__name__", "in", userMetadata.recent.commonIds)
            .where("status", "==", "active")
            .limit(10)
        }
      ]
    }
  }
}

export const listAll = (userId: string): ScreenContent => {
  return {
    mainScreen: {
      name: 'My commons',
      components: [
        {
          name: 'My Commons',
          ref: db
            .collection("commons")
            .where("members.active", "array-contains", userId)
            .where("status", "==", "active")
            .limit(10)
        }
      ]
    }
  }
}


