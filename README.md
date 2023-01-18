# Secret Diary

## Problem Statements

- Initially the SecretDiary class is locked, meaning `addEntry(str)` and `getEntries()` should throw an error.
- When the user calls `unlock()`, `addEntry()` and `getEntries()` should work as desired.
- When the user calls `lock()` again `addEntry()` and `getEntries()` throw errors.

## User Stories

```
As a user,
I want to find that a new secret diary is locked,
So that I have to unlock it to use it.

As a user,
I want to see an error when trying to use a locked diary,
So that access to it is restricted when locked.

As a user,
I want to unlock the diary,
So that I can use it

As a user,
I want to be able to add entries to the diary when unlocked,
So that I can journal my life

As a user,
I want to be able to see all entries when the diary is unlocked,
So that I can reminisce

As a user,
I want to be able to lock the diary,
So that other people can't use it
```

## Domain Models

### User Story 1

```
As a user,
I want to find that a new secret diary is locked,
So that I have to unlock it to use it.
```

#### Domain Model

| Objects     | Properties      | Messages   | Output   |
| ----------- | --------------- | ---------- | -------- |
| SecretDiary | lock @Lock      | isLocked() | @Boolean |
|             |                 |            |          |
| Lock        | locked @Boolean | isLocked() | @Boolean |
|             |                 |            |          |

#### Tests

1. Test that a new instance of `Lock` reports `locked` is `true`
2. Test that the diary reports locked after instantiation; i.e. Expect `secretDiary.lock` to be `true`
3. Test that the diary calls the lock's `isLocked` method

---

## User Story 2

```
As a user,
I want to see an error when trying to use a locked diary,
So that access to it is restricted when locked.
```

#### Domain Model

| Objects     | Properties | Messages     | Output   |
| ----------- | ---------- | ------------ | -------- |
| SecretDiary | lock @Lock | isLocked()   | @Boolean |
|             |            | getEntries() | @Error   |
|             |            | addEntry()   | @Error   |
|             |            |              |          |


#### Tests

1. Test that getEntries returns error when diary is locked
2. Test that addEntries returns error when diary is locked

---

## User Story 3

```
As a user,
I want to unlock the diary,
So that I can use it
```

### Domain Model

| Objects     | Properties      | Messages     | Output   |
| ----------- | --------------- | ------------ | -------- |
| SecretDiary | lock @Lock      | isLocked()   | @Boolean |
|             |                 | getEntries() | @Error   |
|             |                 | addEntry()   | @Error   |
|             |                 | unlock()     | @Void    |
|             |                 |              |          |
| Lock        | locked @Boolean | isLocked()   | @Boolean |
|             |                 | unlock()     | @Void    |

#### Tests
1. Test that `unlock` changes a `Lock` `locked` to `false`
2. Test that `unlock` changes a `SecretDiary` `lock` to `false`

---

## User Story 4 (probably should have been 4)

`getEntries` is needed to properly run these tests

```
As a user,
I want to be able to add entries to the diary when unlocked,
So that I can journal my life
```

### Domain Model

| Objects     | Properties             | Messages         | Output   |
| ----------- | ---------------------- | ---------------- | -------- |
| SecretDiary | lock @Lock             | isLocked()       | @Boolean |
|             |                        | getEntries()     | @Error   |
|             | entries @Array[@Entry] | addEntry(@Entry) | @Error   |
|             |                        |                  | @Void    |
|             |                        | unlock()         | @Void    |
|             |                        |                  |          |
| Lock        | locked @Boolean        | isLocked()       | @Boolean |
|             |                        | unlock()         | @Void    |
|             |                        |                  |          |
| Entry       | id @Number             | getId()          | @Number  |
|             |                        |                  |          |

#### Tests

1. Test that calling `addEntry` with an `Entry` adds 1 to the `length` of `entries` when the diary is `unlocked`
2. Test that the actual entry is in the entries after it has been added

---

## User Story 5 (probably should have been 4)

```
As a user,
I want to be able to see all entries when the diary is unlocked,
So that I can reminisce
```

### Domain Model

| Objects     | Properties             | Messages         | Output          |
| ----------- | ---------------------- | ---------------- | --------------- |
| SecretDiary | lock @Lock             | isLocked()       | @Boolean        |
|             | entries @Array[@Entry] | getEntries()     | @Error          |
|             |                        |                  | @Array[Entries] |
|             |                        | addEntry(@Entry) | @Error          |
|             |                        |                  | @Void           |
|             |                        | unlock()         | @Void           |
|             |                        |                  |                 |
| Lock        | locked @Boolean        | isLocked()       | @Boolean        |
|             |                        | unlock()         | @Void           |
|             |                        |                  |                 |
| Entry       | id @Number             | getId()          | @Number         |
|             |                        |                  |                 |

#### Test

1. Test that the initial diary returns an array of 0 length
2. Test that a populated array returns the length of the number of entries added

---

### User Story 6

```
As a user,
I want to be able to lock the diary,
So that other people can't use it
```

#### Domain Model

| Objects     | Properties             | Messages         | Output          |
| ----------- | ---------------------- | ---------------- | --------------- |
| SecretDiary | lock @Lock             | isLocked()       | @Boolean        |
|             | entries @Array[@Entry] | getEntries()     | @Error          |
|             |                        |                  | @Array[Entries] |
|             |                        | addEntry(@Entry) | @Error          |
|             |                        |                  | @Void           |
|             |                        | unlock()         | @Void           |
|             |                        | lock()           | @Void           |
|             |                        |                  |                 |
| Lock        | locked @Boolean        | isLocked()       | @Boolean        |
|             |                        | unlock()         | @Void           |
|             |                        | lock()           | @Void           |
|             |                        |                  |                 |
| Entry       | id @Number             | getId()          | @Number         |
|             |                        |                  |                 |

#### Tests
1. Test that `lock` changes a `Lock` `locked` to `true`
2. Test that `lock` changes a `SecretDiary` to `true`