# 🚀 Express.js REST API — Startup Planet

A lightweight, clean REST API built with **Express.js**, **Express Router**, and **ES Modules**. Designed to serve structured data about global tech startups with support for advanced filtering via query parameters, dynamic path route matching, and CORS policy configuration.

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
- **Module System:** ES Modules (`"type": "module"`)
- **Routing Architecture:** Modular `express.Router()` separating routes from controller logic
- **Cross-Origin Access:** Configured via `cors` middleware for seamless frontend integration (e.g., React)
- **Query Filtering:** Multi-param search supporting strings (`industry`, `country`, `continent`) and boolean conversion (`is_seeking_funding`, `has_mvp`)
- **Dynamic Path Routing:** Dynamic parameter resolution for explicit field filtering (`/api/:field/:term`) with field validation (`country`, `continent`, `industry`)

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

### 1. Get All Startups (with Query Parameters)

- **Endpoint:** `GET /api`
- **Description:** Retrieves all startup records. Supports filtering via query parameters.

| Query Parameter      | Type      | Description               | Example                    |
| :------------------- | :-------- | :------------------------ | :------------------------- |
| `industry`           | `string`  | Filter by industry domain | `?industry=Fintech`        |
| `country`            | `string`  | Filter by country name    | `?country=Poland`          |
| `continent`          | `string`  | Filter by continent       | `?continent=Europe`        |
| `is_seeking_funding` | `boolean` | Filter by funding status  | `?is_seeking_funding=true` |
| `has_mvp`            | `boolean` | Filter by MVP presence    | `?has_mvp=true`            |

**Example Request:**

```http
GET /api?continent=Europe&is_seeking_funding=true&has_mvp=true
```

---

### 2. Get Startups by Path Parameters

- **Endpoint:** `GET /api/:field/:term`
- **Allowed Fields:** `country`, `continent`, `industry`
- **Description:** Dynamically matches startups based on a specific allowed field and value.

**Example Request:**

```http
GET /api/country/Sweden
```

---

## 🚀 Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/iviktorry/natural-wonders-node-rest-api.git
cd natural-wonders-node-rest-api

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
