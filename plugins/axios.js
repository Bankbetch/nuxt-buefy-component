import https from 'https'

export default function ({ $axios, redirect, app, route }) {
  $axios.defaults.httpsAgent = new https.Agent({
    rejectUnauthorized: true,
  })

  $axios.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  $axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}
