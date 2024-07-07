const express = require("express");
const router = require("./src/route/api");
const app = new express();
const bodyParser = require("body-parser");
const connectDB = require("./src/database/DB-connect");
const cookieParser = require("cookie-parser");

//Security Middleware
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require("cors");

//Database
const path = require("path");

//Security Middleware Implement
app.use(
  cors({
    origin: "http://haalalsell.com",
    credentials: true,
  })
);
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cookieParser());

//Body perser
app.use(bodyParser.json());

//Rate Limiter
const limiter = rateLimit({ windowMs: 15 * 60 * 100, max: 3000 });
app.use(limiter);
//Database
connectDB();

// Managing BackEnd API Routing
app.use("/api/v1", router);

module.exports = app;
