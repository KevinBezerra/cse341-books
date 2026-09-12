# Books API Week 02 Spec Version 1

## Feature 1: Book CRUD Operations and Author References

### Goal
Update the existing Week 01 book API so book documents include a reference to an author, and add full CRUD operations (create, update, and delete).

### Data Model
Book documents will be stored in the `books` collection.

Required book fields:
- `id`: string, required, custom id such as `b1`
- `authorId`: string, required, references the `id` field of an author
- `title`: string, required
- `publicationDate`: string, required

Books will continue to use custom string ids instead of MongoDB `_id` values.

### Relationship to Authors
Each book will identify its author with an `authorId` field. The value must match the `id` of an existing author document.
When creating or updating a book, the API should reject the request with a 400 Bad Request if the specified `authorId` does not exist.

### Routes

#### GET /books
- **Purpose:** Return all books.
- **Success:**
  - Status code: `200`
  - Response body: An array of book objects
- **Errors:**
  - `500` if an unexpected server or database error occurs

#### GET /books/:id
- **Purpose:** Return one book by its custom id.
- **Success:**
  - Status code: `200`
  - Response body: The matching book object
- **Errors:**
  - `404` if no book exists with that id
  - `500` if an unexpected server or database error occurs

#### POST /books
- **Purpose:** Create a new book.
- **Request body:**
  ```json
  {
    "id": "b4",
    "authorId": "a1",
    "title": "Example Book Title",
    "publicationDate": "2026-01-15"
  }



* **Success:**
* Status code: `201`
* Response body: The newly created book object


* **Errors:**
* `400` if a required field is missing
* `400` if the `id` already exists
* `400` if the `authorId` does not match an existing author
* `500` if an unexpected server or database error occurs



#### PUT /books/:id

* **Purpose:** Update an existing book.
* **Request body:**
```json
{
  "authorId": "a2",
  "title": "Updated Book Title",
  "publicationDate": "2026-02-20"
}

```


* **Success:**
* Status code: `200`
* Response body: The updated book object


* **Errors:**
* `400` if a required field is missing
* `400` if the `authorId` does not match an existing author
* `404` if no book exists with that id
* `500` if an unexpected server or database error occurs



#### DELETE /books/:id

* **Purpose:** Delete an existing book.
* **Success:**
* Status code: `204`
* Response body: None


* **Errors:**
* `404` if no book exists with that id
* `500` if an unexpected server or database error occurs



### Swagger Documentation

Swagger must document every book route.

### Deployment Expectations

After implementation, the book routes must work locally and from the deployed Render application.

---

## Feature 2: Author CRUD Operations

### Goal

Implement an author management API supporting full CRUD operations in a dedicated collection.

### Data Model

Author documents will be stored in the `authors` collection.

Required author fields:

* `id`: string, required, custom id such as `a1`
* `name`: string, required
* `birthYear`: number, required

Authors will use custom string ids instead of MongoDB `_id` values.

### Relationship to Books (Deletion Policy)

If an author still has books associated with their `id` in the `books` collection, the API must reject deletion requests to preserve referential integrity.

### Routes

#### GET /authors

* **Purpose:** Return all authors.
* **Success:**
* Status code: `200`
* Response body: An array of author objects


* **Errors:**
* `500` if an unexpected server or database error occurs



#### GET /authors/:id

* **Purpose:** Return one author by their custom id.
* **Success:**
* Status code: `200`
* Response body: The matching author object


* **Errors:**
* `404` if no author exists with that id
* `500` if an unexpected server or database error occurs



#### POST /authors

* **Purpose:** Create a new author.
* **Request body:**
```json
{
  "id": "a4",
  "name": "Example Author",
  "birthYear": 1980
}

```


* **Success:**
* Status code: `201`
* Response body: The newly created author object


* **Errors:**
* `400` if a required field is missing
* `400` if the `id` already exists
* `500` if an unexpected server or database error occurs



#### PUT /authors/:id

* **Purpose:** Update an existing author.
* **Request body:**
```json
{
  "name": "Updated Author",
  "birthYear": 1981
}

```


* **Success:**
* Status code: `200`
* Response body: The updated author object


* **Errors:**
* `400` if a required field is missing
* `404` if no author exists with that id
* `500` if an unexpected server or database error occurs



#### DELETE /authors/:id

* **Purpose:** Delete an existing author.
* **Success:**
* Status code: `204`
* Response body: None


* **Errors:**
* `404` if no author exists with that id
* `409` if the author cannot be deleted because books still reference their id
* `500` if an unexpected server or database error occurs



### Swagger Documentation

Swagger must document every author route.

### Deployment Expectations

After implementation, the author routes must work locally and from the deployed Render application.

```

**Regarding the rest of my response:**
The text I included at the very bottom of my last message (the "Step 2: Spec Evaluation" breakdown) does **not** need to go into your markdown file. Step 2 of the assignment instructs you to evaluate your spec against a few security and efficiency questions before moving on[cite: 6]. I simply provided the answers to those evaluation questions for you so we could check that box and ensure the spec was solid! 

Let me know when you have saved this file, and we will move on to Part 2 (Creating the GitHub Issues)[cite: 6, 7].

```