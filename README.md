# Student Details App

This is a Node.js application for managing student details. It provides APIs to fetch student data, implement pagination, and perform server-side filtering based on various criteria.

## Installation

To run this application locally, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running

### 1. Clone the Repository

```bash
git clone https://github.com/tushareshukla/kc-sde.git
```

### 2. Navigate to the project directory:
```bash
cd kc-sde
```

### 3. Install dependencies:
```bash
npm install

```

### 4.Set up environment variables by creating a .env file in the root directory. Example .env file:
```bash
PORT=3000
DB_HOST=localhost
DB_PORT=27017
DB_NAME=student_db

Update DB_HOST, DB_PORT, and DB_NAME according to your MongoDB configuration.
```

### 5. Start the server
```bash
npm start

```

### 6.The server will start running on the specified port (default is 3000). You can now access the APIs at http://localhost:3000/api/students and http://localhost:3000/api/students/filter.

### Usage
Use the API endpoints to fetch student details and implement server-side filtering.
Refer to the API documentation for more details on available endpoints and request/response formats.
