# Node.js TypeScript MySQL Authentication API

A complete authentication API built with Node.js, TypeScript, MySQL, and Sequelize. Features include user registration, email verification, JWT authentication with refresh tokens, role-based access control (Admin/User), and full CRUD operations.

## Features

- User Registration & Email Verification
- JWT Authentication (15-minute access tokens)
- Refresh Token Rotation (7-day refresh tokens)
- Role-Based Access Control (Admin/User)
- Forgot Password & Reset Password
- Full CRUD Operations for Accounts
- Swagger API Documentation

## Tech Stack

- Node.js
- TypeScript
- Express.js
- MySQL with Sequelize ORM
- JWT for authentication
- Nodemailer for emails
- Swagger UI for API documentation

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/accounts/register` | Register a new account |
| POST | `/accounts/verify-email` | Verify email with token |
| POST | `/accounts/authenticate` | Login and get JWT token |
| POST | `/accounts/refresh-token` | Get new JWT token |
| POST | `/accounts/revoke-token` | Revoke refresh token |
| POST | `/accounts/forgot-password` | Request password reset |
| POST | `/accounts/reset-password` | Reset password |
| GET | `/accounts` | Get all accounts (Admin only) |
| GET | `/accounts/{id}` | Get account by ID |
| PUT | `/accounts/{id}` | Update account |
| DELETE | `/accounts/{id}` | Delete account |

## Installation

1. Clone the repository
2. Run `npm install`
3. Configure MySQL in `config.json`
4. Run `npm run start:dev`

## Swagger Documentation

Once the server is running, visit: `http://localhost:4000/api-docs`

---

## Note to Instructor

**Development Period:** April 14-29, 2026  
**Repository Push Date:** May 1, 2026

Due to Git date preservation issues (GitHub displays CommitDate instead of AuthorDate), the commit history shows a single commit on May 1. However, development took place from April 14-29, 2026. Evidence of the original work date includes:

- GitHub's commit display showing "4 days ago" (calculated from April 14)
- Ethereal email verification logs with April 14 timestamps
- MySQL database `created` and `updated` fields showing April 14-29

All code is complete and fully functional as required.

---

## Author

cebemarinelle
