# Mini E-Commerce App

This is a full-stack e-commerce application built with MySQL, Sequelize, Node.js, Express, and React. The app features JWT authentication, admin privileges, and user roles. Authenticated users can create products, while non-authenticated users can only view products. More features are yet to be implemented.

## Tech Stack

- **Frontend**: React, React Router
- **Backend**: Node.js, Express
- **Database**: MySQL, Sequelize
- **Authentication**: JWT (JSON Web Token)

## Features

- **JWT Authentication**: Secure login and signup using JSON Web Tokens.
- **Admin Privileges**: Admin users can create and delete products.
- **User Roles**:
  - Authenticated users can create products.
  - Non-authenticated users can only view products.
- **Product Search**: Search functionality to find products by name.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/mini-e-commerce-app.git
   cd mini-e-commerce-app
   ```

2. **Backend Setup:**

   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `backend` directory and add the following:
     ```plaintext
     PORT="your_port"
     DB_NAME="your_DB_NAME"
     DB_USER="your_DB_USER"
     DB_PASSWORD="your_DB_PASSWORD"
     DB_HOST="your_DB_HOST"
     JWT_SECRET="your_jwt_secret_key"
     ```
   - Set up the database schema:
     - Ensure your MySQL server is running.
     - Import the `schema.sql` file into your MySQL database:
       ```bash
       mysql -u your_DB_USER -p your_DB_NAME < path/to/schema.sql
       ```
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Frontend Setup:**

   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:

     ```bash
     npm install
     ```

   - Start the frontend development server:
     ```bash
     npm start
     ```

## Usage

- **Admin User**: Can create and delete products.
- **Authenticated User**: Can create products.
- **Non-Authenticated User**: Can only view products.

## API Endpoints

- **User Authentication:**

  - `POST /signup`: Create a new user.
  - `POST /login`: Authenticate a user and return a JWT token.
  - `GET /user/me`: Get the current authenticated user's information.

- **Products:**

  - `GET /products`: Get all products.
  - `POST /products`: Create a new product (Admin and Authenticated users only).
  - `DELETE /products/:id`: Delete a product by ID (Admin only).

- **Search:**
  - `GET /search/?search=term`: Search for products by name.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.
