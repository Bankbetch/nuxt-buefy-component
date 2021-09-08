const path = require("path");
require("dotenv").config();
module.exports = {
  isProduction: process.env.NODE_ENV === "production",
  apiVersion: process.env.API_VERSION || 1,
  mongodbUri: `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`,
  pageLimit: process.env.PAGE_LIMIT || 15,
  jwksRequestsPerMinute: process.env.JWKS_REQUESTS_PER_MINUTE || 5,
  jwksUri: process.env.JWKS_URI,
  audience: process.env.AUDUENCE,
  issuer: process.env.ISSUER,
  algorithms: process.env.CODECHALLENGE_METHOD,
  client_id: process.env.CLIENT_ID,
  user_name: process.env.NAME,
  port: process.env.PORT_EXPRESS,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT
};
