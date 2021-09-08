const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const config = require('./app');

module.exports.checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: config.jwksRequestsPerMinute,
    jwksUri: config.jwksUri,
  }),
  audience: config.audience,
  issuer: config.issuer,
  algorithms: [config.algorithms],
});
