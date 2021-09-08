const { customAlphabet } = require('nanoid')
const alphabet =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-'
const nanoid = customAlphabet(alphabet, 36)
function initialization(context, inject) {
  const request = async function (config, headers) {
    try {
      context.$axios.setHeader('X-Request-Id', nanoid())
      const response = await context.$axios(config)
      return response.data
    } catch (err) {
      return err.response.data
    }
  }

  request.$get = function (url, params, config, headers) {
    return request(
      mergeConfig({ method: 'get', url, params, headers }, config)
    )
  }

  request.$getStream = function (url, data, config) {
    return request(
      mergeConfig({
        method: 'get', url, data, headers: { 'Content-Type': 'application/octet-stream' },
        responseType: 'blob'
      }, config)
    )
  }

  request.$post = function (url, data, config, headers) {
    return request(
      mergeConfig({ method: 'post', url, data, headers }, config)
    )
  }

  request.$put = function (url, data, config, headers) {
    return request(
      mergeConfig({ method: 'put', url, data, headers }, config)
    )
  }

  request.$patch = function (url, data, config, headers) {
    return request(
      mergeConfig({ method: 'patch', url, data, headers }, config)
    )
  }

  request.$delete = function (url, data, config, headers) {
    return request(
      mergeConfig({ method: 'delete', url, data, headers }, config)
    )
  }

  function mergeConfig(base, extra) {
    if (typeof extra === 'object' && extra !== null) Object.assign(base, extra)
    return base
  }

  context.$api = request
  inject('api', request)
}

export default initialization
