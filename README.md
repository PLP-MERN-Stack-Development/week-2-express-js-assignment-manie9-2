[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19732122&assignment_repo_type=AssignmentRepo)
# Express.js RESTful API Assignment

This assignment focuses on building a RESTful API using Express.js, implementing proper routing, middleware, and error handling.

## Assignment Overview

You will:
1. Set up an Express.js server
2. Create RESTful API routes for a product resource
3. Implement custom middleware for logging, authentication, and validation
4. Add comprehensive error handling
5. Develop advanced features like filtering, pagination, and search

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install dependencies:
   ```
   npm install
   ```
4. Run the server:
   ```
   npm start
   ```

## Files Included

- `Week2-Assignment.md`: Detailed assignment instructions
- `server.js`: Starter Express.js server file
- `.env.example`: Example environment variables file

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Postman, Insomnia, or curl for API testing

## API Endpoints

The API will have the following endpoints:

- `GET /api/products`: Get all products
- `GET /api/products/:id`: Get a specific product
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update a product
- `DELETE /api/products/:id`: Delete a product

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all the required API endpoints
2. Implement the middleware and error handling
3. Document your API in the README.md
4. Include examples of requests and responses

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [RESTful API Design Best Practices](https://restfulapi.net/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) 



# Project Overview

# Express.js RESTful API Assignment

This project is a RESTful API built using Express.js. It includes CRUD operations for managing products, middleware for logging, authentication, and validation, as well as error handling and advanced features like filtering, pagination, and search.

## Features
- Fully functional Express.js API with proper RESTful routes
- Middleware for logging, authentication, and validation
- Comprehensive error handling with appropriate status codes and messages
- Advanced features like filtering, pagination, and search

## 🛠️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd week-2-express-js-assignment-manie9-2

 2. Install dependencies: npm install

 3. Create a .env file based on the .env.example file: cp .env.example .env
   Update the values in .env as needed (e.g., API_KEY).
 4. Start the server: npm start

   
 5. The server will run on
   http://localhost:3000

---
#### **API Documentation**
```markdown
## API Endpoints

### **Root Route**
- **`GET /`**
  - Returns a welcome message.
  - Example Response:
    ```text
    Hello World
    ```

### **Products Routes**
- **`GET /api/products`**
  - Fetch all products.
  - Example Response:
    ```json
    [
      {
        "id": "1",
        "name": "Laptop",
        "description": "High-performance laptop with 16GB RAM",
        "price": 1200,
        "category": "electronics",
        "inStock": true
      }
    ]
    ```

- **`GET /api/products/:id`**
  - Fetch a specific product by ID.
  - Example Response:
    ```json
    {
      "id": "1",
      "name": "Laptop",
      "description": "High-performance laptop with 16GB RAM",
      "price": 1200,
      "category": "electronics",
      "inStock": true
    }
    ```

- **`POST /api/products`**
  - Create a new product.
  - Example Request Body:
    ```json
    {
      "name": "Tablet",
      "description": "Lightweight tablet with 64GB storage",
      "price": 500,
      "category": "electronics",
      "inStock": true
    }
    ```
  - Example Response:
    ```json
    {
      "id": "4",
      "name": "Tablet",
      "description": "Lightweight tablet with 64GB storage",
      "price": 500,
      "category": "electronics",
      "inStock": true
    }
    ```

- **`PUT /api/products/:id`**
  - Update an existing product.
  - Example Request Body:
    ```json
    {
      "name": "Gaming Laptop",
      "description": "High-performance gaming laptop with 32GB RAM",
      "price": 1500,
      "category": "electronics",
      "inStock": true
    }
    ```
  - Example Response:
    ```json
    {
      "id": "1",
      "name": "Gaming Laptop",
      "description": "High-performance gaming laptop with 32GB RAM",
      "price": 1500,
      "category": "electronics",
      "inStock": true
    }
    ```

- **`DELETE /api/products/:id`**
  - Delete a product.
  - Example Response:
    ```text
    (No Content)
    ```
    Status Code: `204`

---

### **Advanced Features**
- **Filtering by Category**:
  - **`GET /api/products?category=electronics`**
  - Example Response:
    ```json
    [
      {
        "id": "1",
        "name": "Laptop",
        "description": "High-performance laptop with 16GB RAM",
        "price": 1200,
        "category": "electronics",
        "inStock": true
      }
    ]
    ```

- **Pagination**:
  - **`GET /api/products?page=1&limit=2`**
  - Example Response:
    ```json
    [
      {
        "id": "1",
        "name": "Laptop",
        "description": "High-performance laptop with 16GB RAM",
        "price": 1200,
        "category": "electronics",
        "inStock": true
      },
      {
        "id": "2",
        "name": "Smartphone",
        "description": "Latest model with 128GB storage",
        "price": 800,
        "category": "electronics",
        "inStock": true
      }
    ]
    ```

- **Search by Name**:
  - **`GET /api/products/search?name=laptop`**
  - Example Response:
    ```json
    [
      {
        "id": "1",
        "name": "Laptop",
        "description": "High-performance laptop with 16GB RAM",
        "price": 1200,
        "category": "electronics",
        "inStock": true
      }
    ]
    ```

- **Product Statistics**:
  - **`GET /api/products/stats`**
  - Example Response:
    ```json
    {
      "electronics": 2,
      "kitchen": 1
    }
    ```

---

#### **Submission Instructions**
```markdown
## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all the required API endpoints.
2. Implement the middleware and error handling.
3. Document your API in the README.md (this file).
4. Include examples of requests and responses.
5. Add a `.env.example` file showing required environment variables.