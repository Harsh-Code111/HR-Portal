# HR Portal API Documentation

## Base URL
```
http://localhost:5000/api
```

## Endpoints

### Health Check
- **GET** `/health` - Check server status

### Employees
- **GET** `/employees` - Get all employees
- **GET** `/employees/:id` - Get employee by ID
- **POST** `/employees` - Create new employee
- **PUT** `/employees/:id` - Update employee
- **DELETE** `/employees/:id` - Delete employee

### Leave Management
- **GET** `/leave` - Get all leave requests
- **GET** `/leave/:id` - Get leave request by ID
- **POST** `/leave` - Create leave request
- **PUT** `/leave/:id` - Update leave request
- **DELETE** `/leave/:id` - Delete leave request

### Attendance
- **GET** `/attendance` - Get attendance records
- **POST** `/attendance/check-in` - Employee check-in
- **POST** `/attendance/check-out` - Employee check-out

### Payroll
- **GET** `/payroll` - Get payroll records
- **POST** `/payroll/generate` - Generate payroll

## Authentication

All endpoints (except health check) require JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

## Response Format

All responses are in JSON format:

**Success:**
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

**Error:**
```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

## Status Codes
- `200` - OK
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error
