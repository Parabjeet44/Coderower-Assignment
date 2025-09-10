# Full-Stack Configuration Manager

A complete full-stack application built for CodeRower Software Pvt Ltd assignment. This application provides REST API endpoints to interact with MongoDB configurations and a React frontend to consume these APIs.

## 🚀 Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (with Mongoose ODM)
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Frontend  
- **React** - Frontend framework
- **Axios** - HTTP client for API calls
- **CSS3** - Styling and responsive design

## 📋 Features

### Backend API Endpoints
- `GET /api/configurations/{id}` - Fetch configuration 2D array by ID
- `PUT /api/configurations/{id}` - Update configuration remark
- `GET /api/health` - Health check endpoint

### Frontend Pages
- **Configuration Fetcher** - Input config ID and display matrix data
- **Configuration Updater** - Update configuration remarks
- **Tab Navigation** - Switch between functionalities
- **Error Handling** - User-friendly error messages
- **Loading States** - Visual feedback during API calls

## 📁 Project Structure

```
fullstack-assignment/
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── models/
│   │   └── Configuration.js
│   └── routes/
│       └── configurations.js
├── frontend/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js
│       ├── App.css
│       ├── index.js
│       └── components/
│           ├── ConfigurationFetcher.js
│           └── ConfigurationUpdater.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Internet connection (for MongoDB Atlas)

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   The backend server will start on `http://localhost:8080`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the React application:**
   ```bash
   npm start
   ```
   
   The frontend application will open on `http://localhost:3000`

## 🔧 Configuration

### MongoDB Connection
The application connects to the provided MongoDB Atlas database:
```
mongodb+srv://development:X3TcC8tKnI5JINuR@betalive.9sakb.gcp.mongodb.net/database
```

### Environment Variables (Optional)
Create a `.env` file in the backend directory if you want to customize settings:
```env
PORT=8080
MONGODB_URI=mongodb+srv://development:X3TcC8tKnI5JINuR@betalive.9sakb.gcp.mongodb.net/database
```

## 📚 API Documentation

### GET /api/configurations/{id}
Retrieves the 2D array configuration for the specified ID.

**Request:**
```
GET http://localhost:8080/api/configurations/qwertyuiop
```

**Response:**
```json
[
  ["sym1", "sym2", "sym3"],
  ["sym4", "sym6", "sym8"], 
  ["sym5", "sym1", "sym0"]
]
```

**Error Response:**
```json
{
  "error": "Configuration not found",
  "message": "No configuration found with ID: qwertyuiop"
}
```

### PUT /api/configurations/{id}
Updates the remark field for the specified configuration ID.

**Request:**
```
PUT http://localhost:8080/api/configurations/qwertyuiop
Content-Type: application/json

{
  "remark": "I am done with task"
}
```

**Response:**
```json
{
  "message": "success"
}
```

**Error Response:**
```json
{
  "error": "Configuration not found",
  "message": "No configuration found with ID: qwertyuiop"
}
```

## 🧪 Testing

### Manual Testing

1. **Test Backend API:**
   ```bash
   # Test GET endpoint
   curl http://localhost:8080/api/configurations/qwertyuiop
   
   # Test PUT endpoint
   curl -X PUT http://localhost:8080/api/configurations/qwertyuiop \
        -H "Content-Type: application/json" \
        -d '{"remark": "I am done with task"}'
   
   # Test health endpoint
   curl http://localhost:8080/api/health
   ```

2. **Test Frontend:**
   - Open `http://localhost:3000`
   - Try fetching a configuration with ID "qwertyuiop"
   - Try updating a configuration remark
   - Test error handling with invalid IDs

### Sample Configuration IDs
Use these sample IDs for testing (if available in the database):
- `qwertyuiop`
- `test123`
- `sample456`

## 🎨 UI Features

- **Responsive Design** - Works on desktop and mobile devices
- **Tab Navigation** - Easy switching between fetch and update operations  
- **Loading Indicators** - Visual feedback during API operations
- **Error Handling** - Clear error messages for users
- **Form Validation** - Client-side input validation
- **Matrix Visualization** - Clean table display of 2D arrays
- **JSON Preview** - Raw data view option

## 🚨 Error Handling

The application includes comprehensive error handling:

### Backend Errors
- MongoDB connection errors
- Invalid configuration IDs
- Missing request body parameters
- Database operation failures

### Frontend Errors
- Network connectivity issues
- API response errors
- Form validation errors
- Empty response handling

## 🔍 Troubleshooting

### Common Issues

1. **Backend won't start:**
   - Check if port 8080 is available
   - Verify MongoDB connection string
   - Ensure all dependencies are installed

2. **Frontend can't connect to backend:**
   - Verify backend is running on port 8080
   - Check CORS configuration
   - Confirm API URLs in frontend code

3. **Configuration not found:**
   - Verify the configuration ID exists in database
   - Check MongoDB connection
   - Ensure proper data format in database

### Debug Commands
```bash
# Check if backend is running
curl http://localhost:8080/api/health

# Check MongoDB connection logs
npm run dev # Check console output

# Verify frontend build
npm run build
```

## 📝 Assignment Requirements Fulfilled

✅ **Backend REST API** with GET and PUT endpoints  
✅ **MongoDB connection** using provided connection string  
✅ **Frontend pages** for fetching and updating configurations  
✅ **Proper error handling** and validation  
✅ **Clean code structure** with separation of concerns  
✅ **Professional UI design** with responsive layout  
✅ **Complete documentation** with setup instructions  

## 👨‍💻 Development

### Available Scripts

**Backend:**
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

**Frontend:**
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Code Style
- ES6+ JavaScript features
- Functional React components with hooks
- RESTful API design patterns
- Modular component architecture
- Clean separation of concerns

## 🤝 Contributing

This is an assignment project, but suggestions for improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For any questions or issues regarding this assignment, please contact:
- **Email:** hr@coderower.com
- **Subject:** Assignment Support - [Your Name]

## 📄 License

This project is created for CodeRower Software Pvt Ltd assignment evaluation.

---

**Assignment Submitted By:** [Your Name]  
**Technology Stack:** Backend: Node.js/Express, Frontend: React  
**Date:** [Current Date]  
**Status:** Ready for Review ✅
