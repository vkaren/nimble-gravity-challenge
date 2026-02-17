# Nimble Gravity Challenge

This project is a solution for the Nimble Gravity technical challenge for the **Junior Fullstack Developer** role.

## 🚀 Overview

This is a small React application that allows a candidate to:

- Fetch their candidate data using their email
- Retrieve a list of available job positions
- Submit a job application by providing a GitHub repository URL

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- Fetch API
- CSS

## 📦 Project Structure

```
src/
  App/
    index.jsx
  components/
    JobList/
    States/
      Error.jsx
      Loading.jsx
  services/
    api.js
```

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/vkaren/nimble-gravity-challenge.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the app:

```bash
npm start
```

The app will run on:

```
http://localhost:3000
```

## 🔌 API Endpoints

Base URL:

```
https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net
```

Endpoints used:

- `GET /api/candidate/get-by-email`
- `GET /api/jobs/get-list`
- `POST /api/candidate/apply-to-job`

## ✅ Features

- Fetch candidate data and job listings
- Display job positions dynamically
- Input field for GitHub repository per job
- Submit application per job
- Loading and error handling

## ⚠️ Notes

- The application handles API errors and displays feedback to the user.
- Each job input is managed independently.
- Accessibility considerations were applied (labels associated with inputs).

## 💡 Improvements (Future Work)

- Improve form validation
- Add better styling and responsiveness

## 👩‍💻 Author

Karen Varela
