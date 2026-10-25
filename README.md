# Student Internship Portal

## About the Project
The Student Internship Portal is a web application that helps students explore internship opportunities and apply for internships online.

## Features
- View available internships.
- View internship details.
- Apply for internships using an application form.
- Store submitted applications in MongoDB.
- Backend API built with Node.js and Express.
- Responsive user interface built with React.

## Technologies Used
- **Frontend:** React, Vite, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Version Control:** Git and GitHub

## Project Structure
```text
student-internship-portal/
├── backend/
│   ├── models/
│   │   └── Application.js
│   ├── routes/
│   │   └── applications.js
│   ├── server.js
│   └── package.json
├── src/
│   ├── data/
│   ├── pages/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Getting Started

### 1. Clone the Repository
```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd YOUR_PROJECT_FOLDER
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Configure the Backend
Navigate to the backend folder and install its dependencies:
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:
```env
PORT=5000
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
CLIENT_ORIGIN=http://localhost:5173
```

Replace the MongoDB placeholder with your own connection string. Never upload your `.env` file or database credentials to GitHub.

### 4. Start the Backend
From the `backend` folder, run:
```bash
npm start
```

### 5. Start the Frontend
Open a second terminal in the project root and run:
```bash
npm run dev
```

Open the local URL displayed in the terminal.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/applications` | Retrieve submitted applications |
| POST | `/api/applications` | Submit a new application |

## Database
MongoDB Atlas is used to store internship application details.

## Future Enhancements
- Student login and registration.
- Internship search and filtering.
- Application status tracking.
- Admin dashboard for managing internships and applications.


