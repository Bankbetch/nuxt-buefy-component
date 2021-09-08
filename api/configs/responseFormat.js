const dayjs = require('dayjs')
const logger = require('../helpers/debug')
module.exports = (
  /** @type {{ headers: { [x: string]: any; }; connection: { remoteAddress: any; }; method: any; originalUrl: any; header: (arg0: string) => any; }} */ req,
  /** @type {{ success: (data?: string, statusCode?: number) => void; getHeaders: () => { (): any; new (): any; [x: string]: any; }; status: (arg0: number) => { (): any; new (): any; send: { (arg0: string): void; new (): any; }; }; error: (error: any) => void; }} */ res,
  /** @type {() => void} */ next
) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  res.success = (data = '', statusCode = 200) => {
    logger.http(
      `${ip} [${dayjs(new Date()).format('DD-MM-YYYY HH:mm:ss')}] "${req.method
      } ${req.originalUrl}" ${statusCode}  - "Ratelimit ${res.getHeaders()['x-ratelimit-remaining']
      }" "${req.header('user-agent')}"`
    )
    res.status(statusCode || 200).send(data)
  }

  res.error = (error) => {
    logger.http(
      `${ip} [${dayjs(new Date()).format('DD-MM-YYYY HH:mm:ss')}] "${req.method
      } ${req.originalUrl}" ${error.status}  - "Ratelimit ${res.getHeaders()['x-ratelimit-remaining']
      }" "${req.header('user-agent')}"`
    )
    if (error.status !== 404) return res.status(error.status || 500).send(error)
    // @ts-ignore
    return res.status(404).end()
  }

  res.sendFileData = (data, name) => {
    logger.http(
      `${ip} [${dayjs(new Date()).format('DD-MM-YYYY HH:mm:ss')}] "${req.method
      } ${req.originalUrl}" ${200}  - "Ratelimit ${res.getHeaders()['x-ratelimit-remaining']
      }" "${req.header('user-agent')}"`
    )
    res.attachment(name);
    data.pipe(res);
  }

  next()
}
