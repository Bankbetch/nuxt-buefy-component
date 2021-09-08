const methods = {
  /**
   * @param {string} message
   * @param {number} status
   */
  errorHandle(message, status = 500) {
    const error = {};
    error.success = false;
    error.status = status;
    error.message = message;
    error.data = null;
    error.meta = null;
    return error;
  },
  /**
   * @param {string} message
   * * @param {any} data
   */
  successHandle(data = null, meta = null, message = null) {
    const success = {};
    success.success = true;
    success.status = 200;
    success.message = message;
    success.data = data;
    success.meta = meta;
    return success;
  },
  errorMongo({ code, keyValue, message }) {
    if (code === 11000 || code === "11000")
      return `${Object.keys(keyValue)}: ${Object.values(
        keyValue
      )} already in the system.`;
    return message;
  },
};

module.exports = { ...methods };
