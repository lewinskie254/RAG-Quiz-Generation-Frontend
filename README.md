# 🧠 RAG Quiz Generation Frontend

A modern AI-powered quiz generation frontend built with:

- React (Vite)
- JavaScript (ES6+)
- Context API
- Axios (API layer)
- Docker-ready deployment (Nginx support)

---

## 📁 Project Structure
```bash
RAG-Quiz-Generation-Frontend/
├── public/ # Static public assets
├── src/
│ ├── api/ # API layer (Axios setup)
│ │ └── axios.jsx
│
│ ├── assets/ # Images and icons
│ │ ├── logo.jpg
│ │ ├── student.png
│ │ ├── teacher.png
│ │ ├── back.svg
│ │ ├── next.svg
│ │ ├── logout.svg
│ │ └── react.svg
│
│ ├── components/ # Reusable UI components
│ │ ├── AdminDashListView.jsx
│ │ ├── AdminDashQuizListView.jsx
│ │ ├── AdminMultipleChoiceAnswer.jsx
│ │ ├── AdminQuestionAndAnswer.jsx
│ │ ├── CoolButton.jsx
│ │ ├── EssayAnswer.jsx
│ │ ├── ImageBtn.jsx
│ │ ├── InputField.jsx
│ │ ├── LoginOrRegister.jsx
│ │ ├── Modal.jsx
│ │ ├── MultipleChoiceAnswer.jsx
│ │ ├── ProgressBar.jsx
│ │ ├── ProgressCard.jsx
│ │ ├── Question.jsx
│ │ ├── SidePanelBtn.jsx
│ │ ├── Title.jsx
│ │ └── UnitsCard.jsx
│
│ ├── context/ # Global state management (Context API)
│ ├── css/ # Global and modular styles
│ ├── pages/ # Application pages/views
│ ├── App.jsx # Root component
│ ├── App.css
│ ├── index.css
│ └── main.jsx
│
├── docker-compose.yml # Multi-container setup
├── dockerfile # Frontend container build
├── nginx.conf # Production web server config
├── vite.config.js # Vite configuration
├── package.json
└── README.md
```


---

## ⚙️ Prerequisites

- Node.js (v18+)
- npm or yarn
- Docker (optional, for containerized deployment)
- Backend API (RAG Quiz Generation backend)

---

## 📦 Installation

### 1. Install dependencies
```bash
npm install

npm run dev
```
application runs on http://localhost:5173

## 🏗 Prduction Build 
``` bash
npm run build
npm run preview
```

## 🐳 Docker Deployment

```bash
docker-compose up --build #run container

docker-compose down # stop container

```


