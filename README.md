# My Portfolio

A portfolio template built with HTML, CSS, and JavaScript.

To handle form submission using Node.js, you need to create a server that listens for POST requests and processes the form data.

**STEPS**

1.First, install the required dependencies by running the following command in your terminal:

`npm install express body-parser`

2.Run your Node.js server by executing the following command in your terminal:

`npm run dev`

### File Structure

- **geokin12.ithub.io/**  
  ├── **image/**  
  ├── `about.html`  
  ├── `Contact.html`  
  ├── _George Kinyua Resume(1).pdf_  
  ├── `index.html`  
  ├── `package-lock.json `  
  ├── `package.json`  
  ├── `README.md `  
  ├── `script.js `  
  ├── `server.js `  
  └── `styles.css`

### Backend Code Documentation

#### Dependencies

- **Express**: A web framework for Node.js that simplifies building web applications and APIs.
- **Body-parser**: Middleware for parsing incoming request bodies in a middleware before your handlers. It allows you to handle form data easily.

#### Setup

1. **Express App Initialization**

   - Creates an instance of Express and assigns it to the `app` constant.
   - Sets the port number to 3000 and assigns it to the `port` constant.

2. **Middleware Setup**
   - Configures `body-parser` to parse URL-encoded and JSON request bodies. This middleware is used for handling form data.
   - Configures Express to serve static files (HTML, CSS, JS) from the root directory (`__dirname`).

#### Routes

1. **Static File Serving**

   - `app.use(express.static(path.join(__dirname)))`
     - Serves static files (HTML, CSS, JS) from the root directory.

2. **Default Route (`app.get("/")`):**

   - The server responds with the `index.html` file for the root route.

3. **Form Submission Handling (`app.post('/submit-form')`):**
   - Handles POST requests to the `/submit-form` endpoint.
   - Extracts form data (name, email, message) from the request body (`req.body`).
   - Logs the form data to the console.
   - Sends a response back to the client with the message 'Form submitted successfully!'.

#### Server Start

- Starts the Express server on port `3000.`
- Logs a message to the console indicating that the server is listening and at which URL it's accessible.

### Interaction with Frontend

1. **Static Files Serving**

   - The backend serves static files (HTML, CSS, JS) from the root directory (`__dirname`). These files typically constitute the frontend of the application.
   - For example, if you have an `index.html` file in the root directory, the backend serves this file when a user accesses the root URL (`http://localhost:3000/`).

2. **Form Submission**
   - The frontend (HTML form) can be designed to submit data to the `/submit-form` endpoint of the backend.
   - When the user submits the form, the backend receives the form data (`name`, `email`, `message`) in the request body (`req.body`).
   - The backend processes this data as needed (e.g., logging to console, saving to a database, sending emails).
   - After processing, the backend sends a response back to the client indicating that the form was submitted successfully (`res.send('Form submitted successfully!')`).
