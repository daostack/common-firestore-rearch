# daostack-common-rearch
DAOstack Common re-architecture project

## Redesign Objectives

1. Fix the scalability bottle-neck: Common's current firestore database `dao` collection is queriable by members id. The `dao` collection `members` field is an array of a map that includes `joinedAt` `permissions` and `userId` fields. It is thus not possible to query `dao` documents based on user membership. The typical membership is done against a `memebers` field which is an array of strings. Such a query typically looks like this: `daos.where('members', 'array-contains', uid)`. In the current structure, that is not possible. That means that in order to get `daos` for a particular user or users an app or a webapp needs to download the whole list of daos before they can filter throught.
2. Build a nested Structure that leverages group queries, in order to enforce ACL while be able to keep difference decendants structure similary like proposals, discussions, comments etc. 

## Security and Permission Structure:

### There are 5 different types of Restrictions:
- Common Founders (CF)
- Common Moderators (CM)
- Common Members (Mm)
- None Common Members but logged is (LU)
- Not Logged in (Pu)

### about security and sceurity rules:
@json write here how security rules and mutation and actions work together. And maybe how that is important.

### Screens where there are difference between Public & Members (creatre a list here)

### Components and Screeens where there is a difference between memebers and moderators (creatre a list here)

### Components and Screeens where there is a difference between mederatores and founders (creatre a list here)
