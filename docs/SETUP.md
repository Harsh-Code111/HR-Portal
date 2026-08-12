# HR Portal - Setup Guide

## Prerequisites
- Node.js v14 or higher
- MongoDB v4 or higher
- npm or yarn package manager

## Installation Steps

### 1. Clone Repository
```bash
git clone https://github.com/Harsh-Code111/HR-Portal.git
cd HR-Portal
```

### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env` and configure:
- MONGODB_URI
- JWT_SECRET
- PORT

Start backend:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

The application will be available at `http://localhost:3000`

## MongoDB Setup

### Local MongoDB
```bash
# On Windows
mongod

# On macOS/Linux
brew services start mongodb-community
```

### MongoDB Atlas (Cloud)
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update MONGODB_URI in `.env`

## Environment Variables

Create `.env` file in backend folder:
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/hr-portal
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:3000
```

## Troubleshooting

### MongoDB Connection Failed
- Ensure MongoDB is running
- Check MONGODB_URI in .env file
- Verify MongoDB credentials if using Atlas

### Port Already in Use
- Change PORT in .env file
- Or kill process using the port

### Module Not Found
- Run `npm install` in the respective directory
- Clear node_modules and reinstall if issues persist

## Development Server

Both servers run in development mode with hot reload:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
