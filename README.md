# React App with Node.js Server - README

Welcome to the repository for your React app with a Node.js server! Follow the steps below to get started.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [nodemon](https://nodemon.io/) (install globally)

## Clone the Repository

```bash
git clone https://github.com/ShadowSLayerrYT/Student-Course-Management-System.git
cd sample
```

## Install Dependencies

Navigate to the project root directory and install the necessary dependencies for both the client and server.

```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

## Start the Server

Ensure you are in the `server` directory before starting the server.

```cmd
cd server
nodemon app.js
```

This will launch the Node.js server using nodemon, which automatically restarts on file changes.

## Start the React App

Open a new terminal window/tab, navigate to the `client` directory, and start the React app.

```cmd
cd client
npm start
```

Your React app should now be running on [http://localhost:3000](http://localhost:3000), and the Node.js server on [http://localhost:5000](http://localhost:5000).

## Notes

- Make sure to have separate terminal instances for running the server and the React app.
- You can customize the server configurations in the `server/app.js` file.
- Ensure your firewall settings allow connections to the specified ports.

Feel free to reach out if you encounter any issues or have further questions. Happy coding!
