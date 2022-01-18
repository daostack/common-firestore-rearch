import { DocumentReference } from 'firebase'
import { CommonRule, ScreenContent } from 'types'

// Common rules
export const create = (commonRef: DocumentReference, commonRuleDoc: CommonRule) => {
  return commonRef.collection('commonRules').add(commonRuleDoc);
}

export const save = (commonRuleRef: DocumentReference, commonRuleDoc: CommonRule) => {
  return commonRuleRef.set(commonRuleDoc);
}

export const list = (commonRef: DocumentReference): ScreenContent => {
  return {
    mainScreen: {
      name: 'Edit rules',
      components: [
        {
          name: 'Edit rules',
          ref: commonRef.collection('commonRules')
        }
      ]
    }
  };
}

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
}