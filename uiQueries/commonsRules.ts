import { DocumentReference } from 'firebase';
import { CommonRule, ScreenContent } from 'types';

// Common rules
export const create = (docRef: DocumentReference, docData: CommonRule) => {
  return docRef.collection('commonRules').add(docData);
};

export const save = (docRef: DocumentReference, docData: CommonRule) => {
  return docRef.set(docData);
};

export const list = (docRef: DocumentReference): ScreenContent => {
  return {
    mainScreen: {
      name: 'Edit rules',
      components: [
        {
          name: 'Edit rules',
          ref: docRef.collection('commonRules')
        }
      ]
    }
  };
};

export const view = (commonRef: DocumentReference, commonRuleId: string): ScreenContent => {
  return {
    mainScreen: {
      name: 'Edit Rule',
      components: [
        {
          name: 'Edit rules',
          ref: commonRef.collection('commonRules').doc(commonRuleId)
        }
      ]
    }
  };
};
