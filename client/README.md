# AAAI Student Chapter - SRMIST Tiruchirappalli

<p align="center">
  <img src="client/public/srmist-logo.png" height="120" alt="SRMIST Tiruchirappalli Logo" />
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  <img src="client/public/aaai-logo.png" height="120" alt="AAAI Student Chapter Logo" />
</p>

<br/>

The official web platform for the **Association for the Advancement of Artificial Intelligence (AAAI)** Student Chapter at SRMIST Tiruchirappalli. This platform serves as the central hub for chapter events, executive team details, research publications, and a visual archive.

## 🚀 Tech Stack

This platform is built using the **MERN** stack with modern tooling:
- **Frontend:** React.js, Vite, CSS3 (Custom Design System)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Mongoose)
- **Hosting:** Vercel (Frontend) & Render (Backend)

## ✨ Key Features

- **Dynamic Event Dossiers:** A calendar-block UI for upcoming workshops and hackathons, featuring expandable rich-text reports.
- **Research Journal (Blog):** A dedicated publication space featuring a distraction-free "Reader Mode" for deep-dive technical articles.
- **Visual Archive:** A dynamic grid gallery capturing live event moments.
- **Team Roster:** Integrated executive and functional team layout with direct social linking.
- **Responsive Architecture:** Fully optimized for mobile, tablet, and desktop environments.

## 🛠️ Local Development Setup

To run this project locally, you will need [Node.js](https://nodejs.org/) and a [MongoDB](https://www.mongodb.com/) database.

### 1. Clone the repository
\`\`\`bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
\`\`\`

### 2. Setup the Backend
Open a terminal and navigate to the server directory:
\`\`\`bash
cd server
npm install
\`\`\`
Create a `.env` file inside the `server` directory and add your MongoDB connection string:
\`\`\`env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/aaai_db
PORT=5000
\`\`\`
Start the backend server:
\`\`\`bash
npm run dev
\`\`\`

### 3. Setup the Frontend
Open a new terminal window and navigate to the client directory:
\`\`\`bash
cd client
npm install
\`\`\`
Start the Vite development server:
\`\`\`bash
npm run dev
\`\`\`
The frontend will be available at `http://localhost:5173`.

## 📄 Database Seeding
To populate the database with initial events, team members, and blog posts, run the seed script from the server directory:
\`\`\`bash
node seed.js
\`\`\`

## 🤝 Leadership
Developed and maintained by the Technical & Research division of the AAAI SRMIST Student Chapter.