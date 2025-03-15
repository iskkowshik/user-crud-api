User CRUD API
This is a simple RESTful API built using Node.js, Express.js, and MongoDB for managing user records. It provides endpoints to Create, Read, Update, and Delete (CRUD) users efficiently. This API can be integrated into applications requiring user management, such as authentication systems, dashboards, or admin panels.

Features
Create a new user
Retrieve all users
Retrieve a single user by ID
Update user details
Delete a user

Tech Stack
Node.js
Express.js
MongoDB (Mongoose ORM)
dotenv (for environment variables)

Installation & Setup
1. Clone the Repository
Run the following command in your terminal:

git clone https://github.com/iskkowshik/user-crud-api.git
cd user-crud-api
2. Install Dependencies

Run:
npm install
3. Create a .env File
Inside the project root, create a .env file and add the following:
env
PORT=5000
MONGO_URI=your_mongodb_connection_string

4. Start the Server
Run:
npm start
The server will be accessible at:
http://localhost:5000

API Endpoints
1. Create a New User
Method: POST
Endpoint: /users
Description: Creates a new user.
Request Body:

json
{
  "name": "Sai Kowshik",
  "email": "kowshik@example.com",
  "age": 25
}

2. Retrieve All Users
Method: GET
Endpoint: /users
Description: Fetches a list of all users.

4. Retrieve a Single User
Method: GET
Endpoint: /users/:id
Description: Fetches a user by their ID.

6. Update a User
Method: PUT
Endpoint: /users/:id
Description: Updates the details of a user by their ID.
Request Body (example):

json
{
  "name": "Updated Sai Kowshik",
  "email": "updated@example.com"
}

5. Delete a User
Method: DELETE
Endpoint: /users/:id
Description: Deletes a user by their ID.
