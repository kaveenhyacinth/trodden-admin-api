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
const blazesRoute = require("./routes/blazes.route");
const caravansRoute = require("./routes/caravans.route");
const memoriesRoute = require("./routes/memories.route");
const dashboardRoute = require("./routes/dashboard.route");
const tripsRoute = require("./routes/trips.route");
const nomadsRoute = require("./routes/nomads.route");

// Routes
app.use("/api/blazes", blazesRoute);
app.use("/api/caravans", caravansRoute);
app.use("/api/memories", memoriesRoute);
app.use("/api/dashboard", dashboardRoute);
app.use("/api/trips", tripsRoute);
app.use("/api/nomads", nomadsRoute);

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
