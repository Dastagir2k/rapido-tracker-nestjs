# Microservices Application Documentation

## Overview

This project demonstrates the implementation of a microservices-based architecture using [NestJS](https://nestjs.com). The application consists of multiple services that communicate with each other using **TCP**. The primary goal of this project is to learn how microservices work and to explore the integration of logging and rider services.

## Services

### 1. Logging Service
The **Logging Service** is responsible for managing and storing rider coordinates. It also communicates with the **Rider Service** to fetch rider details.

#### Features:
- Save rider coordinates to the database.
- Retrieve rider coordinates along with rider details from the **Rider Service**.
- Uses **MongoDB** for data persistence.
- Implements **TCP** communication to interact with the **Rider Service**.

#### APIs:
- **GET /rider-coordinates/:id**  
  Fetches rider coordinates and rider details for the given rider ID.
- **POST /rider-coordinates**  
  Saves rider coordinates to the database.

---

### 2. Rider Service
The **Rider Service** is responsible for managing rider information. It listens for **TCP** commands from other services and provides rider details.

#### Features:
- Responds to TCP commands to fetch rider details.
- Simulates rider data for demonstration purposes.

#### TCP Command:
- **Command:** `{ cmd: 'getRider' }`  
  **Payload:** `{ riderId: string }`  
  **Response:** Rider details (e.g., ID, first name, last name, email).

---

## Architecture

### Communication
The services communicate using **TCP**. The **Logging Service** acts as a client and sends requests to the **Rider Service**, which acts as a server.

### Database
- **Logging Service** uses **MongoDB** to store rider coordinates.
- **Rider Service** does not use a database but simulates rider data.

### Validation
- **Logging Service** uses `class-validator` to validate incoming data for APIs.

---

## How to Run

### Prerequisites
- Node.js (v16 or higher)
- MongoDB instance
- NestJS CLI

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Dastagir2k/rapido-tracker-nestjs.git
   cd rapido-service
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the services:
   - **Rider Service**:
     ```bash
     npm run start --prefix apps/rider-service
     ```
   - **Logging Service**:
     ```bash
     npm run start --prefix apps/logging-service
     ```

4. Access the APIs:
   - Logging Service: `http://localhost:3002`
   - Rider Service: Listens for TCP commands on `localhost:3000`.

---

## Example Usage

### Save Rider Coordinates
**Request:**
```bash
POST /rider-coordinates
Content-Type: application/json

{
  "lat": 40.7128,
  "log": -74.0060,
  "riderId": "12345"
}
```

**Response:**
```json
{
  "_id": "64f8c2e7b5d1c2a1e8f9a123",
  "lat": 40.7128,
  "log": -74.0060,
  "riderId": "12345",
  "__v": 0
}
```

---

### Get Rider Coordinates and Details
**Request:**
```bash
GET /rider-coordinates/12345
```

**Response:**
```json
{
  "coordinates": [
    {
      "_id": "64f8c2e7b5d1c2a1e8f9a123",
      "lat": 40.7128,
      "log": -74.0060,
      "riderId": "12345",
      "__v": 0
    }
  ],
  "rider": {
    "id": "12345",
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "jane@gmail.com"
  }
}
```

---

## Learning Objectives

- Understand how microservices communicate using **TCP**.
- Learn how to implement **NestJS** microservices.
- Explore the integration of **MongoDB** for data persistence.
- Gain hands-on experience with **class-validator** for data validation.

---

## Future Enhancements

- Add authentication and authorization.
- Implement a centralized logging mechanism.
- Use a message broker (e.g., RabbitMQ or Kafka) for asynchronous communication.
- Add more services to expand the microservices ecosystem.

---


