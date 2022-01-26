import { db, DocumentReference } from 'firebase'
import { UserMetadata, UserRecord, ScreenContent, Moderation } from '../types'

export const add = (parentRef: DocumentReference, docData: Moderation) => {
  return parentRef.collection('moderatorReports').add(docData);
  // TODO: Security Rules: Moderation must be a child of a common, proposal, discussion or comment
}

export const hide = (docRef: DocumentReference) => {
  return docRef.update({setHidden: true});
}

export const unHide = (docRef: DocumentReference) => {
  return docRef.update({setHidden: false});
}