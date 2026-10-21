# 🚀 Express.js REST API — Startup Planet

A lightweight, clean REST API built with **Express.js**, **Express Router**, and **ES Modules**. Designed to serve structured data about global tech startups with support for advanced filtering via query parameters and dynamic path route matching.

> **Note on Live Demo:**

1. Hosted on Render's free tier. If the server is sleeping, the first request may take ~30 seconds to wake up (cold start).

2. Browser Warning: You may see a red "Dangerous Site" warning from Google Safe Browsing due to a false positive on Render's shared .onrender.com domain. An official review/appeal has already been submitted to Google. Rest assured, this is a completely safe, open-source REST API project returning raw JSON data. You can safely proceed via `Details` -> `Visit this unsafe site`.

---

## 🔗 Links

- **Live API Demo:** [View Live API](https://startups-planet-api.onrender.com/api)
- **Repository:** [View Source Code](https://github.com/iviktorry/startups-planet-express-rest-api)

---

## 🛠 Tech Stack & Key Features

- **Runtime & Framework:** Node.js, Express.js (v4+)
- **Routing Architecture:** Modular `express.Router()` separating routes from controller logic
- **Cross-Origin Access:** Express CORS middleware configured for cross-origin access
- **Query Filtering:** Multi-param search supporting strings and boolean conversion
- **Dynamic Path Routing:** Dynamic parameter resolution for explicit field filtering with field validation

---

## 📁 Project Structure

```text
├── controllers/       # Business logic for data filtering & responses
│   ├── getAllData.js
│   └── getDataByPathParams.js
├── routes/            # Express Router definitions
│   └── apiRoutes.js
├── data/              # Static dataset
│   └── data.js
├── server.js          # Express app setup & server entry point
└── package.json
```

---

## 🔌 API Endpoints & Usage

### 1. Retrieve & Filter All Startups

`GET /api`

Filters the dataset dynamically based on URL search query parameters. Supports combining multiple criteria in a single request.

| Parameter            | Type      | Example      | Description                                   |
| :------------------- | :-------- | :----------- | :-------------------------------------------- |
| `industry`           | `string`  | `healthcare` | Filter by industry sector                     |
| `country`            | `string`  | `sweden`     | Filter by headquarters country                |
| `continent`          | `string`  | `europe`     | Filter by geographical region                 |
| `is_seeking_funding` | `boolean` | `true`       | Filter by current funding status              |
| `has_mvp`            | `boolean` | `true`       | Filter by minimum viable product availability |

---

### 2. Filter by Path Parameter

`GET /api/:field/:term`

Dynamic parameter lookup against pre-approved dataset fields.

Valid Fields: `country`, `continent`, `industry`

---

## 🚀 Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/iviktorry/startups-planet-express-rest-api.git
cd startups-planet-express-rest-api

# Install dependencies
npm install

# Run server in development mode
npm run dev
```

---

## 👩‍💻 Developer Contacts & Socials

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/iviktorry)
[![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-3F54A3?style=for-the-badge&logo=frontendmentor&logoColor=white)](https://www.frontendmentor.io/profile/iviktorry)
[![Telegram](https://img.shields.io/badge/Telegram-229ED9?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/wsxxdfv)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/victoria-pratkina-b23834388)
