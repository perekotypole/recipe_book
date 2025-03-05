## Project Structure

This project consists of two main parts:
- **Server**: A Node.js/Express backend API
- **Client**: A Next.js frontend application with Tailwind CSS

## Prerequisites

Before running the application, make sure you have the following installed:
- Node.js (v20 or higher)
- npm or yarn
- Git

## Docker Setup

Build the image
``` bash
docker compose -f docker-compose.yml build
```

Then start containers
``` bash
docker compose -f docker-compose.yml up -d
```

## Server Setup

### 1. Clone the repository
```bash
git clone https://github.com/perekotypole/recipe_book
cd recipe_book/server
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the server directory with the following variables:
```
PORT=8000
DB_BASE_URL=https://www.themealdb.com/api/json/v1/1
```

### 4. Available scripts to run server
- **Development mode**:
  ```bash
  npm run start:dev
  ```
  This will start the server with nodemon for automatic reloading.

- **Production mode**:
  ```bash
  npm run start
  ```

### 5. Server endpoints
- GET `/api/recipes` - Get all recipes
- GET `/api/recipes/:id` - Get recipe by ID
- GET `/api/recipes?a=:country` - Filter recipes by country
- GET `/api/recipes?i=:ingredient` - Filter recipes by ingredient
- GET `/api/recipes?c=:category` - Filter recipes by category
- GET `/api/recipes?s=:search` - Search recipes by name

## Client Setup

### 1. Navigate to the client directory
```bash
cd recipe_book/client
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the client directory with:
```
API_URL=http://localhost:8000
```

### 4. Available scripts to run client
- **Development mode**:
  ```bash
  npm run dev
  ```

- **Build and start for production**:
  ```bash
  npm run build
  npm run start
  ```

## Tech Stack

### Server
- Node.js
- Express
- TypeScript

### Client
- Next.js
- React
- TypeScript
- Tailwind CSS