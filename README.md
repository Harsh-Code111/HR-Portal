# HR Portal

A comprehensive Human Resources management portal designed to streamline all day-to-day HR operations and employee management tasks in one user-friendly platform.

## Features

- **Employee Management**: Create and manage employee profiles, records, and personal information
- **Leave Management**: Request, approve, and track employee leave and time-off
- **Attendance Tracking**: Monitor employee attendance and work hours
- **Payroll Management**: Manage salary structures, calculate payroll, and generate pay slips
- **Recruitment**: Post jobs, manage applications, and track hiring pipeline
- **Performance Reviews**: Conduct performance evaluations and feedback sessions
- **Document Management**: Store and manage HR documents and employee files
- **Reports & Analytics**: Generate insights and reports on HR metrics

## Tech Stack

### Frontend
- **Framework**: React.js
- **Styling**: Tailwind CSS
- **State Management**: Redux
- **HTTP Client**: Axios
- **Build Tool**: Vite

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **ORM**: Mongoose

## Project Structure

```
HR-Portal/
├── frontend/          # React application
├── backend/           # Express.js API server
├── docs/              # Documentation
├── .gitignore
├── README.md
└── package.json
```

## Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Harsh-Code111/HR-Portal.git
   cd HR-Portal
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## API Documentation

See [API Documentation](./docs/API.md) for detailed endpoint information.

## Contributing

Please follow the contribution guidelines in [CONTRIBUTING.md](./docs/CONTRIBUTING.md)

## License

MIT License - See LICENSE file for details
