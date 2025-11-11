# Playwright Sample App

A sample Node.js application with Playwright test cases for API testing.

## Project Structure

```
playwright-sample-app/
├── src/
│   └── index.js              # Express.js server with sample API endpoints
├── tests/
│   └── sample.spec.js        # Playwright test cases (2 test cases)
├── package.json              # Project dependencies and scripts
├── playwright.config.js      # Playwright configuration
└── README.md                 # This file
```

## Features

- **Express.js Server**: RESTful API with sample endpoints
  - `GET /` - Welcome endpoint
  - `GET /api/greeting?name=YourName` - Greeting endpoint
  - `POST /api/calculate` - Calculator endpoint

- **Playwright Tests**: 2 test cases
  1. **Test Case 1**: Verify greeting endpoint returns correct response
  2. **Test Case 2**: Verify calculate endpoint processes POST request correctly

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install:
- `express` - Web framework for Node.js
- `@playwright/test` - Playwright testing framework

### 2. Run the Application

```bash
npm start
```

The server will start on `http://localhost:3000`

### 3. Run Tests

```bash
# Run all tests
npm test

# Run tests in UI mode (interactive)
npm run test:ui

# Run tests in debug mode
npm run test:debug
```

## Test Cases Overview

### Test Case 1: Greeting Endpoint
- **Endpoint**: `GET /api/greeting?name=John`
- **Expected Result**: Returns a greeting message and timestamp
- **Assertions**:
  - HTTP status code is 200
  - Response contains correct greeting message
  - Response contains a valid timestamp

### Test Case 2: Calculate Endpoint
- **Endpoint**: `POST /api/calculate`
- **Request Body**: `{ "a": 10, "b": 5 }`
- **Expected Result**: Returns sum and product calculations
- **Assertions**:
  - HTTP status code is 200
  - Response contains correct a and b values
  - Response contains correct sum (15)
  - Response contains correct product (50)

## Configuration

### playwright.config.js
- Configures Playwright to run tests in multiple browsers (Chrome, Firefox, Safari)
- Automatically starts the dev server before running tests
- Generates HTML test reports

## Notes

- The application uses a local development server that starts automatically when running tests
- Tests are configured to run in parallel for faster execution
- HTML reports are generated after test runs

## Requirements

- Node.js 14+ 
- npm or yarn

## License

ISC
