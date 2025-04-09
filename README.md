# 📝 Full Stack To-Do List App

A full-stack To-Do List app built with **React**, **Spring Boot**, **MySQL**, and **Docker Compose**.

## 📆 Tech Stack

* **Frontend**: React + TypeScript, Tailwind CSS, shadcn/ui, Axios
* **Backend**: Spring Boot, Java 17, MySQL, JPA, Lombok
* **Database**: MySQL 8
* **Containerization**: Docker, Docker Compose

## 📁 Project Structure

todo-project/
├── todo-frontend/       # React frontend
├── todo-backend/        # Spring Boot backend
└── docker-compose.yml   # Docker orchestration


## 🛠️ Getting Started

### Prerequisites

* Docker & Docker Compose installed on your machine

### Run the Application

In the root of the project (`todo-project/`), run:
docker-compose up --build

This will start the following services:
* 🐬 **MySQL database**
* 🚀 **Spring Boot backend** at `http://localhost:8080`
* 🎨 **React frontend** at `http://localhost:3000`

## 🐬 MySQL Access (optional)

To connect to the MySQL container and inspect data:

docker exec -it mysql-todo mysql -u root -p
Enter password: root
USE tododb;
SELECT * FROM todo;

## ✏️ Features

* Add a new task
* Toggle complete/incomplete
* Edit a task
* Delete a task
* Live sync with backend using REST API

## 📌 Notes

* Make sure ports `3000`, `8080`, and `3306` are not in use.
* Database configuration can be adjusted in `todo-backend/src/main/resources/application.properties`.

## 📄 License

MIT License
