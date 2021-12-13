import firestore, { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
export type Timestamp = FirebaseFirestoreTypes.Timestamp;
export { default as firestore } from "@react-native-firebase/firestore";
export const db = firestore();

