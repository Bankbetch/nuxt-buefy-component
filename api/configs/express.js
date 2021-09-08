const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const timeout = require("connect-timeout");
const rateLimit = require("express-rate-limit");
const responseFormat = require("./responseFormat");
module.exports = async (app) => {
  app.use(helmet());
  app.use(
    cors({
      origin: ["http://localhost:3000"],
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(timeout("60s"));
  const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 100, // limit each IP to 100 requests per windowMs
    message:
      "Too many accounts created from this IP, please try again after an hour",
  });
  app.use(limiter);
  app.use(responseFormat);
};
