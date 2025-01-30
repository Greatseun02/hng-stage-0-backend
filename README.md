# HNG STAGE 0 BACKEND TASK


### DESCRIPTION
This is a simple API that returns a JSON containing my email address, current date_time as an ISO 8601 formatted timestamp, and the repository containing the code.

### FRAMEWORK
ExpressJS

### RUN LOCALLY
Run git clone "https://github.com/Greatseun02/hng-stage-0-backend.git";  
Run npm install;  
Run node index.js;  

### REQUEST
Endpoint: "/"  
Method: GET  
Example Request: GET "/"  

### RESPONSE
Status Code: 200 ok  
Body: JSON
Example Response: {
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "<https://github.com/yourusername/your-repo>"
}




