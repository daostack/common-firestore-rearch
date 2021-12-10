// 08.01 Account registered user empty states

/**
 * @param screen 1
 panel : db.doc(`users/${user.uid}`)
 ui 2:   db.collection('proposals').where('__name__', 'in', user.recentProposalsIds)
 ui 2:   db.collection('daos').where('id', 'in', user.recentCommonIds)
 */

// 08.02.1 account registered user (my account view)
// 08.02.2 account registered user scrolled proposals
// 08.02.3 account registered user scroll
// User document fetch with onSnapshot
// Common document fetch with onSnapshot
