const config = require("../configs/app");
const { errorHandle } = require("../helpers/handleMessage.helper");
const middlewareMongo = require("../middlewares/middlewareMongo");

module.exports = (app) => {
  app.use("/", middlewareMongo);
  app.use(`/v${config.apiVersion}`, require("./v1/index"));
  app.use(`*`, (req, res) => res.error(errorHandle("", 404)));
}
