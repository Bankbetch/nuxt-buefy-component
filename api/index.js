const express = require("express");
const app = express();
const config = require("./configs/app");
require("./configs/express")(app);
require('./routes')(app)
require("./configs/errorHandler")(config.isProduction, app);
module.exports = app

if (require.main === module) {
  app.listen(3000, () => console.log(`Local app listening on port ${config.port}!`))
}
