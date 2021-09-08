// @ts-nocheck
const { errorHandle } = require('../helpers/index')
module.exports = (
  isProduction = false,
  /** @type {{ use: (arg0: { (req: any, res: any, next: any): void; (err: any, req: any, res: any, next: any): void; }) => void; }} */ app
) => {
  // catch 404 and forward to error handler
  app.use(
    (
      /** @type {any} */ req,
      /** @type {any} */ res,
      /** @type {(arg0: { success: boolean; status: number; message: string; result: any; }) => void} */ next
    ) => {
      // next(errorHandle('Endpoint Not Found', 404));
    }
  )

  // eslint-disable-next-line no-unused-vars
  app.use(
    (
      /** @type {{ stack: any; status: any; statusCode: any; message: string; }} */ err,
      /** @type {any} */ req,
      /** @type {{ status: (arg0: any) => void; json: (arg0: { success: boolean; status: number; message: string; result: any; }) => void; }} */ res,
      /** @type {any} */ next
    ) => {
      if (!isProduction) console.log(err.stack)
      const statusCode = err.status || err.statusCode || 500
      if (statusCode === 401) res.status(401).end()
      else {
        res.status(statusCode)
        res.json(errorHandle(err.message, statusCode))
      }
    }
  )
}
