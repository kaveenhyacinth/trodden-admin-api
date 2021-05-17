const express = require("express");
const cors = require("cors");

require("dotenv").config({ path: "./config/.env" });
require("./db/connect");

// Init express app
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Import routes

// Routes

/** Unauthorized error handler */
app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res
      .status(401)
      .json({ result: null, success: false, msg: "Invalid or expired token" });
  }
});

/** Not Found error handler */
app.all("*", (req, res) => {
  res.status(404).json({
    result: "404",
    success: false,
    msg: "404! page not found",
  });
});

// Server instance
const PORT = process.env.PORT ?? 8000;
app.listen(PORT, () =>
  console.log(
    `⚡ [server] Server is running on ${PORT} in ${process.env.NODE_ENV} mode`
  )
);
