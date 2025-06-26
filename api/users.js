const axios = require("axios");

module.exports = async function handler(request, response) {
  // Enable CORS
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  // Handle preflight requests
  if (request.method === "OPTIONS") {
    response.status(200).end();
    return;
  }

  try {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    response.status(200).json(users.data);
  } catch (error) {
    console.error("Error fetching users:", error);
    response.status(500).json({
      error: "Failed to fetch users",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
