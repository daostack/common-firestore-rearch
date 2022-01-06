import firestore, { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
export type Timestamp = FirebaseFirestoreTypes.Timestamp;
export type Query = FirebaseFirestoreTypes.Query;
export type DocumentReference = FirebaseFirestoreTypes.DocumentReference;
export { default as firestore } from "@react-native-firebase/firestore";
export const db = firestore();

