
# Todo List API

This is a simple Express.js-based API for managing a todo list. It supports basic CRUD operations: Create, Read, Update, and Delete tasks.

## Features

- Create a new todo
- Get all todos
- Get a specific todo by its ID
- Update an existing todo
- Delete a specific todo by its ID

## Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/YOUR_USERNAME/todo-list-api.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd todo-list-api
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

### Running the Server

After installing dependencies, you can start the Express server:

```bash
npm start
```

The server will be running on [http://localhost:5000](http://localhost:5000).

### API Endpoints

#### 1. Create a new todo
- **Endpoint**: `POST /api/todos`
- **Request body**:
    ```json
    {
      "title": "Finish Express API project",
      "completed": false
    }
    ```
- **Response**:
    ```json
    {
      "id": "unique-id",
      "title": "Finish Express API project",
      "completed": false
    }
    ```

#### 2. Get all todos
- **Endpoint**: `GET /api/todos`
- **Response**:
    ```json
    [
      {
        "id": "unique-id",
        "title": "Finish Express API project",
        "completed": false
      }
    ]
    ```

#### 3. Get a specific todo
- **Endpoint**: `GET /api/todos/:id`
- **Response**:
    ```json
    {
      "id": "unique-id",
      "title": "Finish Express API project",
      "completed": false
    }
    ```
- **Error Response** (if todo not found):
    ```json
    {
      "message": "Todo with id unique-id not found."
    }
    ```

#### 4. Update a todo
- **Endpoint**: `PUT /api/todos/:id`
- **Request body**:
    ```json
    {
      "title": "Finish Express API project - updated",
      "completed": true
    }
    ```
- **Response**:
    ```json
    {
      "id": "unique-id",
      "title": "Finish Express API project - updated",
      "completed": true
    }
    ```

#### 5. Delete a todo
- **Endpoint**: `DELETE /api/todos/:id`
- **Response**:
    ```json
    {
      "message": "Todo with id unique-id deleted successfully."
    }
    ```

### Testing the API

You can test the API using tools like [Postman](https://www.postman.com/) or `curl`.

### Error Handling

- **Missing title**: If a todo is created without a title, the server will respond with a `400` status and a message indicating that the title is required.
- **Todo not found**: When trying to fetch, update, or delete a todo with an invalid or non-existent ID, the server will respond with a `404` status and an error message.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgements

- [Express.js](https://expressjs.com/) for building the API.
- [UUID](https://www.npmjs.com/package/uuid) for generating unique identifiers for todos.

```
